<?php 
namespace VanguardDK\Http\Controllers\Web\Backend;

use Illuminate\Http\Request;
use VanguardDK\Http\Controllers\Controller;
use VanguardDK\Returns;

class ReturnsController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
        $this->middleware("permission:access.admin.panel");
    }
    public function index(Request $request)
    {
        $returns = Returns::get();
        return view("backend.returns.list", compact("returns"));
    }
    public function create()
    {
        return view("backend.returns.add");
    }
    public function store(Request $request)
    {
        $data = $request->all();
        Returns::create($data);
        return redirect()->route("backend.returns.list")->withSuccess(trans("app.return_created"));
    }
    public function edit($returns)
    {
        $return = Returns::where("id", $returns)->first();
        return view("backend.returns.edit", compact("return"));
    }
    public function update(Request $request, $return)
    {
        $data = $request->only(["min_pay", "max_pay", "percent"]);
        Returns::find($return)->update($data);
        return redirect()->route("backend.returns.list")->withSuccess(trans("app.return_updated"));
    }
    public function delete($return)
    {
        $return = Returns::where("id", $return)->delete();
        return redirect()->route("backend.returns.list")->withSuccess(trans("app.return_deleted"));
    }
}