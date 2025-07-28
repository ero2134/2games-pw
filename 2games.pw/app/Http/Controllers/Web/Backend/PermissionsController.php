<?php 
namespace VanguardDK\Http\Controllers\Web\Backend;

use Illuminate\Http\Request;
use VanguardDK\Events\Role\PermissionsUpdated;
use VanguardDK\Http\Controllers\Controller;
use VanguardDK\Lib\LicenseDK;
use VanguardDK\Repositories\Permission\PermissionRepository;
use VanguardDK\Repositories\Role\RoleRepository;
use jeremykenedy\LaravelRoles\Models\Permission;
use jeremykenedy\LaravelRoles\Models\Role;

class PermissionsController extends Controller
{
    private $roles = null;
    private $permissions = null;
    public function __construct(RoleRepository $roles, PermissionRepository $permissions)
    {
        $this->middleware("auth");
        $this->middleware("permission:access.admin.panel");
        $this->middleware("permission:jackpots.manage");
        $this->roles = $roles;
        $this->permissions = $permissions;
    }
    public function index()
    {
        $checked = new LicenseDK();
        $license_notifications_array = $checked->aplVerifyLicenseDK(null, 0);
        if( $license_notifications_array["notification_case"] != "notification_license_ok" ) 
        {
            return redirect()->route("frontend.page.error_license");
        }
        $roles = Role::get();
        $permissions = Permission::orderBy("slug")->get();
        return view("backend.permission.index", compact("roles", "permissions"));
    }
    public function create()
    {
        $edit = false;
        return view("backend.permission.add-edit", compact("edit"));
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate(["slug" => "required|regex:/^[a-zA-Z0-9\\-_\\.]+\$/|unique:permissions", "name" => "required"]);
        Permission::create($request->all());
        return redirect()->route("backend.permission.index")->withSuccess(trans("app.permission_created_successfully"));
    }
    public function edit(Permission $permission)
    {
        $edit = true;
        return view("backend.permission.add-edit", compact("edit", "permission"));
    }
    public function update(Permission $permission, Request $request)
    {
        $validatedData = $request->validate(["slug" => "required|regex:/^[a-zA-Z0-9\\-_\\.]+\$/|unique:permissions,slug," . $permission->id, "name" => "required"]);
        $permission->update($request->all());
        return redirect()->route("backend.permission.index")->withSuccess(trans("app.permission_updated_successfully"));
    }
    public function delete(Permission $permission)
    {
        $permission->delete();
        return redirect()->route("backend.permission.index")->withSuccess(trans("app.permission_deleted_successfully"));
    }
    public function saveRolePermissions(Request $request)
    {
        $roles = $request->get("roles");
        $allRoles = Role::get();
        foreach( $allRoles as $role ) 
        {
            $permissions = array_get($roles, $role->id, []);
            $role->syncPermissions($permissions);
        }
        event(new PermissionsUpdated());
        return redirect()->route("backend.permission.index")->withSuccess(trans("app.permissions_saved_successfully"));
    }
}