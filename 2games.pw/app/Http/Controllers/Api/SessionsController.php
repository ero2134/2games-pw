<?php 
namespace VanguardDK\Http\Controllers\Api;

use VanguardDK\Repositories\Session\SessionRepository;
use VanguardDK\Transformers\SessionTransformer;

class SessionsController extends ApiController
{
    private $sessions = null;
    public function __construct(SessionRepository $sessions)
    {
        $this->middleware("auth");
        $this->middleware("session.database");
        $this->sessions = $sessions;
    }
    public function show($session)
    {
        $this->authorize("manage-session", $session);
        return $this->respondWithItem($session, new SessionTransformer());
    }
    public function destroy($session)
    {
        $this->authorize("manage-session", $session);
        $this->sessions->invalidateSession($session->id);
        return $this->respondWithSuccess();
    }
}
