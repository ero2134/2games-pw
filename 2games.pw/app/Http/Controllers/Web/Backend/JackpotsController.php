<?php 
namespace VanguardDK\Http\Controllers\Web\Backend;

use Illuminate\Http\Request;
use VanguardDK\Http\Controllers\Controller;
use VanguardDK\Jackpot;
use VanguardDK\JackpotStat;

class JackpotsController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
        $this->middleware("permission:access.admin.panel");
        $this->middleware("permission:jackpots.manage");
    }
    public function index(Request $request)
    {
        $jackpots = Jackpot::get();
        return view("backend.jackpots.list", compact("jackpots"));
    }
    public function create()
    {
        return view("backend.jackpots.add");
    }
    public function store(Request $request)
    {
        $data = $request->all();
        foreach( $data as &$item ) 
        {
            $item = str_replace(",", ".", $item);
        }
        Jackpot::create($data);
        return redirect()->route("backend.jackpot.list")->withSuccess(trans("app.jackpot_created"));
    }
    public function edit($jackpot)
    {
        $jackpot = Jackpot::where("id", $jackpot)->first();
        $jackpot_stat = $jackpot->statistics()->orderBy("id", "DESC")->limit(8)->get();
        return view("backend.jackpots.edit", compact("jackpot", "jackpot_stat"));
    }
    public function update(Request $request, $jackpot)
    {
        $data = $request->only(["name", "balance", "pay_sum", "percent", "start_balance"]);
        foreach( $data as &$item ) 
        {
            $item = str_replace(",", ".", $item);
        }
        Jackpot::where("id", $jackpot)->update($data);
        return redirect()->route("backend.jackpot.list")->withSuccess(trans("app.jackpot_updated"));
    }
    public function delete($jackpot)
    {
        $jackpot = Jackpot::where("id", $jackpot)->delete();
        return redirect()->route("backend.jackpot.list")->withSuccess(trans("app.jackpot_deleted"));
    }
    public function balance(Request $request)
    {
        $data = $request->all();
        if( !array_get($data, "type") ) 
        {
            $data["type"] = "add";
        }
        $sum = ($request->type == "out" ? -1 * $request->summ : $request->summ);
        $jackpot = Jackpot::find($request->jackpot_id);
        $balance = $jackpot->balance + $sum;
        $payOut = $request->summ;
        if( $request->type == "out" && $balance < 0 ) 
        {
            $payOut = -1 * $jackpot->balance;
        }
        if( $payOut == 0 ) 
        {
            return redirect()->back();
        }
        $transaction = new JackpotStat();
        $transaction->user_id = Authy::id();
        $transaction->jackpot_id = $request->jackpot_id;
        $transaction->type = $request->type;
        $transaction->summ = $payOut;
        $transaction->save();
        $balance = ($balance < 0 ? 0 : $balance);
        Jackpot::find($request->jackpot_id)->update(["balance" => $balance]);
        return redirect()->back()->withSuccess(trans("app.balance_updated"));
    }
}