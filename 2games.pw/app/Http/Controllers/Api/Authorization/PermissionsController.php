<?php 
namespace VanguardDK\Http\Controllers\Api\Authorization;

use VanguardDK\Http\Controllers\Api\ApiController;
use VanguardDK\Http\Requests\Permission\CreatePermissionRequest;
use VanguardDK\Http\Requests\Permission\RemovePermissionRequest;
use VanguardDK\Http\Requests\Permission\UpdatePermissionRequest;
use VanguardDK\Permission;
use VanguardDK\Repositories\Permission\PermissionRepository;
use VanguardDK\Transformers\PermissionTransformer;

class PermissionsController extends ApiController
{
    private $permissions = null;
    public function __construct(PermissionRepository $permissions)
    {
        $this->permissions = $permissions;
        $this->middleware("auth");
        $this->middleware("permission:permissions.manage");
    }
    public function index()
    {
        return $this->respondWithCollection($this->permissions->all(), new PermissionTransformer());
    }
    public function store(CreatePermissionRequest $request)
    {
        $permission = $this->permissions->create($request->only(["name", "display_name", "description"]));
        return $this->respondWithItem($permission, new PermissionTransformer());
    }
    public function show(Permission $permission)
    {
        return $this->respondWithItem($permission, new PermissionTransformer());
    }
    public function update(Permission $permission, UpdatePermissionRequest $request)
    {
        $input = collect($request->all());
        $permission = $this->permissions->update($permission->id, $input->only(["name", "display_name", "description"])->toArray());
        return $this->respondWithItem($permission, new PermissionTransformer());
    }
    public function destroy(Permission $permission, RemovePermissionRequest $request)
    {
        $this->permissions->delete($permission->id);
        return $this->respondWithSuccess();
    }
}
