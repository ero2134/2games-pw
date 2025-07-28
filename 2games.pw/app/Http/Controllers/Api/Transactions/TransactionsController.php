<?php 
namespace VanguardDK\Http\Controllers\Api\Transactions;

use Illuminate\Http\Request;
use VanguardDK\Http\Controllers\Api\ApiController;
use VanguardDK\Transaction;
use VanguardDK\Transformers\TransactionTransformer;

class TransactionsController extends ApiController
{
    public function __construct()
    {
        $this->middleware("auth");
    }
    public function index(Request $request)
    {
        if( auth()->user()->isUser() ) 
        {
            $transactions = Transaction::where("user_id", auth()->user()->id)->orderBy("created_at", "DESC");
        }
        else
        {
            $transactions = Transaction::orderBy("created_at", "DESC");
        }
        if( $request->user_id != "" ) 
        {
            $transactions = $transactions->where("user_id", $request->user_id);
        }
        $transactions = $transactions->paginate(100000);
        return $this->respondWithPagination($transactions, new TransactionTransformer());
    }
}
