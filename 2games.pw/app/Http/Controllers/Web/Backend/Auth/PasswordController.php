<?php 
namespace VanguardDK\Http\Controllers\Web\Backend\Auth;

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
        return view("backend.auth.password.remind");
    }
    public function sendPasswordReminder(PasswordRemindRequest $request, UserRepository $users)
    {
        $user = $users->findByEmail($request->email);
        $token = \Password::getRepository()->create($user);
        $user->notify(new ResetPassword($token));
        event(new RequestedPasswordResetEmail($user));
        return redirect()->to("backend/password/remind")->with("success", trans("app.password_reset_email_sent"));
    }
    public function getReset($token = null)
    {
        if( is_null($token) ) 
        {
            throw new NotFoundHttpException();
        }
        return view("backend.auth.password.reset")->with("token", $token);
    }
    public function postReset(PasswordResetRequest $request)
    {
        $credentials = $request->only("email", "password", "password_confirmation", "token");
        $response = \Password::reset($credentials, function($user, $password)
        {
            $this->resetPassword($user, $password);
        });
        switch( $response ) 
        {
            case \Password::PASSWORD_RESET:
                return redirect("login")->with("success", trans($response));
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