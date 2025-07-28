<?php 
namespace VanguardDK\Http\Controllers\Api\Auth\Password;

use VanguardDK\Events\User\ResetedPasswordViaEmail;
use VanguardDK\Http\Controllers\Api\ApiController;
use VanguardDK\Http\Requests\Auth\PasswordResetRequest;

class ResetController extends ApiController
{
    public function __construct()
    {
        $this->middleware("guest");
    }
    public function index(PasswordResetRequest $request)
    {
        $credentials = $request->only("email", "password", "password_confirmation", "token");
        $response = Password::reset($credentials, function($user, $password)
        {
            $this->resetPassword($user, $password);
        });
        switch( $response ) 
        {
            case Password::PASSWORD_RESET:
                return $this->respondWithSuccess();
            default:
                return $this->setStatusCode(400)->respondWithError(trans($response));
        }
    }
    protected function resetPassword($user, $password)
    {
        $user->password = $password;
        $user->save();
        event(new ResetedPasswordViaEmail($user));
    }
}
