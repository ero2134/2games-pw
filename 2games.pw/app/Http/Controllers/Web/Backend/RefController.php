<?php 
namespace VanguardDK\Http\Controllers\Web\Backend;

use Illuminate\Http\Request;
use VanguardDK\Http\Controllers\Controller;
use VanguardDK\Point;

class RefController extends Controller
{
    public function ref()
    {
        return view("backend.refstatus.list");
    }
}