<?php 
namespace VanguardDK\Http\Controllers\Api\Auth;

use VanguardDK\Events\User\Registered;
use VanguardDK\Http\Controllers\Api\ApiController;
use VanguardDK\Http\Requests\Auth\RegisterRequest;
use VanguardDK\Repositories\Role\RoleRepository;
use VanguardDK\Repositories\User\UserRepository;
use VanguardDK\Support\Enum\UserStatus;
use jeremykenedy\LaravelRoles\Models\Role;

class RegistrationController extends ApiController
{
    private $users = null;
    private $roles = null;
    public function __construct(UserRepository $users, RoleRepository $roles)
    {
        $this->middleware("registration");
        $this->users = $users;
        $this->roles = $roles;
    }
    public function index(RegisterRequest $request)
    {
        $status = (settings("reg_email_confirmation") ? UserStatus::UNCONFIRMED : UserStatus::ACTIVE);
        $user = $this->users->create(array_merge($request->only("email", "username", "password"), ["status" => $status]));
        $role = Role::where("name", "=", "User")->first();
        $user->attachRole($role);
        event(new Registered($user));
        return $this->setStatusCode(201)->respondWithArray(["requires_email_confirmation" => settings("reg_email_confirmation")]);
    }
    public function verifyEmail($token)
    {
        if( !settings("reg_email_confirmation") ) 
        {
            return $this->errorNotFound();
        }
        if( $user = $this->users->findByConfirmationToken($token) ) 
        {
            $this->users->update($user->id, ["status" => UserStatus::ACTIVE, "confirmation_token" => null]);
            return $this->respondWithSuccess();
        }
        return $this->setStatusCode(400)->respondWithError("Invalid confirmation token.");
    }
}
