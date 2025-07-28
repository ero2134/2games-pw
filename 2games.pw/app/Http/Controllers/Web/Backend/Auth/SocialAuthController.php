<?php 
namespace VanguardDK\Http\Controllers\Web\Backend\Auth;

use VanguardDK\Events\User\LoggedIn;
use VanguardDK\Http\Controllers\Controller;
use VanguardDK\Repositories\User\UserRepository;
use VanguardDK\Services\Auth\Social\SocialManager;

class SocialAuthController extends Controller
{
    private $users = null;
    private $socialManager = null;
    public function __construct(UserRepository $users, SocialManager $socialManager)
    {
        $this->middleware("guest");
        $this->users = $users;
        $this->socialManager = $socialManager;
    }
    public function redirectToProvider($provider)
    {
        if( strtolower($provider) == "facebook" ) 
        {
            return \Socialite::driver("facebook")->with(["auth_type" => "rerequest"])->redirect();
        }
        return \Socialite::driver($provider)->redirect();
    }
    public function handleProviderCallback($provider)
    {
        if( request()->get("error") ) 
        {
            return redirect("backend/login")->withErrors(trans("app.invalid_social_auth"));
        }
        $socialUser = $this->getUserFromProvider($provider);
        $user = $this->users->findBySocialId($provider, $socialUser->getId());
        if( !$user ) 
        {
            if( !settings("reg_enabled") ) 
            {
                return redirect("backend/login")->withErrors(trans("app.only_users_with_account_can_login"));
            }
            if( !$socialUser->getEmail() ) 
            {
                return redirect("backend/login")->withErrors(trans("app.you_have_to_provide_email"));
            }
            $user = $this->socialManager->associate($socialUser, $provider);
        }
        return $this->loginAndRedirect($user);
    }
    private function getUserFromProvider($provider)
    {
        return \Socialite::driver($provider)->user();
    }
    private function loginAndRedirect($user)
    {
        if( $user->isBanned() ) 
        {
            return redirect()->to("backend/login")->withErrors(trans("app.your_account_is_banned"));
        }
        if( settings("2fa.enabled") && Authy::isEnabled($user) ) 
        {
            session()->put("auth.2fa.id", $user->id);
            return redirect()->route("backend.auth.token");
        }
        \Auth::login($user);
        event(new LoggedIn());
        return redirect()->intended("backend/");
    }
}