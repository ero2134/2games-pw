<?php 
namespace VanguardDK\Http\Controllers\Web\Backend;

use Illuminate\Http\Request;
use VanguardDK\Events\Settings\Updated;
use VanguardDK\Http\Controllers\Controller;

class SettingsController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
        $this->middleware("permission:access.admin.panel");
    }
    public function general()
    {
        return view("backend.settings.general");
    }
    public function bots()
    {
        return view("backend.settings.bots");
    }
    public function auth()
    {
        return view("backend.settings.auth");
    }
    public function update(Request $request)
    {
        $this->updateSettings($request->except("_token"));
        return back()->withSuccess(trans("app.settings_updated"));
    }
    private function updateSettings($input)
    {
        foreach( $input as $key => $value ) 
        {
            \Settings::set($key, $value);
        }
        \Settings::save();
        event(new Updated());
    }
    public function enableTwoFactor()
    {
        $this->updateSettings(["2fa.enabled" => true]);
        return back()->withSuccess(trans("app.2fa_enabled"));
    }
    public function disableTwoFactor()
    {
        $this->updateSettings(["2fa.enabled" => false]);
        return back()->withSuccess(trans("app.2fa_disabled"));
    }
    public function enableCaptcha()
    {
        $this->updateSettings(["registration.captcha.enabled" => true]);
        return back()->withSuccess(trans("app.recaptcha_enabled"));
    }
    public function disableCaptcha()
    {
        $this->updateSettings(["registration.captcha.enabled" => false]);
        return back()->withSuccess(trans("app.recaptcha_disabled"));
    }
    public function notifications()
    {
        return view("backend.settings.notifications");
    }
}