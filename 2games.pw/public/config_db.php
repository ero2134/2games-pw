<?php
	ini_set('log_errors', 'On');
	ini_set('error_log', __DIR__ .'/storage/logs/'.'php_errors.log');

	//header('Content-Type: text/html; charset=utf-8');
	$db = new mysqli(
		'localhost',// host
		'demo32.2games.pw', // Логин от базы
		'123' //Пароль
	);
	$db->select_db('demo32.2games.pw');//Имя базы
	$db->query("SET NAMES utf8");
		
	
	$page = [
		'money'   => isset( $_REQUEST['money'] )  ? $_REQUEST['money'] : '0',
		'system'  => isset( $_REQUEST['system'] ) ? $_REQUEST['system'] : '0',
		'users_id' => isset( $_REQUEST['users_id'] ) ? $_REQUEST['users_id'] : '0',
		'summ' 	   => isset( $_REQUEST['summ'] ) ? $_REQUEST['summ'] : '0',
		'bonusId'  => isset( $_REQUEST['bonus_id'] ) ? $_REQUEST['bonus_id'] : false,
		'_token'   => isset( $_REQUEST['_token'] ) ? $_REQUEST['_token'] : false
	];

	
	$bonus_types = [
		'reg'      => 'За регистрацию',
		'dep'      => 'Депозитный',
		'nondep'   => 'Без депозитный',
		'vip'      => 'VIP очки',
		'return'   => 'Возвраты',
		'freespin' => 'Фриспины'
	];				


	$spin_koef = $db->query("select * from `w_settings` WHERE `key`='spin_koef'")->fetch_array(MYSQLI_ASSOC);	
	$win_koef = $db->query("select * from `w_settings` WHERE `key`='win_koef'")->fetch_array(MYSQLI_ASSOC);	
	$payed_spins_fixed = $db->query("select * from `w_settings` WHERE `key`='payed_spins_fixed'")->fetch_array(MYSQLI_ASSOC);	
	$payed_spins_val = $db->query("select * from `w_settings` WHERE `key`='payed_spins_val'")->fetch_array(MYSQLI_ASSOC);	
	//$spin_bank_perc = $db->query("select * from `w_settings` WHERE `key`='spin_bank_perc'")->fetch_array(MYSQLI_ASSOC);	
	//$bonus_bank_perc = $db->query("select * from `w_settings` WHERE `key`='bonus_bank_perc'")->fetch_array(MYSQLI_ASSOC);
	$points_pay = $db->query("select * from `w_settings` WHERE `key`='points_pay'")->fetch_array(MYSQLI_ASSOC);
	$pop_up = $db->query("select * from `w_settings` WHERE `key`='pop_up'")->fetch_array(MYSQLI_ASSOC);
						
	$conf = [
		'pop-up'  				=>  $pop_up['value'],  	#бонус регистрация всплывающие окна
		'win_koef'  			=>  $win_koef['value'],  	#Во сколько раз уменьшится вероятность выигрыша
		'points_pay'			=>  $points_pay['value'],	#Поинты за пополнение
		'spin_koef' 			=>  $spin_koef['value'],	#Количество проплоченных спинов за пополнение на 1 кредит
		'payed_spins_val' 		=>  $payed_spins_val['value'],	#Спин лимит
		'payed_spins_fixed' 	=>  $payed_spins_fixed['value'], 	#Фиксирвоаный спин лимит
		'payed_ref_depozit' 	=>  60 	#%############################################################## Настройка процентав реферальной системы
	];

function pay($pay_id, $change_balance = true){
    global $user_id, $conf, $sys, $db;

    $row = $db->query("SELECT *, w_users.id as user_id FROM w_transactions join w_users on (w_users.id=w_transactions.user_id) WHERE w_transactions.id = '$pay_id' and w_transactions.status='1'")->fetch_array(MYSQLI_ASSOC);
    
    if($row['id']){
        $date = date("d.m.Y");
        $sum = $row['summ'];
        if($change_balance){
            $balance = change_balance($row['summ'], $row['user_id'], $row['system'], 1);
            if($balance){
                $a_balance = explode('|', $balance);
            } else{
                $a_balance = false;
            }  
            if($a_balance != false && $a_balance[0] == 'success'){
                $bonus_id = $db->query("select * from w_bonus_user where enter_id='".$row['payeer_id']."'")->fetch_array(MYSQLI_ASSOC);

                if((isset($_REQUEST['bonus_id']) && intval($_REQUEST['bonus_id']) > 0) || $bonus_id['bonus_id']){
                    $bonus_id = $bonus_id['bonus_id'] ? $bonus_id['bonus_id'] : intval($_REQUEST['bonus_id']);
                    $user_id = $row['user_id'];
                    save_log("bonus_id: $bonus_id");
                    save_log("user_id: $user_id");
                    $w_bonus = new bonus($bonus_id);
                    $w_bonus->activate($row['summ']);
                }
			
                 
                $sql = $db->query("UPDATE w_transactions SET status='2', updated_at='".date("Y-m-d H:i:s")."' WHERE id=$pay_id");
               
                if($sql){
                    Bonus::refresh_num_deposit($row['user_id']);
                    return true;
                }
                else{
                    return false;
                }
            }
            else{
                return false;
            }
        }
        else{
            $db->run("UPDATE w_transactions t2 SET t2.status = 2, t2.system = '$sys' WHERE t2.id=$pay_id");
            Bonus::refresh_num_deposit($row['user_id']);
        }
    }
    return false;
}

