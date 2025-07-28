<?php 
namespace VanguardDK\Http\Controllers\Api\Users;

use VanguardDK\Http\Controllers\Api\ApiController;
use VanguardDK\Http\Requests\Activity\GetActivitiesRequest;
use VanguardDK\Repositories\Activity\ActivityRepository;
use VanguardDK\Transformers\ActivityTransformer;
use VanguardDK\User;

class ActivityController extends ApiController
{
    private $activities = null;
    public function __construct(ActivityRepository $activities)
    {
        $this->middleware("auth");
        $this->middleware("permission:users.activity");
        $this->activities = $activities;
    }
    public function index(User $user, GetActivitiesRequest $request)
    {
        $activities = $this->activities->paginateActivitiesForUser($user->id, ($request->per_page ?: 100000), $request->search);
        return $this->respondWithPagination($activities, new ActivityTransformer());
    }
}
