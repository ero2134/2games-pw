<?php 
namespace VanguardDK\Http\Controllers\Api\Profile;

use VanguardDK\Events\User\TwoFactorDisabled;
use VanguardDK\Events\User\TwoFactorEnabled;
use VanguardDK\Http\Controllers\Api\ApiController;
use VanguardDK\Http\Requests\User\EnableTwoFactorRequest;
use VanguardDK\Transformers\UserTransformer;

class TwoFactorController extends ApiController
{
    public function __construct()
    {
        $this->middleware("auth");
    }
    public function update(EnableTwoFactorRequest $request)
    {
        $user = auth()->user();
        if( Authy::isEnabled($user) ) 
        {
            return $this->setStatusCode(422)->respondWithError("2FA is already enabled for this user.");
        }
        $user->setAuthPhoneInformation($request->country_code, $request->phone_number);
        Authy::register($user);
        $user->save();
        event(new TwoFactorEnabled());
        return $this->respondWithItem($user, new UserTransformer());
    }
    public function destroy()
    {
        $user = auth()->user();
        if( !Authy::isEnabled($user) ) 
        {
            return $this->setStatusCode(422)->respondWithError("2FA is not enabled for this user.");
        }
        Authy::delete($user);
        $user->save();
        event(new TwoFactorDisabled());
        return $this->respondWithItem($user, new UserTransformer());
    }
}
