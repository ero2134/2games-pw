<?php
	include("config_db.php");

	if(isset($_POST['bonus_id']) && isset($_POST['users_id']) && isset($_POST['_token']) && isset($_POST['pin'])){
		$pin = htmlspecialchars($_POST['pin'],ENT_QUOTES);
	    if($pin != ''){
			$pay = $db->query("SELECT * FROM `w_transactions` where status='1' and payeer_id='{$pin}' and system='pin'")->fetch_array(MYSQLI_ASSOC);
		   
			if($pay['payeer_id'] == $pin){
				$user_id = (int)$_POST['users_id'];
				$user_info = $db->query("select * from w_users where id='{$user_id}'")->fetch_array(MYSQLI_ASSOC);
				if($pay['smit'] == 0 || $pay['smit'] == ''){
					$sum = (int)$pay['summ'];
					$db->query("
							update 
								w_users 
							set
								balance = balance + {$sum},
								wager = wager + '".($sum * $pay['returned'])."',
								wager_bonus = wager_bonus + '".($sum * $pay['returned'])."'
							where 
								id = '{$user_id}'
					");
						$referer = $db->query("SELECT * FROM `w_users` WHERE id = {$user_id}")->fetch_array(MYSQLI_ASSOC);	
						if($referer['ref_id'] > 0){
							$balanceRefererDiff = ($sum / 100) * $conf['payed_ref_depozit'];
							
							$db->query("UPDATE `w_users` SET balance_referer = balance_referer + '{$balanceRefererDiff}' WHERE id = '{$referer['ref_id']}'");
							$premium_date_type_4 = date("Y-m-d");
							$db->query("INSERT INTO `w_partners_pay`(`type`, `user_id`, `suma`, `date_time` ,`status`) VALUES ('1','{$referer['ref_id']}','{$sum}','{$premium_date_type_4}','1')");
							$db->query("INSERT INTO `w_partners_pay`(`type`, `user_id`, `suma`, `date_time` ,`status`) VALUES ('2','{$referer['ref_id']}','{$balanceRefererDiff}','{$premium_date_type_4}','1')");
						}
					$db->query("UPDATE w_transactions SET user_id = '{$user_id}',status='2' WHERE id='{$pay['id']}'");
					$info = [
						'message'=> "Вы успешно активировали код:<b>{$pin}</b>",
						'status' => true
					];
				}else{
					$wea = $db->query("select * from w_pin_users where pin='{$pin}' AND user_id='{$user_id}'")->fetch_array(MYSQLI_ASSOC);
					
					if($wea['user_id'] != $user_id){
						$sum = (int)$pay['summ'];
						$db->query("
							update 
								w_users 
							set
								balance = balance + {$sum},
								wager = wager + '".($sum * $pay['returned'])."',
								wager_bonus = wager_bonus + '".($sum * $pay['returned'])."'
							where 
								id = '{$user_id}'
						");	$referer = $db->query("SELECT * FROM `w_users` WHERE id = {$user_id}")->fetch_array(MYSQLI_ASSOC);	
						if($referer['ref_id'] > 0){
							$balanceRefererDiff = ($sum / 100) * $conf['payed_ref_depozit'];
							
							$db->query("UPDATE `w_users` SET balance_referer = balance_referer + '{$balanceRefererDiff}' WHERE id = '{$referer['ref_id']}'");
							$premium_date_type_4 = date("Y-m-d");
							$db->query("INSERT INTO `w_partners_pay`(`type`, `user_id`, `suma`, `date_time` ,`status`) VALUES ('1','{$referer['ref_id']}','{$sum}','{$premium_date_type_4}','1')");
							$db->query("INSERT INTO `w_partners_pay`(`type`, `user_id`, `suma`, `date_time` ,`status`) VALUES ('2','{$referer['ref_id']}','{$balanceRefererDiff}','{$premium_date_type_4}','1')");
						}
						$db->query("INSERT INTO `w_pin_users`(`user_id`, `pin`) VALUES ('{$user_id}','{$pin}')");
						$info = [
							'message'=> "Вы успешно активировали код:<b>{$pin}</b>",
							'status' => true
						];
					}else{
						$info = [
							'message'=> "Код не найден <b>{$pin}</b>",
							'status' => false
						];
					}
				}
		    }else{
    			$info = [
    				'message'=> "Код не найден <b>{$pin}</b>",
    				'status' => false
    			];
		   	}
		}else{
			$info = [
				'message'=> "Бонус код не должен быть пустым полем",
				'status' => false
			];
		}
		echo json_encode($info);
	}

	if(isset($_GET['admin'])){
		if($_GET['admin'] == '9b65780da884f131853e0cf894b11376'){
			if(isset($_GET['liat'])){
				$aColumns  = [ 'payeer_id','summ','returned', 'created_at','status','id' ];
			
                $sIndexColumn = "*";
                $sLimit = "";
				if(isset($_GET['iDisplayStart']) && $_GET['iDisplayLength'] != '-1') {
					$sLimit = "LIMIT " . htmlspecialchars($_GET['iDisplayStart'],ENT_QUOTES) . ", " . htmlspecialchars($_GET['iDisplayLength'],ENT_QUOTES);
				}
				if(isset($_GET['iSortCol_0'])) {
					$sOrder = "ORDER BY id  DESC, ";
					for($i = 0; $i < intval($_GET['iSortingCols']); $i++) {
						if($_GET['bSortable_' . intval($_GET['iSortCol_' . $i])] == "true"){
							$sOrder .= $aColumns[intval($_GET['iSortCol_' . $i])] . "
							" . htmlspecialchars($_GET['sSortDir_' . $i],ENT_QUOTES) . ", ";
						}
					}
					$sOrder = substr_replace($sOrder, "", -2);
					if($sOrder == "ORDER BY id  DESC,") {
						$sOrder = "";
					}
				}
				$sWhere = "";
					if(isset($_GET['sSearch']) != "") {
						$sWhere = "WHERE  (";
						for($i = 0; $i < count($aColumns); $i++) {
							$sWhere .= $aColumns[$i] . " LIKE '%" . htmlspecialchars($_GET['sSearch'],ENT_QUOTES) . "%' OR ";
						}
					$sWhere = substr_replace($sWhere, "", -3);
					$sWhere .= ')';
				}
				for($i = 0; $i < count($aColumns); $i++) {
					if(isset($_GET['bSearchable_' . $i]) == "true" && $_GET['sSearch_' . $i] != '') {
						if($sWhere == "") {
							$sWhere = "WHERE ";
						} else {
							$sWhere .= " AND ";
						}
						$sWhere .= $aColumns[$i] . " LIKE '%" . htmlspecialchars($_GET['sSearch_' . $i],ENT_QUOTES) . "%' ";
					}
				}
                
	
				$rResult = $db->query("SELECT * FROM `w_transactions` WHERE system = 'pin' and status < '2' $sLimit");
                $aResultFilterTotal = $db->query("SELECT count(id) as count FROM `w_transactions` WHERE system = 'pin' and status < '2'")->fetch_array(MYSQLI_ASSOC);              
				$iTotal = $db->query("SELECT count(id) as count FROM `w_transactions` WHERE system = 'pin' and status < '2'")->fetch_array(MYSQLI_ASSOC);
                $output = array(
                    "sEcho" => intval($_GET['sEcho']),
                    "iTotalRecords" => $iTotal['count'],
                    "iTotalDisplayRecords" => $aResultFilterTotal['count'],
                    "aaData" => array()
                );
                while ($aRow = $rResult->fetch_array(MYSQLI_ASSOC)) {
                    $row = array();
					if($aRow['smit'] == 0){
						if($aRow['status'] == 1){
							$r = '<span class="badge badge-lg badge-secondary">no | disposable</span>';
						}
						if($aRow['status'] == 0){
							$r = '<span class="badge badge-lg badge-primary">activated | disposable</span>';
						}
					}else{
						$wea = $db->query("select COUNT(id) as count from w_pin_users where pin='{$aRow['payeer_id']}'")->fetch_array(MYSQLI_ASSOC);
						if($wea['count'] == 0){
							$r = '<span class="badge badge-lg badge-secondary">0 | Eternal</span>';
						}else{
							$r = '<span class="badge badge-lg badge-primary">'.$wea['count'].' | Eternal</span>';
						}
					}
					$aRow['status'] = $r;
					
					
					
					$aRow['id'] = '<a href="/result_bonus_code.php?admin=9b65780da884f131853e0cf894b11376&deleted='.$aRow['id'].'" class="btn btn-icon" title="" data-toggle="tooltip" data-placement="top" data-method="DELETE" data-confirm-title="Please Confirm" data-confirm-text="Do you really want to delete the code ?" data-confirm-delete="Yes, delete him!" data-original-title="Delete User"> <i class="fas fa-trash"></i></a>';
                    for ($i = 0; $i < count($aColumns); $i++) {
                        if ($aColumns[$i] == "version") {
                            $row[] = ($aRow[$aColumns[$i]] == "0") ? '-' : $aRow[$aColumns[$i]];
                        } else if ($aColumns[$i] != ' ') {
                            $row[] = $aRow[$aColumns[$i]];
                        }
                    }
                    $output['aaData'][] = $row;
                }
                echo json_encode($output);
			}
			
			if(isset($_GET['add'])){
				@$count = intval($_POST['code']['count']);
				@$nominal = intval($_POST['code']['price']);
				@$scaleMode = intval($_POST['code']['scaleMode']);
				@$span = intval($_POST['code']['span']);

				if($count && $nominal){
					$res = $db->query("select user_id from w_transactions where system='pin' and status='0'");
						
					if($res->num_rows > 0){
						while($row = $res->fetch_array(MYSQLI_ASSOC)){
							$db_pins[] = $row[0];
						}
					}else{
						$db_pins = [];
					}
						
					$pins = [];
							
					for($i = 1; $i <= $count; $i++){
						$pin = generator('off', 'off', 'on', 'off', 10);
						if(in_array($pin, $db_pins) or in_array($pin, $pins)){
							$i--;
						}else{
							$pins[] = $pin;
						}
					}
					
					$sql = "insert into w_transactions (user_id, summ, created_at, status, system, payeer_id,returned,ip,smit) values (";
					foreach($pins as $pin){
						$ar_sql[] = "'$pin', '$nominal','".date("Y-m-d H:i:s")."', '1', 'pin','".($pin)."','{$span}','0','{$scaleMode}'";
					}
					
					$sql .= implode('),(', $ar_sql).")";
					
					if($db->query($sql)){
						echo "<div class='col-md-12'><div class='alert alert-success'><center><strong>ПИН код сгенерирован</strong></center><button class='close' data-dismiss='alert' type='button'>×</button></div></div>";
					}else{
						echo "<div class='col-md-12'><div class='alert alert-danger'><center><strong>ошибка MySql: ".$sql."\r\n</strong></center><button class='close' data-dismiss='alert' type='button'>×</button></div></div>";
					}
				}
				else{
					echo"<div class='col-md-12'><div class='alert alert-danger'><center><strong>ошибка ввода данных</strong></center><button class='close' data-dismiss='alert' type='button'>×</button></div></div>";
				}
			}
			if(isset($_GET['file_full'])){
				set_time_limit(0);
				ob_implicit_flush();
				header("Content-Type: text/plain; charset=utf-8");
				$pay = $db->query("SELECT * FROM `w_transactions` WHERE system = 'pin' and status < '2'");
				
				$domen = get_domen();
				header('Content-Disposition:	attachment; filename="pins.csv"');
				header('Content-Type:	text/comma-separated-values');
				while($data = $pay->fetch_array(MYSQLI_ASSOC)){
					echo $data['payeer_id'].",".$data['summ'].",".$domen."\n";
				}
				$db->query("update w_transactions set status=1 where system='pin' and status=0");
				
				exit();
			}
			if(isset($_GET['deleted'])){
				$id = (int)$_GET['deleted'];
				
				$db->query("DELETE FROM w_transactions WHERE id = '{$id}'");
				
				header('HTTP/1.1 200 OK');
				header('Location: /backend/code_system');
				exit();
			}
			
		}else{
			echo json_encode([
				md5(time()) => md5(time())
			]);
		}
	}
	

function get_domen(){
    $host = $_SERVER['HTTP_HOST'];
    $domen = str_ireplace('www.', '', $host);
    if(strpos($domen, ':') !== false)
        $domen = substr($domen, 0, strpos($domen, ':')); //обрежем порты

    return $domen;
}
