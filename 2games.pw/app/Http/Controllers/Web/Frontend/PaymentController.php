<?php 
namespace VanguardDK\Http\Controllers\Web\Frontend;

use Illuminate\Http\Request;
use VanguardDK\Http\Controllers\Controller;
use VanguardDK\Payment;
use VanguardDK\User;

class PaymentController extends Controller
{
    public function piastrix(Request $request)
    {
        if( !isset($request->shop_amount) ) 
        {
            echo "error";
            exit();
        }
        $payment = Payment::find($request->shop_order_id);
        $user = User::find($payment->user_id);
        if( !$payment || $user ) 
        {
            echo "error";
            exit();
        }
        if( $payment->summ == $request->shop_amount ) 
        {
            $payment->update(["status" => 1]);
            $user->update(["balance" => $user->balance + $payment->summ, "count_balance" => $user->count_balance + $payment->summ, "count_return" => $user->count_return + $payment->summ]);
            echo "ok";
            exit();
        }
    }
}