<?php 
namespace VanguardDK\Http\Controllers\Web\Frontend;

use Illuminate\Http\Request;
use VanguardDK\Http\Controllers\Controller;
use VanguardDK\Lib\LicenseDK;
use VanguardDK\Page;

class PagesController extends Controller
{
    public function new_license()
    {
        return view("frontend.pages.new_license");
    }
    public function new_license_post(Request $request)
    {
        $email = trim($request->email);
        $code = trim($request->code);
        file_put_contents(base_path() . "/" . config("licenseDK.APL_LICENSE_FILE_LOCATION"), "");
        $checked = new LicenseDK();
        $license_notifications_array = $checked->aplInstallLicenseDK($request->getSchemeAndHttpHost(), $email, $code);
        if( $license_notifications_array["notification_case"] == "notification_license_ok" ) 
        {
            return redirect()->back()->withSuccess("LicenseDK is already installed.");
        }
        if( $license_notifications_array["notification_case"] == "notification_already_installed" ) 
        {
            return redirect()->back()->withSuccess("LicenseDK is already installed.");
        }
        return redirect()->back()->withErrors([$license_notifications_array["notification_text"]]);
    }
    public function error_license()
    {
        return view("frontend.pages.error_license");
    }
    public function view($page)
    {
        $page = Page::where("path", $page)->where("view", 1)->where("type", ">", 0)->first();
        if( !$page ) 
        {
            abort(404);
        }
        return view("frontend.pages.view", compact("page"));
    }
    public function points()
    {
        $page = Page::where("path", "points")->first();
        if( !$page ) 
        {
            abort(404);
        }
        return view("frontend.pages.points", compact("page"));
    }
}