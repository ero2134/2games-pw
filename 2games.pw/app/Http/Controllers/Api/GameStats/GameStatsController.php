<?php 
namespace VanguardDK\Http\Controllers\Api\GameStats;

use Illuminate\Http\Request;
use VanguardDK\Http\Controllers\Api\ApiController;
use VanguardDK\StatGame;
use VanguardDK\Transformers\GameStatTransformer;

class GameStatsController extends ApiController
{
    public function __construct()
    {
        $this->middleware("auth");
    }
    public function index(Request $request)
    {
        if( auth()->user()->isUser() ) 
        {
            $stats = StatGame::where("user_id", auth()->user()->id)->orderBy("date_time", "DESC");
        }
        else
        {
            $stats = StatGame::orderBy("date_time", "DESC");
        }
        if( $request->user_id != "" ) 
        {
            $stats = $stats->where("user_id", $request->user_id);
        }
        $stats = $stats->paginate(100000);
        return $this->respondWithPagination($stats, new GameStatTransformer());
    }
}
