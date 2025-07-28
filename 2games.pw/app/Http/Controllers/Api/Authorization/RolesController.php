<?php 
namespace VanguardDK\Http\Controllers\Api\Authorization;

use VanguardDK\Http\Controllers\Api\ApiController;
use VanguardDK\Http\Requests\Role\CreateRoleRequest;
use VanguardDK\Http\Requests\Role\RemoveRoleRequest;
use VanguardDK\Http\Requests\Role\UpdateRoleRequest;
use VanguardDK\Repositories\Role\RoleRepository;
use VanguardDK\Repositories\User\UserRepository;
use VanguardDK\Role;
use VanguardDK\Transformers\RoleTransformer;

class RolesController extends ApiController
{
    private $roles = null;
    public function __construct(RoleRepository $roles)
    {
        $this->roles = $roles;
        $this->middleware("auth");
        $this->middleware("permission:roles.manage");
    }
    public function index()
    {
        return $this->respondWithCollection($this->roles->getAllWithUsersCount(), new RoleTransformer());
    }
    public function store(CreateRoleRequest $request)
    {
        $role = $this->roles->create($request->only(["name", "display_name", "description"]));
        return $this->respondWithItem($role, new RoleTransformer());
    }
    public function show(Role $role)
    {
        return $this->respondWithItem($role, new RoleTransformer());
    }
    public function update(Role $role, UpdateRoleRequest $request)
    {
        $input = collect($request->all());
        $role = $this->roles->update($role->id, $input->only(["name", "display_name", "description"])->toArray());
        return $this->respondWithItem($role, new RoleTransformer());
    }
    public function destroy(Role $role, UserRepository $users, RemoveRoleRequest $request)
    {
        $userRole = $this->roles->findByName("User");
        $users->switchRolesForUsers($role->id, $userRole->id);
        $this->roles->delete($role->id);
        Cache::flush();
        return $this->respondWithSuccess();
    }
}
