<?php 
namespace VanguardDK\Http\Controllers\Api\Profile;

use Illuminate\Http\Request;
use VanguardDK\Events\User\ChangedAvatar;
use VanguardDK\Http\Controllers\Api\ApiController;
use VanguardDK\Http\Requests\User\UploadAvatarRawRequest;
use VanguardDK\Repositories\User\UserRepository;
use VanguardDK\Services\Upload\UserAvatarManager;
use VanguardDK\Transformers\UserTransformer;

class AvatarController extends ApiController
{
    private $users = null;
    private $avatarManager = null;
    public function __construct(UserRepository $users, UserAvatarManager $avatarManager)
    {
        $this->middleware("auth");
        $this->users = $users;
        $this->avatarManager = $avatarManager;
    }
    public function update(UploadAvatarRawRequest $request)
    {
        $name = $this->avatarManager->uploadAndCropAvatar(auth()->user(), $request->file("file"));
        $user = $this->users->update(auth()->id(), ["avatar" => $name]);
        event(new ChangedAvatar());
        return $this->respondWithItem($user, new UserTransformer());
    }
    public function updateExternal(Request $request)
    {
        $this->validate($request, ["url" => "required|url"]);
        $this->avatarManager->deleteAvatarIfUploaded(auth()->user());
        $user = $this->users->update(auth()->id(), ["avatar" => $request->url]);
        event(new ChangedAvatar());
        return $this->respondWithItem($user, new UserTransformer());
    }
    public function destroy()
    {
        $user = auth()->user();
        $this->avatarManager->deleteAvatarIfUploaded($user);
        $user = $this->users->update($user->id, ["avatar" => null]);
        event(new ChangedAvatar());
        return $this->respondWithItem($user, new UserTransformer());
    }
}