function check_mobile_device() { 
    $mobile_agent_array = array('ipad', 'iphone', 'android', 'pocket', 'palm', 'windows ce', 'windowsce', 'cellphone', 'opera mobi', 'ipod', 'small', 'sharp', 'sonyericsson', 'symbian', 'opera mini', 'nokia', 'htc_', 'samsung', 'motorola', 'smartphone', 'blackberry', 'playstation portable', 'tablet browser');
    $agent = strtolower($_SERVER['HTTP_USER_AGENT']);    
    // var_dump($agent);exit;
    foreach ($mobile_agent_array as $value) {    
        if (strpos($agent, $value) !== false) return true;   
    }       
    return false; 
}
function change_balance($sum , $user, $ps = 'adm', $to_save = true){	
	global $user_id, $user_info, $demomode, $conf, $status, $db, $returned;

    $balance_field = $demomode ? 'demobalance' : 'balance';

    if(strpos($_SERVER['PHP_SELF'], 'ge_server.php') && $user_info['denomination'] != 1 && $user_info['denomination'] != 0){
        $sum = $sum * $user_info['denomination'];
    }

    $payed_spin = '';
    if($status == 1){
        $conf['payed_spins_fixed'] = $conf['payed_spins_fixed'];
        $conf['payed_spins_val'] =  $conf['payed_spins_val'];
    }

    if($conf['payed_spins_fixed'])
        $payed_spin = $sum > 0 ? $conf['payed_spins_val'] : 0;
    else{
        $spin_koef = isset($conf['spin_koef']) ? $conf['spin_koef'] : 10;
        $payed_spin = $sum * $spin_koef > 0 ? $sum * $spin_koef : ($user_info['payed_spins'] + $sum * $spin_koef >= 0 ? $user_info['payed_spins'] + $sum * $spin_koef : 0);
    }

    if($sum > 0){
        if($user_info['payed_spins'] <= 0){
            $a_garant = explode("|", $user_info['garant']);
            $win_koef = isset($conf['win_koef']) ? $conf['win_koef'] : 2;
            $a_garant[0] = (int)$a_garant[0] /  $win_koef;
        
            $garant_sql = ", garant='".implode("|", $a_garant)."'";
        }
        else{
            $garant_sql = "";
		}
       
        $pay_points_perc = isset($conf['points_pay']) ? $conf['points_pay'] : '0.25';
       
	   
		save_log( "vip_bon->[get_active ?]".$ps , 'ps.log' );
		
        if($vip_bon = Bonus::get_active('vip')){
            $pay_points_perc = $pay_points_perc * $vip_bon['koef'];
			//save_log( "pay_points_perc->[{$pay_points_perc}]" , 'update_users_id_'.$user.'.log' );
        }

		$pay_points_sql = ($ps == 'pay_point'  || $ps == 'pin' || strpos($ps, 'bonus') === 0) ? "" : ", points = points + ".($sum * $pay_points_perc);
		$pay_pin = ($ps == 'pin') ? ", wager = wager + ".($sum * $returned).',wager_bonus = wager_bonus + '.($sum * $returned) : '';
        $payin_sum = ($ps == 'points' || strpos($ps, 'bonus') === 0) ? 0 : $sum;
        $payin = ($user_info['payin'] + $payin_sum >= 0) ? $user_info['payin'] + $payin_sum : 0;

        if(strpos($ps, 'bonus') !== false){
            $payin = 'payin';
            $payin_sum = 0;
        }
    
		$sql = 
		"
			update 
				w_users 
			set
				balance = balance + {$sum},
				payin = {$payin},
				total_balance = total_balance + {$payin_sum}, 
				payed_spins = {$payed_spin}, 
				can_outpay = '1'
				{$garant_sql}
				{$pay_points_sql}
				{$pay_pin}
			where 
				id = '{$user}'
		";
		
   
		$referer = $db->query("SELECT * FROM `w_users` WHERE id = {$user}")->fetch_array(MYSQLI_ASSOC);	
		if($referer['ref_id'] > 0){
			$balanceRefererDiff = ($sum / 100) * $conf['payed_ref_depozit'];			
			$db->query("UPDATE `w_users` SET balance_referer = balance_referer + '{$balanceRefererDiff}' WHERE id = '{$referer['ref_id']}'");
			$premium_date_type_4 = date("Y-m-d");
			$db->query("INSERT INTO `w_partners_pay`(`type`, `user_id`, `suma`, `date_time` ,`status`) VALUES ('1','{$referer['ref_id']}','{$sum}','{$premium_date_type_4}','1')");
			$db->query("INSERT INTO `w_partners_pay`(`type`, `user_id`, `suma`, `date_time` ,`status`) VALUES ('2','{$referer['ref_id']}','{$balanceRefererDiff}','{$premium_date_type_4}','1')");
		}
		save_log( $sql , 'update_referal_id_'.$user.'.log' );

    }
	else{
		$sql = "update w_users set 	balance = balance + '$sum' , points = points + '$sum' where id='$user'";
	}
    
   
    $tab = $db->query($sql);
    if($tab === true){
        if($user_info[$balance_field] + $sum == 0){
            $db->query("update w_users set wager = '0' where id='{$user}'");
        }
        return "success| ".sprintf("%01.2f", $user_info[$balance_field] + $sum);
    }
    else{
        $error = "не удалось сменить баланс пользователю";
    }
    if(isset($error)){
        return 'error|'.$error;
    }
}
class bonus{
	function __construct($id = false){
		global $db,$user_id,$login,$conf,$language,$lang;
		
		if(isset($db)){
			$this->db = $db;
		}
		if(isset($conf)){
			$this->conf = $conf;
		}
		
		$this->debug = true;
		    
		if($this->debug){
			save_log('===== Bonus('.$id.")=====", 'bon.log');
		}
		if($this->debug){
			save_log("user_id: $user_id", 'bon.log');
		}
		
		if($id){
			if(is_array($id)){
				$this->info = $id;
			}else{
				$this->get($id);
			}
		}
		else{  
			// отметим просроченные бонусы
			$old_bon = $db->query("update w_bonus_user join w_bonus on (w_bonus_user.bonus_id=w_bonus.id) set status='3' where status='0' and w_bonus_user.start_time + interval activate_time day < now()");
			if($this->debug){
				save_log('old_bon='.$old_bon, 'bon.log');
			}
			//деактивируем бонусы по которым закончился live_time
			$sql = $this->db->query("select * from  w_bonus  join w_bonus_user on (w_bonus_user.bonus_id=w_bonus.id) where status='1' and live_time is not null and w_bonus_user.start_time + interval live_time day < now()");
			$ended_bonuses = $sql->fetch_array(MYSQLI_ASSOC);
			if(isset($ended_bonuses)){
				if($this->debug){
					save_log('end_bon='.print_r($ended_bonuses,1), 'bon.log');
				}
				$dum  = [];
				while($list = $sql->fetch_array(MYSQLI_ASSOC)){
					$dum[] = $list;
				}
				foreach($dum as $ended_bonus){
					$this->deactivate($ended_bonus);
					unset($end_bon);
				}
			}
			//приостановим бонусы по которым задано время старта и время завершения  
			$db->query("update w_bonus_user join w_bonus on (w_bonus_user.bonus_id=w_bonus.id) set status='4' where end_time is not null and curtime() not between w_bonus.start_time and w_bonus.end_time and curdate() between start_date and end_date");
			//пересоздадим повторяющиеся бонусы
			$dip = $this->db->query("SELECT w_bonus.* FROM `w_bonus` left join ( select bonus_id as id from w_bonus_user where user_id = $user_id and date(start_time)= date(now()) ) as tmp using (id) WHERE is_loop = 1 and dayofweek(start_date)= dayofweek(now()) and now() between start_date and end_date and tmp.id is null and w_bonus.users in (0, 1)");
			$loop_bonuses = $dip->fetch_array(MYSQLI_ASSOC);	
			
			if(isset($loop_bonuses)){
				if($this->debug){
			save_log('loop_bonuses='.print_r($dip,1), 'bon.log');
				}
				$dum  = [];
				while($list = $dip->fetch_array(MYSQLI_ASSOC)){
					$dum[] = $list;
				}
				foreach($dum as $w_bonus){
					$start_time = new DateTime($w_bonus['start_time']);
					$now_time   = new DateTime(date('H:i:s'));
					$start_time = $w_bonus['start_time']  =='null' ? 'now()': "concat(curdate(),' ','".$w_bonus['start_time']."')";
					$end_time   = $w_bonus['end_time']    =='null' ? 'null' : "concat(date(now()),' ','".$w_bonus['start_time']."')";

					$sql = "insert ignore into w_bonus_user select null, ".$w_bonus['id'].",id,$start_time,'0',null,0,0 from w_users where w_users.status in (5,6)";
					if($w_bonus['type'] == 'nondep'){
						if ($w_bonus['num_deposit'] == 0){
							$sql.=" and payin_total = 0";
						}else{
							$sql.=" and payin_total > 0";
						}
					}
					if($this->debug){
						save_log('loop_bonuses_sql='.print_r($sql,1), 'bon.log');
					}
					$db->query($sql);   
				}
			}
		}    
    }
    
