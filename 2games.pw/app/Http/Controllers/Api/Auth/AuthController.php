<?php 
namespace VanguardDK\Http\Controllers\Api\Auth;

use Tymon\JWTAuth\Exceptions\JWTException;
use VanguardDK\Events\User\LoggedOut;
use VanguardDK\Http\Controllers\Api\ApiController;
use VanguardDK\Http\Requests\Auth\LoginRequest;

class AuthController extends ApiController
{
    public function __construct()
    {
        $this->middleware("guest")->only("login");
        $this->middleware("auth")->only("logout");
    }
    public function login(LoginRequest $request)
    {
        $credentials = $request->getCredentials();
        try
        {
            if( !($token = JWTAuth::attempt($credentials)) ) 
            {
                return $this->errorUnauthorized("Invalid credentials.");
            }
        }
        catch( JWTException $e ) 
        {
            return $this->errorInternalError("Could not create token.");
        }
    }
    private function invalidateToken($token)
    {
        JWTAuth::setToken($token);
        JWTAuth::invalidate();
    }
    public function logout()
    {
        event(new LoggedOut());
        auth()->logout();
        return $this->respondWithSuccess();
    }
}
