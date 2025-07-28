<?php
namespace VanguardDK\Http\Controllers\Web\Backend;

use Illuminate\Http\Request;
use VanguardDK\Model\PaymentSystem;

/**
 * Class PaymentSystemController
 * @package VanguardDK\Http\Controllers\Web\Backend
 */
class PaymentSystemController
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        /** @var PaymentSystem $paymentSystem */
        $paymentSystem = PaymentSystem::where('type', PaymentSystem::TYPE_FREE_KASSA)->first();
        if ($paymentSystem === null) {
            $paymentSystem = new PaymentSystem();
            $paymentSystem->type = PaymentSystem::TYPE_FREE_KASSA;
            $paymentSystem->min_amount = 10;
            $paymentSystem->max_amount = 1000;
			$paymentSystem_enot->currency = 'USD';
			$paymentSystem->lang = 'en';
            $paymentSystem->save();
        }
		$paymentSystem_enot = PaymentSystem::where('type', PaymentSystem::TYPE_FREE_ENOT)->first();
        if ($paymentSystem_enot === null) {
            $paymentSystem_enot = new PaymentSystem();
            $paymentSystem_enot->type = PaymentSystem::TYPE_FREE_ENOT;
            $paymentSystem_enot->min_amount = 10;
            $paymentSystem_enot->max_amount = 1000;
			$paymentSystem_enot->lang = 'en';
			$paymentSystem_enot->currency = 'USD';
            $paymentSystem_enot->save();
        }
		$paymentSystem_resul = PaymentSystem::where('type', PaymentSystem::TYPE_FREE_IASTRIX)->first();
		
		$piastrix = PaymentSystem::where('type', PaymentSystem::TYPE_FREE_IASTRIX)->first();
        if ($piastrix === null) {
            $piastrix = new PaymentSystem();
            $piastrix->type = PaymentSystem::TYPE_FREE_IASTRIX;
            $piastrix->min_amount = 10;
            $piastrix->max_amount = 1000;
			$piastrix->lang = 'en';
			$piastrix->currency = 'USD';
            $piastrix->save();
        }

        return view('backend.payment_system.free_kassa', compact('paymentSystem','paymentSystem_enot','paymentSystem_resul','piastrix'));
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update_frii(Request $request)
    {
        $request->validate([
            'config.merchant_id' => 'required|int',
            'config.secret_key_1' => 'required|string',
            'config.secret_key_2' => 'required|string',
			'lang' => 'required|string',
			'currency' => 'required|string',
            'min_amount' => 'required|int|min:1',
            'max_amount' => 'required|int|min:1',
        ]);

        /** @var PaymentSystem $paymentSystem */
        $paymentSystem = PaymentSystem::where('type', PaymentSystem::TYPE_FREE_KASSA)->first();
        if ($paymentSystem === null) {
            $paymentSystem = new PaymentSystem();
            $paymentSystem->type = PaymentSystem::TYPE_FREE_KASSA;
        }

        $config = $_POST['config'];
		$paymentSystem->merchant_id = $config['merchant_id'];
		$paymentSystem->lang = $_POST['lang'];
		$paymentSystem->currency = $_POST['currency'];
		$paymentSystem->secret_key_1 = $config['secret_key_1'];
		$paymentSystem->secret_key_2 = $config['secret_key_2'];
		$paymentSystem->min_amount = $_POST['min_amount'];
		$paymentSystem->max_amount = $_POST['max_amount'];
		
		$paymentSystem->save();

        return response()->json(array('success' => 'success'), 200);
    }	 
    public function update_piastrix(Request $request)
    {
        $request->validate([
            'config.merchant_id' => 'required|string',
            'config.secret_key_1' => 'required|string',
            'config.min_amount' => 'required|string|min:1',
            'config.max_amount' => 'required|string|min:1',	
        ]);
		  $paymentSystem = PaymentSystem::where('type', PaymentSystem::TYPE_FREE_IASTRIX)->first();
        if ($paymentSystem === null) {
            $paymentSystem = new PaymentSystem();
            $paymentSystem->type = PaymentSystem::TYPE_FREE_IASTRIX;
        }
        $config = $_POST['config'];
		$paymentSystem->merchant_id = $config['merchant_id'];
		$paymentSystem->secret_key_1 = $config['secret_key_1'];
		$paymentSystem->min_amount = $config['min_amount'];
		$paymentSystem->max_amount = $config['max_amount'];
		
		$paymentSystem->save();

		
        return response()->json(array('success' => 'success'), 200);
    }	
    public function update_resul(Request $request)
    {
        $request->validate([
            'min_amount' => 'required|string|min:1',
            'max_amount' => 'required|string|min:1',
        ]);

        /** @var PaymentSystem $paymentSystem */
        $paymentSystem = PaymentSystem::where('type', PaymentSystem::TYPE_FREE_RESUL)->first();
        if ($paymentSystem === null) {
            $paymentSystem = new PaymentSystem();
            $paymentSystem->type = PaymentSystem::TYPE_FREE_RESUL;
        }

		//$paymentSystem->min_amount = $_POST['min_amount'];
		//$paymentSystem->max_amount = $_POST['min_amount'];
		
		$paymentSystem->save();

		
        $paymentSystem->fill($request->all())->save();
	
        return response()->json(array('success' => 'success'), 200);
    }	
    public function update_enot(Request $request)
    {
        $request->validate([
            'config.merchant_id' => 'required|string',
            'config.secret_key_1' => 'required|string',
            'config.secret_key_2' => 'required|string',
			#'config.currency_id' => 'required|string',
			'lang' => 'required|string',
			'currency' => 'required|string',
            'min_amount' => 'required|string|min:1',
            'max_amount' => 'required|string|min:1',
        ]);

        /** @var PaymentSystem $paymentSystem */
        $paymentSystem = PaymentSystem::where('type', PaymentSystem::TYPE_FREE_ENOT)->first();
        if ($paymentSystem === null) {
            $paymentSystem = new PaymentSystem();
            $paymentSystem->type = PaymentSystem::TYPE_FREE_ENOT;
        }
		$config = $_POST['config'];
		$paymentSystem->merchant_id = $config['merchant_id'];
		$paymentSystem->secret_key_1 = $config['secret_key_1'];
		$paymentSystem->secret_key_2 = $config['secret_key_2'];
		//$paymentSystem->currency_id = $config['currency_id'];
		$paymentSystem->min_amount = $_POST['min_amount'];
		$paymentSystem->currency = $_POST['currency'];
		$paymentSystem->lang = $_POST['lang'];
		$paymentSystem->max_amount = $_POST['max_amount'];
		
		$paymentSystem->save();

		
        //$paymentSystem->fill($request->all())->save();
	
        return response()->json(array('success' => 'success'), 200);
    }
    public function update_jwt(Request $request)
    {
        $request->validate([
            'config.COIN_PAYMENT_PUBLIC_KEY'         => 'required|string',
			'config.COIN_PAYMENT_PRIVATE_KEY'        => 'required|string',
            'config.COIN_PAYMENT_MARCHANT_ID'        => 'required|string',
            'config.COIN_PAYMENT_IPN_SECRET'  		 => 'required|string',
			'config.COIN_PAYMENT_IPN_DEBIG_EMAIL'	 => 'required|string',
            'config.COIN_PAYMENT_ADD_MIN'            => 'required|string|min:1',
            'config.COIN_PAYMENT_ADD_MAX' 			 => 'required|string|min:1',
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
