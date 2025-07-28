<?php 
namespace VanguardDK\Http\Controllers\Api\Users;

use VanguardDK\Http\Controllers\Api\ApiController;
use VanguardDK\Repositories\Session\SessionRepository;
use VanguardDK\Transformers\SessionTransformer;
use VanguardDK\User;

class SessionsController extends ApiController
{
    public function __construct()
    {
        $this->middleware("auth");
        $this->middleware("permission:users.manage");
        $this->middleware("session.database");
    }
    public function index(User $user, SessionRepository $sessions)
    {
        return $this->respondWithCollection($sessions->getUserSessions($user->id), new SessionTransformer());
    }
}
