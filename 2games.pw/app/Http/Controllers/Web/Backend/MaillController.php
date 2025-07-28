<?php
namespace VanguardDK\Http\Controllers\Web\Backend;

use Illuminate\Http\Request;

/**
 * Class PaymentSystemController
 * @package VanguardDK\Http\Controllers\Web\Backend
 */
class MaillController
{
    public function index()
    {
		$System = [
			'MAIL_DRIVER' 		=> env('MAIL_DRIVER'),
			'MAIL_HOST' 		=> env('MAIL_HOST'),
			'MAIL_PORT' 		=> env('MAIL_PORT'),
			'MAIL_USERNAME' 	=> env('MAIL_USERNAME'),
			'MAIL_PASSWORD' 	=> env('MAIL_PASSWORD'),
			'MAIL_ENCRYPTION' 	=> env('MAIL_ENCRYPTION'),
			'MAIL_FROM_NAME' 	=> env('MAIL_FROM_NAME'),
			'MAIL_FROM_ADDRESS' => env('MAIL_FROM_ADDRESS'),
		];
        return view('backend.maill.maill', compact('System'));
    } 
    public function update_mill(Request $request)
    {
        $request->validate([
            'config.MAIL_DRIVER' => 'required|string',
            'config.MAIL_HOST' => 'required|string',
            'config.MAIL_PORT' => 'required|string',
			'config.MAIL_USERNAME' => 'required|string',
			'config.MAIL_PASSWORD' => 'required|string',
            'config.MAIL_ENCRYPTION' => 'required|string',
            'config.MAIL_FROM_NAME' => 'required|string',
			'config.MAIL_FROM_ADDRESS' => 'required|string',
        ]);

		$config = $_POST['config'];
		foreach($config as $key => $value){
			$path = base_path('.env');
			if(is_bool(env($key))){
				$old = env($key)? 'true' : 'false';
			}
			elseif(env($key)===null){
				$old = 'null';
			}
			else{
				$old = env($key);
			}
			if (file_exists($path)) {
				file_put_contents($path, str_replace(
					"$key=".$old, "$key=".$value, file_get_contents($path)
				));
			}
		}
        return response()->json(array('success' => 'success'), 200);
    }	
}
