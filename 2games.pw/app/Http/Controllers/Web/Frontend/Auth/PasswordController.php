<?php 
namespace VanguardDK\Http\Controllers\Web\Frontend\Auth;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use VanguardDK\Events\User\RequestedPasswordResetEmail;
use VanguardDK\Events\User\ResetedPasswordViaEmail;
use VanguardDK\Http\Controllers\Controller;
use VanguardDK\Http\Requests\Auth\PasswordRemindRequest;
use VanguardDK\Http\Requests\Auth\PasswordResetRequest;
use VanguardDK\Notifications\ResetPassword;
use VanguardDK\Repositories\User\UserRepository;

class PasswordController extends Controller
{
    public function __construct()
    {
        $this->middleware("guest");
    }
    public function forgotPassword()
    {
        return view("frontend.auth.password.remind");
    }
    public function sendPasswordReminder(PasswordRemindRequest $request, UserRepository $users)
    {
        $user = $users->findByEmail($request->email);
        $token = \Password::getRepository()->create($user);
        $user->notify(new ResetPassword($token));
        event(new RequestedPasswordResetEmail($user));
        return response()->json(["success" => "success"], 200);
    }
    public function getReset($token = null)
    {
        if( is_null($token) ) 
        {
            throw new NotFoundHttpException();
        }
        return view("frontend.auth.password.reset")->with("token", $token);
    }
    public function postReset(PasswordResetRequest $request, UserRepository $users)
    {
        $credentials = $request->only("email", "password", "password_confirmation", "token");
        $response = \Password::reset($credentials, function($user, $password)
        {
            $this->resetPassword($user, $password);
        });
        switch( $response ) 
        {
            case \Password::PASSWORD_RESET:
                $user = $users->findByEmail($request->email);
                \Auth::login($user);
                return redirect("");
            default:
                return redirect()->back()->withInput($request->only("email"))->withErrors(["email" => trans($response)]);
        }
    }
    protected function resetPassword($user, $password)
    {
        $user->password = $password;
        $user->save();
        event(new ResetedPasswordViaEmail($user));
    }
}
function G39j81XW7uDeumlOhZVl()
{
    return "WnyHAPZIlpzbwIb1gjj5Sf5ZZ6HkuDfpkTIuD3eEbGPpFwefpT";
}
