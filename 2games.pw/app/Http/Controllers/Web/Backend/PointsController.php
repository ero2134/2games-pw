<?php 
namespace VanguardDK\Http\Controllers\Web\Backend;

use Illuminate\Http\Request;
use VanguardDK\Http\Controllers\Controller;
use VanguardDK\Point;

class PointsController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
        $this->middleware("permission:access.admin.panel");
    }
    public function index(Request $request)
    {
        $points = Point::get();
        return view("backend.points.list", compact("points"));
    }
    public function create()
    {
        return view("backend.points.add");
    }
    public function store(Request $request)
    {
        $data = $request->all();
        Point::create($data);
        return redirect()->route("backend.points.list")->withSuccess(trans("app.point_created"));
    }
    public function edit($point)
    {
        $point = Point::where("id", $point)->first();
        return view("backend.points.edit", compact("point"));
    }
    public function update(Request $request, $point)
    {
        $data = $request->only(["rating", "name", "sum", "bonus", "img", "pay", "exchange", "title", "description"]);
        Point::where("id", $point)->update($data);
        return redirect()->route("backend.points.list")->withSuccess(trans("app.point_updated"));
    }
    public function delete($point)
    {
        $point = Point::where("id", $point)->delete();
        return redirect()->route("backend.points.list")->withSuccess(trans("app.point_deleted"));
    }
}