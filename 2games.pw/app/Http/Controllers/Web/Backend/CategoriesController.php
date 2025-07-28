<?php 
namespace VanguardDK\Http\Controllers\Web\Backend;

use Illuminate\Http\Request;
use VanguardDK\Category;
use VanguardDK\Http\Controllers\Controller;

class CategoriesController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
        $this->middleware("permission:access.admin.panel");
        $this->middleware("permission:categories.manage");
    }
    public function index(Request $request)
    {
        $categories = Category::where("parent", 0)->orderBy("position")->get();
        return view("backend.categories.list", compact("categories"));
    }
    public function create()
    {
        $categories = Category::where("parent", 0)->pluck("id", "title")->toArray();
        $categories = array_merge(["Root" => 0], $categories);
        $categories = array_flip($categories);
        return view("backend.categories.add", compact("categories"));
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $category = Category::create($data);
        return redirect()->route("backend.category.list")->withSuccess(trans("app.category_created"));
    }
    public function edit($category)
    {
        $category = Category::where("id", $category)->first();
        $categories = Category::where("parent", 0)->pluck("id", "title")->toArray();
        $categories = array_merge(["Root" => 0], $categories);
        $categories = array_flip($categories);
        return view("backend.categories.edit", compact("category", "categories"));
    }
    public function update($category, Request $request)
    {
        $data = $request->only(["title", "parent", "position", "href"]);
        Category::where("id", $category)->update($data);
        return redirect()->route("backend.category.list")->withSuccess(trans("app.category_updated"));
    }
    public function delete($category)
    {
        $category = Category::where("id", $category)->delete();
        return redirect()->route("backend.category.list")->withSuccess(trans("app.category_deleted"));
    }
}