	function get($bonus_id){
		$this->info = $this->db->query("select * from w_bonus where id = '$bonus_id'")->fetch_array(MYSQLI_ASSOC);
		return $this->info;
    }
    
	public static function get_active($type){
		global $user_id, $db;
		
		$w_bonus = $db->query("select * from w_bonus join w_bonus_user on (w_bonus_user.bonus_id=w_bonus.id) where type='$type' and user_id=$user_id and status='1'")->fetch_array(MYSQLI_ASSOC);
		save_log('w_bonus='.print_r($w_bonus,1), 'bon.log');
		if($type == 'freespin'){
			if($w_bonus['max_bon'] == $w_bonus['spin']){
				$bon_tmp = new bonus($w_bonus);
				$bon_tmp->deactivate($w_bonus);
				$w_bonus = false;
			}
		}
		return $w_bonus;
    } 
    
	public static function refresh_num_deposit($user = false){
		global $user_id, $db;
		$user = $user ? intval($user) : $user_id;
		
		$count_deposit = $db->query("select count(*) from w_transactions join w_users on (w_users.id=w_transactions.user_id)  where w_users.id=$user and w_transactions.status=2 and (system not like 'w_bonus%' and system <> 'pay_point')")->num_rows;
		$db->query("delete w_bonus_user from w_bonus_user join w_bonus on (w_bonus.id=w_bonus_user.bonus_id) where user_id=$user and `type`<>'nondep' and ifnull(num_deposit,0)>0 and num_deposit<=$count_deposit and w_bonus_user.status='0'");
		if($count_deposit){
			$db->query("insert ignore into w_bonus_user select null,id,$user,if(start_time is null, now(), concat(date(now()),' ',start_time)),'0',null from w_bonus where now() between start_date and end_date  and (type='nondep' and num_deposit=".($count_deposit ? 1: 0).")");
			$db->query("delete w_bonus_user from w_bonus_user join w_bonus on (w_bonus.id=w_bonus_user.bonus_id) where user_id=$user and `type`='nondep' and ifnull(num_deposit,0)=0 and w_bonus_user.status='0'");
		}
	}  
    
