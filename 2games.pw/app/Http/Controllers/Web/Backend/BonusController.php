<?php
namespace VanguardDK\Http\Controllers\Web\Backend;

use Illuminate\Http\Request;
use VanguardDK\Model\PaymentSystem;

/**
 * Class PaymentSystemController
 * @package VanguardDK\Http\Controllers\Web\Backend
 */
class BonusController{
    public function index(){
		
        return view('backend.bonus.index');
    }
    public function reg(){
		
        return view('backend.bonus.reg');
    }
	public function dep(){
        return view('backend.bonus.dep');
    }
	public function nondep(){
        return view('backend.bonus.nondep');
    }
	public function gr_id(){
        return view('backend.bonus.gr_id');
    }	
}
