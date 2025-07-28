<?php 
namespace VanguardDK\Http\Controllers\Api\Profile;

use VanguardDK\Http\Controllers\Api\ApiController;
use VanguardDK\Http\Requests\User\UpdateProfileLoginDetailsRequest;
use VanguardDK\Repositories\User\UserRepository;
use VanguardDK\Transformers\UserTransformer;

class AuthDetailsController extends ApiController
{
    public function __construct()
    {
        $this->middleware("auth");
    }
    public function update(UpdateProfileLoginDetailsRequest $request, UserRepository $users)
    {
        $user = $request->user();
        $data = $request->only(["email", "username", "password"]);
        $user = $users->update($user->id, $data);
        return $this->respondWithItem($user, new UserTransformer());
    }
}
