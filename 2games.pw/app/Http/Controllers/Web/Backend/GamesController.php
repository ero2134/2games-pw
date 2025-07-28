<?php 
namespace VanguardDK\Http\Controllers\Web\Backend;

use Illuminate\Http\Request;
use VanguardDK\BotGame;
use VanguardDK\Category;
use VanguardDK\Game;
use VanguardDK\GameCategory;
use VanguardDK\GameLog;
use VanguardDK\GameReel;
use VanguardDK\GameWin;
use VanguardDK\Http\Controllers\Controller;
use VanguardDK\Lib\LicenseDK;
use VanguardDK\Repositories\Activity\ActivityRepository;
use VanguardDK\StatGame;
use VanguardDK\User;

class GamesController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
        $this->middleware("permission:access.admin.panel");
        $this->middleware("permission:games.manage");
    }
    public function index(Request $request)
    {
        $checked = new LicenseDK();
        $license_notifications_array = $checked->aplVerifyLicenseDK(null, 0);
        if( $license_notifications_array["notification_case"] != "notification_license_ok" ) 
        {
            return redirect()->route("frontend.page.error_license");
        }
        $views = ["" => "All", "Active", "0" => "Disabled"];
        $devices = ["" => "All", "2" => "Mobile + Desktop", "0" => "Mobile", "1" => "Desktop"];
        $categories = Category::where("parent", 0)->get();
        $games = Game::select("games.*")->orderBy("created_at", "DESC");
        if( $request->search != "" ) 
        {
            $games = $games->where("title", "like", "%" . $request->search . "%");
        }
        if( $request->view != "" ) 
        {
            $games = $games->where("view", $request->view);
        }
        if( $request->device != "" ) 
        {
            $games = $games->where("device", $request->device);
        }
        if( $request->category != "" ) 
        {
            $games = $games->join("game_categories", "game_categories.game_id", "=", "games.id");
            $games = $games->where("game_categories.category_id", $request->category);
        }
        $games = $games->get();
        return view("backend.games.list", compact("games", "views", "devices", "categories"));
    }
    public function categories(Request $request)
    {
        if( !count($request->category) ) 
        {
            return redirect()->route("backend.game.list")->withErrors([trans("app.categories_not_selected")]);
        }
        if( !count($request->checkbox) ) 
        {
            return redirect()->route("backend.game.list")->withErrors([trans("app.games_not_selected")]);
        }
        if( $request->action == "change_category" ) 
        {
            foreach( $request->checkbox as $game_id => $val ) 
            {
                GameCategory::where("game_id", $game_id)->delete();
                foreach( $request->category as $category ) 
                {
                    GameCategory::create(["game_id" => $game_id, "category_id" => $category]);
                }
            }
        }
        if( $request->action == "add_category" ) 
        {
            foreach( $request->checkbox as $game_id => $val ) 
            {
                foreach( $request->category as $category ) 
                {
                    $exist = GameCategory::where(["game_id" => $game_id, "category_id" => $category])->count();
                    if( !$exist ) 
                    {
                        GameCategory::create(["game_id" => $game_id, "category_id" => $category]);
                    }
                }
            }
        }
        return redirect()->route("backend.game.list")->withSuccess(trans("app.games_categories_updated"));
    }
    public function view(User $user, ActivityRepository $activities)
    {
        $userActivities = $activities->getLatestActivitiesForUser($user->id, 10);
        return view("backend.user.view", compact("user", "userActivities"));
    }
    public function create()
    {
        $game = new Game();
        $gamereel = new GameReel();
        $categories = Category::where("parent", 0)->get();
        return view("backend.games.add", compact("categories", "game", "gamereel"));
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $game = Game::create($data);
        $data = $request->only(["reelStrip1", "reelStrip2", "reelStrip3", "reelStrip4", "reelStrip5", "reelStrip6", "reelStripBonus1", "reelStripBonus2", "reelStripBonus3", "reelStripBonus4", "reelStripBonus5", "reelStripBonus6"]);
        if( count($data) > 0 ) 
        {
            $data["game_id"] = $game->id;
            GameReel::create($data);
        }
        $data = $request->only(["match_winline", "match_winbonus"]);
        if( count($data) > 0 ) 
        {
            $data["game_id"] = $game->id;
            $data["winline"] = $request->match_winline;
            $data["winbonus"] = $request->match_winbonus;
            GameWin::create($data);
        }
        if( isset($request->category) ) 
        {
            foreach( $request->category as $category ) 
            {
                GameCategory::create(["game_id" => $game->id, "category_id" => $category]);
            }
        }
        return redirect()->route("backend.game.list")->withSuccess(trans("app.game_created"));
    }
    public function edit($game)
    {
        $edit = true;
        $game = Game::where("id", $game)->first();
        $game_stat = $game->statistics()->orderBy("date_time", "DESC")->limit(8)->get();
        $categories = Category::where("parent", 0)->get();
        $cats = GameCategory::where("game_id", $game->id)->pluck("category_id")->toArray();
        $gamereel = $game->gamereel;
        return view("backend.games.edit", compact("edit", "game", "game_stat", "categories", "gamereel", "cats"));
    }
    public function go(Request $request, $game)
    {
        $userId = Authy::id();
        $object = "\\VanguardDK\\Games\\" . $game . "\\SlotSettings";
        $slot = new $object($game, $userId);
        $game = Game::where("name", $game)->first();
        return view("backend.games.list." . $game->name, compact("slot", "game"));
    }
    public function server(Request $request, $game)
    {
        $object = "\\VanguardDK\\Games\\" . $game . "\\Server";
        $server = new $object();
        echo $server->get($request, $game);
    }
    public function update($game, Request $request)
    {
        $data = $request->only(["name", "title", "gamebank", "percent", "garant_win", "garant_bonus", "rezerv", "winline", "winbonus", "cask", "jp_1", "jp_2", "jp_3", "jp_4", "jp_5", "jp_6", "jp_7", "jp_8", "jp_9", "jp_10", "jp_1_percent", "jp_2_percent", "jp_3_percent", "jp_4_percent", "jp_5_percent", "jp_6_percent", "jp_7_percent", "jp_8_percent", "jp_9_percent", "jp_10_percent", "view", "device", "gameline", "monitor", "bet", "scaleMode", "numFloat", "slotViewState", "ReelsMath"]);
        $user = Game::where("id", $game)->update($data);
        $data = $request->only(["match_winline", "match_winbonus"]);
        if( count($data) > 0 ) 
        {
            $win = GameWin::where("game_id", $game)->first();
            $win->winline = $request->match_winline;
            $win->winbonus = $request->match_winbonus;
            $win->save();
        }
        $data = $request->only(["reelStrip1", "reelStrip2", "reelStrip3", "reelStrip4", "reelStrip5", "reelStrip6", "reelStripBonus1", "reelStripBonus2", "reelStripBonus3", "reelStripBonus4", "reelStripBonus5", "reelStripBonus6"]);
        if( count($data) > 0 ) 
        {
            $gamereel = GameReel::where("game_id", $game)->first();
            $gamereel->update($data);
        }
        if( isset($request->category) ) 
        {
            GameCategory::where("game_id", $game)->delete();
            foreach( $request->category as $category ) 
            {
                GameCategory::create(["game_id" => $game, "category_id" => $category]);
            }
        }
        return redirect()->route("backend.game.edit", $game)->withSuccess(trans("app.game_updated"));
    }
    public function delete($game)
    {
        $gameItem = Game::find($game);
        Game::where("id", $game)->delete();
        GameWin::where("game_id", $game)->delete();
        GameReel::where("game_id", $game)->delete();
        GameCategory::where("game_id", $game)->delete();
        StatGame::where("game", $gameItem->name)->delete();
        BotGame::where("game_id", $game)->delete();
        GameLog::where("game_id", $game)->delete();
        return redirect()->route("backend.game.list")->withSuccess(trans("app.game_deleted"));
    }
}