	public static function deactivate($info = false){
		global $balance, $db;
		if($info){
			if($info['type'] == 'return' && $balance == 0){
			
				$start_unix_time = strtotime($info['start_time']) - 10;
				$end_unix_time = $start_unix_time + $info['live_time'] * 60*60*24;
        
        
				$sql = "select summ(`summ`) from w_transactions where created_at between $start_unix_time and $end_unix_time and returned='0' and login=(select id from w_users where id=".$info['user_id'].")";
				$sum = $db->query($sql)->fetch_array(MYSQLI_ASSOC);
				$bonus_sum = $sum * $info['perc'] / 100;
				$bal = change_balance($bonus_sum, $info['user_id'], 'bonus_return_'.$info['id']);
				if($bal){
					$a_balance = explode('|',$bal);
				}else{
					$a_balance = false;
				}
				if($a_balance && $a_balance[0] == 'success'){
					save_stat_pay($bonus_sum,'id:'.$info['user_id'],2,'bonus_return_'.$info['id'],$inv_code);
					$balance = sprintf("%01.2f",$a_balance[1]); //костыль, для правильного отображения баланса
					$db->query("update w_transactions set returned='1' where created_at between $start_unix_time and $end_unix_time and returned='0' and user_id=(select id from w_users where id=".$info['user_id'].")");
                }
			}else
			if($info['type'] == 'freespin'){
				if($info['win'] > 0){
					if($info['max_bon'] == $info['spin']){
						$bal = change_balance($info['win'], $info['user_id'], 'bonus_freespin_'.$info['id']);
						if($bal){
							$a_balance = explode('|',$bal);
						} else{
							$a_balance = false;
						}
						if($a_balance && $a_balance[0] == 'success'){
							save_stat_pay($info['win'],"id:".$info['user_id'],2,'bonus_freespin_'.$info['id'],$inv_code);
							$balance = sprintf("%01.2f",$a_balance[1]); //костыль, для правильного отображения баланса
							$db->query("update w_users set balance_bonus=".$info['win'].", wager=".($info['win']*$info['wager']).", wager_bonus=+".($info['win']*$info['wager'])." where id=".$info['user_id']);
						}
					}else{
						/*просроченый фриспин-бонус, сливаем выигрыш обратно в банк*/
						$db->query("update w_room_banks set spin_bank = spin_bank  + ".$info['win']." where ".$info['perc']." between from_bets and to_bets");
						$db->query("update w_bonus_user set win = '0' where id=".$info['id']);
					}    
				}
			}  
			return $db->query("update w_bonus_user set status='2' where bonus_id=".$info['bonus_id']." and user_id=".$info['user_id']." and status='1'");
		}else
			return false;  
	}
    
