<?php 
namespace VanguardDK\Http\Controllers\Web\Frontend;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use VanguardDK\Events\User\ChangedAvatar;
use VanguardDK\Events\User\TwoFactorDisabled;
use VanguardDK\Events\User\TwoFactorEnabled;
use VanguardDK\Events\User\UpdatedProfileDetails;
use VanguardDK\Http\Controllers\Controller;
use VanguardDK\Http\Requests\User\EnableTwoFactorRequest;
use VanguardDK\Http\Requests\User\UpdateProfileDetailsRequest;
use VanguardDK\Http\Requests\User\UpdateProfileLoginDetailsRequest;
use VanguardDK\Http\Requests\User\UpdateProfilePasswordRequest;
use VanguardDK\Payment;
use VanguardDK\Repositories\Activity\ActivityRepository;
use VanguardDK\Repositories\Country\CountryRepository;
use VanguardDK\Repositories\Role\RoleRepository;
use VanguardDK\Repositories\Session\SessionRepository;
use VanguardDK\Repositories\User\UserRepository;
use VanguardDK\Returns;
use VanguardDK\Services\Upload\UserAvatarManager;
use VanguardDK\Support\Enum\UserStatus;
use VanguardDK\Transaction;

class ProfileController extends Controller
{
    protected $theUser = null;
    private $users = null;
    public function __construct(UserRepository $users)
    {
        $this->middleware("auth");
        $this->middleware("session.database", ["only" => ["sessions", "invalidateSession"]]);
        $this->users = $users;
        $this->middleware(function($request, $next)
        {
            $this->theUser = \Auth::user();
            return $next($request);
        });
    }
    public function index(RoleRepository $rolesRepo, CountryRepository $countryRepository)
    {
        $user = $this->theUser;
        $edit = true;
        $roles = $rolesRepo->lists();
        $countries = ["Select a Country"] + $countryRepository->lists()->toArray();
        $socialLogins = $this->users->getUserSocialLogins($this->theUser->id);
        $statuses = UserStatus::lists();
        return view("frontend.user.profile", compact("user", "edit", "roles", "countries", "socialLogins", "statuses"));
    }
    public function updateDetails(UpdateProfileDetailsRequest $request)
    {
        $this->users->update($this->theUser->id, $request->except("role_id", "status"));
        event(new UpdatedProfileDetails());
        return response()->json(["success" => trans("app.profile_updated_successfully")], 200);
        return redirect()->back()->withSuccess(trans("app.profile_updated_successfully"));
    }
    public function updatePassword(UpdateProfilePasswordRequest $request)
    {
        $old_password = $request->old_password;
        if( !Hash::check($old_password, \Auth::user()->password) ) 
        {
            return response()->json(["error" => trans("passwords.current_password")], 422);
        }
        $this->users->update($this->theUser->id, $request->only("password", "password_confirmation"));
        event(new UpdatedProfileDetails());
        return response()->json(["success" => trans("app.profile_updated_successfully")], 200);
    }
    public function updateAvatar(Request $request, UserAvatarManager $avatarManager)
    {
        $this->validate($request, ["avatar" => "image"]);
        $name = $avatarManager->uploadAndCropAvatar($this->theUser, $request->file("avatar"), $request->get("points"));
        if( $name ) 
        {
            return $this->handleAvatarUpdate($name);
        }
        return redirect()->route("frontend.profile")->withErrors(trans("app.avatar_not_changed"));
    }
    private function handleAvatarUpdate($avatar)
    {
        $this->users->update($this->theUser->id, ["avatar" => $avatar]);
        event(new ChangedAvatar());
        return redirect()->route("frontend.profile")->withSuccess(trans("app.avatar_changed"));
    }
    public function updateAvatarExternal(Request $request, UserAvatarManager $avatarManager)
    {
        $avatarManager->deleteAvatarIfUploaded($this->theUser);
        return $this->handleAvatarUpdate($request->get("url"));
    }
    public function updateLoginDetails(UpdateProfileLoginDetailsRequest $request)
    {
        $data = $request->except("role", "status");
        if( trim($data["password"]) == "" ) 
        {
            unset($data["password"]);
            unset($data["password_confirmation"]);
        }
        $this->users->update($this->theUser->id, $data);
        return redirect()->route("frontend.profile")->withSuccess(trans("app.login_updated"));
    }
    public function exchange(Request $request)
    {
        $user = \Auth::user();
        if( !$request->sumpoints ) 
        {
            return response()->json(["error" => trans("app.zero_points")], 422);
        }
        if( $user->points < $request->sumpoints ) 
        {
            return response()->json(["error" => trans("app.available_points", ["points" => $user->points])], 422);
        }
        $exchange_rate = $user->point->exchange_rate(true);
        $add = intval($request->sumpoints * $exchange_rate);
        $wager = intval($add * $user->point->exchange_wager());
        $user->decrement("points", $request->sumpoints);
        $user->increment("balance", $add);
        $user->increment("wager", $wager);
        $user->increment("bonus", $wager);
        Transaction::create(["user_id" => $user->id, "summ" => $add, "system" => "Exchange points"]);
        return response()->json(["success" => true], 200);
    }
    public function enableTwoFactorAuth(EnableTwoFactorRequest $request)
    {
        if( Authy::isEnabled($this->theUser) ) 
        {
            return redirect()->route("frontend.user.edit", $this->theUser->id)->withErrors(trans("app.2fa_already_enabled"));
        }
        $this->theUser->setAuthPhoneInformation($request->country_code, $request->phone_number);
        Authy::register($this->theUser);
        $this->theUser->save();
        event(new TwoFactorEnabled());
        return redirect()->route("frontend.profile")->withSuccess(trans("app.2fa_enabled"));
    }
    public function disableTwoFactorAuth()
    {
        if( !Authy::isEnabled($this->theUser) ) 
        {
            return redirect()->route("frontend.profile")->withErrors(trans("app.2fa_not_enabled_for_this_user"));
        }
        Authy::delete($this->theUser);
        $this->theUser->save();
        event(new TwoFactorDisabled());
        return redirect()->route("frontend.profile")->withSuccess(trans("app.2fa_disabled"));
    }
    public function activity(ActivityRepository $activitiesRepo, Request $request)
    {
        $user = $this->theUser;
        $activities = $activitiesRepo->paginateActivitiesForUser($user->id, $perPage = 20, $request->get("search"));
        return view("frontend.activity.index", compact("activities", "user"));
    }
    public function sessions(SessionRepository $sessionRepository)
    {
        $profile = true;
        $user = $this->theUser;
        $sessions = $sessionRepository->getUserSessions($user->id);
        return view("frontend.user.sessions", compact("sessions", "user", "profile"));
    }
    public function invalidateSession($session, SessionRepository $sessionRepository)
    {
        $sessionRepository->invalidateSession($session->id);
        return redirect()->route("frontend.profile.sessions")->withSuccess(trans("app.session_invalidated"));
    }
    public function balance(Request $request)
    {
        $history = Payment::where("user_id", \Auth::user()->id)->orderBy("created_at", "DESC")->paginate(25);
        return view("frontend.user.balance", compact("history"));
    }
    public function balanceAdd(Request $request)
    {
        $amount = str_replace(",", ".", trim($request->summ));
        $amount = number_format(floatval($amount), 2, ".", "");
        if( $request->system == "piastrix" ) 
        {
            $payment = Payment::create(["user_id" => \Auth::user()->id, "summ" => $amount, "system" => $request->system]);
            $currency = 840;
            $shop_id = Config::get("payments.piastrix.id");
            $shop_order_id = $payment->id;
            $description = base64_encode("Пополнение счета для клиента #" . \Auth::user()->id);
            $arHash = [$amount, $currency, $shop_id, $shop_order_id];
            $sign = hash("sha256", implode(":", $arHash));
            $data = ["method" => "POST", "action" => "https://pay.piastrix.com/ru/pay", "charset" => "UTF-8", "fields" => ["shop_id" => $shop_id, "shop_order_id" => $shop_order_id, "amount" => $amount, "currency" => $currency, "description" => $description, "sign" => $sign]];
            return view("frontend.user.payment_form", compact("data"));
        }
        if( $request->system == "coinpayment" ) 
        {
            if( $amount < config("coinpayment.add_min") ) 
            {
                return response()->json(["error" => trans("app.min_amount", ["amount" => config("coinpayment.add_min")])], 422);
            }
            if( config("coinpayment.add_max") < $amount ) 
            {
                return response()->json(["error" => trans("app.max_amount", ["amount" => config("coinpayment.add_max")])], 422);
            }
            $payment = Transaction::create(["user_id" => \Auth::user()->id, "summ" => $amount, "system" => $request->system, "status" => 0]);
            $trx["amountTotal"] = $amount;
            $trx["note"] = "Adding money to a balance";
            $trx["items"][0] = ["descriptionItem" => "Balance", "priceItem" => $amount, "qtyItem" => 1, "subtotalItem" => $amount];
            $trx["payload"] = ["user_id" => \Auth::user()->id, "payment_id" => $payment->id];
            $link_transaction = CoinPayment::url_payload($trx);
            return response()->json(["success" => "success", "link" => $link_transaction], 200);
        }
    }
    public function returns(Request $request)
    {
        $user = \Auth::user();
        $count_return = $user->count_return;
        $return = Returns::whereRaw("'" . $count_return . "' BETWEEN min_pay AND max_pay")->first();
        if( $return ) 
        {
            $sum = floatval($return->percent) / 100 * $count_return;
            if( $sum > 0 ) 
            {
                $user->increment("balance", $sum);
                $user->increment("count_balance", $sum);
                $user->update(["count_return" => 0]);
                Transaction::create(["user_id" => $user->id, "summ" => $sum, "system" => "Refund"]);
                return response()->json(["success" => "success", "value" => $sum, "balance" => $user->balance], 200);
            }
        }
        return response()->json(["success" => "success", "value" => 0, "balance" => $user->balance], 200);
    }
    public function success(Request $request)
    {
        return redirect()->route("frontend.profile.balance")->withSuccess(trans("app.payment_success"));
    }
    public function fail(Request $request)
    {
        return redirect()->route("frontend.profile.balance")->withSuccess(trans("app.payment_fail"));
    }
}