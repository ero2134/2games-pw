<?php 
namespace VanguardDK\Http\Controllers\Web\Backend;

use Illuminate\Http\Request;
use VanguardDK\Events\User\Banned;
use VanguardDK\Events\User\Deleted;
use VanguardDK\Events\User\TwoFactorDisabledByAdmin;
use VanguardDK\Events\User\TwoFactorEnabledByAdmin;
use VanguardDK\Events\User\UpdatedByAdmin;
use VanguardDK\GameLog;
use VanguardDK\Http\Controllers\Controller;
use VanguardDK\Http\Requests\User\CreateUserRequest;
use VanguardDK\Http\Requests\User\EnableTwoFactorRequest;
use VanguardDK\Http\Requests\User\UpdateDetailsRequest;
use VanguardDK\Http\Requests\User\UpdateLoginDetailsRequest;
use VanguardDK\JackpotStat;
use VanguardDK\Lib\Level;
use VanguardDK\Lib\LicenseDK;
use VanguardDK\Repositories\Activity\ActivityRepository;
use VanguardDK\Repositories\Country\CountryRepository;
use VanguardDK\Repositories\Session\SessionRepository;
use VanguardDK\Repositories\User\UserRepository;
use VanguardDK\Services\Upload\UserAvatarManager;
use VanguardDK\Session;
use VanguardDK\StatGame;
use VanguardDK\Support\Enum\UserStatus;
use VanguardDK\Transaction;
use VanguardDK\User;
use VanguardDK\UserActivity;
use jeremykenedy\LaravelRoles\Models\Role;