	function activate($deposit = false){
		global $user_id,$user_info,$login,$conf;
	
		if(isset($this->info)){
			
			$info = $this->info;
			$stat_txt = $info['is_reg'] ? 'bonus_reg_'.$info['id']:'bonus_'.$info['type']."_".$info['id'];
			if($this->debug){
				save_log(' == activate('.$deposit.')', 'bon.log');
			}
			if(!isset($login)){
				$user_info = $this->db->query("select * from w_users where id='$user_id'")->fetch_array(MYSQLI_ASSOC);
				$login = $user_info['id'];
			}
			 
			if($this->debug){
				save_log('type='.$info['type'], 'bon.log');
			}
			/*проверим нет ли активных бонусов этой категории*/
	
			$active_bon = $this->db->query("select count(*) as count from w_bonus_user join w_bonus on (w_bonus_user.bonus_id=w_bonus.id) where w_bonus_user.status='1' and w_bonus.type='".$info['type']."' and w_bonus_user.user_id=$user_id")->fetch_array(MYSQLI_ASSOC);
			if($active_bon['count'] > 0){
				if($this->debug){
					save_log('active_bon='.$active_bon['count'], 'bon.log');
				}
				return false;
			}else
			if(intval($deposit) < intval($info['min_deposit'])){
				if($this->debug){
					save_log('deposit='.intval($deposit).'; min_deposit='.intval($info['min_deposit']), 'bon.log');
				}
				return false;
			}else
			if($info['wager'] > 0 && $user_info['wager'] > 0 && $this->info['type'] != 'freespin'){
				if($this->debug){
					save_log('wager ='.$user_info['wager'] , 'bon.log');
				}
				return false;
			}else
			if($info['type'] == 'dep') /*активируем первый бонус (% на депозит)*/{
				$bonus_sum = min($deposit * $info['perc'] / 100, $info['max_bon']);
				$bonus_wager = $bonus_sum * $info['wager'];
            
				$balance = change_balance ($bonus_sum, $user_id,$stat_txt);
              
				if($balance){
					$a_balance = explode('|',$balance);
				}else{
					$a_balance = false;
				}
				
				if($a_balance && $a_balance[0] == 'success'){
					save_stat_pay($bonus_sum, $login, 2, $stat_txt, $inv_code);
					$this->db->query("update w_users set balance_bonus='$bonus_sum', wager='$bonus_wager', wager_bonus='$bonus_wager' where id='$user_id'");
				}
			}else
			if($info['type'] == 'nondep') /*активируем бездепозитный бонус*/{
				$bonus_sum   = $info['perc'];
				$bonus_wager = $bonus_sum * $info['wager'];
				$balance     = change_balance($bonus_sum, $user_id,$stat_txt);
				
				if($this->debug){ 
					save_log("change_balance ($bonus_sum, $user_id,$stat_txt)", 'bon.log');
				}
				if($this->debug){ 
					save_log("balance: $balance", 'bon.log'); 
				}					
				if($balance){
					$a_balance = explode('|',$balance);
				}
				else{
					$a_balance = false;
				}
				if($a_balance && $a_balance[0] == 'success'){
					save_stat_pay($bonus_sum,$login,2,$stat_txt,$inv_code);
					$this->db->query("update w_users set balance_bonus='$bonus_sum', wager='$bonus_wager', wager_bonus='$bonus_wager' where id='$user_id'");
				}
			}else
			if($info['type'] == 'vip'){
				$pay_points_perc = '1.00';
				
				$pay_points_perc = isset($conf['points_pay'])? $conf['points_pay']: '0.25';
				if($this->debug) 
					save_log("pay_points_perc = $pay_points_perc", 'bon.log');
				
				$pay_points_koef = $pay_points_perc * $info['koef'];
				
				if($this->debug) 
					save_log("pay_points_koef = $pay_points_koef", 'bon.log');
				
				$pay_points = $deposit * $pay_points_koef - $deposit * $pay_points_perc;
				
				$this->db->query("update w_users set total_balance=total_balance+$pay_points where id=$user_id");
				
				if($this->debug) 
					save_log("update w_users set total_balance=total_balance+$pay_points where id=$user_id", 'bon.log');
			}
           
			$sql = "update w_bonus_user set status='1', start_time=now() where bonus_id=".$this->info['id']." and user_id=".$user_id." and status='0'";
			if($this->debug){ 
				save_log('sql='.$sql, 'bon.log');
			}
			return $this->db->query($sql);
		}else   
			return false;
    }  
      
  
	function add(){
		if($fields_ = $this->db->query("SHOW COLUMNS FROM `w_bonus`")){
			$insert = [];
			$fields = [];
			while($run = $fields_->fetch_array(MYSQLI_ASSOC)){
				$fields[] = $run;
			}
			foreach ($fields as $field){
				$field_name = $field['Field'];
				if(isset($_REQUEST[$field_name]) && $field_name != 'id'){
					if(substr($field['Type'],0,2) == 'int')
						$insert[$field_name] = $this->db->prepare($_REQUEST[$field_name],1);
					elseif($field['Type'] == 'time' or $field['Type'] == 'date')  
						$insert[$field_name] = $_REQUEST[$field_name] ? $this->db->prepare($_REQUEST[$field_name]): 'null';
					else  
						$insert[$field_name] = $this->db->prepare($_REQUEST[$field_name]);
				}
			}
			if($insert['type'] == 'nondep') {
				$insert['w_users'] = 1;
			}
			$insert_keys = array_keys($insert);   
		  
			$sql = "insert into w_bonus (`".implode("`,`", $insert_keys)."`) values ('".implode("','", $insert)."')";
			$sql = str_replace("'null'",'null',$sql);
			
			if($bon_id = $this->db->query($sql)->insert_id){
				$start_time = strtotime($insert['start_date']) > time() ? "'".$insert['start_date']." ".$insert['start_time']."'" : ($insert['start_time']=='null' ? 'now()': "concat(date(now()),' ','".$insert['start_time']."')");
				$user_type = isset($insert['w_users'])?intval($insert['w_users']) : 0;

	 
				$this->db->query("create temporary table dep_count select user_id, count(*) as numdep from w_transactions where status=2 and (system not like 'w_bonus%' and system <> 'pay_point') group by user_id");
				if(!$insert['is_loop']) /*цикличные бонусы пересоздаются автоматически*/  {
					if($insert['num_deposit'] == 0 && $insert['type'] == 'nondep')
						$sql = "insert into w_bonus_user select null,$bon_id,id,$start_time,'0',null,0,0 from w_users where w_users.status in (5,6) and payin_total=0";
					else
					if($insert['num_deposit'] == 1 && $insert['type'] == 'nondep')  
						$sql = "insert into w_bonus_user select null,$bon_id,id,$start_time,'0',null,0,0 from w_users  where w_users.status in (5,6) and payin_total>0";
					else
					if($user_type == 0 || $user_type == 1){
						if($insert['num_deposit'])
							$sql = "insert into w_bonus_user select null,$bon_id,id, $start_time,'0',null,0,0 from w_users left join dep_count using (user_id) where ifnull(dep_count.numdep,0)<".$insert['num_deposit']." and w_users.status in (5,6)";
						else
							$sql = "insert into w_bonus_user select null,$bon_id,id, $start_time,'0',null,0,0 from w_users left join dep_count using (user_id) where w_users.status in (5,6)";  
					}
					return $this->db->query($sql);
				}
				return true; 
			}
		}
		return false;  
    } 
  
  
	function edit(){
		$id = isset($_REQUEST['id']) ? intval($_REQUEST['id']) : false;
		$bon = $this->get($id);
    
		foreach ($bon as $key => $val){
			if(isset($_REQUEST[$key]) && $_REQUEST[$key] != $val && $key != 'id'){
				$set[]= "`$key`='".$this->db->prepare($_REQUEST[$key])."'";
			}
		} 
			
		if(isset($set)){
			return $this->db->query("update w_bonus set ".implode(',',$set)." where id=$id");
		}else{
			return true;
		}
	} 
    
