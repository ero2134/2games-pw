<?php 
namespace VanguardDK\Games\AdmiralNelsonAM;

use VanguardDK\Game;
use VanguardDK\GameLog;
use VanguardDK\Jackpot;
use VanguardDK\JackpotStat;
use VanguardDK\Lib\LicenseDK;
use VanguardDK\StatGame;
use VanguardDK\Transaction;
use VanguardDK\User;

class SlotSettings
{
    public $playerId = null;
    public $splitScreen = null;
    public $reelStrip1 = null;
    public $reelStrip2 = null;
    public $reelStrip3 = null;
    public $reelStrip4 = null;
    public $reelStrip5 = null;
    public $reelStrip6 = null;
    public $reelStripBonus1 = null;
    public $reelStripBonus2 = null;
    public $reelStripBonus3 = null;
    public $reelStripBonus4 = null;
    public $reelStripBonus5 = null;
    public $reelStripBonus6 = null;
    public $slotId = "";
    public $slotDBId = "";
    public $Line = null;
    public $scaleMode = null;
    public $numFloat = null;
    public $gameLine = null;
    public $Bet = null;
    public $Balance = null;
    public $SymbolGame = null;
    public $GambleType = null;
    public $lastEvent = null;
    public $Jackpots = [];
    public $keyController = null;
    public $slotViewState = null;
    public $hideButtons = null;
    public $slotReelsConfig = null;
    public $slotFreeCount = null;
    public $slotFreeMpl = null;
    public $slotWildMpl = null;
    public $slotExitUrl = null;
    public $slotBonus = null;
    public $slotBonusType = null;
    public $slotScatterType = null;
    public $slotGamble = null;
    public $Paytable = [];
    public $slotSounds = [];
    private $jacks = null;
    private $Bank = null;
    private $Percent = null;
    private $WinLine = null;
    private $WinGamble = null;
    private $Bonus = null;
    public $licenseDK = null;
    public function __construct($sid, $playerId)
    {
        $this->licenseDK = true;
        $checked = new LicenseDK();
        $license_notifications_array = $checked->aplVerifyLicenseDK(null, 0);
        if( $license_notifications_array["notification_case"] != "notification_license_ok" ) 
        {
            $this->licenseDK = false;
        }
        $this->slotId = $sid;
        $this->playerId = $playerId;
        $user = User::find($this->playerId);
        $game = Game::where("name", $this->slotId)->first();
        $this->scaleMode = $game->scaleMode;
        $this->numFloat = $game->numFloat;
        $this->Paytable["SYM_0"] = [0, 0, 10, 100, 1000, 5000];
        $this->Paytable["SYM_1"] = [0, 0, 5, 50, 200, 1000];
        $this->Paytable["SYM_2"] = [0, 0, 5, 25, 100, 500];
        $this->Paytable["SYM_3"] = [0, 0, 5, 15, 75, 250];
        $this->Paytable["SYM_4"] = [0, 0, 0, 10, 40, 150];
        $this->Paytable["SYM_5"] = [0, 0, 0, 10, 40, 150];
        $this->Paytable["SYM_6"] = [0, 0, 0, 10, 40, 150];
        $this->Paytable["SYM_7"] = [0, 0, 0, 5, 20, 100];
        $this->Paytable["SYM_8"] = [0, 0, 0, 10, 0, 0];
        $this->Paytable["SYM_9"] = [0, 0, 2, 5, 20, 100];
        foreach( ["reelStrip1", "reelStrip2", "reelStrip3", "reelStrip4", "reelStrip5", "reelStrip6"] as $reelStrip ) 
        {
            if( $game->gamereel->$reelStrip != "" ) 
            {
                $data = explode(",", $game->gamereel->$reelStrip);
                foreach( $data as &$item ) 
                {
                    $item = str_replace("\"", "", $item);
                    $item = trim($item);
                }
                $this->$reelStrip = $data;
            }
        }
        foreach( ["reelStripBonus1", "reelStripBonus2", "reelStripBonus3", "reelStripBonus4", "reelStripBonus5", "reelStripBonus6"] as $reelStrip ) 
        {
            if( $game->gamereel->$reelStrip != "" ) 
            {
                $data = explode(",", $game->gamereel->$reelStrip);
                foreach( $data as &$item ) 
                {
                    $item = str_replace("\"", "", $item);
                    $item = trim($item);
                }
                $this->$reelStrip = $data;
            }
        }
        $this->keyController = ["13" => "uiButtonSpin,uiButtonSkip", "49" => "uiButtonInfo", "50" => "uiButtonCollect", "51" => "uiButtonExit2", "52" => "uiButtonLinesMinus", "53" => "uiButtonLinesPlus", "54" => "uiButtonBetMinus", "55" => "uiButtonBetPlus", "56" => "uiButtonGamble", "57" => "uiButtonRed", "48" => "uiButtonBlack", "189" => "uiButtonAuto", "187" => "uiButtonSpin"];
        $this->slotReelsConfig = [[425, 142, 3], [669, 142, 3], [913, 142, 3], [1157, 142, 3], [1401, 142, 3]];
        $this->slotBonusType = 1;
        $this->slotScatterType = 0;
        $this->splitScreen = ($game->monitor == 2 ? true : false);
        $this->slotBonus = true;
        $this->slotGamble = true;
        $this->slotFastStop = 1;
        $this->slotExitUrl = "/";
        $this->slotWildMpl = 1;
        $this->GambleType = 1;
        $this->slotFreeCount = 10;
        $this->slotFreeMpl = 1;
        $this->slotViewState = ($game->slotViewState == "" ? "Normal" : $game->slotViewState);
        $this->hideButtons = [];
        $this->jacks = Jackpot::get();
        $this->Line = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        $this->gameLine = explode(",", $game->gameline);
        $this->Bet = explode(",", $game->bet);
        $this->Balance = $user->balance;
        $this->SymbolGame = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        $this->Bank = $game->gamebank;
        $this->Percent = ($user->count_balance == 0 ? 100 : $game->percent);
        $this->WinLine = $game->game_win->winline;
        $this->WinGamble = $game->rezerv;
        $this->Bonus = $game->game_win->winbonus;
        $this->slotDBId = $game->id;
    }
    public function HexFormat($num)
    {
        $str = strlen(dechex($num)) . dechex($num);
        return $str;
    }
    public function FormatReelStrips($pf)
    {
        $_obf_0D2F2A40073D095B2E18351C25282E2433082C29040B22 = "";
        foreach( ["reelStrip" . $pf . "1", "reelStrip" . $pf . "2", "reelStrip" . $pf . "3", "reelStrip" . $pf . "4", "reelStrip" . $pf . "5", "reelStrip" . $pf . "6"] as $reelStrip ) 
        {
            if( $this->$reelStrip != "" ) 
            {
                $data = $this->$reelStrip;
                foreach( $data as &$item ) 
                {
                    $item = str_replace("\"", "", $item);
                    $item = trim($item);
                    $item = dechex($item);
                }
                $_obf_0D3E2A15175C2A34341711171A0B130B0C221F0A212201 = dechex(count($data));
                $_obf_0D2F2A40073D095B2E18351C25282E2433082C29040B22 .= (strlen($_obf_0D3E2A15175C2A34341711171A0B130B0C221F0A212201) . $_obf_0D3E2A15175C2A34341711171A0B130B0C221F0A212201 . implode("", $data));
            }
        }
        return $_obf_0D2F2A40073D095B2E18351C25282E2433082C29040B22;
    }
    public function GetRandomReels()
    {
        $_obf_0D250B033F39152A271D01170F151D170D2E2E2B091011 = rand(0, count($this->reelStrip1) - 1);
        $_obf_0D36090F1523132B1135231430372C19091E1D010A3432 = rand(0, count($this->reelStrip2) - 1);
        $_obf_0D1C1F361C22265B39390A3B112C3805250B1B190B0201 = rand(0, count($this->reelStrip3) - 1);
        $_obf_0D0E3C263B072B21340E0E350E3F33342B5C2F36063601 = rand(0, count($this->reelStrip4) - 1);
        $_obf_0D3E142C1D162A080919240F07110A2A281B1C26302811 = rand(0, count($this->reelStrip5) - 1);
        return $this->HexFormat($_obf_0D250B033F39152A271D01170F151D170D2E2E2B091011) . $this->HexFormat($_obf_0D36090F1523132B1135231430372C19091E1D010A3432) . $this->HexFormat($_obf_0D1C1F361C22265B39390A3B112C3805250B1B190B0201) . $this->HexFormat($_obf_0D0E3C263B072B21340E0E350E3F33342B5C2F36063601) . $this->HexFormat($_obf_0D3E142C1D162A080919240F07110A2A281B1C26302811);
    }
    public function GetHistory()
    {
        $history = GameLog::whereRaw("game_id=? and user_id=? ORDER BY id DESC LIMIT 10", [$this->slotDBId, $this->playerId])->get();
        $this->lastEvent = "NULL";
        foreach( $history as $log ) 
        {
            $_obf_0D2D3F32103D2D033C0E183C231A0C161C0C3917371F32 = json_decode($log->str);
            if( $_obf_0D2D3F32103D2D033C0E183C231A0C161C0C3917371F32->responseEvent != "gambleResult" ) 
            {
                $this->lastEvent = $log->str;
                break;
            }
        }
        if( isset($_obf_0D2D3F32103D2D033C0E183C231A0C161C0C3917371F32) ) 
        {
            return $_obf_0D2D3F32103D2D033C0E183C231A0C161C0C3917371F32;
        }
        else
        {
            return "NULL";
        }
    }
    public function UpdateJackpots($bet)
    {
        $_obf_0D5C4016373B190E2A340E242E3739072D250C5B141332 = [];
        $_obf_0D1C0C3137093F3B391910105B360E3839342F091D1401 = 0;
        for( $i = 0; $i < count($this->jacks); $i++ ) 
        {
            $_obf_0D5C4016373B190E2A340E242E3739072D250C5B141332[$i] = $bet / 100 * $this->jacks[$i]->percent + $this->jacks[$i]->balance;
            if( $this->jacks[$i]->pay_sum < $_obf_0D5C4016373B190E2A340E242E3739072D250C5B141332[$i] ) 
            {
                $_obf_0D1C0C3137093F3B391910105B360E3839342F091D1401 = $this->jacks[$i]->pay_sum;
                $_obf_0D5C4016373B190E2A340E242E3739072D250C5B141332[$i] = $_obf_0D5C4016373B190E2A340E242E3739072D250C5B141332[$i] - $this->jacks[$i]->pay_sum;
                $this->SetBalance($this->jacks[$i]->pay_sum);
                Transaction::create(["user_id" => $this->playerId, "summ" => $this->jacks[$i]->pay_sum, "system" => $this->jacks[$i]->name]);
            }
            $this->jacks[$i]->update(["balance" => $_obf_0D5C4016373B190E2A340E242E3739072D250C5B141332[$i]]);
            $this->jacks[$i] = $this->jacks[$i]->refresh();
            if( $this->jacks[$i]->balance < $this->jacks[$i]->start_balance ) 
            {
                $summ = $this->jacks[$i]->start_balance;
                if( $summ > 0 ) 
                {
                    $this->jacks[$i]->increment("balance", $summ);
                    JackpotStat::create(["system" => "System", "type" => "add", "jackpot_id" => $this->jacks[$i]->id, "summ" => $summ]);
                }
            }
        }
        if( $_obf_0D1C0C3137093F3B391910105B360E3839342F091D1401 > 0 ) 
        {
            $_obf_0D1C0C3137093F3B391910105B360E3839342F091D1401 = sprintf("%01.2f", $_obf_0D1C0C3137093F3B391910105B360E3839342F091D1401);
            $this->Jackpots["jackPay"] = $_obf_0D1C0C3137093F3B391910105B360E3839342F091D1401;
        }
    }
    public function GetBank()
    {
        $game = Game::where("name", $this->slotId)->first();
        $this->Bank = $game->gamebank;
        return $this->Bank;
    }
    public function GetPercent()
    {
        return $this->Percent;
    }
    public function SetBank($sum)
    {
        $game = Game::where("name", $this->slotId)->first();
        $game->gamebank += $sum;
        $game->save();
        return $game;
    }
    public function SetBalance($sum)
    {
        $user = User::find($this->playerId);
        if( $sum < 0 ) 
        {
            $user->increment("wager", $sum);
            $user->increment("count_balance", $sum);
        }
        $user->increment("balance", $sum);
        $user = $user->fresh();
        if( $user->balance == 0 ) 
        {
            $user->update(["wager" => 0, "bonus" => 0]);
        }
        if( $user->wager == 0 ) 
        {
            $user->update(["bonus" => 0]);
        }
        if( $user->wager < 0 ) 
        {
            $user->update(["wager" => 0, "bonus" => 0]);
        }
        if( $user->count_balance < 0 ) 
        {
            $user->update(["count_balance" => 0]);
        }
        return $user;
    }
    public function GetBalance()
    {
        $user = User::find($this->playerId);
        $this->Balance = $user->balance;
        return $this->Balance;
    }
    public function SaveLogReport($spinSymbols, $bet, $lines, $win, $slotState)
    {
        $_obf_0D5B351F36210C01081B2F353E1D08122D170D221E1211 = $this->slotId . " " . $slotState;
        if( $slotState == "freespin" ) 
        {
            $_obf_0D5B351F36210C01081B2F353E1D08122D170D221E1211 = $this->slotId . " FG";
        }
        else if( $slotState == "bet" ) 
        {
            $_obf_0D5B351F36210C01081B2F353E1D08122D170D221E1211 = $this->slotId . "";
        }
        else if( $slotState == "slotGamble" ) 
        {
            $_obf_0D5B351F36210C01081B2F353E1D08122D170D221E1211 = $this->slotId . " DG";
        }
        GameLog::create(["game_id" => $this->slotDBId, "user_id" => $this->playerId, "ip" => $_SERVER["REMOTE_ADDR"], "str" => $spinSymbols]);
        StatGame::create(["user_id" => $this->playerId, "balance" => $this->Balance, "bet" => $bet * $lines, "win" => $win, "game" => $_obf_0D5B351F36210C01081B2F353E1D08122D170D221E1211]);
    }
    public function GetSpinSettings($bet)
    {
        $bonusWin = 0;
        $spinWin = 0;
        $game = Game::where("name", $this->slotId)->first();
        $_obf_0D3005221F3D2F3B172D0C31263C0D125B0E0A3C5B1B11 = $game->garant_win;
        $_obf_0D300405161A2F3B2805292D2A240F2E313B065C1A2F11 = $game->garant_bonus;
        $_obf_0D1E36285B09055C31361F01295B33155C5C1E5C313922 = $game->winbonus;
        $_obf_0D21283D30031604052528090A322219042E3F1E1C2411 = $game->winline;
        $_obf_0D3005221F3D2F3B172D0C31263C0D125B0E0A3C5B1B11++;
        $_obf_0D300405161A2F3B2805292D2A240F2E313B065C1A2F11++;
        $return = ["none", 0];
        if( $_obf_0D1E36285B09055C31361F01295B33155C5C1E5C313922 <= $_obf_0D300405161A2F3B2805292D2A240F2E313B065C1A2F11 ) 
        {
            $bonusWin = 1;
            $_obf_0D300405161A2F3B2805292D2A240F2E313B065C1A2F11 = 0;
            $game->winbonus = $this->getNewSpin($game, 0, 1);
        }
        else if( $_obf_0D21283D30031604052528090A322219042E3F1E1C2411 <= $_obf_0D3005221F3D2F3B172D0C31263C0D125B0E0A3C5B1B11 ) 
        {
            $spinWin = 1;
            $_obf_0D3005221F3D2F3B172D0C31263C0D125B0E0A3C5B1B11 = 0;
            $game->winline = $this->getNewSpin($game, 1, 0);
        }
        $game->garant_win = $_obf_0D3005221F3D2F3B172D0C31263C0D125B0E0A3C5B1B11;
        $game->garant_bonus = $_obf_0D300405161A2F3B2805292D2A240F2E313B065C1A2F11;
        $game->save();
        if( $bonusWin == 1 && $this->slotBonus ) 
        {
            $_obf_0D01280E32371928273B373E34152A2416075B40023801 = $this->GetBank();
            $return = ["bonus", $_obf_0D01280E32371928273B373E34152A2416075B40023801];
        }
        else if( $spinWin == 1 || $bonusWin == 1 && !$this->slotBonus ) 
        {
            $_obf_0D01280E32371928273B373E34152A2416075B40023801 = $this->GetBank();
            $return = ["win", $_obf_0D01280E32371928273B373E34152A2416075B40023801];
        }
        return $return;
    }
    public function getNewSpin($game, $spinWin = 0, $bonusWin = 0)
    {
        if( $spinWin ) 
        {
            $winline = explode(",", $game->game_win->winline);
            $number = rand(0, count($winline) - 1);
            return $winline[$number];
        }
        if( $bonusWin ) 
        {
            $winbonus = explode(",", $game->game_win->winbonus);
            $number = rand(0, count($winbonus) - 1);
            return $winbonus[$number];
        }
    }
    public function GetRandomScatterPos($rp)
    {
        $_obf_0D011A0B3D311B0E3536143F1A2D1D0F2B31172B210F32 = [];
        for( $i = 0; $i < count($rp); $i++ ) 
        {
            if( $rp[$i] == "8" ) 
            {
                if( $i == 0 ) 
                {
                    array_push($_obf_0D011A0B3D311B0E3536143F1A2D1D0F2B31172B210F32, $i);
                    array_push($_obf_0D011A0B3D311B0E3536143F1A2D1D0F2B31172B210F32, $i + 1);
                }
                else if( $i == (count($rp) - 1) ) 
                {
                    array_push($_obf_0D011A0B3D311B0E3536143F1A2D1D0F2B31172B210F32, $i - 1);
                }
                else
                {
                    array_push($_obf_0D011A0B3D311B0E3536143F1A2D1D0F2B31172B210F32, $i);
                    array_push($_obf_0D011A0B3D311B0E3536143F1A2D1D0F2B31172B210F32, $i + 1);
                    array_push($_obf_0D011A0B3D311B0E3536143F1A2D1D0F2B31172B210F32, $i - 1);
                }
            }
        }
        shuffle($_obf_0D011A0B3D311B0E3536143F1A2D1D0F2B31172B210F32);
        return $_obf_0D011A0B3D311B0E3536143F1A2D1D0F2B31172B210F32[0];
    }
    public function GetGambleSettings()
    {
        $spinWin = rand(1, $this->WinGamble);
        return $spinWin;
    }
    public function GetReelStrips($winType, $slotEvent)
    {
        $game = Game::where("name", $this->slotId)->first();
        if( $slotEvent == "freespin" ) 
        {
            foreach( ["reelStrip1", "reelStrip2", "reelStrip3", "reelStrip4", "reelStrip5", "reelStrip6"] as $index => $reelStrip ) 
            {
                if( $game->gamereel->$reelStrip != "" ) 
                {
                    $data = explode(",", $game->gamereel->{"reelStripBonus" . ($index + 1)});
                    foreach( $data as &$item ) 
                    {
                        $item = str_replace("\"", "", $item);
                        $item = trim($item);
                    }
                    $this->$reelStrip = $data;
                }
            }
        }
        if( $winType != "bonus" ) 
        {
            $_obf_0D083211163416252428223413110D5B3B385C192A2932 = [];
            foreach( ["reelStrip1", "reelStrip2", "reelStrip3", "reelStrip4", "reelStrip5", "reelStrip6"] as $index => $reelStrip ) 
            {
                if( is_array($this->$reelStrip) && count($this->$reelStrip) > 0 ) 
                {
                    $_obf_0D083211163416252428223413110D5B3B385C192A2932[$index + 1] = mt_rand(0, count($this->$reelStrip) - 3);
                }
            }
        }
        else
        {
            $_obf_0D3C321E22181A301F1D15321209403513233F380B3811 = [];
            $_obf_0D14220F23223719090F3D3735261C0F36011631073411 = 3;
            $_obf_0D3C321E22181A301F1D15321209403513233F380B3811 = [1, 2, 3, 4, 5];
            for( $i = 0; $i < count($_obf_0D3C321E22181A301F1D15321209403513233F380B3811); $i++ ) 
            {
                if( $i == 0 || $i == 2 || $i == 4 ) 
                {
                    $_obf_0D083211163416252428223413110D5B3B385C192A2932[$_obf_0D3C321E22181A301F1D15321209403513233F380B3811[$i]] = $this->GetRandomScatterPos($this->{"reelStrip" . $_obf_0D3C321E22181A301F1D15321209403513233F380B3811[$i]});
                }
                else
                {
                    $_obf_0D083211163416252428223413110D5B3B385C192A2932[$_obf_0D3C321E22181A301F1D15321209403513233F380B3811[$i]] = rand(0, count($this->{"reelStrip" . $_obf_0D3C321E22181A301F1D15321209403513233F380B3811[$i]}) - 3);
                }
            }
        }
        $reel = ["rp" => []];
        foreach( $_obf_0D083211163416252428223413110D5B3B385C192A2932 as $index => $value ) 
        {
            $key = $this->{"reelStrip" . $index};
            $cnt = count($key);
            $key[-1] = $key[$cnt - 1];
            $key[$cnt] = $key[0];
            $reel["reel" . $index][0] = $key[$value - 1];
            $reel["reel" . $index][1] = $key[$value];
            $reel["reel" . $index][2] = $key[$value + 1];
            $reel["reel" . $index][3] = "";
            $reel["rp"][] = $value;
        }
        return $reel;
    }
}
