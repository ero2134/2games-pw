<?php 
namespace VanguardDK\Http\Controllers\Api\Auth;

use VanguardDK\Http\Controllers\Api\ApiController;
use VanguardDK\Http\Requests\Auth\Social\ApiAuthenticateRequest;
use VanguardDK\Repositories\User\UserRepository;
use VanguardDK\Services\Auth\Social\SocialManager;

class SocialLoginController extends ApiController
{
    private $users = null;
    private $socialManager = null;
    public function __construct(UserRepository $users, SocialManager $socialManager)
    {
        $this->users = $users;
        $this->socialManager = $socialManager;
    }
    public function index(ApiAuthenticateRequest $request)
    {
        try
        {
            $socialUser = Socialite::driver($request->network)->userFromToken($request->social_token);
        }
        catch( Exception $e ) 
        {
            return $this->errorInternalError("Could not connect to specified social network.");
        }
        $this->users;
    }
}
