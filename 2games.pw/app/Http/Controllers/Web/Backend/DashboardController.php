<?php 
namespace VanguardDK\Http\Controllers\Web\Backend;

use Carbon\Carbon;
use Illuminate\Http\Request;
use VanguardDK\Http\Controllers\Controller;
use VanguardDK\Lib\LicenseDK;
use VanguardDK\Repositories\Activity\ActivityRepository;
use VanguardDK\Repositories\User\UserRepository;
use VanguardDK\StatGame;
use VanguardDK\Support\Enum\UserStatus;
use VanguardDK\Transaction;

class DashboardController extends Controller
{
    private $users = null;
    private $activities = null;
    public function __construct(UserRepository $users, ActivityRepository $activities)
    {
        $this->middleware("auth");
        $this->middleware("permission:access.admin.panel");
        $this->users = $users;
        $this->activities = $activities;
    }
    public function index()
    {
        $checked = new LicenseDK();
        $license_notifications_array = $checked->aplVerifyLicenseDK(null, 0);
        if( $license_notifications_array["notification_case"] != "notification_license_ok" ) 
        {
            return redirect()->route("frontend.page.error_license");
        }
        $usersPerMonth = $this->users->countOfNewUsersPerMonth(Carbon::now()->subYear()->startOfMonth(), Carbon::now()->endOfMonth());
        $stats = ["total" => $this->users->count(), "new" => $this->users->newUsersCount(), "banned" => $this->users->countByStatus(UserStatus::BANNED), "unconfirmed" => $this->users->countByStatus(UserStatus::UNCONFIRMED)];
        $latestRegistrations = $this->users->latest(6);
        return view("backend.dashboard.admin", compact("stats", "latestRegistrations", "usersPerMonth"));
    }
    public function statistics(Request $request)
    {
        $user = \Auth::user();
        $statistics = Transaction::select("transactions.*")->orderBy("transactions.created_at", "DESC");
        if( $request->system != "" ) 
        {
            $statistics = $statistics->where("transactions.system", "like", "%" . $request->system . "%");
        }
        if( $request->type != "" ) 
        {
            $statistics = $statistics->where("transactions.type", $request->type);
        }
        if( $request->sum_from != "" ) 
        {
            $statistics = $statistics->where("transactions.summ", ">=", $request->sum_from);
        }
        if( $request->sum_to != "" ) 
        {
            $statistics = $statistics->where("transactions.summ", "<=", $request->sum_to);
        }
        if( $request->user != "" ) 
        {
            $statistics = $statistics->join("users", "users.id", "=", "transactions.user_id");
            $statistics = $statistics->where("users.username", "like", "%" . $request->user . "%");
        }
        else if( $request->payeer != "" ) 
        {
            $statistics = $statistics->join("users", "users.id", "=", "transactions.payeer_id");
            $statistics = $statistics->where("users.username", "like", "%" . $request->payeer . "%");
        }
        if( $request->dates != "" ) 
        {
            $dates = explode(" - ", $request->dates);
            $statistics = $statistics->where("transactions.created_at", ">=", $dates[0]);
            $statistics = $statistics->where("transactions.created_at", "<=", $dates[1]);
        }
        $statistics = $statistics->paginate(20);
        return view("backend.user.stat", compact("user", "statistics"));
    }
    public function game_stat(Request $request)
    {
        $statistics = StatGame::select("stat_game.*")->orderBy("stat_game.date_time", "DESC");
        if( $request->game != "" ) 
        {
            $statistics = $statistics->where("stat_game.game", "like", "%" . $request->game . "%");
        }
        if( $request->balance_from != "" ) 
        {
            $statistics = $statistics->where("stat_game.balance", ">=", $request->balance_from);
        }
        if( $request->balance_to != "" ) 
        {
            $statistics = $statistics->where("stat_game.balance", "<=", $request->balance_to);
        }
        if( $request->bet_from != "" ) 
        {
            $statistics = $statistics->where("stat_game.bet", ">=", $request->bet_from);
        }
        if( $request->bet_to != "" ) 
        {
            $statistics = $statistics->where("stat_game.bet", "<=", $request->bet_to);
        }
        if( $request->win_from != "" ) 
        {
            $statistics = $statistics->where("stat_game.win", ">=", $request->win_from);
        }
        if( $request->win_to != "" ) 
        {
            $statistics = $statistics->where("stat_game.win", "<=", $request->win_to);
        }
        if( $request->user != "" ) 
        {
            $statistics = $statistics->join("users", "users.id", "=", "stat_game.user_id");
            $statistics = $statistics->where("users.username", "like", "%" . $request->user . "%");
        }
        if( $request->dates != "" ) 
        {
            $dates = explode(" - ", $request->dates);
            $statistics = $statistics->where("stat_game.date_time", ">=", $dates[0]);
            $statistics = $statistics->where("stat_game.date_time", "<=", $dates[1]);
        }
        $game_stat = $statistics->paginate(20);
        return view("backend.games.list_stat", compact("game_stat"));
    }
}
function G39j81XW7uDeumlOhZVl()
{
    return "WnyHAPZIlpzbwIb1gjj5Sf5ZZ6HkuDfpkTIuD3eEbGPpFwefpT";
}
