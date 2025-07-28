<?php 
namespace VanguardDK\Http\Controllers\Api;

use Carbon\Carbon;
use League\Fractal\Resource\Collection;
use VanguardDK\Repositories\Activity\ActivityRepository;
use VanguardDK\Repositories\User\UserRepository;
use VanguardDK\Support\Enum\UserStatus;
use VanguardDK\Transformers\UserTransformer;

class StatsController extends ApiController
{
    private $users = null;
    private $activities = null;
    public function __construct(UserRepository $users, ActivityRepository $activities)
    {
        $this->middleware("auth");
        $this->users = $users;
        $this->activities = $activities;
    }
    public function index()
    {
        if( Auth::user()->hasRole("Admin") ) 
        {
            return $this->adminStats();
        }
        return $this->defaultStats();
    }
    private function adminStats()
    {
        $usersPerMonth = $this->users->countOfNewUsersPerMonth(Carbon::now()->subYear()->startOfMonth(), Carbon::now()->endOfMonth());
        $usersPerStatus = ["total" => $this->users->count(), "new" => $this->users->newUsersCount(), "banned" => $this->users->countByStatus(UserStatus::BANNED), "unconfirmed" => $this->users->countByStatus(UserStatus::UNCONFIRMED)];
        $latestRegistrations = $this->users->latest(7);
        $resource = new Collection($latestRegistrations, new UserTransformer());
        return $this->respondWithArray(["users_per_month" => $usersPerMonth, "users_per_status" => $usersPerStatus, "latest_registrations" => $this->fractal()->createData($resource)->toArray()]);
    }
    private function defaultStats()
    {
        return $this->activities->userActivityForPeriod(Auth::user()->id, Carbon::now()->subWeeks(2), Carbon::now());
    }
}
