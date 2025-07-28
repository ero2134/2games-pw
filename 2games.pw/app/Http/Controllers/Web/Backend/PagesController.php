<?php 
namespace VanguardDK\Http\Controllers\Web\Backend;

use Illuminate\Http\Request;
use VanguardDK\Http\Controllers\Controller;
use VanguardDK\Page;

class PagesController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
        $this->middleware("permission:access.admin.panel");
    }
    public function index(Request $request)
    {
        $pages = Page::get();
        return view("backend.pages.list", compact("pages"));
    }
    public function create()
    {
        return view("backend.pages.add");
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $request->validate(["path" => "required|unique:pages|max:255", "body" => "required"]);
        Page::create($data);
        return redirect()->route("backend.pages.list")->withSuccess(trans("app.page_created"));
    }
    public function edit($page)
    {
        $page = Page::where("id", $page)->first();
        return view("backend.pages.edit", compact("page"));
    }
    public function update(Request $request, $page)
    {
        $data = $request->only(["title", "sub_title", "keywords", "description", "body", "path", "type", "view"]);
        Page::where("id", $page)->update($data);
        return redirect()->route("backend.pages.list")->withSuccess(trans("app.page_updated"));
    }
    public function delete($page)
    {
        $page = Page::where("id", $page)->first();
        if( $page->type != 2 ) 
        {
            return redirect()->route("backend.pages.list");
        }
        $page = Page::where("id", $page->id)->delete();
        return redirect()->route("backend.pages.list")->withSuccess(trans("app.page_deleted"));
    }
}