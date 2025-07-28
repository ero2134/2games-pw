<?php 
namespace VanguardDK\Http\Controllers\Api\Profile;

use VanguardDK\Http\Controllers\Api\ApiController;
use VanguardDK\Repositories\Session\SessionRepository;
use VanguardDK\Transformers\SessionTransformer;

class SessionsController extends ApiController
{
    public function __construct()
    {
        $this->middleware("auth");
        $this->middleware("session.database");
    }
    public function index(SessionRepository $sessions)
    {
        $sessions = $sessions->getUserSessions(auth()->id());
        return $this->respondWithCollection($sessions, new SessionTransformer());
    }
}
