<?php 
namespace VanguardDK\Http\Controllers\Web\Backend;

use Illuminate\Http\Request;
use VanguardDK\Http\Controllers\Controller;
use VanguardDK\Repositories\Activity\ActivityRepository;
use VanguardDK\User;

class ActivityController extends Controller
{
    private $activities = null;
    public function __construct(ActivityRepository $activities)
    {
        $this->middleware("auth");
        $this->middleware("permission:access.admin.panel");
        $this->middleware("permission:users.activity");
        $this->activities = $activities;
    }
    public function index(Request $request)
    {
        $perPage = 20;
        $adminView = true;
        $activities = $this->activities->paginateActivities($perPage, $request->get("search"));
        return view("backend.activity.index", compact("activities", "adminView"));
    }
    public function userActivity(User $user, Request $request)
    {
        $perPage = 20;
        $perPage = 20;
        $adminView = true;
        $activities = $this->activities->paginateActivitiesForUser($user->id, $perPage, $request->get("search"));
        return view("backend.activity.index", compact("activities", "user", "adminView"));
    }
}