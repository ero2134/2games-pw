<?php 
namespace VanguardDK\Transformers;

use League\Fractal\TransformerAbstract;
use VanguardDK\StatGame;

class GameStatTransformer extends TransformerAbstract
{
    public function transform(StatGame $stat)
    {
        return ["id" => $stat->id, "game" => $stat->game, "date_time" => $stat->date_time, "user_id" => $stat->user_id, "balance" => $stat->balance, "bet" => $stat->bet, "win" => $stat->win];
    }
}
