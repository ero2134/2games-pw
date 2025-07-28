<?php 
namespace VanguardDK\Games\AdmiralNelsonAM;

use VanguardDK\Lib\LicenseDK;

class Server
{
    public function get($request, $game)
    {
        $checked = new LicenseDK();
        $license_notifications_array = $checked->aplVerifyLicenseDK(null, 0);
        if( $license_notifications_array["notification_case"] != "notification_license_ok" ) 
        {
            $response = "{\"responseEvent\":\"error\",\"responseType\":\"error\",\"serverResponse\":\"Error LicenseDK\"}";
            exit( $response );
        }
		
        $userId = \Auth::id();
		
		$drops = 100;
        $response = "";
        $lines = 10;
        $count_set = 10;
		

        $slotSettings = new SlotSettings($game, $userId);
        $pacets = json_decode(trim(file_get_contents("php://input")), true);
		
        $drop_sprint = sprintf("%01.2f", $slotSettings->GetBalance()) * $drops;
        $spehel = dechex($lines + 1);
        if( strlen($spehel) <= 1 ) 
        {
            $spehel = "0" . $spehel;
        }
        $redrons = dechex($lines);
        if( strlen($redrons) <= 1 ) 
        {
            $redrons = "0" . $redrons;
        }
        $donsfer = "";
        for( $i = 1; $i <= $lines; $i++ ) 
        {
            $donsfer .= "10";
        }
		
        $gameData = [];
		
        $expire_array = explode(",", $pacets["gameData"]);
        $gameData["slotEvent"] = $expire_array[0];
        if( $gameData["slotEvent"] == "A/u251" || $gameData["slotEvent"] == "A/u256" ) 
        {
            if( $gameData["slotEvent"] == "A/u256" && session($slotSettings->slotId . "FreeGames") <= session($slotSettings->slotId . "currentFreeGames") && session($slotSettings->slotId . "currentFreeGames") > 0 ) 
            {
                $response = "{\"responseEvent\":\"error\",\"responseType\":\"" . $gameData["slotEvent"] . "\",\"serverResponse\":\"invalid bonus state\"}";
                return $response;
            }
            if( $slotSettings->GetBalance() < ($expire_array[1] * $slotSettings->Bet[$expire_array[2]]) ) 
            {
                $response = "{\"responseEvent\":\"error\",\"responseType\":\"" . $gameData["slotEvent"] . "\",\"serverResponse\":\"invalid balance\"}";
                return $response;
            }
            if( !isset($slotSettings->Bet[$expire_array[2]]) || $expire_array[1] <= 0 ) 
            {
                $response = "{\"responseEvent\":\"error\",\"responseType\":\"" . $gameData["slotEvent"] . "\",\"serverResponse\":\"invalid bet/lines\"}";
                return $response;
            }
        }
        if( $gameData["slotEvent"] == "A/u257" && session($slotSettings->slotId . "DoubleWin") <= 0 ) 
        {
            $response = "{\"responseEvent\":\"error\",\"responseType\":\"" . $gameData["slotEvent"] . "\",\"serverResponse\":\"invalid gamble state\"}";
            exit( $response );
        }
        if( $gameData["slotEvent"] == "A/u256" ) 
        {
            $pacets["spinType"] = "free";
            $gameData["slotEvent"] = "A/u251";
        }
        else if( $gameData["slotEvent"] == "A/u251" ) 
        {
            $pacets["spinType"] = "regular";
        }
        switch( $gameData["slotEvent"] ) 
        {
            case "A/u350":
                $balance = $slotSettings->GetBalance();
                $response = "UPDATE#" . ($balance * $drops);
                break;
            case "A/u25":
                $slot_bet = $slotSettings->Bet;
                $dufrist = "";
                $kerting = "";
                $fisret = "";
                for( $b = 0; $b < count($slot_bet); $b++ ) 
                {
                    $slot_bet[$b] = (double)$slot_bet[$b] * $drops;
                    $dufrist .= (dechex(strlen(dechex($slot_bet[$b]))) . dechex($slot_bet[$b]));
                }
                $kerting .= (strlen(dechex($slot_bet[0])) . dechex($slot_bet[0]));
                $fisret .= (strlen(dechex($slot_bet[count($slot_bet) - 1] * $lines)) . dechex($slot_bet[count($slot_bet) - 1] * $lines));
                $_obf_0D283537162D2B03291F36360805173127172C3F013032 = count($slot_bet);
                $_obf_0D283537162D2B03291F36360805173127172C3F013032 = dechex($_obf_0D283537162D2B03291F36360805173127172C3F013032);
                if( strlen($_obf_0D283537162D2B03291F36360805173127172C3F013032) <= 1 ) 
                {
                    $_obf_0D283537162D2B03291F36360805173127172C3F013032 = "0" . $_obf_0D283537162D2B03291F36360805173127172C3F013032;
                }
                $_obf_0D262A14101602240D0A0E0A391C0425353340221B1222 = $slotSettings->HexFormat(sprintf("%01.2f", $slotSettings->GetBalance()) * $drops);
                $slotState = "4";
                $lastEvent = $slotSettings->GetHistory();
                if( $lastEvent != "NULL" ) 
                {
                    $reels = $lastEvent->serverResponse->reelsSymbols;
                    $_obf_0D26221C2F2133353E3F28091527314014402F295B1A22 = $slotSettings->HexFormat($reels->rp[0]) . $slotSettings->HexFormat($reels->rp[1]) . $slotSettings->HexFormat($reels->rp[2]) . $slotSettings->HexFormat($reels->rp[3]) . $slotSettings->HexFormat($reels->rp[4]);
                    $_obf_0D115C28031C102C3E055C022730272533402706300C01 = dechex($lastEvent->serverResponse->slotBet);
                    if( strlen($_obf_0D115C28031C102C3E055C022730272533402706300C01) <= 1 ) 
                    {
                        $_obf_0D115C28031C102C3E055C022730272533402706300C01 = "0" . $_obf_0D115C28031C102C3E055C022730272533402706300C01;
                    }
                    $_obf_0D315C2E013912100C010B0D07081C092B1B12101A3622 = dechex($lastEvent->serverResponse->slotLines);
                    if( strlen($_obf_0D315C2E013912100C010B0D07081C092B1B12101A3622) <= 1 ) 
                    {
                        $_obf_0D315C2E013912100C010B0D07081C092B1B12101A3622 = "0" . $_obf_0D315C2E013912100C010B0D07081C092B1B12101A3622;
                    }
                    $request->session()->put("AdmiralNelsonAMLines", $_obf_0D315C2E013912100C010B0D07081C092B1B12101A3622);
                    $_obf_0D0A275B0A020A3227272E3136163C3E211F11131D1122 = "11";
                    $request->session()->put("AdmiralNelsonAMBonusWin", $lastEvent->serverResponse->bonusWin);
                    $request->session()->put("AdmiralNelsonAMFreeGames", $lastEvent->serverResponse->totalFreeGames);
                    $request->session()->put("AdmiralNelsonAMCurrentFreeGame", $lastEvent->serverResponse->currentFreeGames);
                    $request->session()->put("AdmiralNelsonAMTotalWin", 0);
                    $request->session()->put("AdmiralNelsonAMFreeBalance", 0);
                    $request->session()->put("AdmiralNelsonAMFreeStartWin", 0);
                    $_obf_0D13402A231430331D291C020A391E3F3110383E220211 = dechex(session("AdmiralNelsonAMFreeGames"));
                    $_obf_0D372B301B04370B040D2B363D0517100D5B031F221D22 = dechex(session("AdmiralNelsonAMFreeGames") - session("AdmiralNelsonAMCurrentFreeGame"));
                    $_obf_0D14273C35190E05303F0D13341D253E033F1B36060301 = strlen($_obf_0D13402A231430331D291C020A391E3F3110383E220211) . $_obf_0D13402A231430331D291C020A391E3F3110383E220211 . strlen($_obf_0D372B301B04370B040D2B363D0517100D5B031F221D22) . $_obf_0D372B301B04370B040D2B363D0517100D5B031F221D22;
                    $_obf_0D1C5B211D39283F081C1C2813092E0D2C3B2818120532 = $slotSettings->HexFormat(session("AdmiralNelsonAMBonusWin") * $drops);
                    if( session("AdmiralNelsonAMCurrentFreeGame") < session("AdmiralNelsonAMFreeGames") && session("AdmiralNelsonAMFreeGames") > 0 ) 
                    {
                        $slotState = "6";
                        if( session("" . $slotSettings->slotId . "CurrentFreeGame") == 0 ) 
                        {
                            $slotState = "5";
                        }
                    }
                }
                else
                {
                    $request->session()->put("AdmiralNelsonAMLines", $redrons);
                    $slotState = "4";
                    $_obf_0D26221C2F2133353E3F28091527314014402F295B1A22 = $slotSettings->GetRandomReels();
                    $_obf_0D115C28031C102C3E055C022730272533402706300C01 = "00";
                    $_obf_0D0A275B0A020A3227272E3136163C3E211F11131D1122 = "11";
                    $_obf_0D14273C35190E05303F0D13341D253E033F1B36060301 = "1010";
                    $_obf_0D1C5B211D39283F081C1C2813092E0D2C3B2818120532 = "10";
                }
                $response = "05" . $slotSettings->FormatReelStrips("") . "5" . $slotSettings->FormatReelStrips("Bonus") . "0" . $slotState . "0" . $_obf_0D26221C2F2133353E3F28091527314014402F295B1A22 . "10" . $_obf_0D262A14101602240D0A0E0A391C0425353340221B1222 . $_obf_0D1C5B211D39283F081C1C2813092E0D2C3B2818120532 . $_obf_0D115C28031C102C3E055C022730272533402706300C01 . $kerting . $fisret . $redrons . $_obf_0D14273C35190E05303F0D13341D253E033F1B36060301 . "1010101011" . $redrons . $redrons . "0a1000" . $_obf_0D26221C2F2133353E3F28091527314014402F295B1A22 . "0000000000000000" . $_obf_0D283537162D2B03291F36360805173127172C3F013032 . $dufrist . "3310101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010#00101010|0";
                break;
            case "A/u250":
                $redrons = session("AdmiralNelsonAMLines");
                $_obf_0D262A14101602240D0A0E0A391C0425353340221B1222 = $slotSettings->HexFormat(sprintf("%01.2f", $slotSettings->GetBalance()) * $drops);
                $lastEvent = $slotSettings->GetHistory();
                if( $lastEvent != "NULL" ) 
                {
                    $reels = $lastEvent->serverResponse->reelsSymbols;
                    $_obf_0D26221C2F2133353E3F28091527314014402F295B1A22 = $slotSettings->HexFormat($reels->rp[0]) . $slotSettings->HexFormat($reels->rp[1]) . $slotSettings->HexFormat($reels->rp[2]) . $slotSettings->HexFormat($reels->rp[3]) . $slotSettings->HexFormat($reels->rp[4]);
                }
                else
                {
                    $_obf_0D26221C2F2133353E3F28091527314014402F295B1A22 = $slotSettings->GetRandomReels();
                }
                $response = "100010" . $_obf_0D262A14101602240D0A0E0A391C0425353340221B1222 . "10" . $_obf_0D26221C2F2133353E3F28091527314014402F295B1A22 . "00" . $redrons . "10101010101010101010100b101010101010101010101014311d0c18190208#101010";
                break;
            case "A/u251":
                if( $pacets["spinType"] == "regular" ) 
                {
                    $umid = "0";
                    $pacets["slotEvent"] = "bet";
                    $bonusMpl = 1;
                    $request->session()->put("AdmiralNelsonAMBonusWin", 0);
                    $request->session()->put("AdmiralNelsonAMFreeGames", 0);
                    $request->session()->put("AdmiralNelsonAMCurrentFreeGame", 0);
                    $request->session()->put("AdmiralNelsonAMTotalWin", 0);
                    $request->session()->put("AdmiralNelsonAMFreeBalance", 0);
                    $request->session()->put("AdmiralNelsonAMFreeStartWin", 0);
                }
                else if( $pacets["spinType"] == "free" ) 
                {
                    $umid = "0";
                    $pacets["slotEvent"] = "freespin";
                    $request->session()->put("AdmiralNelsonAMCurrentFreeGame", session("AdmiralNelsonAMCurrentFreeGame") + 1);
                    $bonusMpl = $slotSettings->slotFreeMpl;
                }
                $linesId[0] = [2, 2, 2, 2, 2];
                $linesId[1] = [1, 1, 1, 1, 1];
                $linesId[2] = [3, 3, 3, 3, 3];
                $linesId[3] = [1, 2, 3, 2, 1];
                $linesId[4] = [3, 2, 1, 2, 3];
                $linesId[5] = [1, 1, 2, 1, 1];
                $linesId[6] = [3, 3, 2, 3, 3];
                $linesId[7] = [2, 1, 1, 1, 2];
                $linesId[8] = [2, 3, 3, 3, 2];
                $linesId[9] = [1, 2, 2, 2, 1];
                $_obf_0D262A14101602240D0A0E0A391C0425353340221B1222 = $slotSettings->HexFormat(sprintf("%01.2f", $slotSettings->GetBalance()) * $drops);
                $lines = $expire_array[1];
                $betLine = $slotSettings->Bet[$expire_array[2]];
                $_obf_0D020F111F15351D165B1416102E1525302A2F3F210232 = $expire_array[2];
                $pacets["bet"] = $betLine * $lines;
                if( $pacets["slotEvent"] != "freespin" ) 
                {
                    $slotSettings->SetBalance(-1 * $pacets["bet"]);
                    $_obf_0D0E3C14150C2815351E0C385C3B1C2A2A2A29282D0611 = $pacets["bet"] / 100 * $slotSettings->GetPercent();
                    $slotSettings->SetBank($_obf_0D0E3C14150C2815351E0C385C3B1C2A2A2A29282D0611);
                    $slotSettings->UpdateJackpots($pacets["bet"]);
                    $_obf_0D262A14101602240D0A0E0A391C0425353340221B1222 = $slotSettings->HexFormat(sprintf("%01.2f", $slotSettings->GetBalance()) * $drops);
                }
                $_obf_0D2C2C263D403F5C16290A221B1531061A2A400B2D3111 = $slotSettings->GetSpinSettings($pacets["bet"]);
                $winType = $_obf_0D2C2C263D403F5C16290A221B1531061A2A400B2D3111[0];
                $_obf_0D360A1A342F102A2C2E0F0F22022D150D020F06321F22 = $_obf_0D2C2C263D403F5C16290A221B1531061A2A400B2D3111[1];
                for( $i = 0; $i <= 2000; $i++ ) 
                {
                    $totalWin = 0;
                    $lineWins = [];
                    $cWins = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    $wild = ["0"];
                    $scatter = "9";
                    $_obf_0D02141D21233725192C222C3918251D2532112A123332 = "8";
                    if( $pacets["slotEvent"] == "freespin" ) 
                    {
                        $wild = ["0", "8"];
                    }
                    $reels = $slotSettings->GetReelStrips($winType, $pacets["slotEvent"]);
                    for( $k = 0; $k < $lines; $k++ ) 
                    {
                        $_obf_0D191E0104341E041F35232A05013119105B0813145C01 = "";
                        for( $j = 0; $j < count($slotSettings->SymbolGame); $j++ ) 
                        {
                            $_obf_0D30261904292D080B151C2737160F3233192735083E22 = $slotSettings->SymbolGame[$j];
                            if( $_obf_0D30261904292D080B151C2737160F3233192735083E22 == $scatter || $_obf_0D30261904292D080B151C2737160F3233192735083E22 == $_obf_0D02141D21233725192C222C3918251D2532112A123332 || !isset($slotSettings->Paytable["SYM_" . $_obf_0D30261904292D080B151C2737160F3233192735083E22]) ) 
                            {
                            }
                            else
                            {
                                $s = [];
                                $s[0] = $reels["reel1"][$linesId[$k][0] - 1];
                                $s[1] = $reels["reel2"][$linesId[$k][1] - 1];
                                $s[2] = $reels["reel3"][$linesId[$k][2] - 1];
                                $s[3] = $reels["reel4"][$linesId[$k][3] - 1];
                                $s[4] = $reels["reel5"][$linesId[$k][4] - 1];
                                if( $s[0] == $_obf_0D30261904292D080B151C2737160F3233192735083E22 || in_array($s[0], $wild) ) 
                                {
                                    $mpl = 1;
                                    $_obf_0D1D0B0B19370807320F3F33260A143313142D14063122 = $slotSettings->Paytable["SYM_" . $_obf_0D30261904292D080B151C2737160F3233192735083E22][1] * $betLine * $mpl * $bonusMpl;
                                    if( $cWins[$k] < $_obf_0D1D0B0B19370807320F3F33260A143313142D14063122 ) 
                                    {
                                        $cWins[$k] = $_obf_0D1D0B0B19370807320F3F33260A143313142D14063122;
                                        $_obf_0D191E0104341E041F35232A05013119105B0813145C01 = "{\"Count\":1,\"Line\":" . $k . ",\"Win\":" . $cWins[$k] . ",\"stepWin\":" . ($cWins[$k] + $totalWin + session("AdmiralNelsonAMBonusWin")) . ",\"winReel1\":[" . ($linesId[$k][0] - 1) . ",\"" . $s[0] . "\"],\"winReel2\":[\"none\",\"none\"],\"winReel3\":[\"none\",\"none\"],\"winReel4\":[\"none\",\"none\"],\"winReel5\":[\"none\",\"none\"]}";
                                    }
                                }
                                if( ($s[0] == $_obf_0D30261904292D080B151C2737160F3233192735083E22 || in_array($s[0], $wild)) && ($s[1] == $_obf_0D30261904292D080B151C2737160F3233192735083E22 || in_array($s[1], $wild)) ) 
                                {
                                    $mpl = 1;
                                    if( in_array($s[0], $wild) && in_array($s[1], $wild) ) 
                                    {
                                        $mpl = 1;
                                    }
                                    else if( in_array($s[0], $wild) || in_array($s[1], $wild) ) 
                                    {
                                        $mpl = $slotSettings->slotWildMpl;
                                    }
                                    $_obf_0D1D0B0B19370807320F3F33260A143313142D14063122 = $slotSettings->Paytable["SYM_" . $_obf_0D30261904292D080B151C2737160F3233192735083E22][2] * $betLine * $mpl * $bonusMpl;
                                    if( $cWins[$k] < $_obf_0D1D0B0B19370807320F3F33260A143313142D14063122 ) 
                                    {
                                        $cWins[$k] = $_obf_0D1D0B0B19370807320F3F33260A143313142D14063122;
                                        $_obf_0D191E0104341E041F35232A05013119105B0813145C01 = "{\"Count\":2,\"Line\":" . $k . ",\"Win\":" . $cWins[$k] . ",\"stepWin\":" . ($cWins[$k] + $totalWin + session("AdmiralNelsonAMBonusWin")) . ",\"winReel1\":[" . ($linesId[$k][0] - 1) . ",\"" . $s[0] . "\"],\"winReel2\":[" . ($linesId[$k][1] - 1) . ",\"" . $s[1] . "\"],\"winReel3\":[\"none\",\"none\"],\"winReel4\":[\"none\",\"none\"],\"winReel5\":[\"none\",\"none\"]}";
                                    }
                                }
                                if( ($s[0] == $_obf_0D30261904292D080B151C2737160F3233192735083E22 || in_array($s[0], $wild)) && ($s[1] == $_obf_0D30261904292D080B151C2737160F3233192735083E22 || in_array($s[1], $wild)) && ($s[2] == $_obf_0D30261904292D080B151C2737160F3233192735083E22 || in_array($s[2], $wild)) ) 
                                {
                                    $mpl = 1;
                                    if( in_array($s[0], $wild) && in_array($s[1], $wild) && in_array($s[2], $wild) ) 
                                    {
                                        $mpl = 1;
                                    }
                                    else if( in_array($s[0], $wild) || in_array($s[1], $wild) || in_array($s[2], $wild) ) 
                                    {
                                        $mpl = $slotSettings->slotWildMpl;
                                    }
                                    $_obf_0D1D0B0B19370807320F3F33260A143313142D14063122 = $slotSettings->Paytable["SYM_" . $_obf_0D30261904292D080B151C2737160F3233192735083E22][3] * $betLine * $mpl * $bonusMpl;
                                    if( $cWins[$k] < $_obf_0D1D0B0B19370807320F3F33260A143313142D14063122 ) 
                                    {
                                        $cWins[$k] = $_obf_0D1D0B0B19370807320F3F33260A143313142D14063122;
                                        $_obf_0D191E0104341E041F35232A05013119105B0813145C01 = "{\"Count\":3,\"Line\":" . $k . ",\"Win\":" . $cWins[$k] . ",\"stepWin\":" . ($cWins[$k] + $totalWin + session("AdmiralNelsonAMBonusWin")) . ",\"winReel1\":[" . ($linesId[$k][0] - 1) . ",\"" . $s[0] . "\"],\"winReel2\":[" . ($linesId[$k][1] - 1) . ",\"" . $s[1] . "\"],\"winReel3\":[" . ($linesId[$k][2] - 1) . ",\"" . $s[2] . "\"],\"winReel4\":[\"none\",\"none\"],\"winReel5\":[\"none\",\"none\"]}";
                                    }
                                }
                                if( ($s[0] == $_obf_0D30261904292D080B151C2737160F3233192735083E22 || in_array($s[0], $wild)) && ($s[1] == $_obf_0D30261904292D080B151C2737160F3233192735083E22 || in_array($s[1], $wild)) && ($s[2] == $_obf_0D30261904292D080B151C2737160F3233192735083E22 || in_array($s[2], $wild)) && ($s[3] == $_obf_0D30261904292D080B151C2737160F3233192735083E22 || in_array($s[3], $wild)) ) 
                                {
                                    $mpl = 1;
                                    if( in_array($s[0], $wild) && in_array($s[1], $wild) && in_array($s[2], $wild) && in_array($s[3], $wild) ) 
                                    {
                                        $mpl = 1;
                                    }
                                    else if( in_array($s[0], $wild) || in_array($s[1], $wild) || in_array($s[2], $wild) || in_array($s[3], $wild) ) 
                                    {
                                        $mpl = $slotSettings->slotWildMpl;
                                    }
                                    $_obf_0D1D0B0B19370807320F3F33260A143313142D14063122 = $slotSettings->Paytable["SYM_" . $_obf_0D30261904292D080B151C2737160F3233192735083E22][4] * $betLine * $mpl * $bonusMpl;
                                    if( $cWins[$k] < $_obf_0D1D0B0B19370807320F3F33260A143313142D14063122 ) 
                                    {
                                        $cWins[$k] = $_obf_0D1D0B0B19370807320F3F33260A143313142D14063122;
                                        $_obf_0D191E0104341E041F35232A05013119105B0813145C01 = "{\"Count\":4,\"Line\":" . $k . ",\"Win\":" . $cWins[$k] . ",\"stepWin\":" . ($cWins[$k] + $totalWin + session("AdmiralNelsonAMBonusWin")) . ",\"winReel1\":[" . ($linesId[$k][0] - 1) . ",\"" . $s[0] . "\"],\"winReel2\":[" . ($linesId[$k][1] - 1) . ",\"" . $s[1] . "\"],\"winReel3\":[" . ($linesId[$k][2] - 1) . ",\"" . $s[2] . "\"],\"winReel4\":[" . ($linesId[$k][3] - 1) . ",\"" . $s[3] . "\"],\"winReel5\":[\"none\",\"none\"]}";
                                    }
                                }
                                if( ($s[0] == $_obf_0D30261904292D080B151C2737160F3233192735083E22 || in_array($s[0], $wild)) && ($s[1] == $_obf_0D30261904292D080B151C2737160F3233192735083E22 || in_array($s[1], $wild)) && ($s[2] == $_obf_0D30261904292D080B151C2737160F3233192735083E22 || in_array($s[2], $wild)) && ($s[3] == $_obf_0D30261904292D080B151C2737160F3233192735083E22 || in_array($s[3], $wild)) && ($s[4] == $_obf_0D30261904292D080B151C2737160F3233192735083E22 || in_array($s[4], $wild)) ) 
                                {
                                    $mpl = 1;
                                    if( in_array($s[0], $wild) && in_array($s[1], $wild) && in_array($s[2], $wild) && in_array($s[3], $wild) && in_array($s[4], $wild) ) 
                                    {
                                        $mpl = 1;
                                    }
                                    else if( in_array($s[0], $wild) || in_array($s[1], $wild) || in_array($s[2], $wild) || in_array($s[3], $wild) || in_array($s[4], $wild) ) 
                                    {
                                        $mpl = $slotSettings->slotWildMpl;
                                    }
                                    $_obf_0D1D0B0B19370807320F3F33260A143313142D14063122 = $slotSettings->Paytable["SYM_" . $_obf_0D30261904292D080B151C2737160F3233192735083E22][5] * $betLine * $mpl * $bonusMpl;
                                    if( $cWins[$k] < $_obf_0D1D0B0B19370807320F3F33260A143313142D14063122 ) 
                                    {
                                        $cWins[$k] = $_obf_0D1D0B0B19370807320F3F33260A143313142D14063122;
                                        $_obf_0D191E0104341E041F35232A05013119105B0813145C01 = "{\"Count\":5,\"Line\":" . $k . ",\"Win\":" . $cWins[$k] . ",\"stepWin\":" . ($cWins[$k] + $totalWin + session("AdmiralNelsonAMBonusWin")) . ",\"winReel1\":[" . ($linesId[$k][0] - 1) . ",\"" . $s[0] . "\"],\"winReel2\":[" . ($linesId[$k][1] - 1) . ",\"" . $s[1] . "\"],\"winReel3\":[" . ($linesId[$k][2] - 1) . ",\"" . $s[2] . "\"],\"winReel4\":[" . ($linesId[$k][3] - 1) . ",\"" . $s[3] . "\"],\"winReel5\":[" . ($linesId[$k][4] - 1) . ",\"" . $s[4] . "\"]}";
                                    }
                                }
                            }
                        }
                        if( $cWins[$k] > 0 && $_obf_0D191E0104341E041F35232A05013119105B0813145C01 != "" ) 
                        {
                            array_push($lineWins, $_obf_0D191E0104341E041F35232A05013119105B0813145C01);
                            $totalWin += $cWins[$k];
                        }
                    }
                    $scattersWin = 0;
                    $scattersStr = "{";
                    $scattersCount = 0;
                    $_obf_0D0102050F2827121F0C0B3C18103B093034271A3B3111 = 0;
                    $_obf_0D1F361B0F2108162B31171F0F2839282228251F342422 = 1;
                    for( $r = 1; $r <= 5; $r++ ) 
                    {
                        for( $p = 0; $p <= 3; $p++ ) 
                        {
                            if( $reels["reel" . $r][$p] == $scatter ) 
                            {
                                $scattersCount++;
                                $scattersStr .= ("\"winReel" . $r . "\":[" . $p . ",\"" . $scatter . "\"],");
                            }
                            if( $reels["reel" . $r][$p] == $_obf_0D02141D21233725192C222C3918251D2532112A123332 ) 
                            {
                                $_obf_0D0102050F2827121F0C0B3C18103B093034271A3B3111++;
                                $scattersStr .= ("\"winReel" . $r . "\":[" . $p . ",\"" . $scatter . "\"],");
                            }
                            if( $reels["reel" . $r][$p] == "0" ) 
                            {
                                $_obf_0D1F361B0F2108162B31171F0F2839282228251F342422 = 2;
                            }
                        }
                    }
                    $scattersWin = $slotSettings->Paytable["SYM_" . $scatter][$scattersCount] * $betLine * $lines * $bonusMpl * $_obf_0D1F361B0F2108162B31171F0F2839282228251F342422;
                    $_obf_0D1804280B180B1E3C22363F1F39390A271B1817100111 = $slotSettings->Paytable["SYM_" . $_obf_0D02141D21233725192C222C3918251D2532112A123332][$_obf_0D0102050F2827121F0C0B3C18103B093034271A3B3111] * $betLine * $lines * $bonusMpl;
                    if( $_obf_0D0102050F2827121F0C0B3C18103B093034271A3B3111 >= 3 && $slotSettings->slotBonus ) 
                    {
                        $scattersStr .= "\"scattersType\":\"bonus\",";
                    }
                    else if( $scattersWin > 0 ) 
                    {
                        $scattersStr .= "\"scattersType\":\"win\",";
                    }
                    else
                    {
                        $scattersStr .= "\"scattersType\":\"none\",";
                    }
                    $scattersStr .= ("\"scattersWin\":" . $scattersWin . "}");
                    $totalWin += ($scattersWin + $_obf_0D1804280B180B1E3C22363F1F39390A271B1817100111);
                    if( $i > 1000 ) 
                    {
                        $winType = "none";
                    }
                    if( $i > 1500 ) 
                    {
                        $response = "{\"responseEvent\":\"error\",\"responseType\":\"" . $pacets["slotEvent"] . "\",\"serverResponse\":\"" . $totalWin . " Bad Reel Strip\"}";
                        exit( $response );
                    }
                    if( $_obf_0D0102050F2827121F0C0B3C18103B093034271A3B3111 >= 3 && $winType != "bonus" ) 
                    {
                    }
                    else if( $totalWin <= $_obf_0D360A1A342F102A2C2E0F0F22022D150D020F06321F22 && $winType == "bonus" ) 
                    {
                        $_obf_0D3639053B2E25370F2C2A37151E280D3E0D1340262801 = $slotSettings->GetBank();
                        if( $_obf_0D3639053B2E25370F2C2A37151E280D3E0D1340262801 < $_obf_0D360A1A342F102A2C2E0F0F22022D150D020F06321F22 ) 
                        {
                            $_obf_0D360A1A342F102A2C2E0F0F22022D150D020F06321F22 = $_obf_0D3639053B2E25370F2C2A37151E280D3E0D1340262801;
                        }
                        else
                        {
                            break;
                        }
                    }
                    else if( $totalWin > 0 && $totalWin <= $_obf_0D360A1A342F102A2C2E0F0F22022D150D020F06321F22 && $winType == "win" ) 
                    {
                        $_obf_0D3639053B2E25370F2C2A37151E280D3E0D1340262801 = $slotSettings->GetBank();
                        if( $_obf_0D3639053B2E25370F2C2A37151E280D3E0D1340262801 < $_obf_0D360A1A342F102A2C2E0F0F22022D150D020F06321F22 ) 
                        {
                            $_obf_0D360A1A342F102A2C2E0F0F22022D150D020F06321F22 = $_obf_0D3639053B2E25370F2C2A37151E280D3E0D1340262801;
                        }
                        else
                        {
                            break;
                        }
                    }
                    else if( $totalWin == 0 && $winType == "none" ) 
                    {
                        break;
                    }
                }
                if( $totalWin > 0 ) 
                {
                    $slotSettings->SetBank(-1 * $totalWin);
                }
                if( $pacets["slotEvent"] == "freespin" && session("AdmiralNelsonAMFreeGames") <= session("AdmiralNelsonAMCurrentFreeGame") && $winType != "bonus" && session("AdmiralNelsonAMBonusWin") + $totalWin > 0 ) 
                {
                    $slotSettings->SetBalance(session("AdmiralNelsonAMBonusWin") + $totalWin);
                }
                else if( $pacets["slotEvent"] != "freespin" && $winType != "bonus" && $totalWin > 0 ) 
                {
                    $slotSettings->SetBalance($totalWin);
                }
                $_obf_0D250139370F050403312640023B151E0C1D100A083132 = $totalWin;
                if( $pacets["slotEvent"] == "freespin" ) 
                {
                    $request->session()->put("AdmiralNelsonAMBonusWin", session("AdmiralNelsonAMBonusWin") + $totalWin);
                    $request->session()->put("AdmiralNelsonAMTotalWin", $totalWin);
                }
                else
                {
                    $request->session()->put("AdmiralNelsonAMTotalWin", $totalWin);
                }
                $_obf_0D0F2429020C2B251224301A5B0D0126373612183E1122 = "03";
                if( $_obf_0D0102050F2827121F0C0B3C18103B093034271A3B3111 >= 3 ) 
                {
                    $_obf_0D0F2429020C2B251224301A5B0D0126373612183E1122 = "05";
                    $bonusMpl = $slotSettings->slotFreeMpl;
                    if( session("AdmiralNelsonAMFreeGames") > 0 ) 
                    {
                        $request->session()->put("AdmiralNelsonAMBonusWin", $totalWin);
                        $request->session()->put("AdmiralNelsonAMFreeGames", session("AdmiralNelsonAMFreeGames") + $slotSettings->slotFreeCount);
                    }
                    else
                    {
                        $request->session()->put("AdmiralNelsonAMFreeStartWin", $totalWin);
                        $request->session()->put("AdmiralNelsonAMBonusWin", $totalWin);
                        $request->session()->put("AdmiralNelsonAMFreeGames", $slotSettings->slotFreeCount);
                    }
                }
                $_obf_0D0C012F183D392B143C1C322B1615301E1F1F0D163732 = "" . json_encode($reels) . "";
                $_obf_0D1A071D40021A0D5B5B3619273F01243E131E1C130D22 = "" . json_encode($slotSettings->Jackpots) . "";
                $_obf_0D123619060F0917151F2F2C17211503330A0B0D1D3932 = implode(",", $lineWins);
                $_obf_0D360524270D0A0531390F0A1F090C08052733181C3532 = "{\"responseEvent\":\"spin\",\"responseType\":\"" . $pacets["slotEvent"] . "\",\"serverResponse\":{\"slotLines\":" . $lines . ",\"slotBet\":" . $_obf_0D020F111F15351D165B1416102E1525302A2F3F210232 . ",\"totalFreeGames\":" . session("AdmiralNelsonAMFreeGames") . ",\"currentFreeGames\":" . session("AdmiralNelsonAMCurrentFreeGame") . ",\"Balance\":" . $slotSettings->GetBalance() . ",\"afterBalance\":" . $slotSettings->GetBalance() . ",\"bonusWin\":" . session("AdmiralNelsonAMBonusWin") . ",\"freeStartWin\":" . session("AdmiralNelsonAMFreeStartWin") . ",\"totalWin\":" . $totalWin . ",\"winLines\":[" . $_obf_0D123619060F0917151F2F2C17211503330A0B0D1D3932 . "],\"bonusInfo\":" . $scattersStr . ",\"Jackpots\":" . $_obf_0D1A071D40021A0D5B5B3619273F01243E131E1C130D22 . ",\"reelsSymbols\":" . $_obf_0D0C012F183D392B143C1C322B1615301E1F1F0D163732 . "}}";
                $slotSettings->SaveLogReport($_obf_0D360524270D0A0531390F0A1F090C08052733181C3532, $betLine, $lines, $_obf_0D250139370F050403312640023B151E0C1D100A083132, $pacets["slotEvent"]);
                $_obf_0D0532351A1833240C342F1C08351504070B1A32110F32 = $slotSettings->HexFormat(0);
                $_obf_0D26221C2F2133353E3F28091527314014402F295B1A22 = $slotSettings->HexFormat($reels["rp"][0]) . $slotSettings->HexFormat($reels["rp"][1]) . $slotSettings->HexFormat($reels["rp"][2]) . $slotSettings->HexFormat($reels["rp"][3]) . $slotSettings->HexFormat($reels["rp"][4]);
                $_obf_0D0E035B18191E290E272D231815240D33401C3F253832 = "";
                for( $i = 0; $i < $count_set; $i++ ) 
                {
                    $cWins[$i] = $cWins[$i] / $betLine / $bonusMpl;
                    $_obf_0D0E035B18191E290E272D231815240D33401C3F253832 .= $slotSettings->HexFormat($cWins[$i]);
                }
                $_obf_0D0E035B18191E290E272D231815240D33401C3F253832 .= $slotSettings->HexFormat($scattersWin / $betLine / $lines / $bonusMpl);
                $_obf_0D263D1A02181114350A12263738230E3D393930061B01 = dechex($lines);
                if( strlen($_obf_0D263D1A02181114350A12263738230E3D393930061B01) <= 1 ) 
                {
                    $_obf_0D263D1A02181114350A12263738230E3D393930061B01 = "0" . $_obf_0D263D1A02181114350A12263738230E3D393930061B01;
                }
                $_obf_0D3C5C5C3D2D242B27221B0F0A012A03162F1422141911 = dechex($_obf_0D020F111F15351D165B1416102E1525302A2F3F210232);
                if( strlen($_obf_0D3C5C5C3D2D242B27221B0F0A012A03162F1422141911) <= 1 ) 
                {
                    $_obf_0D3C5C5C3D2D242B27221B0F0A012A03162F1422141911 = "0" . $_obf_0D3C5C5C3D2D242B27221B0F0A012A03162F1422141911;
                }
                if( $pacets["slotEvent"] == "freespin" ) 
                {
                    $_obf_0D13402A231430331D291C020A391E3F3110383E220211 = dechex(session("AdmiralNelsonAMFreeGames"));
                    $_obf_0D372B301B04370B040D2B363D0517100D5B031F221D22 = dechex(session("AdmiralNelsonAMFreeGames") - session("AdmiralNelsonAMCurrentFreeGame"));
                    $_obf_0D0F2429020C2B251224301A5B0D0126373612183E1122 = "06";
                    if( session("AdmiralNelsonAMFreeGames") <= session("AdmiralNelsonAMCurrentFreeGame") ) 
                    {
                        $_obf_0D0F2429020C2B251224301A5B0D0126373612183E1122 = "0c";
                    }
                    if( $scattersCount >= 3 ) 
                    {
                        $_obf_0D0F2429020C2B251224301A5B0D0126373612183E1122 = "0a";
                    }
                    $_obf_0D14273C35190E05303F0D13341D253E033F1B36060301 = strlen($_obf_0D13402A231430331D291C020A391E3F3110383E220211) . $_obf_0D13402A231430331D291C020A391E3F3110383E220211 . strlen($_obf_0D372B301B04370B040D2B363D0517100D5B031F221D22) . $_obf_0D372B301B04370B040D2B363D0517100D5B031F221D22;
                    $_obf_0D34132B2C1A0908163107072622190C28231323041B22 = "10";
                    if( $totalWin > 0 ) 
                    {
                        $_obf_0D34132B2C1A0908163107072622190C28231323041B22 = "19";
                    }
                    $totalWin = session("AdmiralNelsonAMBonusWin");
                    $bonusMpl = $slotSettings->slotFreeMpl;
                }
                else
                {
                    $_obf_0D13402A231430331D291C020A391E3F3110383E220211 = dechex(session("AdmiralNelsonAMFreeGames"));
                    $_obf_0D34132B2C1A0908163107072622190C28231323041B22 = "10";
                    $_obf_0D14273C35190E05303F0D13341D253E033F1B36060301 = strlen($_obf_0D13402A231430331D291C020A391E3F3110383E220211) . $_obf_0D13402A231430331D291C020A391E3F3110383E220211 . strlen($_obf_0D13402A231430331D291C020A391E3F3110383E220211) . $_obf_0D13402A231430331D291C020A391E3F3110383E220211;
                }
                $response = "1" . $_obf_0D0F2429020C2B251224301A5B0D0126373612183E1122 . "010" . $_obf_0D262A14101602240D0A0E0A391C0425353340221B1222 . $slotSettings->HexFormat($totalWin * 100) . $_obf_0D26221C2F2133353E3F28091527314014402F295B1A22 . $_obf_0D3C5C5C3D2D242B27221B0F0A012A03162F1422141911 . $_obf_0D263D1A02181114350A12263738230E3D393930061B01 . $_obf_0D14273C35190E05303F0D13341D253E033F1B36060301 . $_obf_0D34132B2C1A0908163107072622190C28231323041B22 . $slotSettings->HexFormat($bonusMpl) . "1010" . $_obf_0D26221C2F2133353E3F28091527314014402F295B1A22 . $spehel . $_obf_0D0E035B18191E290E272D231815240D33401C3F253832 . "1829302e25170f26#" . $scattersCount;
                $request->session()->put("AdmiralNelsonAMDoubleAnswer", $_obf_0D26221C2F2133353E3F28091527314014402F295B1A22 . $_obf_0D3C5C5C3D2D242B27221B0F0A012A03162F1422141911 . $_obf_0D263D1A02181114350A12263738230E3D393930061B01 . "1010101010101010101010" . $spehel . $_obf_0D0E035B18191E290E272D231815240D33401C3F253832);
                $request->session()->put("AdmiralNelsonAMDoubleBalance", $_obf_0D262A14101602240D0A0E0A391C0425353340221B1222);
                $request->session()->put("AdmiralNelsonAMDoubleWin", $totalWin);
                if( $pacets["slotEvent"] == "freespin" ) 
                {
                    $request->session()->put("" . $slotSettings->slotId . "DoubleWin", session("" . $slotSettings->slotId . "BonusWin"));
                }
                else
                {
                    $request->session()->put("" . $slotSettings->slotId . "DoubleWin", $totalWin);
                }
                $_obf_0D3B3D13173B3031141C0C063C193F21333611060E0122 = $_obf_0D26221C2F2133353E3F28091527314014402F295B1A22 . $_obf_0D3C5C5C3D2D242B27221B0F0A012A03162F1422141911 . $_obf_0D263D1A02181114350A12263738230E3D393930061B01 . "1010101010101010101010" . $spehel . $_obf_0D0E035B18191E290E272D231815240D33401C3F253832 . "1829302e25170f26#101010";
                $request->session()->put("AdmiralNelsonAMCollectP0", $_obf_0D3B3D13173B3031141C0C063C193F21333611060E0122);
                $_obf_0D0F2429020C2B251224301A5B0D0126373612183E1122 = "04";
                $_obf_0D262A14101602240D0A0E0A391C0425353340221B1222 = $slotSettings->HexFormat(sprintf("%01.2f", $slotSettings->GetBalance()) * $drops);
                $_obf_0D163C25293B2D2D070F1D0B063E3C2E25242A065B3411 = "1" . $_obf_0D0F2429020C2B251224301A5B0D0126373612183E1122 . "010" . $_obf_0D262A14101602240D0A0E0A391C0425353340221B1222 . $slotSettings->HexFormat($totalWin * 100) . $_obf_0D26221C2F2133353E3F28091527314014402F295B1A22 . $_obf_0D3C5C5C3D2D242B27221B0F0A012A03162F1422141911 . $_obf_0D263D1A02181114350A12263738230E3D393930061B01 . "1010101010101010101010" . $spehel . $_obf_0D0E035B18191E290E272D231815240D33401C3F253832 . "1829302e25170f26#101010";
                $request->session()->put("AdmiralNelsonAMCollect", $_obf_0D163C25293B2D2D070F1D0B063E3C2E25242A065B3411);
                break;
            case "A/u254":
                $response = session("AdmiralNelsonAMCollect");
                break;
            case "A/u257":
                $_obf_0D380C01140B230E102D2B0708312B051D08060C3F5C32 = rand(1, 2);
                $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32 = session("AdmiralNelsonAMDoubleWin");
                $_obf_0D043E02213B1C3B2F381417282C352214210A03050D22 = $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32;
                $_obf_0D2939392C232A1E27032804113C2F022C041114092722 = $expire_array[1];
                if( $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32 > 0 ) 
                {
                    $slotSettings->SetBalance(-1 * $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32);
                    $slotSettings->SetBank($_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32);
                }
                $_obf_0D27022A0D0F303E1D2D3B5B34360236280F0502050D22 = "";
                $_obf_0D39142B221821130414363C27210B1040030B12401401 = $slotSettings->GetBank();
                if( $_obf_0D2939392C232A1E27032804113C2F022C041114092722 <= 2 ) 
                {
                    if( $_obf_0D39142B221821130414363C27210B1040030B12401401 < ($_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32 * 2) ) 
                    {
                        $_obf_0D380C01140B230E102D2B0708312B051D08060C3F5C32 = 0;
                    }
                }
                else if( $_obf_0D39142B221821130414363C27210B1040030B12401401 < ($_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32 * 4) ) 
                {
                    $_obf_0D380C01140B230E102D2B0708312B051D08060C3F5C32 = 0;
                }
                $_obf_0D2A21272C3637373B1C0A1E1A2E142C0623282C283622 = [0, 1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21, 24, 25, 28, 29, 32, 33, 36, 37, 40, 41, 44, 45, 48, 49, 52];
                $_obf_0D05302F242B102F0C1F12373238213E0327321F262422 = [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31, 34, 35, 38, 39, 42, 43, 46, 47, 50, 51];
                $suit3 = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52];
                $suit4 = [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53];
                $suit5 = [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50];
                $suit6 = [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51];
                if( $_obf_0D2939392C232A1E27032804113C2F022C041114092722 <= 2 ) 
                {
                    $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32 = $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32 * 2;
                }
                else
                {
                    $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32 = $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32 * 4;
                }
                if( $_obf_0D380C01140B230E102D2B0708312B051D08060C3F5C32 == 1 ) 
                {
                    if( $_obf_0D2939392C232A1E27032804113C2F022C041114092722 == 1 ) 
                    {
                        $_obf_0D27022A0D0F303E1D2D3B5B34360236280F0502050D22 = $_obf_0D2A21272C3637373B1C0A1E1A2E142C0623282C283622[rand(0, 26)];
                    }
                    if( $_obf_0D2939392C232A1E27032804113C2F022C041114092722 == 2 ) 
                    {
                        $_obf_0D27022A0D0F303E1D2D3B5B34360236280F0502050D22 = $_obf_0D05302F242B102F0C1F12373238213E0327321F262422[rand(0, 25)];
                    }
                    if( $_obf_0D2939392C232A1E27032804113C2F022C041114092722 == 3 ) 
                    {
                        $_obf_0D27022A0D0F303E1D2D3B5B34360236280F0502050D22 = $suit3[rand(0, 12)];
                    }
                    if( $_obf_0D2939392C232A1E27032804113C2F022C041114092722 == 4 ) 
                    {
                        $_obf_0D27022A0D0F303E1D2D3B5B34360236280F0502050D22 = $suit4[rand(0, 12)];
                    }
                    if( $_obf_0D2939392C232A1E27032804113C2F022C041114092722 == 5 ) 
                    {
                        $_obf_0D27022A0D0F303E1D2D3B5B34360236280F0502050D22 = $suit5[rand(0, 12)];
                    }
                    if( $_obf_0D2939392C232A1E27032804113C2F022C041114092722 == 6 ) 
                    {
                        $_obf_0D27022A0D0F303E1D2D3B5B34360236280F0502050D22 = $suit6[rand(0, 12)];
                    }
                }
                else
                {
                    if( $_obf_0D2939392C232A1E27032804113C2F022C041114092722 == 1 ) 
                    {
                        $_obf_0D27022A0D0F303E1D2D3B5B34360236280F0502050D22 = $_obf_0D05302F242B102F0C1F12373238213E0327321F262422[rand(0, 25)];
                    }
                    if( $_obf_0D2939392C232A1E27032804113C2F022C041114092722 == 2 ) 
                    {
                        $_obf_0D27022A0D0F303E1D2D3B5B34360236280F0502050D22 = $_obf_0D2A21272C3637373B1C0A1E1A2E142C0623282C283622[rand(0, 26)];
                    }
                    if( $_obf_0D2939392C232A1E27032804113C2F022C041114092722 == 3 ) 
                    {
                        $_obf_0D070A0112310F19340E5B312F3F09161206083E2F1632 = [4, 5, 6];
                        $_obf_0D27022A0D0F303E1D2D3B5B34360236280F0502050D22 = ${"suit" . $_obf_0D070A0112310F19340E5B312F3F09161206083E2F1632[rand(0, 2)]}[rand(0, 12)];
                    }
                    if( $_obf_0D2939392C232A1E27032804113C2F022C041114092722 == 4 ) 
                    {
                        $_obf_0D070A0112310F19340E5B312F3F09161206083E2F1632 = [3, 5, 6];
                        $_obf_0D27022A0D0F303E1D2D3B5B34360236280F0502050D22 = ${"suit" . $_obf_0D070A0112310F19340E5B312F3F09161206083E2F1632[rand(0, 2)]}[rand(0, 12)];
                    }
                    if( $_obf_0D2939392C232A1E27032804113C2F022C041114092722 == 5 ) 
                    {
                        $_obf_0D070A0112310F19340E5B312F3F09161206083E2F1632 = [4, 3, 6];
                        $_obf_0D27022A0D0F303E1D2D3B5B34360236280F0502050D22 = ${"suit" . $_obf_0D070A0112310F19340E5B312F3F09161206083E2F1632[rand(0, 2)]}[rand(0, 12)];
                    }
                    if( $_obf_0D2939392C232A1E27032804113C2F022C041114092722 == 6 ) 
                    {
                        $_obf_0D070A0112310F19340E5B312F3F09161206083E2F1632 = [4, 5, 3];
                        $_obf_0D27022A0D0F303E1D2D3B5B34360236280F0502050D22 = ${"suit" . $_obf_0D070A0112310F19340E5B312F3F09161206083E2F1632[rand(0, 2)]}[rand(0, 12)];
                    }
                    $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32 = 0;
                }
                $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32 = sprintf("%01.2f", $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32) * $drops;
                $_obf_0D5B21263E0B2334142A263424122D2417173B19213022 = str_replace(".", "", $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32 . "");
                $_obf_0D1B290D2F0E212125092F12113102111D193415091401 = dechex($_obf_0D5B21263E0B2334142A263424122D2417173B19213022);
                $_obf_0D27022A0D0F303E1D2D3B5B34360236280F0502050D22 = dechex($_obf_0D27022A0D0F303E1D2D3B5B34360236280F0502050D22);
                if( strlen($_obf_0D27022A0D0F303E1D2D3B5B34360236280F0502050D22) <= 1 ) 
                {
                    $_obf_0D27022A0D0F303E1D2D3B5B34360236280F0502050D22 = "0" . $_obf_0D27022A0D0F303E1D2D3B5B34360236280F0502050D22;
                }
                $_obf_0D130B1C193126173E2D163E302E040F2E102C1A0D5C32 = "26280b2714161d0c";
                $_obf_0D130B1C193126173E2D163E302E040F2E102C1A0D5C32 = substr($_obf_0D130B1C193126173E2D163E302E040F2E102C1A0D5C32, 0, strlen($_obf_0D130B1C193126173E2D163E302E040F2E102C1A0D5C32) - 3);
                $_obf_0D130B1C193126173E2D163E302E040F2E102C1A0D5C32 = $_obf_0D27022A0D0F303E1D2D3B5B34360236280F0502050D22 . $_obf_0D130B1C193126173E2D163E302E040F2E102C1A0D5C32 . "0";
                $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32 = $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32 / 100;
                if( $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32 > 0 ) 
                {
                    $slotSettings->SetBalance($_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32);
                    $slotSettings->SetBank(-1 * $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32);
                }
                $response = "107010" . session("AdmiralNelsonAMDoubleBalance") . strlen($_obf_0D1B290D2F0E212125092F12113102111D193415091401) . $_obf_0D1B290D2F0E212125092F12113102111D193415091401 . session("AdmiralNelsonAMDoubleAnswer") . $_obf_0D130B1C193126173E2D163E302E040F2E102C1A0D5C32;
                $request->session()->put("AdmiralNelsonAMDoubleWin", $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32);
                $request->session()->put("AdmiralNelsonAMTotalWin", $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32);
                $_obf_0D262A14101602240D0A0E0A391C0425353340221B1222 = $slotSettings->HexFormat(sprintf("%01.2f", $slotSettings->GetBalance()) * $drops);
                $_obf_0D163C25293B2D2D070F1D0B063E3C2E25242A065B3411 = "104010" . $_obf_0D262A14101602240D0A0E0A391C0425353340221B1222 . strlen($_obf_0D1B290D2F0E212125092F12113102111D193415091401) . $_obf_0D1B290D2F0E212125092F12113102111D193415091401 . session("AdmiralNelsonAMCollectP0");
                $request->session()->put("AdmiralNelsonAMCollect", $_obf_0D163C25293B2D2D070F1D0B063E3C2E25242A065B3411);
                $_obf_0D360524270D0A0531390F0A1F090C08052733181C3532 = "{\"responseEvent\":\"gambleResult\",\"serverResponse\":{\"totalWin\":" . $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32 . "}}";
                if( $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32 <= 0 ) 
                {
                    $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32 = -1 * $_obf_0D043E02213B1C3B2F381417282C352214210A03050D22;
                }
                $slotSettings->SaveLogReport($_obf_0D360524270D0A0531390F0A1F090C08052733181C3532, $_obf_0D043E02213B1C3B2F381417282C352214210A03050D22, 1, $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32, "slotGamble");
                break;
            case "A/u258":
                $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32 = session("AdmiralNelsonAMDoubleWin");
                if( $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32 > 0.01 ) 
                {
                    $_obf_0D5B032D29380A1C053C0F1526370D083E2C273C5B0732 = sprintf("%01.2f", $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32 / 2);
                }
                else
                {
                    $_obf_0D5B032D29380A1C053C0F1526370D083E2C273C5B0732 = 0;
                }
                $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32 = $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32 - $_obf_0D5B032D29380A1C053C0F1526370D083E2C273C5B0732;
                $_obf_0D242E0C11253C133F06161A3037072F22100704060F22 = $slotSettings->GetBalance() - $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32;
                $request->session()->put("AdmiralNelsonAMDoubleWin", $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32);
                $request->session()->put("AdmiralNelsonAMTotalWin", $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32);
                $_obf_0D242E0C11253C133F06161A3037072F22100704060F22 = sprintf("%01.2f", $_obf_0D242E0C11253C133F06161A3037072F22100704060F22);
                $_obf_0D243E301B05315B3317350A183D04231F401524073811 = str_replace(".", "", $_obf_0D242E0C11253C133F06161A3037072F22100704060F22 . "");
                $_obf_0D160229092408191D0A010C192E1A1F262112171B2901 = dechex($_obf_0D243E301B05315B3317350A183D04231F401524073811 - 0);
                $_obf_0D173137381D083702391D0A013315301D2925331A0901 = strlen($_obf_0D160229092408191D0A010C192E1A1F262112171B2901) . $_obf_0D160229092408191D0A010C192E1A1F262112171B2901;
                $request->session()->put("AdmiralNelsonAMDoubleBalance", $_obf_0D173137381D083702391D0A013315301D2925331A0901);
                $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32 = sprintf("%01.2f", $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32) * $drops;
                $_obf_0D5B21263E0B2334142A263424122D2417173B19213022 = str_replace(".", "", $_obf_0D5C0A353E3C293B3E0F05032F301B232D0E0F350B0B32 . "");
                $_obf_0D1B290D2F0E212125092F12113102111D193415091401 = dechex($_obf_0D5B21263E0B2334142A263424122D2417173B19213022);
                $_obf_0D130B1C193126173E2D163E302E040F2E102C1A0D5C32 = "26280b2714161d0c";
                $response = "108010" . session("AdmiralNelsonAMDoubleBalance") . strlen($_obf_0D1B290D2F0E212125092F12113102111D193415091401) . $_obf_0D1B290D2F0E212125092F12113102111D193415091401 . session("AdmiralNelsonAMDoubleAnswer") . $_obf_0D130B1C193126173E2D163E302E040F2E102C1A0D5C32;
                break;
            default:
                break;
        }
        return $response;
    }
}