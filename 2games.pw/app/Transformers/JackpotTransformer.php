<?php 
namespace VanguardDK\Transformers;

use League\Fractal\TransformerAbstract;
use VanguardDK\Jackpot;

class JackpotTransformer extends TransformerAbstract
{
    public function transform(Jackpot $jackpot)
    {
        return ["id" => $jackpot->id, "name" => $jackpot->name, "balance" => $jackpot->balance];
    }
}
