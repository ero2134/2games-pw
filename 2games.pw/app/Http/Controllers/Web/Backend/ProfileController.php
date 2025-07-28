<?php 
namespace VanguardDK\Http\Controllers\Web\Backend;

use Illuminate\Http\Request;
use VanguardDK\Events\User\ChangedAvatar;
use VanguardDK\Events\User\TwoFactorDisabled;
use VanguardDK\Events\User\TwoFactorEnabled;
use VanguardDK\Events\User\UpdatedProfileDetails;
use VanguardDK\Http\Controllers\Controller;
use VanguardDK\Http\Requests\User\EnableTwoFactorRequest;
use VanguardDK\Http\Requests\User\UpdateProfileDetailsRequest;
use VanguardDK\Http\Requests\User\UpdateProfileLoginDetailsRequest;
use VanguardDK\Repositories\Activity\ActivityRepository;
use VanguardDK\Repositories\Country\CountryRepository;
use VanguardDK\Repositories\Role\RoleRepository;
use VanguardDK\Repositories\Session\SessionRepository;
use VanguardDK\Repositories\User\UserRepository;
use VanguardDK\Services\Upload\UserAvatarManager;
use VanguardDK\Support\Enum\UserStatus;

class ProfileController extends Controller
{
    protected $theUser = null;
    private $users = null;
    public function __construct(UserRepository $users)
    {
        $this->middleware("auth");
        $this->middleware("session.database", ["only" => ["sessions", "invalidateSession"]]);
        $this->middleware("permission:access.admin.panel");
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
        return view("backend.user.profile", compact("user", "edit", "roles", "countries", "socialLogins", "statuses"));
    }
    public function updateDetails(UpdateProfileDetailsRequest $request)
    {
        $this->users->update($this->theUser->id, $request->except("role_id", "status"));
        event(new UpdatedProfileDetails());
        return redirect()->back()->withSuccess(trans("app.profile_updated_successfully"));
    }
    public function updateAvatar(Request $request, UserAvatarManager $avatarManager)
    {
        $this->validate($request, ["avatar" => "image"]);
        $name = $avatarManager->uploadAndCropAvatar($this->theUser, $request->file("avatar"), $request->get("points"));
        if( $name ) 
        {
            return $this->handleAvatarUpdate($name);
        }
        return redirect()->route("backend.profile")->withErrors(trans("app.avatar_not_changed"));
    }
    private function handleAvatarUpdate($avatar)
    {
        $this->users->update($this->theUser->id, ["avatar" => $avatar]);
        event(new ChangedAvatar());
        return redirect()->route("backend.profile")->withSuccess(trans("app.avatar_changed"));
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
        return redirect()->route("backend.profile")->withSuccess(trans("app.login_updated"));
    }
    public function enableTwoFactorAuth(EnableTwoFactorRequest $request)
    {
        if( Authy::isEnabled($this->theUser) ) 
        {
            return redirect()->route("backend.user.edit", $this->theUser->id)->withErrors(trans("app.2fa_already_enabled"));
        }
        $this->theUser->setAuthPhoneInformation($request->country_code, $request->phone_number);
        Authy::register($this->theUser);
        $this->theUser->save();
        event(new TwoFactorEnabled());
        return redirect()->route("backend.profile")->withSuccess(trans("app.2fa_enabled"));
    }
    public function disableTwoFactorAuth()
    {
        if( !Authy::isEnabled($this->theUser) ) 
        {
            return redirect()->route("backend.profile")->withErrors(trans("app.2fa_not_enabled_for_this_user"));
        }
        Authy::delete($this->theUser);
        $this->theUser->save();
        event(new TwoFactorDisabled());
        return redirect()->route("backend.profile")->withSuccess(trans("app.2fa_disabled"));
    }
    public function activity(ActivityRepository $activitiesRepo, Request $request)
    {
        $user = $this->theUser;
        $activities = $activitiesRepo->paginateActivitiesForUser($user->id, $perPage = 20, $request->get("search"));
        return view("backend.activity.index", compact("activities", "user"));
    }
    public function sessions(SessionRepository $sessionRepository)
    {
        $profile = true;
        $user = $this->theUser;
        $sessions = $sessionRepository->getUserSessions($user->id);
        return view("backend.user.sessions", compact("sessions", "user", "profile"));
    }
    public function invalidateSession($session, SessionRepository $sessionRepository)
    {
        $sessionRepository->invalidateSession($session->id);
        return redirect()->route("backend.profile.sessions")->withSuccess(trans("app.session_invalidated"));
    }
}