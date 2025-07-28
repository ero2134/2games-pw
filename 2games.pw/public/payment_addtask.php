<?php
	include("config_db.php");
	
	
	$pay = $db->query("SELECT * FROM `w_payment_systems` where type='resul_kassa'")->fetch_array(MYSQLI_ASSOC);
	if(!isset($_GET['payment'])){	
		if ((int)$_POST["amount"] < $pay['min_amount']){	
			$info = [
				'error'   => "Минимальная сумма вывода {$pay['min_amount']}",
				'message' => "Минимальная сумма вывода {$pay['min_amount']}",
				'success' => false
			];
		} 
		else 
		{	
			if((int)$_POST["amount"] > $pay['max_amount']){
				$info = [
					'error'=> "Максимальная сумма вывода {$pay['max_amount']}",
					'message'=> "Максимальная сумма вывода {$pay['max_amount']}",
					'success'=> false
				];
				
			}else{
				$result = $db->query("SELECT * FROM `w_users` where id='".htmlspecialchars($_POST["users_id"],ENT_QUOTES)."'")->fetch_array(MYSQLI_ASSOC);
				if($result['wager'] > 0){	
					$info = [
						'error'   => $result['wager']." bonuses are not wagered.",
						'message' => $result['wager']." bonuses are not wagered.",
						'success' => false
					];
				}
				else
				{
					if ($result['balance'] >= (int)$_POST["amount"]){
						$inv_code = generator('on', 'off', 'on', 'off', 10);
						$w_pay_list = $db->query("SELECT * FROM `w_pay_list` where id_='".htmlspecialchars($_POST["system"],ENT_QUOTES)."'")->fetch_array(MYSQLI_ASSOC);
						$rus = $db->query("INSERT INTO w_transactions (`user_id`,`payeer_id`,`system`,`type`,`summ`,`status`,`returned`,`ip`) VALUES 
						(
						'".htmlspecialchars($_POST["users_id"],ENT_QUOTES)."',
						'".$inv_code."',
						'".$w_pay_list['title'].":".htmlspecialchars($_POST["account"],ENT_QUOTES).":".(isset($_POST["dzen"])?$_POST["dzen"]:'RUB')."',
						'out','".(int)$_POST["amount"]."',
						'0',
						'0',
						'".getip()."'
						)");
						$db->query("UPDATE w_users SET `balance` = `balance`-'".(int)$_POST["amount"]."' where id = '".htmlspecialchars($_POST["users_id"],ENT_QUOTES)."'");
						if($rus == true){
							
							$info = [
								'message' => "The withdrawal request was successfully submitted",
								'success' => true
							];
						}else{
							$info = [
								'error'   => "db ERROR!",
								'message' => "db ERROR!",
								'success' => false
							];
						}
					} 
					else 
					{
						$info = [
							'error'   => "No money in the account!",
							'message' => "No money in the account!",
							'success' => false
						];
					}
				}
			}
		}
		echo json_encode($info);
	}else{
	if(isset($_GET['users']) && isset($_GET['hash'])){
			$users = (int)$_GET['users'];
			$hashs = $_GET['hash'];
			if(md5($users.':9358741') == $hashs){
				$de = 0;
							if(check_mobile_device()){
				$ty = 3;
			}else{
				$ty = 5;
			}
					$count = $db->query("SELECT * FROM `w_pay_list` WHERE `type` = 'resul' AND status = '1'")->num_rows;
				$payment__tooltip  ='
					<div class="payment__tooltip collapse">
					<div class="payment__tooltip_inner">
						<div class="pay-tooltip pay-tooltip_withphone">
							<div class="pay-tooltip__note" style="display: none">
								<i class="fa fa-exclamation-triangle"></i> <span class="error__info"></span>
							</div>
							<div class="pay-tooltip__input input">
								<input class="pay-tooltip__number_inner input__inner js-input__inner" maxlength="14" name="account" placeholder="Реквизиты" required="required" type="text">
							</div>
							<div class="pay-tooltip__input input">
								<input class="input__inner js-input__inner" name="amount" placeholder="Сумма" required="" type="text">
							</div>
							<div class="modal__error" style="display:none">
								<div class="modal__note_important"></div>
							</div>
							<div class="pay-tooltip__note_ok" style="display: none">
								<i class="fa fa-exclamation-triangle"></i> <span class="error__info"></span>
							</div>
							<div class="pay-tooltip__input input">
								<button class="pay-tooltip__button button button_color_orange btn_submit">Отправить</button>
							</div>
							<div class="pay-tooltip__input class_images_pay"></div>
						</div>
					</div>
				</div>';
				$pay_ = '';
				
					$sql = $db->query("SELECT * FROM `w_pay_list` WHERE `type` = 'resul' AND status = '1'");
					while($did = $sql->fetch_array(MYSQLI_ASSOC)){
					if($de++ %$ty ==0){
						$rus_0 = "<form method=\"POST\"  class=\"payment-form\" action=\"/payment_addtask.php\"><input type=\"hidden\" name=\"operation\" value=\"2\"><input type=\"hidden\" name=\"users_id\" value=\"{$users}\"><input type=\"hidden\" name=\"bonus_id\" class=\"deposit-bonus-id\"><div class=\"payment__row\"><div class=\"payment__row-inner\">";
					}	else{
						$rus_0 = "";
					}	
					$d = "<label class=\"payment__item payitem\" data-paysys=\"{$did['id_']}\" url_img=\"{$did['img']}\"><input type=\"radio\" name=\"system\" id=\"system\" value=\"{$did['id_']}\" style=\"display:none\" onClick='payitem({$did['id_']});'><div class=\"payitem__img\"><div class=\"payitem__img_inner\"><img src=\"{$did['img']}\" style=\"width: 85px;\" /></div></div><div class=\"payitem__footer\"><p class=\"payitem__note payitem__note_small\">Лимит:</p><p class=\"payitem__note\">{$pay['min_amount']} - {$pay['max_amount']} {$pay['currency']}</p></div></label>";
					if($de %$ty ==0 || $de == $count){
						$rus_1 = "</div></div>{$payment__tooltip}</form>";
					}else{
						$rus_1 = "";
					}
					$pay_ .= $rus_0.$d.$rus_1;
				}
				echo json_encode([
					'status' => true,
					'data' => $pay_
				]);
			}else{
				echo json_encode([
					'status' => false,
					'data' => 'GET HEAD FALSE'
				]);
			}
		}else{
			echo json_encode([
				'status' => false,
				'data' => 'GET NON FOUND'
			]);
		}
	}