    function get_avail($user_id){
		$data = [];
		$sql = $this->db->query("select *, unix_timestamp(w_bonus_user.start_time) as start_time, unix_timestamp(w_bonus.end_time) as end_time from w_bonus_user join w_bonus on(w_bonus.id=w_bonus_user.bonus_id) where (status='0' or (status='1' and type not in ('dep','nondep')))and w_bonus_user.start_time<=now() and user_id=$user_id");
		while($dip = $sql->fetch_array(MYSQLI_ASSOC)){
			$data[] = $dip;
		}
		return $data;
    } 
    
    function fill_bot_stat($bonus_id){
		$sql = "
		CREATE TABLE IF NOT EXISTS `w_bonus_stat_bot` (
			`id` int(11) NOT NULL AUTO_INCREMENT,
			`bonus_id` int(11) NOT NULL,
			`login` varchar(50) NOT NULL,
			`win` int(11) NOT NULL,
			`date_time` datetime,
			PRIMARY KEY (`id`),
			UNIQUE KEY `bonus_id` (`bonus_id`,`login`)
		) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1
		";
		$this->db->query($sql);
		$this->db->query("delete from `w_bonus_stat_bot` where date_time + interval 1 hour < now()");
		$count = $this->db->query("select count(*) from w_bonus_stat_bot where bonus_id='{$bonus_id}'")->num_rows;
		$num_bot = 20 - $count;
		if($num_bot > 0){
			
			$bot_login_a = explode(',', 'mainer, Никита, MASKAR, j3eka2, bars333, Olga22, Themmost, Wher81, Falown, Appon93, Gionly, Whowerromed91, Andifulated, Prooma7, Feweake, Hateplould91, sashiko, tanya, Sofirina48, TGM6A, Andrii, serhio771, Ruslan2292, Lamiya, digitalis, SergeySe, Swence, Texed96, Ruence, Lostower, Whistamed, Aily82, Cousitony, Attims, Nounkilthe, Patern');
			$bot_win___a   = explode(',', '100,500,600,700,800,900,1000,1500,2000,2500,3000,3500,4000,4500,5000,5500,10000,11000,12000,13000,14000,15000');

			for($i = $num_bot; $i >= 1;$i--){
				$bot_login = $bot_login_a[array_rand($bot_login_a)];
				$bot_win__ = $bot_win___a[array_rand($bot_win___a)];
				$this->db->query("insert ignore into `w_bonus_stat_bot` values (null, $bonus_id, '$bot_login',$bot_win__, now())");
			}
		}
		$rt = [];
		$slot = $this->db->query("select * from `w_bonus_stat_bot` where bonus_id=$bonus_id limit 10");
		while($run = $slot->fetch_array(MYSQLI_ASSOC)){
			$rt[] = $run;
		}
		return $rt;
    }
    