class UsersController extends Controller
{
    private $users = null;
    public function __construct(UserRepository $users)
    {
        $this->middleware("auth");
        $this->middleware("session.database", ["only" => ["sessions", "invalidateSession"]]);
        $this->middleware("permission:access.admin.panel");
        $this->middleware("permission:users.manage");
        $this->users = $users;
    }
    public function index(Request $request)
    {
        $checked = new LicenseDK();
        $license_notifications_array = $checked->aplVerifyLicenseDK(null, 0);
        if( $license_notifications_array["notification_case"] != "notification_license_ok" ) 
        {
            return redirect()->route("frontend.page.error_license");
        }
        $statuses = ["" => trans("app.all")] + UserStatus::lists();
        $users = User::orderBy("created_at", "DESC");
        $users = $users->where("role_id", "<=", \Auth::User()->role_id);
        $users = $users->where("id", "!=", \Auth::user()->id);
        if( $request->search != "" ) 
        {
            $users = $users->where("username", "like", "%" . $request->search . "%");
        }
        if( $request->status != "" ) 
        {
            $users = $users->where("status", $request->status);
        }
        $users = $users->paginate(20);
        return view("backend.user.list", compact("users", "statuses"));
    }
    public function view(User $user, ActivityRepository $activities)
    {
        $userActivities = $activities->getLatestActivitiesForUser($user->id, 10);
        return view("backend.user.view", compact("user", "userActivities"));
    }
    public function create(CountryRepository $countryRepository)
    {
        $countries = $this->parseCountries($countryRepository);
        $roles = Role::where("level", "<", \Auth::user()->level())->pluck("name", "id");
        $statuses = UserStatus::lists();
        return view("backend.user.add", compact("countries", "roles", "statuses"));
    }
    private function parseCountries(CountryRepository $countryRepository)
    {
        return ["Select a Country"] + $countryRepository->lists()->toArray();
    }
    public function store(CreateUserRequest $request)
    {
        $data = $request->all() + ["status" => UserStatus::ACTIVE];
        if( !array_get($data, "country_id") ) 
        {
            $data["country_id"] = null;
        }
        if( trim($data["username"]) == "" ) 
        {
            $data["username"] = null;
        }
        $user = $this->users->create($data);
        $role = Role::find($data["role_id"]);
        $user->detachAllRoles();
        $user->attachRole($role);
        return redirect()->route("backend.user.list")->withSuccess(trans("app.user_created"));
    }
    public function edit(User $user, CountryRepository $countryRepository)
    {
        $edit = true;
        $countries = $this->parseCountries($countryRepository);
        $roles = Role::where("level", "<=", \Auth::user()->level())->pluck("name", "id");
        $statuses = UserStatus::lists();
        $socialLogins = $this->users->getUserSocialLogins($user->id);
        if( \Auth::user()->role_id < $user->role_id ) 
        {
            return redirect()->route("backend.user.list");
        }
        return view("backend.user.edit", compact("edit", "user", "countries", "socialLogins", "roles", "statuses"));
    }
    public function updateDetails(User $user, UpdateDetailsRequest $request)
    {
        $data = $request->all();
        if( !array_get($data, "country_id") ) 
        {
            $data["country_id"] = null;
        }
        $this->users->update($user->id, $data);
        $role = Role::find($data["role_id"]);
        $user->detachAllRoles();
        $user->attachRole($role);
        event(new UpdatedByAdmin($user));
        if( $this->userIsBanned($user, $request) ) 
        {
            event(new Banned($user));
        }
        return redirect()->back()->withSuccess(trans("app.user_updated"));
    }
    public function updateBalance(User $user, Request $request)
    {
        $data = $request->all();
        if( !array_get($data, "type") ) 
        {
            $data["type"] = "add";
        }
        $sum = ($request->type == "out" ? -1 * $request->summ : $request->summ);
        $hasBalance = User::find($request->user_id);
        $balance = $hasBalance->balance + $sum;
        $payOut = $request->summ;
        if( $request->type == "out" && $balance < 0 ) 
        {
            $payOut = -1 * $hasBalance->balance;
        }
        if( $payOut == 0 ) 
        {
            return redirect()->back();
        }
        $balance = ($balance < 0 ? 0 : $balance);
        $transaction = new Transaction();
        $transaction->user_id = $request->user_id;
        $transaction->payeer_id = \Auth::id();
        $transaction->type = $request->type;
        $transaction->summ = $payOut;
        $transaction->save();
        User::where("id", $request->user_id)->update(["balance" => $balance, "count_balance" => $hasBalance->count_balance + $sum, "count_return" => $hasBalance->count_return + $sum]);
        if( $request->type == "add" ) 
        {
            $level = new Level();
            $level->addPoints($hasBalance, $sum);
        }
        $hasBalance = $hasBalance->fresh();
        if( $hasBalance->balance == 0 ) 
        {
            $hasBalance->update(["wager" => 0, "bonus" => 0]);
        }
        if( $hasBalance->count_balance < 0 ) 
        {
            $hasBalance->update(["count_balance" => 0]);
        }
        if( $hasBalance->count_return < 0 ) 
        {
            $hasBalance->update(["count_return" => 0]);
        }
        return redirect()->back()->withSuccess(trans("app.balance_updated"));
    }
    public function statistics(User $user, Request $request)
    {
        $statistics = Transaction::where("user_id", $user->id)->orderBy("created_at", "DESC")->get();
        return view("backend.user.stat", compact("user", "statistics"));
    }
    private function userIsBanned(User $user, Request $request)
    {
        return $user->status != $request->status && $request->status == UserStatus::BANNED;
    }
    public function updateAvatar(User $user, UserAvatarManager $avatarManager, Request $request)
    {
        $this->validate($request, ["avatar" => "image"]);
        $name = $avatarManager->uploadAndCropAvatar($user, $request->file("avatar"), $request->get("points"));
        if( $name ) 
        {
            $this->users->update($user->id, ["avatar" => $name]);
            event(new UpdatedByAdmin($user));
            return redirect()->route("backend.user.edit", $user->id)->withSuccess(trans("app.avatar_changed"));
        }
        return redirect()->route("backend.user.edit", $user->id)->withErrors(trans("app.avatar_not_changed"));
    }
    public function updateAvatarExternal(User $user, Request $request, UserAvatarManager $avatarManager)
    {
        $avatarManager->deleteAvatarIfUploaded($user);
        $this->users->update($user->id, ["avatar" => $request->get("url")]);
        event(new UpdatedByAdmin($user));
        return redirect()->route("backend.user.edit", $user->id)->withSuccess(trans("app.avatar_changed"));
    }
    public function updateLoginDetails(User $user, UpdateLoginDetailsRequest $request)
    {
        $data = $request->all();
        if( trim($data["password"]) == "" ) 
        {
            unset($data["password"]);
            unset($data["password_confirmation"]);
        }
        $this->users->update($user->id, $data);
        event(new UpdatedByAdmin($user));
        return redirect()->route("backend.user.edit", $user->id)->withSuccess(trans("app.login_updated"));
    }
    public function delete(User $user)
    {
        if( $user->id == \Auth::id() ) 
        {
            return redirect()->route("backend.user.list")->withErrors(trans("app.you_cannot_delete_yourself"));
        }
        $this->users->delete($user->id);
        Transaction::where("user_id", $user->id)->delete();
        StatGame::where("user_id", $user->id)->delete();
        JackpotStat::where("user_id", $user->id)->delete();
        GameLog::where("user_id", $user->id)->delete();
        UserActivity::where("user_id", $user->id)->delete();
        Session::where("user_id", $user->id)->delete();
        event(new Deleted($user));
        return redirect()->route("backend.user.list")->withSuccess(trans("app.user_deleted"));
    }
    public function enableTwoFactorAuth(User $user, EnableTwoFactorRequest $request)
    {
        if( \Auth::isEnabled($user) ) 
        {
            return redirect()->route("backend.user.edit", $user->id)->withErrors(trans("app.2fa_already_enabled_user"));
        }
        $user->setAuthPhoneInformation($request->country_code, $request->phone_number);
        \Auth::register($user);
        $user->save();
        event(new TwoFactorEnabledByAdmin($user));
        return redirect()->route("backend.user.edit", $user->id)->withSuccess(trans("app.2fa_enabled"));
    }
    public function disableTwoFactorAuth(User $user)
    {
        if( !\Auth::isEnabled($user) ) 
        {
            return redirect()->route("backend.user.edit", $user->id)->withErrors(trans("app.2fa_not_enabled_user"));
        }
        \Auth::delete($user);
        $user->save();
        event(new TwoFactorDisabledByAdmin($user));
        return redirect()->route("backend.user.edit", $user->id)->withSuccess(trans("app.2fa_disabled"));
    }
    public function sessions(User $user, SessionRepository $sessionRepository)
    {
        $adminView = true;
        $sessions = $sessionRepository->getUserSessions($user->id);
        return view("backend.user.sessions", compact("sessions", "user", "adminView"));
    }
    public function invalidateSession(User $user, $session, SessionRepository $sessionRepository)
    {
        $sessionRepository->invalidateSession($session->id);
        return redirect()->route("backend.user.sessions", $user->id)->withSuccess(trans("app.session_invalidated"));
    }
}