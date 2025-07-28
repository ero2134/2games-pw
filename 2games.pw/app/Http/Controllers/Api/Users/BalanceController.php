<?php 
namespace VanguardDK\Http\Controllers\Api\Users;

use Illuminate\Http\Request;
use VanguardDK\Http\Controllers\Api\ApiController;
use VanguardDK\Transaction;
use VanguardDK\User;

class BalanceController extends ApiController
{
    public function __construct()
    {
        $this->middleware("auth");
        $this->middleware("permission:users.balance.manage");
    }
    public function balance(User $user, Request $request, $type)
    {
        $data = $request->all();
        if( !in_array($type, ["plus", "minus"]) ) 
        {
            return response()->json(["error" => Lang::get("auth.wrong_type")]);
        }
        $array = ["plus" => "add", "minus" => "out"];
        $sum = ($type == "minus" ? -1 * $request->amount : $request->amount);
        $balance = $user->balance + $sum;
        $payOut = $request->amount;
        if( $type == "minus" && $balance < 0 ) 
        {
            $payOut = -1 * $user->balance;
        }
        if( $payOut == 0 ) 
        {
            return response()->json(["error" => Lang::get("auth.zero_balance")]);
        }
        $balance = ($balance < 0 ? 0 : $balance);
        $transaction = new Transaction();
        $transaction->user_id = $user->id;
        $transaction->payeer_id = auth()->user()->id;
        $transaction->type = $array[$type];
        $transaction->summ = $payOut;
        $transaction->save();
        $user->update(["balance" => $balance]);
        return response()->json(["success" => "success"]);
    }
}
