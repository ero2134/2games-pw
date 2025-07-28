<?php 
namespace VanguardDK\Http\Controllers\Api\Users;

use VanguardDK\Events\User\TwoFactorDisabledByAdmin;
use VanguardDK\Events\User\TwoFactorEnabledByAdmin;
use VanguardDK\Http\Controllers\Api\ApiController;
use VanguardDK\Http\Requests\User\EnableTwoFactorRequest;
use VanguardDK\Transformers\UserTransformer;
use VanguardDK\User;

class TwoFactorController extends ApiController
{
    public function __construct()
    {
        $this->middleware("auth");
        $this->middleware("permission:users.manage");
    }
    public function update(User $user, EnableTwoFactorRequest $request)
    {
        if( Authy::isEnabled($user) ) 
        {
            return $this->setStatusCode(422)->respondWithError("2FA is already enabled for this user.");
        }
        $user->setAuthPhoneInformation($request->country_code, $request->phone_number);
        Authy::register($user);
        $user->save();
        event(new TwoFactorEnabledByAdmin($user));
        return $this->respondWithItem($user, new UserTransformer());
    }
    public function destroy(User $user)
    {
        if( !Authy::isEnabled($user) ) 
        {
            return $this->setStatusCode(422)->respondWithError("2FA is not enabled for this user.");
        }
        Authy::delete($user);
        $user->save();
        event(new TwoFactorDisabledByAdmin($user));
        return $this->respondWithItem($user, new UserTransformer());
    }
}