    function set($field,$val){
       global $user_id;
		if(isset($this->info[$field]) && $this->info[$field] != $val){
			return $this->db->query("update w_bonus_user set $field='$val' where bonus_id=".$this->info['id']." and user_id=".$user_id);
        }else{
			return false;  
		}
	}
      
    function bar(){
        global $user_id,$user_info; 
		if ($user_info['wager'] > 0){
			$answer['sum'] = $user_info['balance_bonus'];
			$answer['perc'] = $user_info['wager_bonus'] ? round(($user_info['wager_bonus'] - $user_info['wager']) / $user_info['wager_bonus'] * 100,2): 0;
			$answer['rest'] = $user_info['wager'];
			return $answer;
        }else{
			return false;  
		}
    } 
}

class reg_Bonus extends Bonus{
	function get_bonuses(){
		global $db;
		$runist = $db->query("select w_bonus.*, sum(if(status='0',1,0)) as noact,  sum(if(status='1' or status='2',1,0)) as act, sum(if(status='3',1,0)) as ended from w_bonus left join `w_bonus_user` on(w_bonus.id=w_bonus_user.bonus_id) where is_reg=1 group by w_bonus.id");
		
		$ref = [];
		while($run = $runist->fetch_array(MYSQLI_ASSOC)){
			$ref[] = $run;
		}
		return $ref;
	}
}
  
