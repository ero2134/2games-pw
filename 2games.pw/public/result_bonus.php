<?php
	include("config_db.php");
	
	
	if(isset($_GET['html']) && isset($_GET['users']) && isset($_GET['hash'])){
		$users = (int)$_GET['users'];
		$hashs = $_GET['hash'];
		
		if(md5($users.':9358741') == $hashs){
			

			//$sql = "select *, unix_timestamp(w_bonus_user.start_time) as start_time, unix_timestamp(w_bonus.end_time) as end_time from w_bonus_user join w_bonus on(w_bonus.id=w_bonus_user.bonus_id) where (status='0' or (status='1' and type not in ('dep','nondep')))and w_bonus_user.start_time<=now() and user_id=$users order by w_bonus.id desc";

			
		$user_info = $db->query("select * from w_users where id='{$users}'")->fetch_array(MYSQLI_ASSOC);
				###################################################################################################
		
		$user_id = $user_info['id'];
		$bonus_reg_class = new reg_Bonus;
			
		$iTotal = $bonus_reg_class->get_avail($users);
	    $active_bonus_bar = $bonus_reg_class->bar();
			 
		$pris = $db->query("select * from w_bonus_user where user_id='{$users}'");

		if($pris->num_rows == 0){
			$db->query("
			insert into w_bonus_user 
				select 
					null, 
					id, 
					$user_id, 
					if(
						start_date > curdate(), 
						concat(
							start_date, 
							' ', 
							ifnull(start_time, '00:00')
						), 
						if(
							start_time is null, 
							now(), 
							concat(
								date(now()), 
								' ', 
								start_time
							)
						)
					), 
					'0', 
					null, 
					0, 
					0 
				from 
					w_bonus 
				where 
					(
						(
							`type` <> 'nondep' 
							and users in (0, 2)
						)|| (
							`type` = 'nondep' 
							and num_deposit = 0
						)
					) 
					and(
						ifnull(is_loop, 0)= 0 
						or (
							is_loop = 1 
							and dayofweek(start_date)= dayofweek(
								curdate()
							)
						)
					) 
					and end_date >= curdate() 
					and is_reg = 0
			");
		}		

		
		$html = '';
		$div = '';
		$div_res = '';
		if($conf['pop-up'] == 'true'){
			$div = $div;
		}else{
			$div = $html;
		}

	
		if($user_info['gift'] == '' || $user_info['gift'] == 0){
			$sql = "select w_bonus.*, sum(if(status='0',1,0)) as noact,  sum(if(status='1' or status='2',1,0)) as act, sum(if(status='3',1,0)) as ended from w_bonus left join `w_bonus_user` on(w_bonus.id=w_bonus_user.bonus_id) where is_reg=1 group by w_bonus.id";
		
			
		$bonus_reg = $db->query($sql); 
				
				if(!(isset($user_info['gift']) && $user_info['gift'] > 0)){
					$bonus_reg = $bonus_reg_class->get_bonuses();
				}
				else{
					$bonus_reg = $bonus_reg_class->get($user_info['gift']);
				}
					$div .= '<div class="refres_information"></div>';
						if($conf['pop-up'] == 'true'){
							foreach($bonus_reg as $bonus){
							$div .= '<label id="bonusss__00" for="bonus_'.$bonus['id'].'">
								<div class="bonus__item">
									<img src="/image/bonus/'.$bonus['pic'].'" alt="'.$bonus['name'].'">
									<div class="bonus__info"><span class="bonus__name">'.$bonus['name'].'</span><span class="bonus__note">'.$bonus['desc'].'</span></div>
								</div>
							</label>
							<input type="radio" id="bonus_'.$bonus['id'].'" name="bonus" value="'.$bonus['id'].'" style="display:none">';
							}
						}else{	
							foreach($bonus_reg as $bonus){
								$div .= '<div class="tab-bonuses__item">
                          <div class="bonus-panel">
                            <div class="bonus-panel__view">
                                <img src="/image/bonus/'.$bonus['pic'].'" class="bonus-panel__img">
                            </div>
                            <div class="bonus-panel__info">
                                <p class="bonus-panel__title">'.$bonus['name'].'</p>
                                <p class="bonus-panel__note">
                                    '.$bonus['desc'].'
                                </p>
                            </div>';
                           $div .= ' <div class="bonus-panel__action">
                               <p class="bonus-panel__title bonus-panel__title_alert">Do you want to get a bonus:</p>
                               
                                <div onclick="reg_activate_bonus(\''.$users.'\',\''.$hashs.'\',\''.$bonus['id'].'\');" class="bonus-panel__button_00_000 button_00 button_00_shape_round">Receive</div>
                            </div>
                        </div>';
						   $div .= '</div>';
							}
						}

		}
		
			foreach($iTotal as $bonus){
				if ($bonus['end_time']){
					$rti = $bonus['end_time'];
				}
				else
				{
					$rti = $bonus['start_time'] + $bonus['activate_time'] *24*60*60;
				}	
				if ($bonus['status']==1){
                    $lio = '<p class="bonus-panel__title bonus-panel__title_alert">Bonus is active:</p>';
				}
				else
				{
                    $lio = '<p class="bonus-panel__title bonus-panel__title_alert">Before bonus activation ends:</p>';
				}			
				if ($bonus['status'] == 1){
					$ferw = '<div class="bonus-panel__informer bonus-panel__informer_green">Activated</div>';
				}
				else
				{
					$ferw = '<div class="bonus-panel__button_00_000 button_00 button_00_shape_round" id="onclick_bonus" onclick="activate_bonus(\''.$users.'\',\''.$hashs.'\',\''.$bonus['id'].'\');">Bonus is active</div>';
				}			
			
			$html .= '<div class="tab-bonuses__item">
                          <div class="bonus-panel">
                            <div class="bonus-panel__view">
                                <img src="/image/bonus/'.$bonus['pic'].'" class="bonus-panel__img">
                            </div>
                            <div class="bonus-panel__info">
                                <p class="bonus-panel__title">'.$bonus['name'].'</p>
                                <p class="bonus-panel__note">
                                    '.$bonus['desc'].'
                                </p>
                            </div>
                            <div class="bonus-panel__action">
                                '.$lio.'
                                <div class="bonus-panel__timer timer">
                                    <div class="timer__table">
                                       '.$rti.'
                                        <div class="timer__row timer__row_digit" data-toggle="timer" id="bonus-'.$bonus['id'].'" data-time="'.$rti.'"></div>
                                        <div class="timer__row timer__row_caption">
                                            <div class="timer__cell">D</div>
                                            <div class="timer__cell timer__cell_empty"></div>
                                            <div class="timer__cell">H</div>
                                            <div class="timer__cell"></div>
                                            <div class="timer__cell">M</div>
                                            <div class="timer__cell"></div>
                                            <div class="timer__cell">S</div>
                                        </div>
                                    </div>
                                    <div class="timer__note_large"></div>
									
                                </div>
                               '.$ferw.'
                            </div>
                        </div>

           </div>';
			}
			
			$SR['status'] = true;
			$SR['html'] = $div.$html;
			$SR['html_reg_bonus'] = '';
			
		echo json_encode($SR);
		}else{
			echo json_encode([
				'status' => false
			]);
		}
	}
	
	if(isset($_GET['count']) && isset($_GET['users']) && isset($_GET['hash'])){	 
		$users = (int)$_GET['users'];
		$hashs = $_GET['hash'];
		if(md5($users.':9358741') == $hashs){
			$pris = $db->query("select * from w_bonus_user where user_id = '{$users}'");
			echo json_encode([
				'status' => 1,
				'count' => $pris->num_rows
			]);
				$user_info = $db->query("select * from w_users where id='{$users}'")->fetch_array(MYSQLI_ASSOC);
				###################################################################################################
	
		if($user_info['ref_id'] == 0){
			
			if(isset($_COOKIE['code_referal'])){
				#####################################
				$premium_date_type_4 = date("Y-m-d");
				#####################################
				$u_id = (int)$_COOKIE['code_referal'];
				$db->query("UPDATE `w_users` SET `ref_id` = '{$u_id}' WHERE `id`='{$user_info['id']}'");
				$db->query("INSERT INTO `w_partners_pay`(`type`, `user_id`, `suma`, `date_time` ,`status`) VALUES ('4','{$u_id}','0','{$premium_date_type_4}','1')");
				setcookie("code_referal", 'DELETED', time() - 3600 * 10000); 
			}
		}
		###################################################################################################
		}else{
			echo json_encode([
				'status' => 0,
				'count'  => NULL,
				'key'    => md5(time()),
			]);
		}
	}
	
	if(isset($_GET['set_gift']) && isset($_GET['users']) && isset($_GET['hash'])){
		$users = (int)$_GET['users'];
		$hashs = $_GET['hash'];
		
		if(md5($users.':9358741') == $hashs){
			$gift = isset($_REQUEST['gift'])?intval($_REQUEST['gift']):false;
			
			$user_info = $db->query("select * from w_users where id='{$users}'")->fetch_array(MYSQLI_ASSOC);
				
			$user_id = $user_info['id'];
			$login = $user_info['username'];
			
			if(!$gift){
				$answer = [
					'success' => false,
					'error' => 'Id of the gift is not specified'
				];
			}
			/*elseif($gift > 3 || $gift < 0){
				$answer = [
					'success' => false,
					'error' => 'Id of the gift is incorrect'
				];
			}*/
			else{
				$db->query("update w_users set gift='$gift' where id='{$user_id}'");
				$db->query("insert into w_bonus_user values (null,$gift,$user_id,now(),'0',null,0,0)");
				$answer = [
					'success' => true
				];
			}
		}else{
			$answer = [
				'success' => false,
				'error' => 'Id of the gift is not specified'
			];
		}
		echo json_encode($answer);	
	}
	
	if(isset($_GET['admin'])){
		
		$users = (isset($_GET['users'])? $_GET['users'] : 'NULL');
		$users_id = (isset($_GET['users'])? $_GET['users'] : 'NULL');
		$hashs = (isset($_GET['hash'])? $_GET['hash'] : 'NULL');
		
		if(md5($users.':["6JiPNWsmS8Be3CwJnTgPXS91n"]') == $hashs){
			$html_div = '';
			
			
			if(isset($_GET['on_sers'])){
				$id = (int)$_GET['u_id'];
				$ron = $db->query("select * from w_bonus where id='{$id}'")->fetch_array(MYSQLI_ASSOC);
				if($ron['id'] == $id){
					if($ron['is_reg'] == 1){
						$type = 0;
					}else{
						$type = 1;
					}
					$db->query("UPDATE `w_bonus` SET `is_reg` = '{$type}' WHERE `id`='{$id}'");
					
				}
			}
			
			if(isset($_GET['gr_id'])){
				if($_GET['gr_id'] != ''){
					if(isset($_POST['win_koef'])){
						$spin_koef = (int)$_POST['spin_koef'];
						$win_koef = (int)$_POST['win_koef'];
						$payed_spins_fixed = (isset($_POST['payed_spins_fixed'])? 1 : 0);
						$payed_spins_val = (int)$_POST['payed_spins_val'];
			
						#$pop_up = $_POST['pop_up'];
						$points_pay = (int)$_POST['points_pay'];
						
						
				
						if($spin_koef == 0){
							$error = 'Необходимо заполнить ( Количество оплаченных спинов за 1 кредит )';							
						}
						if($win_koef == 0){
							$error = 'Необходимо заполнить ( Множитель гарантии, по завершению спин лимита )';							
						}
						if($payed_spins_val == 0){
							$error = 'Необходимо заполнить ( Спин лимит )';							
						}
						if($points_pay == 0){
							$error = 'Необходимо заполнить ( Поинты за пополнение )';
						}
						
						if(!isset($error)){
							$r  = '';
							$r .= $db->query("UPDATE `w_settings` SET `value` = '{$spin_koef}' WHERE `key`='spin_koef'");
							$r .= $db->query("UPDATE `w_settings` SET `value` = '{$win_koef}' WHERE `key`='win_koef'");
							$r .= $db->query("UPDATE `w_settings` SET `value` = '{$payed_spins_fixed}' WHERE `key`='payed_spins_fixed'");
							$r .= $db->query("UPDATE `w_settings` SET `value` = '{$payed_spins_val}' WHERE `key`='payed_spins_val'");		
							##$r .= $db->query("UPDATE `w_settings` SET `value` = '{$pop_up}' WHERE `key`='pop_up'");
							$r .= $db->query("UPDATE `w_settings` SET `value` = '{$points_pay}' WHERE `key`='points_pay'");
							
							
							
							if($r == true){
								echo'<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button> Данные успешно изменены</div>';
							}else{
								echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>Ошибка обновлений данных</div>';
							}
						}else{
							echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'.$error.'</div>';
						}					
					}
				}
				else
				{

					$spin_koef = $db->query("select * from `w_settings` WHERE `key`='spin_koef'")->fetch_array(MYSQLI_ASSOC);	
					$win_koef = $db->query("select * from `w_settings` WHERE `key`='win_koef'")->fetch_array(MYSQLI_ASSOC);	
					$payed_spins_fixed = $db->query("select * from `w_settings` WHERE `key`='payed_spins_fixed'")->fetch_array(MYSQLI_ASSOC);	
					$payed_spins_val = $db->query("select * from `w_settings` WHERE `key`='payed_spins_val'")->fetch_array(MYSQLI_ASSOC);	
					//$spin_bank_perc = $db->query("select * from `w_settings` WHERE `key`='spin_bank_perc'")->fetch_array(MYSQLI_ASSOC);	
					//$bonus_bank_perc = $db->query("select * from `w_settings` WHERE `key`='bonus_bank_perc'")->fetch_array(MYSQLI_ASSOC);
					#$pop_up = $db->query("select * from `w_settings` WHERE `key`='pop_up'")->fetch_array(MYSQLI_ASSOC);	
					$points_pay = $db->query("select * from `w_settings` WHERE `key`='points_pay'")->fetch_array(MYSQLI_ASSOC);					
					
					#$l = ($pop_up['value'] == 'false')? 'selected="selected"' : '';
					#$t = ($pop_up['value'] == 'true')? 'selected="selected"' : '';
					$html = '';
						$html .='<span id="error"></span>';
						$html .='<form id="form-payment-system_enot" action="#" method="POST">';
						$html .='<input type="hidden" name="url" id="url" value="/result_bonus.php?admin=true&gr_id=1&users='.$users.'&hash='.$hashs.'&list=true">';
							#$html .='<div class="row">';
								#$html .='<label class="col-md-3 box">бонус регистрация всплывающие окна:</label>';
								#$html .='<div class="col-md-5 box">';
										#$html .='<select name="pop_up" class="form-control">';
											#$html .='<option value="false" '.$l.'>Спискам в бонусах</option>';
											#$html .='<option value="true" '.$t.'>Всплывающие окна</option>';
										#$html .='</select>';
								#$html .='</div>';
							#$html .='</div>';
							$html .='<div class="row">';
								$html .='<label class="col-md-3 box">Поинты за пополнение:</label>';
								$html .='<div class="col-md-5 box">';
									$html .='<input type="text" class="form-control" name="points_pay" value="'.$points_pay['value'].'">';
									$html .='<input type="hidden" name="win_koef_id" value="'.$points_pay['id'].'">';
								$html .='</div>';
							$html .='</div>';
							$html .='<div class="row">';
								$html .='<label class="col-md-3 box">Количество оплаченных спинов за 1 кредит:</label>';
								$html .='<div class="col-md-5 box">';
									$html .='<input type="text" class="form-control" name="spin_koef" value="'.$spin_koef['value'].'">';
									$html .='<input type="hidden" name="spin_koef_id" value="'.$spin_koef['id'].'">';
								$html .='</div>';
							$html .='</div>';
							$html .='<div class="row">';
								$html .='<label class="col-md-3 box">Множитель гарантии, по завершению спин лимита:</label>';
								$html .='<div class="col-md-5 box">';
									$html .='<input type="text" class="form-control" name="win_koef" value="'.$win_koef['value'].'">';
									$html .='<input type="hidden" name="win_koef_id" value="'.$spin_koef['id'].'">';
								$html .='</div>';
							$html .='</div>';
							$html .='<div class="row">';
								$html .='<label class="col-md-3 box">Фиксированный спин лимит:</label>';
								$html .='<div class="col-md-5 box">';
									$payed_spins_fixed_ = ($payed_spins_fixed['value'] == 1)? 'checked="checked"' : '';
									$html .='<input type="checkbox" name="payed_spins_fixed" class="ibutton" value="true" value="'.$payed_spins_fixed['value'].'" '.$payed_spins_fixed_.'>';
									$html .='<input type="hidden" name="ibutton_id" value="'.$spin_koef['id'].'">';
								$html .='</div>';
							$html .='</div>';
							$html .='<div class="row">';
								$html .='<label class="col-md-3 box">Спин лимит:</label>';
								$html .='<div class="col-md-5 box">';
									$html .='<input type="text" class="form-control" name="payed_spins_val" value="'.$payed_spins_val['value'].'">';
									$html .='<input type="hidden" name="payed_spins_val_id" value="'.$spin_koef['id'].'">';
								$html .='</div>';
							$html .='</div>';
							$html .='<div class="row">';
								$html .='<label class="col-md-3 box"></label>';
								$html .='<div class="col-md-5 box">';
									$html .='<button type="submit" class="btn btn-primary sawe_00000" id="ajaxbutton_form_shop">ok</button>';
								$html .='</div>';
							$html .='</div>';
						$html .='</form>';
					echo $html;
				}
			}
			
			if(isset($_GET['reg'])){	
				if(isset($_GET['list'])){
					$iTotal = $db->query("SELECT * FROM `w_bonus` WHERE `id` IN (1,2,3)");			
					
						
					$html_div .= '<table class="table table-borderless table-striped" id="addRowExample" >';
					$html_div .= '<thead>';
						$html_div .= '<tr>';
							$html_div .= '<th></th>';
							$html_div .= '<th>Имя</th>';
							$html_div .= '<th>Минимальный депозит</th>';
							$html_div .= '<th>Процент</th>';
							$html_div .= '<th>Множитель</th>';
							$html_div .= '<th>Макс. бонус</th>';
							$html_div .= '<th>Вейджер</th>';
							$html_div .= '<th>Время жизни</th>';
							$html_div .= '<th>Время на активацию</th>';
							$html_div .= '<th>Статистика неакт| акт | оконч</th>';
							$html_div .= '<th>Действие</th>';
						$html_div .= '</tr>';
					$html_div .= '</thead>';
					$html_div .= '<tbody>';
					if($iTotal->num_rows > 0):
						while($row = $iTotal->fetch_array(MYSQLI_ASSOC)):		
							$count_statys_0 = $db->query("SELECT * FROM `w_bonus_user` WHERE `status` = '0' AND bonus_id='{$row['id']}'")->num_rows;
							$count_statys_1 = $db->query("SELECT * FROM `w_bonus_user` WHERE `status` = '1' AND bonus_id='{$row['id']}'")->num_rows;
							$count_statys_2 = $db->query("SELECT * FROM `w_bonus_user` WHERE `status` = '3' AND bonus_id='{$row['id']}'")->num_rows;
							$html_div .= '<tr data-id="'.$row['id'].'">
								<td><img src="/assets/_new-style/images/bonus/'.$row['pic'].'" width="25"></td>
								<td>'.$row['name'].'</td>
								<td>'.$row['min_deposit'].'</td>
								<td>'.$row['perc'].'</td>
								<td>'.$row['koef'].'</td>
								<td>'.$row['max_bon'].'</td>
								<td>'.$row['wager'].'</td>
								<td>'.$row['live_time'].'</td>
								<td>'.$row['activate_time'].'</td>
								<td>
									<span class="badge badge-success">'.$count_statys_0.'</span> 
									<span class="badge badge-info">'.$count_statys_1.'</span> 
									<span class="badge">'.$count_statys_2.'</span>
								</td>';
								$html_div .= '<td>';
									$html_div .= '<a class="editBonus" href="#"><i class="fas fa-edit" style="width: 16px; height: 16px; display: inline-block"></i></a>';
									$html_div .= '<a href="#"  onclick="on_sers('.$row['id'].');" class="btn btn-icon on_sers" title="">';
									if($row['is_reg'] == 1){
										$html_div .= '<i class="fa fa-toggle-on"  style="color:#28a745;" aria-hidden="false"></i>';
									}else{
										$html_div .= '<i class="fa fa-toggle-off" style="color: #c53227;" aria-hidden="true"></i>';
									}
									
									$html_div .= '</a>';
								$html_div .= '</td>';
							$html_div .= '</tr>';
						endwhile;
					else:
						$html_div .= '<tr>';
						$html_div .= '<td colspan="11">Нету бонусов</td>';
						$html_div .= '</tr>';
					endif;	
					$html_div .= '</tbody>';
					$html_div .= '</table>';
					echo $html_div;
				}
				if(isset($_GET['id'])){
					$id = (int)$_GET['id'];
					$iTotal = $db->query("SELECT * FROM `w_bonus` WHERE `id` = '{$id}'")->fetch_array(MYSQLI_ASSOC);
					if($iTotal['id'] == $id){
						echo json_encode([
							'success' => true,
							'bonus' => $iTotal
						]);
					}else{
						echo json_encode([
							'success' => false,
							'error' => 'ID 404'
						]);
					}
				}
				
				if(isset($_GET['action'])){
				
					$id = (int)$_POST['id'];							//	id
					$type = htmlspecialchars($_POST['type'],ENT_QUOTES);						//	dep
					$name = htmlspecialchars($_POST['name'],ENT_QUOTES);						//	250% Бонус за депозит
					$pic = htmlspecialchars($_POST['pic'],ENT_QUOTES);						//  250.png
					$min_deposit = (int)$_POST['min_deposit'];	//  10
					$perc = (int)$_POST['perc'];				//  250
					$max_bon = (int)$_POST['max_bon'];				//  50000
					$wager  =(int)$_POST['wager'];					//  1
					$activate_time = (int)$_POST['activate_time'];	//  3
					$desc = htmlspecialchars($_POST['desc'],ENT_QUOTES);						//  Получите в 3,5 раза больше денег до 50 000 рублей на игру в любимых слотах
				
					
					if($id == 0){
						$error = 'Ошибка приема данных';
					}
					if($name == ''){
						$error = 'Название не может быть пустым';
					}
					if($pic == ''){
						$error = 'Картинка не может быть пустым';
					}
					if($min_deposit == 0){
						$error = 'Минимальный депозит не может быть пустым';
					}
					if($perc == 0){
						$error = 'Процент не может быть пустым';
					}
					if($max_bon  == 0){
						$error = 'Макс. бонус не может быть пустым';
					}
					if($wager  == 0){
						$error = 'Вейджер не может быть пустым';
					}		
					if($activate_time  == 0){
						$error = 'Время на активацию не может быть пустым';
					}
					if($desc  == ''){
						$error = 'Описание не может быть пустым';
					}						
					if(isset($error)){
						echo'<div class="alert alert-danger"><center><strong>'.$error.'</strong></center></div>';
					}
					else{
						$run = $db->query("
								UPDATE 
									`w_bonus`
								SET 
									`type` = '{$type}', 
									`name` = '{$name}',
									`pic` = '{$pic}',
									`min_deposit` = '{$min_deposit}', 
									`perc` = '{$perc}', 
									`max_bon` = '{$max_bon}', 
									`wager` = '{$wager}', 
									`activate_time` = '{$activate_time}',
									`desc` = '{$desc}'
								WHERE 
									`id`='{$id}'
						");
						if($run == true){
							echo'<div class="alert alert-success"><center><strong>Данные успешно изменены<script>db_list();$("#bonusForm").modal(\'hide\');</script></strong></center></div>';
						}else{
							echo '<div class="alert alert-danger"><center><strong>Ошибка обновление База данных</strong></center></div>';
						}
						
					}
				}
			}
			if(isset($_GET['nondep'])){
				if(isset($_GET['list'])){
					$users = [
						'0' => 'Все',
						'1' => 'Старые',
						'2' => 'Новые'
					];
					$iTotal = $db->query("SELECT * FROM `w_bonus` WHERE `type` = 'nondep'");			
					
						
					$html_div .= '<table class="table table-borderless table-striped" id="addRowExample" >';
					$html_div .= '<thead>';
						$html_div .= '<tr>';
							$html_div .= '<th></th>';
							$html_div .= '<th>Имя</th>';
						
							$html_div .= '<th>Вейджер</th>';
							$html_div .= '<th>Время на активацию</th>';
							
							$html_div .= '<th>Статистика акт | оконч</th>';
							$html_div .= '<th>Действие</th>';
						$html_div .= '</tr>';
					$html_div .= '</thead>';
					$html_div .= '<tbody>';
					if($iTotal->num_rows > 0):
						while($row = $iTotal->fetch_array(MYSQLI_ASSOC)):		
							$count_statys_1 = $db->query("SELECT * FROM `w_bonus_user` WHERE `status` = '1' AND bonus_id='{$row['id']}'")->num_rows;
							$count_statys_2 = $db->query("SELECT * FROM `w_bonus_user` WHERE `status` = '3' AND bonus_id='{$row['id']}'")->num_rows;
							$html_div .= '<tr data-id="'.$row['id'].'">
								<td><img src="/assets/_new-style/images/bonus/'.$row['pic'].'" width="25"></td>
								<td>'.$row['name'].'</td>
								<td>'.$row['wager'].'</td>
								<td>'.$row['activate_time'].'</td>
								<td> 
									<span class="badge badge-info">'.$count_statys_1.'</span> 
									<span class="badge">'.$count_statys_2.'</span>
								</td>
								<td>';
									$html_div .= '<a class="editBonus" href="#"><i class="fas fa-edit" style="width: 16px; height: 16px; display: inline-block"></i></a>';
									$html_div .= '<a href="/result_bonus.php?admin=true&type=nondep&deleted=true&users='.$users_id.'&hash='.$hashs.'&id='.$row['id'].'" id="deleted" class="btn btn-icon" title="" data-toggle="tooltip" data-placement="top" data-method="DELETE" data-confirm-title="Please Confirm" data-confirm-text="Do you really want to delete the bonus?" data-confirm-delete="Yes, delete him!" data-original-title="Delete bonus"><i class="fas fa-trash" style="width: 16px; height: 16px; display: inline-block"></i></a>';
									$html_div .= '<a href="#"  onclick="on_sers('.$row['id'].');" class="btn btn-icon on_sers" title="">';
									if($row['is_reg'] == 1){
										$html_div .= '<i class="fa fa-toggle-on"  style="color:#28a745;" aria-hidden="false"></i>';
									}else{
										$html_div .= '<i class="fa fa-toggle-off" style="color: #c53227;" aria-hidden="true"></i>';
									}
									
									$html_div .= '</a>';
								$html_div .= '</td>';
							$html_div .= '</tr>';
						endwhile;
					else:
						$html_div .= '<tr>';
						$html_div .= '<td colspan="6">Нету бонусов</td>';
						$html_div .= '</tr>';
					endif;
					$html_div .= '</tbody>';
					$html_div .= '</table>';
					echo $html_div;
				}
			
				if(isset($_GET['add'])){
					$perc 			= (int)$_POST['perc'];
					$wager  		= (int)$_POST['wager'];
					$activate_time 	= (int)$_POST['activate_time'];
					$is_loop 		= (isset($_POST['is_loop']) ? 1:'NULL');
					$type 			= htmlspecialchars($_POST['type'],ENT_QUOTES);
					$name 			= htmlspecialchars($_POST['name'],ENT_QUOTES);
					$start_date 	= htmlspecialchars($_POST['start_date'],ENT_QUOTES);
					$end_date 		= htmlspecialchars($_POST['end_date'],ENT_QUOTES);
					$end_time 		= '';
					$num_deposit 	= htmlspecialchars($_POST['num_deposit'],ENT_QUOTES);	
					$start_time		= '';// 2020-04-01
					$desc		    = htmlspecialchars($_POST['desc'],ENT_QUOTES);// 2020-04-01
					if($name == ''){
						$error = 'Название не может быть пустым';
					}
				
					if($perc == 0){
						$error = 'Процент не может быть пустым';
					}
					if($wager  == ''){
						$error = 'Вейджер не может быть пустым';
					}		
					if($activate_time  == 0){
						$error = 'Время на активацию не может быть пустым';
					}
					if($desc  == ''){
						$error = 'Описание не может быть пустым';
					}		
					if($start_date  == ''){
						$error = 'Время начала не может быть пустым';
					}
					if($end_date  == ''){
						$error = 'Время завершения не может быть пустым';
					}				
					if(isset($error)){
						echo'<div class="alert alert-danger"><center><strong>'.$error.'</strong></center></div>';
					}
					else{
					$file = @$_FILES['file'];
					$error = $success = '';
					 
					// Разрешенные расширения файлов.
					$allow = array('jpg', 'jpeg', 'png', 'gif');
					 
					// Директория, куда будут загружаться файлы.
					$path = $_SERVER["DOCUMENT_ROOT"] . '/assets/_new-style/images/bonus/';
					 
					if (!empty($file)) {
						// Проверим на ошибки загрузки.
						if (!empty($file['error']) || empty($file['tmp_name'])) {
							switch (@$file['error']) {
								case 1:
								case 2: $error = 'Превышен размер загружаемого файла.'; break;
								case 3: $error = 'Файл был получен только частично.'; break;
								case 4: $error = 'Файл не был загружен.'; break;
								case 6: $error = 'Файл не загружен - отсутствует временная директория.'; break;
								case 7: $error = 'Не удалось записать файл на диск.'; break;
								case 8: $error = 'PHP-расширение остановило загрузку файла.'; break;
								case 9: $error = 'Файл не был загружен - директория не существует.'; break;
								case 10: $error = 'Превышен максимально допустимый размер файла.'; break;
								case 11: $error = 'Данный тип файла запрещен.'; break;
								case 12: $error = 'Ошибка при копировании файла.'; break;
								default: $error = 'Файл не был загружен - неизвестная ошибка.'; break;
							}
						} elseif ($file['tmp_name'] == 'none' || !is_uploaded_file($file['tmp_name'])) {
							$error = 'Не удалось загрузить файл.';
						} else {
							
							
							$extension = pathinfo($file['name'], PATHINFO_EXTENSION);
							$namedd = md5(time()).'.'.$extension;

							$parts = pathinfo($namedd);
							if (empty($namedd) || empty($parts['extension'])) {
								$error = 'Не удалось загрузить файл.';
							} elseif (!empty($allow) && !in_array(strtolower($parts['extension']), $allow)) {
								$error = 'Недопустимый тип файла';
							} else {
								// Перемещаем файл в директорию.
								if (move_uploaded_file($file['tmp_name'], $path . $namedd)) {
									// Далее можно сохранить название файла в БД и т.п.
									$success = 'Файл «' . $namedd . '» успешно загружен.';
								} else {
									$error = 'Не удалось загрузить файл.';
								}
							}
						}
					 
						// Выводим сообщение о результате загрузки.
						if (!empty($success)) {
								$run = $db->query("INSERT INTO `w_bonus` 
										SET 
											`type` = '{$type}', 
											`name` = '{$name}', 
											`pic` = '{$namedd}', 
											`perc` = '{$perc}', 
											`wager` = '{$wager}', 
											`activate_time` = '{$activate_time}', 
											`start_date` = '{$start_date}', 
											`end_date` = '{$end_date}', 
											`num_deposit` = '{$num_deposit}', 
											`start_time` = '{$start_time}', 
											`is_loop` = '{$is_loop}', 
											`end_time` = '{$end_time}',
											`desc` = '{$desc}',										
											`is_reg` = '0'
									");
						
						
						if($run == true){
							echo'<div class="alert alert-success"><center><strong> Успешно добавлоена <script> db_list();$("#bonusForm").modal(\'hide\');</script></strong></center></div>';
						}else{
							echo '<div class="alert alert-danger"><center><strong>Ошибка добавление в базу</strong></center></div>';
						}	
							} else {
		echo '<div class="alert alert-danger"><center><strong>' . $error . '</strong></center></div>';
	}
}
					}
				}
				if(isset($_GET['action'])){
				
					$id = (int)$_POST['id'];							//	id
					$type = htmlspecialchars($_POST['type'],ENT_QUOTES);						//	dep
					$name = htmlspecialchars($_POST['name'],ENT_QUOTES);						//	250% Бонус за депозит
					
					

					//  250.png
					//$min_deposit = (int)$_POST['min_deposit'];	//  10
					$perc = (int)$_POST['perc'];				//  250
					//$max_bon = (int)$_POST['max_bon'];				//  50000
					$wager  =(int)$_POST['wager'];					//  1
					$activate_time = (int)$_POST['activate_time'];	//  3
					$desc = htmlspecialchars($_POST['desc'],ENT_QUOTES);						//  Получите в 3,5 раза больше денег до 50 000 рублей на игру в любимых слотах
					$start_date = htmlspecialchars($_POST['start_date'],ENT_QUOTES);// 2017-04-01
					$end_date = htmlspecialchars($_POST['end_date'],ENT_QUOTES);// 2020-04-01
				
					$num_deposit = (int)$_POST['num_deposit'];			// 2
					$is_loop = (isset($_POST['is_loop']) ? 1:0);				
					$users = 0;
					
					if($id == 0){
						$error = 'Ошибка приема данных';
					}
					if($name == ''){
						$error = 'Название не может быть пустым';
					}
					
			
					if($perc == 0){
						$error = 'Процент не может быть пустым';
					}
					
					if($wager  == 0){
						$error = 'Вейджер не может быть пустым';
					}		
					if($activate_time  == 0){
						$error = 'Время на активацию не может быть пустым';
					}
					if($desc  == ''){
						$error = 'Описание не может быть пустым';
					}						
					if(isset($error)){
						echo'<div class="alert alert-danger"><center><strong>'.$error.'</strong></center></div>';
					}
					else{
						$file = @$_FILES['file'];
					$error = $success = '';
					 
					// Разрешенные расширения файлов.
					$allow = array('jpg', 'jpeg', 'png', 'gif');
					 
					// Директория, куда будут загружаться файлы.
					$path = $_SERVER["DOCUMENT_ROOT"] . '/assets/_new-style/images/bonus/';
					 
						if (!empty($file)) {
							// Проверим на ошибки загрузки.
							if (!empty($file['error']) || empty($file['tmp_name'])) {
								switch (@$file['error']) {
									case 1:
									case 2: $error = 'Превышен размер загружаемого файла.'; break;
									case 3: $error = 'Файл был получен только частично.'; break;
									case 4: $error = 'Файл не был загружен.'; break;
									case 6: $error = 'Файл не загружен - отсутствует временная директория.'; break;
									case 7: $error = 'Не удалось записать файл на диск.'; break;
									case 8: $error = 'PHP-расширение остановило загрузку файла.'; break;
									case 9: $error = 'Файл не был загружен - директория не существует.'; break;
									case 10: $error = 'Превышен максимально допустимый размер файла.'; break;
									case 11: $error = 'Данный тип файла запрещен.'; break;
									case 12: $error = 'Ошибка при копировании файла.'; break;
									default: $error = 'Файл не был загружен - неизвестная ошибка.'; break;
								}
							} elseif ($file['tmp_name'] == 'none' || !is_uploaded_file($file['tmp_name'])) {
								$error = 'Не удалось загрузить файл.';
							} else {
								$extension = pathinfo($file['name'], PATHINFO_EXTENSION);
								$namedd = md5(time()).'.'.$extension;

								$parts = pathinfo($namedd);
								if (empty($namedd) || empty($parts['extension'])) {
									$error = 'Не удалось загрузить файл.';
								} elseif (!empty($allow) && !in_array(strtolower($parts['extension']), $allow)) {
									$error = 'Недопустимый тип файла';
								} else {
									// Перемещаем файл в директорию.
									if (move_uploaded_file($file['tmp_name'], $path . $namedd)) {
										// Далее можно сохранить название файла в БД и т.п.
										$success = 'Файл «' . $namedd . '» успешно загружен.';
									} else {
										$error = 'Не удалось загрузить файл.';
									}
								}
							}
							if (!empty($success)) {
						
								$run = $db->query("
									UPDATE 
										`w_bonus`
									SET 
										`type` = '{$type}', 
										`name` = '{$name}',
										`pic` = '{$namedd}',
										`perc` = '{$perc}', 
										`wager` = '{$wager}', 
										`activate_time` = '{$activate_time}',
										`desc` = '{$desc}',
										`start_date` = '{$start_date}',
										`end_date` = '{$end_date}',
										`num_deposit` = '{$num_deposit}',
										`is_loop` = '{$is_loop}',
										`users` = '{$users}'
										

									WHERE `id`='{$id}'");
							}else{
								$run = false;
								echo '<div class="alert alert-danger"><center><strong>' . $error . '</strong></center></div>';
							}
						}else{
							$run = $db->query("
								UPDATE 
									`w_bonus`
								SET 
									`type` = '{$type}', 
									`name` = '{$name}',
									`perc` = '{$perc}', 
									`wager` = '{$wager}', 
									`activate_time` = '{$activate_time}',
									`desc` = '{$desc}',
									`start_date` = '{$start_date}',
									`end_date` = '{$end_date}',
									`num_deposit` = '{$num_deposit}',
									`is_loop` = '{$is_loop}',
									`users` = '{$users}'
									

								WHERE 
									`id`='{$id}'
						");
						}
						
						
						if($run == true){
							echo'<div class="alert alert-success"><center><strong>Данные успешно изменены<script>db_list();$("#bonusForm").modal(\'hide\');</script></strong></center></div>';
						}else{
							echo '<div class="alert alert-danger"><center><strong>Ошибка обновление База данных</strong></center></div>';
						}
						
					}	
				}					
			}
			if(isset($_GET['deleted'])){
				$id = (int)$_GET['id'];
				$type = $_GET['type'];
				$iTotal = $db->query("SELECT * FROM `w_bonus` WHERE `id` = '{$id}'")->fetch_array(MYSQLI_ASSOC);	
				if($iTotal['id'] == $id){
					if($iTotal['is_reg'] == 0){
						$run = $db->query("
							DELETE FROM 
								`w_bonus` 
							WHERE 
								`id` = '{$id}'
						");
						if($run == true){
							$txt = 'Bonus successfully deleted';
							$status = 1;
						}else{
							$txt = 'The bonus is not deleted because it is not allowed to be deleted';
							$status = 0;
						}
					}
				    else{
						$txt = 'You can\'t delete the bonus because it is not allowed to be deleted';
						$status = 0;
					}
				}
				else{
					$txt = 'You can\'t delete the bonus because it doesn\'t exist by ID:'.$id;
					$status = 0;
				}
				Header("HTTP/1.0 200 OK");
				header('Location: /backend/bonus/'.$type.'?txt='.$txt.'&status='.$status);
				exit();
			}
			if(isset($_GET['dep'])){
				if(isset($_GET['list'])){
					$users = [
						'0' => 'Все',
						'1' => 'Старые',
						'2' => 'Новые'
					];
					$iTotal = $db->query("SELECT * FROM `w_bonus` WHERE `type` = 'dep' AND `is_reg` = 0");			
					
						
					$html_div .= '<table class="table table-borderless table-striped" id="addRowExample" >';
					$html_div .= '<thead>';
						$html_div .= '<tr>';
							$html_div .= '<th></th>';
							$html_div .= '<th>Имя</th>';
							$html_div .= '<th>Минимальный депозит</th>';
							$html_div .= '<th>Процент</th>';
							$html_div .= '<th>Множитель</th>';
							$html_div .= '<th>Макс. бонус</th>';
							$html_div .= '<th>Вейджер</th>';
							$html_div .= '<th>Время на активацию</th>';
							$html_div .= '<th>Игроки</th>';
							$html_div .= '<th>Статистика неакт| акт | оконч</th>';
							$html_div .= '<th>Действие</th>';
						$html_div .= '</tr>';
					$html_div .= '</thead>';
					$html_div .= '<tbody>';
					if($iTotal->num_rows > 0):
						while($row = $iTotal->fetch_array(MYSQLI_ASSOC)):		
							$count_statys_0 = $db->query("SELECT * FROM `w_bonus_user` WHERE `status` = '0' AND bonus_id='{$row['id']}'")->num_rows;
							$count_statys_1 = $db->query("SELECT * FROM `w_bonus_user` WHERE `status` = '1' AND bonus_id='{$row['id']}'")->num_rows;
							$count_statys_2 = $db->query("SELECT * FROM `w_bonus_user` WHERE `status` = '3' AND bonus_id='{$row['id']}'")->num_rows;
							$html_div .= '<tr data-id="'.$row['id'].'">
								<td><img src="/assets/_new-style/images/bonus/'.$row['pic'].'" width="25"></td>
								<td>'.$row['name'].'</td>
								<td>'.$row['min_deposit'].'</td>
								<td>'.$row['perc'].'</td>
								<td>'.$row['koef'].'</td>
								<td>'.$row['max_bon'].'</td>
								<td>'.$row['wager'].'</td>
								<td>'.$row['activate_time'].'</td>
								<td>'.$users[$row['users']].'</td>
								<td>
									<span class="badge badge-success">'.$count_statys_0.'</span> 
									<span class="badge badge-info">'.$count_statys_1.'</span> 
									<span class="badge">'.$count_statys_2.'</span>
								</td>
								<td>
									<a class="editBonus" href="#"><i class="fas fa-edit" style="width: 16px; height: 16px; display: inline-block"></i></a>
									<a href="/result_bonus.php?admin=true&deleted=true&type=dep&users='.$users_id.'&hash='.$hashs.'&id='.$row['id'].'" id="deleted" class="btn btn-icon" title="" data-toggle="tooltip" data-placement="top" data-method="DELETE" data-confirm-title="Please Confirm" data-confirm-text="Do you really want to delete the bonus?" data-confirm-delete="Yes, delete him!" data-original-title="Delete bonus"><i class="fas fa-trash" style="width: 16px; height: 16px; display: inline-block"></i></a>
								</td>
							</tr>';
						endwhile;
					else:
						$html_div .= '<tr>';
						$html_div .= '<td colspan="11">Нету бонусов</td>';
						$html_div .= '</tr>';
					endif;		
					$html_div .= '</tbody>';
					$html_div .= '</table>';
					echo $html_div;
				}
			
				if(isset($_GET['add'])){
					
				
					
					$type = htmlspecialchars($_POST['type'],ENT_QUOTES);
					$name = htmlspecialchars($_POST['name'],ENT_QUOTES);
					$pic = '';
					$min_deposit = (int)$_POST['min_deposit'];
					$perc = (int)$_POST['perc'];
					$max_bon = (int)$_POST['max_bon'];
					$wager  =(int)$_POST['wager'];
					$activate_time = (int)$_POST['activate_time'];
					$desc = htmlspecialchars($_POST['desc'],ENT_QUOTES);
					$start_date = htmlspecialchars($_POST['start_date'],ENT_QUOTES);
					$end_date = htmlspecialchars($_POST['end_date'],ENT_QUOTES);
					$end_time = '';
					$num_deposit = htmlspecialchars($_POST['num_deposit'],ENT_QUOTES);	
					$is_loop = (isset($_POST['is_loop']) ? 1:'0');
					$users = (int)$_POST['users'];
					$start_time = '';// 2020-04-01
					
					if($name == ''){
						$error = 'Название не может быть пустым';
					}
				
					if($min_deposit == 0){
						$error = 'Минимальный депозит не может быть пустым';
					}
					if($perc == 0){
						$error = 'Процент не может быть пустым';
					}
					if($max_bon  == 0){
						$error = 'Макс. бонус не может быть пустым';
					}
					if($wager  == 0){
						$error = 'Вейджер не может быть пустым';
					}		
					if($activate_time  == 0){
						$error = 'Время на активацию не может быть пустым';
					}
					if($desc  == ''){
						$error = 'Описание не может быть пустым';
					}		
					if($start_date  == ''){
						$error = 'Время начала не может быть пустым';
					}
					if($end_date  == ''){
						$error = 'Время завершения не может быть пустым';
					}		
									
					if(isset($error)){
						echo'<div class="alert alert-danger"><center><strong>'.$error.'</strong></center></div>';
					}
					else{
						$file = @$_FILES['file'];
$error = $success = '';
 
// Разрешенные расширения файлов.
$allow = array('jpg', 'jpeg', 'png', 'gif');
 
// Директория, куда будут загружаться файлы.
$path = $_SERVER["DOCUMENT_ROOT"] . '/assets/_new-style/images/bonus/';
 
if (!empty($file)) {
	// Проверим на ошибки загрузки.
	if (!empty($file['error']) || empty($file['tmp_name'])) {
		switch (@$file['error']) {
			case 1:
			case 2: $error = 'Превышен размер загружаемого файла.'; break;
			case 3: $error = 'Файл был получен только частично.'; break;
			case 4: $error = 'Файл не был загружен.'; break;
			case 6: $error = 'Файл не загружен - отсутствует временная директория.'; break;
			case 7: $error = 'Не удалось записать файл на диск.'; break;
			case 8: $error = 'PHP-расширение остановило загрузку файла.'; break;
			case 9: $error = 'Файл не был загружен - директория не существует.'; break;
			case 10: $error = 'Превышен максимально допустимый размер файла.'; break;
			case 11: $error = 'Данный тип файла запрещен.'; break;
			case 12: $error = 'Ошибка при копировании файла.'; break;
			default: $error = 'Файл не был загружен - неизвестная ошибка.'; break;
		}
	} elseif ($file['tmp_name'] == 'none' || !is_uploaded_file($file['tmp_name'])) {
		$error = 'Не удалось загрузить файл.';
	} else {
		
		
		$extension = pathinfo($file['name'], PATHINFO_EXTENSION);
		$namedd = md5(time()).'.'.$extension;

		$parts = pathinfo($namedd);
		if (empty($namedd) || empty($parts['extension'])) {
			$error = 'Не удалось загрузить файл.';
		} elseif (!empty($allow) && !in_array(strtolower($parts['extension']), $allow)) {
			$error = 'Недопустимый тип файла';
		} else {
			// Перемещаем файл в директорию.
			if (move_uploaded_file($file['tmp_name'], $path . $namedd)) {
				// Далее можно сохранить название файла в БД и т.п.
				$success = 'Файл «' . $namedd . '» успешно загружен.';
			} else {
				$error = 'Не удалось загрузить файл.';
			}
		}
	}
 
	// Выводим сообщение о результате загрузки.
	if (!empty($success)) {
			$run = $db->query("
								INSERT INTO 
									`w_bonus`
								SET 
									`type` = '{$type}', 
									`name` = '{$name}',
									`pic` = '{$namedd}',
									`min_deposit` = '{$min_deposit}', 
									`perc` = '{$perc}', 
									`max_bon` = '{$max_bon}', 
									`wager` = '{$wager}', 
									`activate_time` = '{$activate_time}',
									`desc` = '{$desc}',
									`start_date` = '{$start_date}',
									`end_date` = '{$end_date}',
									`num_deposit` = '{$is_loop}',
									`start_time` = '{$start_time}',
									`is_loop` = '{$is_loop}',
									`users` = '{$users}',
									`end_time` = '{$end_time}',
									`is_reg` = '0'
						");
						if($run == true){
							echo'<div class="alert alert-success"><center><strong> Успешно добавлоена '.$success.'<script> db_list();$("#bonusForm").modal(\'hide\');</script></strong></center></div>';
						}else{
							echo '<div class="alert alert-danger"><center><strong>Ошибка добавление в базу</strong></center></div>';
						}		
	} else {
		echo '<div class="alert alert-danger"><center><strong>' . $error . '</strong></center></div>';
	}
}
						
					}
				}
				if(isset($_GET['action'])){
				
					$id = (int)$_POST['id'];							//	id
					$type = htmlspecialchars($_POST['type'],ENT_QUOTES);						//	dep
					$name = htmlspecialchars($_POST['name'],ENT_QUOTES);						//	250% Бонус за депозит
										//  250.png
					$min_deposit = (int)$_POST['min_deposit'];	//  10
					$perc = (int)$_POST['perc'];				//  250
					$max_bon = (int)$_POST['max_bon'];				//  50000
					$wager  =(int)$_POST['wager'];					//  1
					$activate_time = (int)$_POST['activate_time'];	//  3
					$desc = htmlspecialchars($_POST['desc'],ENT_QUOTES);						//  Получите в 3,5 раза больше денег до 50 000 рублей на игру в любимых слотах
					$start_date = htmlspecialchars((isset($_POST['start_date'])?$_POST['start_date']:'0' ),ENT_QUOTES);// 2017-04-01
					$end_date = htmlspecialchars((isset($_POST['end_date'])?$_POST['end_date']:'0' ),ENT_QUOTES);// 2020-04-01
					$start_time = htmlspecialchars((isset($_POST['start_time'])?$_POST['start_time']:'0' ),ENT_QUOTES);// 2020-04-01
					$end_time = '';// 2020-04-01
					$num_deposit = (int)$_POST['num_deposit'];			// 2
					$is_loop = (isset($_POST['is_loop']) ? 1:'0');				
					$users = (int)$_POST['users'];
					
					
					if($id == 0){
						$error = 'Ошибка приема данных';
					}
					if($name == ''){
						$error = 'Название не может быть пустым';
					}
				
					if($min_deposit == 0){
						$error = 'Минимальный депозит не может быть пустым';
					}
					if($perc == 0){
						$error = 'Процент не может быть пустым';
					}
					if($max_bon  == 0){
						$error = 'Макс. бонус не может быть пустым';
					}
					if($wager  == 0){
						$error = 'Вейджер не может быть пустым';
					}		
					if($activate_time  == 0){
						$error = 'Время на активацию не может быть пустым';
					}
					if($desc  == ''){
						$error = 'Описание не может быть пустым';
					}						
					if(isset($error)){
						echo'<div class="alert alert-danger"><center><strong>'.$error.'</strong></center></div>';
					}
					else{
							$file = @$_FILES['file'];
					$error = $success = '';
					 
					// Разрешенные расширения файлов.
					$allow = array('jpg', 'jpeg', 'png', 'gif');
					 
					// Директория, куда будут загружаться файлы.
					$path = $_SERVER["DOCUMENT_ROOT"] . '/assets/_new-style/images/bonus/';
					 
						if (!empty($file)) {
							// Проверим на ошибки загрузки.
							if (!empty($file['error']) || empty($file['tmp_name'])) {
								switch (@$file['error']) {
									case 1:
									case 2: $error = 'Превышен размер загружаемого файла.'; break;
									case 3: $error = 'Файл был получен только частично.'; break;
									case 4: $error = 'Файл не был загружен.'; break;
									case 6: $error = 'Файл не загружен - отсутствует временная директория.'; break;
									case 7: $error = 'Не удалось записать файл на диск.'; break;
									case 8: $error = 'PHP-расширение остановило загрузку файла.'; break;
									case 9: $error = 'Файл не был загружен - директория не существует.'; break;
									case 10: $error = 'Превышен максимально допустимый размер файла.'; break;
									case 11: $error = 'Данный тип файла запрещен.'; break;
									case 12: $error = 'Ошибка при копировании файла.'; break;
									default: $error = 'Файл не был загружен - неизвестная ошибка.'; break;
								}
							} elseif ($file['tmp_name'] == 'none' || !is_uploaded_file($file['tmp_name'])) {
								$error = 'Не удалось загрузить файл.';
							} else {
								$extension = pathinfo($file['name'], PATHINFO_EXTENSION);
								$namedd = md5(time()).'.'.$extension;

								$parts = pathinfo($namedd);
								if (empty($namedd) || empty($parts['extension'])) {
									$error = 'Не удалось загрузить файл.';
								} elseif (!empty($allow) && !in_array(strtolower($parts['extension']), $allow)) {
									$error = 'Недопустимый тип файла';
								} else {
									// Перемещаем файл в директорию.
									if (move_uploaded_file($file['tmp_name'], $path . $namedd)) {
										// Далее можно сохранить название файла в БД и т.п.
										$success = 'Файл «' . $namedd . '» успешно загружен.';
									} else {
										$error = 'Не удалось загрузить файл.';
									}
								}
							}
							if (!empty($success)) {
						
								$run = $db->query("
									UPDATE 
										`w_bonus`
									SET 
										`type` = '{$type}', 
										`name` = '{$name}',
										`pic` = '{$namedd}',
										`perc` = '{$perc}', 
										`wager` = '{$wager}', 
										`activate_time` = '{$activate_time}',
										`desc` = '{$desc}',
										`start_date` = '{$start_date}',
										`end_date` = '{$end_date}',
										`num_deposit` = '{$num_deposit}',
										`is_loop` = '{$is_loop}',
										`users` = '{$users}'
										

									WHERE `id`='{$id}'");
							}else{
								$run = false;
								echo '<div class="alert alert-danger"><center><strong>' . $error . '</strong></center></div>';
							}
						}else{
							$run = $db->query("
								UPDATE 
									`w_bonus`
								SET 
									`type` = '{$type}', 
									`name` = '{$name}',
									`perc` = '{$perc}', 
									`wager` = '{$wager}', 
									`activate_time` = '{$activate_time}',
									`desc` = '{$desc}',
									`start_date` = '{$start_date}',
									`end_date` = '{$end_date}',
									`num_deposit` = '{$num_deposit}',
									`is_loop` = '{$is_loop}',
									`users` = '{$users}'
									

								WHERE 
									`id`='{$id}'
						");
						}
						
						
						if($run == true){
							echo'<div class="alert alert-success"><center><strong>Данные успешно изменены<script>db_list();$("#bonusForm").modal(\'hide\');</script></strong></center></div>';
						}else{
							echo '<div class="alert alert-danger"><center><strong>Ошибка обновление База данных</strong></center></div>';
						}
					}
						
					}
				}	
				
		}else{
			echo 'off';
		}
	}
	
	if(isset($_GET['reg_bonus']) ){
		if(isset($_POST['users']) && isset($_POST['hash']) && isset($_POST['id'])){
			$users = (int)$_POST['users'];
			$hashs = $_POST['hash'];
			
			if(md5($users.':9358741') == $hashs){
				$user_info = $db->query("select * from w_users where id='{$users}'")->fetch_array(MYSQLI_ASSOC);
				
				$user_id = $user_info['id'];
				$login = $user_info['username'];
				$answer = [
					'status' => false
				];
				if($login){
					$bon_id = isset($_POST['id'])? intval($_POST['id']) : false;
					if(!$bon_id){
						$answer = [
							'status' => false,
							'error' => 'Не указан ID'
						];
					}else{
					
						$bonus = new bonus($bon_id);
						
						if($bonus->info['wager'] > 0 && $user_info['wager'] > 0){
							$answer = [
								'status' => false,
								'error'  => 'Нужно проставить вейджер'
							];
						}elseif($bonus->info['type'] == 'vip' && $db->query("select * from w_bonus join w_bonus_user on (w_bonus.id=w_bonus_user.bonus_id) where type='vip' and user_id='$user_id' and status='1'")->num_rows){
							$answer = [
								'status' => false
							];
						}elseif($bonus->info['type'] == 'return' && $db->query("select * from w_bonus join w_bonus_user on (w_bonus.id=w_bonus_user.bonus_id) where type='return' and user_id=$user_id and status='1'")->num_rows){
							$answer = [
								'status' => false
							];
						}elseif($bonus->info['type'] == 'freespin' && $db->query("select * from w_bonus join w_bonus_user on (w_bonus.id=w_bonus_user.bonus_id) where type='freespin' and user_id=$user_id and status='1'")->num_rows > 0){
							$answer = [
								'status' => false
							];
						}elseif($bonus->info['type'] == 'nondep'){
							if ($bonus->activate()){				
								$answer = [
									'status'      => false,
									'is_deposit'  => false
								];
							}
						}elseif($bonus->info['type'] == 'freespin' && $bonus->info['min_deposit'] == 0){
							if ($bonus->activate()){
								$answer = [
									'status'      => true,
									'is_deposit'  => false
								];
							}
						}else{
							if($bonus->info['num_deposit'] > 0){
								$count_deposit = $db->query("select * from w_transactions join w_users where w_users.id = $user_id and user_id = $user_id AND w_transactions.status = 2 and system not like 'bonus%'")->num_rows;
								
								if($count_deposit != $bonus->info['num_deposit'] -1 ){
									$answer = [
										'status' => false,
										'error'  => "Рановато!!! Для активации этого бонуса вам нужно сделать еще ".($bonus->info['num_deposit']-$count_deposit-1)." пополнений!!!"
									];
								}
							}
							if(!isset($answer["error"])){  
							
								$answer = [
									'status' 	 => true,
									'bonus_id'	 => $bon_id,
									'image' 	 => "/image/bonus/".$bonus->info['pic'],
									'title'		 => $bonus->info['name'],
									'winners' 	 => $bonus->fill_bot_stat($bon_id),
									'is_deposit' => true,
									'is_vip'     => 0,
									'deposit'    => $bonus->info['min_deposit']." рублей",
								];
							}
						}
					}  
				} 
				echo json_encode($answer);	
			}
		}else{
			echo json_encode(['error'=>'nothing found']);	
		}
	}