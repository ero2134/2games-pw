<?php 
namespace VanguardDK\Http\Controllers\Web\Backend;

use Illuminate\Http\Request;
use VanguardDK\Http\Controllers\Controller;
use VanguardDK\Repositories\Role\RoleRepository;
use jeremykenedy\LaravelRoles\Models\Role;

class RolesController extends Controller
{
    private $roles = null;
    public function __construct(RoleRepository $roles)
    {
        $this->middleware("auth");
        $this->middleware("permission:access.admin.panel");
        $this->middleware("permission:roles.manage");
        $this->roles = $roles;
    }
    public function index()
    {
        $roles = $this->roles->getAllWithUsersCount();
        return view("backend.role.index", compact("roles"));
    }
    public function create()
    {
        $edit = false;
        return view("backend.role.add-edit", compact("edit"));
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate(["slug" => "required|regex:/^[a-zA-Z0-9\\-_\\.]+\$/|unique:roles", "name" => "required"]);
        Role::create($request->all());
        return redirect()->route("backend.role.index")->withSuccess(trans("app.role_created"));
    }
    public function edit(Role $role)
    {
        $edit = true;
        return view("backend.role.add-edit", compact("edit", "role"));
    }
    public function update(Role $role, Request $request)
    {
        $validatedData = $request->validate(["slug" => "required|regex:/^[a-zA-Z0-9\\-_\\.]+\$/|unique:roles,slug," . $permission->id, "name" => "required"]);
        $role->update($request->all());
        return redirect()->route("backend.role.index")->withSuccess(trans("app.role_updated"));
    }
    public function delete(Role $role)
    {
        $role->detachAllPermissions();
        $role->delete();
        return redirect()->route("backend.role.index")->withSuccess(trans("app.role_deleted"));
    }
}