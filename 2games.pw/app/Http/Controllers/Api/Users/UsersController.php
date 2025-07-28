<?php 
namespace VanguardDK\Http\Controllers\Api\Users;

use Illuminate\Http\Request;
use VanguardDK\Events\User\Banned;
use VanguardDK\Events\User\Deleted;
use VanguardDK\Events\User\UpdatedByAdmin;
use VanguardDK\Http\Controllers\Api\ApiController;
use VanguardDK\Http\Requests\User\CreateUserRequest;
use VanguardDK\Http\Requests\User\UpdateUserRequest;
use VanguardDK\Repositories\User\UserRepository;
use VanguardDK\Support\Enum\UserStatus;
use VanguardDK\Transformers\UserTransformer;
use VanguardDK\User;

class UsersController extends ApiController
{
    private $users = null;
    public function __construct(UserRepository $users)
    {
        $this->middleware("auth");
        $this->middleware("permission:users.manage");
        $this->users = $users;
    }
    public function index(Request $request)
    {
        $users = User::orderBy("created_at", "DESC");
        $users = $users->where("role_id", "<=", auth()->user()->role_id);
        if( $request->search != "" ) 
        {
            $users = $users->where("title", "like", "%" . $request->search . "%");
        }
        if( $request->status != "" ) 
        {
            $users = $users->where("status", $request->status);
        }
        $users = $users->paginate(20000);
        return $this->respondWithPagination($users, new UserTransformer());
    }
    public function store(CreateUserRequest $request)
    {
        $data = $request->only(["email", "password", "username", "first_name", "last_name", "phone", "address", "country_id", "birthday", "role_id"]);
        $data += ["status" => UserStatus::ACTIVE];
        $user = $this->users->create($data);
        return $this->setStatusCode(201)->respondWithItem($user, new UserTransformer());
    }
    public function show(User $user)
    {
        return $this->respondWithItem($user, new UserTransformer());
    }
    public function update(User $user, UpdateUserRequest $request)
    {
        $data = collect($request->all());
        $data = $data->only(["email", "password", "username", "first_name", "last_name", "phone", "address", "country_id", "birthday", "status", "role_id"])->toArray();
        $user = $this->users->update($user->id, $data);
        event(new UpdatedByAdmin($user));
        if( $this->userIsBanned($user, $request) ) 
        {
            event(new Banned($user));
        }
        return $this->respondWithItem($user, new UserTransformer());
    }
    private function userIsBanned(User $user, Request $request)
    {
        return $user->status != $request->status && $request->status == UserStatus::BANNED;
    }
    public function destroy(User $user)
    {
        if( $user->id == auth()->id() ) 
        {
            return $this->errorForbidden("You cannot delete yourself.");
        }
        event(new Deleted($user));
        $this->users->delete($user->id);
        return $this->respondWithSuccess();
    }
}
