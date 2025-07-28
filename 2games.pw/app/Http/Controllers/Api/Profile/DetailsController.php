<?php 
namespace VanguardDK\Http\Controllers\Api\Profile;

use VanguardDK\Events\User\UpdatedProfileDetails;
use VanguardDK\Http\Controllers\Api\ApiController;
use VanguardDK\Http\Requests\User\UpdateProfileDetailsRequest;
use VanguardDK\Repositories\User\UserRepository;
use VanguardDK\Transformers\UserTransformer;

class DetailsController extends ApiController
{
    public function __construct()
    {
        $this->middleware("auth");
    }
    public function index()
    {
        return $this->respondWithItem(auth()->user(), new UserTransformer());
    }
    public function update(UpdateProfileDetailsRequest $request, UserRepository $users)
    {
        $user = $request->user();
        $data = collect($request->all());
        $data = $data->only(["first_name", "last_name", "birthday", "phone", "address", "country_id"])->toArray();
        if( !isset($data["country_id"]) ) 
        {
            $data["country_id"] = $user->country_id;
        }
        $user = $users->update($user->id, $data);
        event(new UpdatedProfileDetails());
        return $this->respondWithItem($user, new UserTransformer());
    }
    public function returns(UpdateProfileDetailsRequest $request, UserRepository $users)
    {
        $user = $request->user();
        $count_return = $user->count_return;
        $return = Returns::whereRaw("'" . $count_return . "' BETWEEN min_pay AND max_pay")->first();
        if( $return ) 
        {
            $sum = floatval($return->percent) / 100 * $count_return;
            if( $sum > 0 ) 
            {
                $user->increment("balance", $sum);
                $user->increment("count_balance", $sum);
                $user->update(["count_return" => 0]);
                Transaction::create(["user_id" => $user->id, "summ" => $sum, "system" => "Refund"]);
                return response()->json(["success" => "success", "value" => $sum], 200);
            }
        }
        return response()->json(["success" => "success", "value" => 0], 200);
    }
}
