<?php 
namespace VanguardDK\Http\Controllers\Api\Auth\Password;

use VanguardDK\Events\User\RequestedPasswordResetEmail;
use VanguardDK\Http\Controllers\Api\ApiController;
use VanguardDK\Http\Requests\Auth\PasswordRemindRequest;
use VanguardDK\Notifications\ResetPassword;
use VanguardDK\Repositories\User\UserRepository;

class RemindController extends ApiController
{
    public function __construct()
    {
        $this->middleware("guest");
    }
    public function index(PasswordRemindRequest $request, UserRepository $users)
    {
        $user = $users->findByEmail($request->email);
        $token = Password::getRepository()->create($user);
        $user->notify(new ResetPassword($token));
        event(new RequestedPasswordResetEmail($user));
        return $this->respondWithSuccess();
    }
}
