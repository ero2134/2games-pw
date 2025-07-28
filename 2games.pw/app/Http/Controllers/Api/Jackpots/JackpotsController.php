<?php 
namespace VanguardDK\Http\Controllers\Api\Jackpots;

use Illuminate\Http\Request;
use VanguardDK\Http\Controllers\Api\ApiController;
use VanguardDK\Jackpot;
use VanguardDK\Transformers\JackpotTransformer;

class JackpotsController extends ApiController
{
    public function __construct()
    {
        $this->middleware("auth");
    }
    public function index(Request $request)
    {
        $jackpots = Jackpot::orderBy("date_time", "DESC");
        if( $request->search != "" ) 
        {
            $jackpots = $jackpots->where("name", "like", "%" . $request->search . "%");
        }
        $jackpots = $jackpots->paginate(100000);
        return $this->respondWithPagination($jackpots, new JackpotTransformer());
    }
}
