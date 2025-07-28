<?php 
namespace VanguardDK\Http\Controllers\Api;

use VanguardDK\Http\Requests\Activity\GetActivitiesRequest;
use VanguardDK\Repositories\Activity\ActivityRepository;
use VanguardDK\Transformers\ActivityTransformer;

class ActivityController extends ApiController
{
    public function __construct()
    {
        $this->middleware("auth");
        $this->middleware("permission:users.activity");
    }
    public function index(GetActivitiesRequest $request, ActivityRepository $activities)
    {
        $result = $activities->paginateActivities(($request->per_page ?: 20), $request->search);
        return $this->respondWithPagination($result, new ActivityTransformer());
    }
}
