<?php 
namespace VanguardDK\Transformers;

use League\Fractal\TransformerAbstract;
use VanguardDK\Transaction;

class TransactionTransformer extends TransformerAbstract
{
    public function transform(Transaction $transaction)
    {
        return ["id" => $transaction->id, "user_id" => $transaction->user_id, "payeer_id" => $transaction->payeer_id, "system" => $transaction->system, "type" => $transaction->type, "summ" => $transaction->summ, "status" => $transaction->status, "created_at" => $transaction->created_at];
    }
}
