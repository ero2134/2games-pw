<?php 
namespace VanguardDK\Http\Controllers\Web\Backend\Auth;

use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use VanguardDK\Events\User\LoggedIn;
use VanguardDK\Events\User\LoggedOut;
use VanguardDK\Events\User\Registered;
use VanguardDK\Http\Controllers\Controller;
use VanguardDK\Http\Requests\Auth\LoginRequest;
use VanguardDK\Http\Requests\Auth\RegisterRequest;
use VanguardDK\Repositories\Role\RoleRepository;
use VanguardDK\Repositories\User\UserRepository;
use VanguardDK\Services\Auth\TwoFactor\Contracts\Authenticatable;
use VanguardDK\Support\Enum\UserStatus;
use jeremykenedy\LaravelRoles\Models\Role;

class AuthController extends Controller
{
    private $users = null;
    public function __construct(UserRepository $users)
    {
        $this->middleware("guest", ["except" => ["getLogout"]]);
        $this->middleware("auth", ["only" => ["getLogout"]]);
        $this->middleware("registration", ["only" => ["getRegister", "postRegister"]]);
        $this->users = $users;
    }
    public function getLogin()
    {
        $socialProviders = config("auth.social.providers");
        return view("backend.auth.login", compact("socialProviders"));
    }
    public function postLogin(LoginRequest $request)
    {
        $throttles = settings("throttle_enabled");
        $to = ($request->has("to") ? "?to=" . $request->get("to") : "");
        if( $throttles && $this->hasTooManyLoginAttempts($request) ) 
        {
            return $this->sendLockoutResponse($request);
        }
        $credentials = $request->getCredentials();
        if( !\Auth::validate($credentials) ) 
        {
            if( $throttles ) 
            {
                $this->incrementLoginAttempts($request);
            }
            return redirect()->to("backend/login" . $to)->withErrors(trans("auth.failed"));
        }
        $user = \Auth::getProvider()->retrieveByCredentials($credentials);
        if( $user->isUnconfirmed() ) 
        {
            return redirect()->to("backend/login" . $to)->withErrors(trans("app.please_confirm_your_email_first"));
        }
        if( $user->isBanned() ) 
        {
            return redirect()->to("backend/login" . $to)->withErrors(trans("app.your_account_is_banned"));
        }
        \Auth::login($user, settings("remember_me") && $request->get("remember"));
        return $this->handleUserWasAuthenticated($request, $throttles, $user);
    }
    protected function handleUserWasAuthenticated(Request $request, $throttles, $user)
    {
        if( $throttles ) 
        {
            $this->clearLoginAttempts($request);
        }
        if( settings("2fa.enabled") && Authy::isEnabled($user) ) 
        {
            return $this->logoutAndRedirectToTokenPage($request, $user);
        }
        event(new LoggedIn());
        if( $request->has("to") ) 
        {
            return redirect()->to($request->get("to"));
        }
        return redirect()->intended("/backend/");
    }
    protected function logoutAndRedirectToTokenPage(Request $request, Authenticatable $user)
    {
        \Auth::logout();
        $request->session()->put("auth.2fa.id", $user->id);
        return redirect()->route("backend.auth.token");
    }
    public function getToken()
    {
        return (session("auth.2fa.id") ? view("auth.token") : redirect("login"));
    }
    public function postToken(Request $request)
    {
        $this->validate($request, ["token" => "required"]);
        if( !session("auth.2fa.id") ) 
        {
            return redirect("/backend/login");
        }
        $user = $this->users->find($request->session()->pull("auth.2fa.id"));
        if( !$user ) 
        {
            throw new NotFoundHttpException();
        }
        if( !Authy::tokenIsValid($user, $request->token) ) 
        {
            return redirect()->to("/backend/login")->withErrors(trans("app.2fa_token_invalid"));
        }
        \Auth::login($user);
        event(new LoggedIn());
        return redirect()->intended("/backend/");
    }
    public function getLogout()
    {
        event(new LoggedOut());
        \Auth::logout();
        return redirect("/backend/login");
    }
    public function loginUsername()
    {
        return "username";
    }
    protected function hasTooManyLoginAttempts(Request $request)
    {
        return app("Illuminate\\Cache\\RateLimiter")->tooManyAttempts($request->input($this->loginUsername()) . $request->ip(), $this->maxLoginAttempts());
    }
    protected function incrementLoginAttempts(Request $request)
    {
        app("Illuminate\\Cache\\RateLimiter")->hit($request->input($this->loginUsername()) . $request->ip(), $this->lockoutTime() / 60);
    }
    protected function retriesLeft(Request $request)
    {
        $attempts = app("Illuminate\\Cache\\RateLimiter")->attempts($request->input($this->loginUsername()) . $request->ip());
        return $this->maxLoginAttempts() - $attempts + 1;
    }
    protected function sendLockoutResponse(Request $request)
    {
        $seconds = app("Illuminate\\Cache\\RateLimiter")->availableIn($request->input($this->loginUsername()) . $request->ip());
        return redirect("/backend/login")->withInput($request->only($this->loginUsername(), "remember"))->withErrors([$this->loginUsername() => $this->getLockoutErrorMessage($seconds)]);
    }
    protected function getLockoutErrorMessage($seconds)
    {
        return trans("auth.throttle", ["seconds" => $seconds]);
    }
    protected function clearLoginAttempts(Request $request)
    {
        app("Illuminate\\Cache\\RateLimiter")->clear($request->input($this->loginUsername()) . $request->ip());
    }
    protected function maxLoginAttempts()
    {
        return settings("throttle_attempts", 5);
    }
    protected function lockoutTime()
    {
        $lockout = (int)settings("throttle_lockout_time");
        if( $lockout <= 1 ) 
        {
            $lockout = 1;
        }
        return 60 * $lockout;
    }
    public function getRegister()
    {
        $socialProviders = config("auth.social.providers");
        return view("backend.auth.register", compact("socialProviders"));
    }
    public function postRegister(RegisterRequest $request, RoleRepository $roles)
    {
        $status = (settings("reg_email_confirmation") ? UserStatus::UNCONFIRMED : UserStatus::ACTIVE);
        $user = $this->users->create(array_merge($request->only("email", "username", "password"), ["status" => $status]));
        $role = Role::where("name", "=", "User")->first();
        $user->attachRole($role);
        event(new Registered($user));
        $message = (settings("reg_email_confirmation") ? trans("app.account_create_confirm_email") : trans("app.account_created_login"));
        return redirect("/backend/login")->with("success", $message);
    }
    public function confirmEmail($token)
    {
        if( $user = $this->users->findByConfirmationToken($token) ) 
        {
            $this->users->update($user->id, ["status" => UserStatus::ACTIVE, "confirmation_token" => null]);
            return redirect()->to("/backend/login")->withSuccess(trans("app.email_confirmed_can_login"));
        }
        return redirect()->to("/backend/login")->withErrors(trans("app.wrong_confirmation_token"));
    }
}