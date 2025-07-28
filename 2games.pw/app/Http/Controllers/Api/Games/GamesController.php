<?php 
namespace VanguardDK\Http\Controllers\Api\Games;

use Illuminate\Http\Request;
use VanguardDK\Game;
use VanguardDK\Http\Controllers\Api\ApiController;
use VanguardDK\Transformers\GameTransformer;

class GamesController extends ApiController
{
    public function __construct()
    {
        $this->middleware("auth");
    }
    public function index(Request $request)
    {
        $games = Game::select("games.*")->orderBy("created_at", "DESC");
        if( $request->search != "" ) 
        {
            $games = $games->where("title", "like", "%" . $request->search . "%");
        }
        if( $request->view != "" ) 
        {
            $games = $games->where("view", $request->view);
        }
        if( $request->category != "" ) 
        {
            $games = $games->join("game_categories", "game_categories.game_id", "=", "games.id");
            $games = $games->where("game_categories.category_id", $request->category);
        }
        $games = $games->paginate(100000);
        return $this->respondWithPagination($games, new GameTransformer());
    }
    public function go(Request $request, $game)
    {
        $userId = auth()->user()->id;
        $object = "\\VanguardDK\\Games\\" . $game . "\\SlotSettings";
        $slot = new $object($game, $userId);
        $game = Game::where("name", $game)->first();
        $is_api = true;
        return view("frontend.games.list." . $game->name, compact("slot", "game", "is_api"));
    }
    public function server(Request $request, $game)
    {
        $userId = auth()->user()->id;
        $object = "\\VanguardDK\\Games\\" . $game . "\\Server";
        $server = new $object();
        echo $server->get($request, $game, $userId);
    }
}