class dep_Bonus extends Bonus{
	function get_bonuses(){
		return $this->db->query("select w_bonus.*, sum(if(status='0',1,0)) as noact,  sum(if(status='1' or status='2',1,0)) as act, sum(if(status='3',1,0)) as ended from w_bonus left join `w_bonus_user` on(w_bonus.id=w_bonus_user.bonus_id) where is_reg=0 and type='dep' group by w_bonus.id")->fetch_array(MYSQLI_ASSOC);
    }
}

class nondep_Bonus extends Bonus{
	function get_bonuses(){
		return $this->db->query("select w_bonus.*, sum( if(status = '0', 1, 0) ) as noact, sum( if( status = '1' or status = '2', 1, 0 ) ) as act, sum( if(status = '3', 1, 0) ) as ended from w_bonus left join `w_bonus_user` on( w_bonus.id = w_bonus_user.bonus_id ) where is_reg = 0 and type = 'nondep' group by w_bonus.id")->fetch_array(MYSQLI_ASSOC);
    }
}
  

function save_stat_pay($sum, $user_id, $status, $paysys){
    global $conf, $db;
	
	$users = $db->query("select * from w_users where id='$user_id'")->fetch_array(MYSQLI_ASSOC);
    if($users['id']){
        $ip = getip();
        
        $inv_code = generator('on', 'off', 'on', 'off', 10);
         
        if(preg_match('~bonus|return~', $paysys) || preg_match('~\_bon~', $paysys) || preg_match('~pay\_point~', $paysys)){
            $return = 2;
        }else{
            $return = 0;
    	}
    
        $db->query('INSERT INTO w_transactions (payeer_id,summ, created_at, user_id, status, system,`returned`,`ip`) VALUES ("'.$inv_code.'", "'.$sum.'", "'.date("Y-m-d H:i:s").'", "'.$users['id'].'", "'.$status.'", "'.$paysys.'", '.$return.', "'.$ip.'")');
    	return $inv_code;
    }else{
    	return false;
    }
}

function generator($case1, $case2, $case3, $case4, $num1){
    $password = "";

    $small = "abcdefghijklmnopqrstuvwxyz";
    $large = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    $numbers = "1234567890";
    $symbols = "~!#$%^&*()_+-=,./<>?|:;@";

    for($i = 0; $i < $num1; $i++){

        $type = rand(1, 4);
        switch($type){
            case 1:
                if($case1 == "on"){
                    $password .= $large[rand(0, 25)];
                }
                else{
                    $i--;
                }
                break;
            case 2:
                if($case2 == "on"){
                    $password .= $small[rand(0, 25)];
                }
                else{
                    $i--;
                }
                break;
            case 3:
                if($case3 == "on"){
                    $password .= $numbers[rand(0, 9)];
                }
                else{
                    $i--;
                }
                break;
            case 4:
                if($case4 == "on"){
                    $password .= $symbols[rand(0, 23)];
                }
                else{
                    $i--;
                }
                break;
        }
    }

    return $password;
}

function getip(){
    $ip = false;

    if(isset($_SERVER['HTTP_CLIENT_IP']) && filter_var($_SERVER['HTTP_CLIENT_IP'], FILTER_VALIDATE_IP)){
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    }
    elseif(isset($_SERVER['HTTP_X_FORWARDED_FOR']) && $_SERVER['HTTP_X_FORWARDED_FOR'] !== ''){
        $ips = explode(", ", $_SERVER['HTTP_X_FORWARDED_FOR']);

        for($i = 0; $i < count($ips); $i++){
            if(!preg_match("/^(10|172\.16|192\.168)\./i", $ips[$i])){
                if(filter_var($ips[$i], FILTER_VALIDATE_IP)){
                    $ip = $ips[$i];
                }
            }
        }
    }
  
    $result = ($ip !== false && $ip != '127.0.0.1' && $ip != '::1' && $ip != $_SERVER['SERVER_ADDR']) ? $ip : $_SERVER['REMOTE_ADDR'];

    return $result;
}
function save_log($txt, $log_name = 'err.log'){
    global $conf;

    $file_name = __DIR__ ."/storage/logs/$log_name";
    @$handle = fopen($file_name, 'a');
    @$res = fwrite($handle, date("[Y-m-d H:i:s] ").$txt."\r\n");
    @fclose($handle);

    return $res;
}
