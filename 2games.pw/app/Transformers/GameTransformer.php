<?php 
namespace VanguardDK\Transformers;

use League\Fractal\TransformerAbstract;
use VanguardDK\Game;

class GameTransformer extends TransformerAbstract
{
    public function transform(Game $game)
    {
        $gamereel = $game->gamereel;
        return ["id" => $game->id, "name" => $game->name, "title" => $game->title, "category" => $game->categories->pluck("category_id")->toArray(), "device" => $game->device, "view" => $game->view];
    }
}
