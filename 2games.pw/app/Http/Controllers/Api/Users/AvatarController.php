<?php 
namespace VanguardDK\Http\Controllers\Api\Users;

use Illuminate\Http\Request;
use VanguardDK\Events\User\UpdatedByAdmin;
use VanguardDK\Http\Controllers\Api\ApiController;
use VanguardDK\Http\Requests\User\UploadAvatarRawRequest;
use VanguardDK\Repositories\User\UserRepository;
use VanguardDK\Services\Upload\UserAvatarManager;
use VanguardDK\Transformers\UserTransformer;
use VanguardDK\User;

class AvatarController extends ApiController
{
    private $users = null;
    private $avatarManager = null;
    public function __construct(UserRepository $users, UserAvatarManager $avatarManager)
    {
        $this->middleware("auth");
        $this->middleware("permission:users.manage");
        $this->users = $users;
        $this->avatarManager = $avatarManager;
    }
    public function update(User $user, UploadAvatarRawRequest $request)
    {
        $name = $this->avatarManager->uploadAndCropAvatar($user, $request->file("file"));
        $user = $this->users->update($user->id, ["avatar" => $name]);
        event(new UpdatedByAdmin($user));
        return $this->respondWithItem($user, new UserTransformer());
    }
    public function updateExternal(User $user, Request $request)
    {
        $this->validate($request, ["url" => "required|url"]);
        $this->avatarManager->deleteAvatarIfUploaded($user);
        $user = $this->users->update($user->id, ["avatar" => $request->url]);
        event(new UpdatedByAdmin($user));
        return $this->respondWithItem($user, new UserTransformer());
    }
    public function destroy(User $user)
    {
        $this->avatarManager->deleteAvatarIfUploaded($user);
        $user = $this->users->update($user->id, ["avatar" => null]);
        event(new UpdatedByAdmin($user));
        return $this->respondWithItem($user, new UserTransformer());
    }
}
