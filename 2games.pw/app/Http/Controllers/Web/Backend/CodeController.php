<?php
namespace VanguardDK\Http\Controllers\Web\Backend;



use Illuminate\Http\Request;

/**
 * Class CodeSystemController
 * @package VanguardDK\Http\Controllers\Web\Backend
 */
 
class CodeController
{
    public function index()
    {
        return view('backend.code.code');
    }
}
