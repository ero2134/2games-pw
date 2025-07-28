<?php 
namespace VanguardDK\Http\Controllers\Api\Authorization;

use VanguardDK\Events\Role\PermissionsUpdated;
use VanguardDK\Http\Controllers\Api\ApiController;
use VanguardDK\Http\Requests\Role\UpdateRolePermissionsRequest;
use VanguardDK\Repositories\Role\RoleRepository;
use VanguardDK\Role;
use VanguardDK\Transformers\PermissionTransformer;

class RolePermissionsController extends ApiController
{
    private $roles = null;
    public function __construct(RoleRepository $roles)
    {
        $this->roles = $roles;
        $this->middleware("auth");
        $this->middleware("permission:permissions.manage");
    }
    public function show(Role $role)
    {
        return $this->respondWithCollection($role->cachedPermissions(), new PermissionTransformer());
    }
    public function update(Role $role, UpdateRolePermissionsRequest $request)
    {
        $this->roles->updatePermissions($role->id, $request->permissions);
        event(new PermissionsUpdated());
        return $this->respondWithCollection($role->cachedPermissions(), new PermissionTransformer());
    }
}
