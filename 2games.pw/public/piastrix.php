<?php
	include("config_db.php");
	
	$pay = $db->query("SELECT * FROM `w_payment_systems` where type='resul_iastrix'")->fetch_array(MYSQLI_ASSOC);
$bonusId  = isset( $_REQUEST['bonus_id'] ) ? $_REQUEST['bonus_id'] : false;
$currency = '643';
	if(isset($_POST["money"]) && isset($_POST['users_id']) && isset($_POST['system'])){
		$psystem  = isset( $_POST['system'] ) ? $_POST['system'] : false;

		$info = [
			'isFreekassa' => true
		];

		if ($_POST["money"] >= $pay['min_amount']){
			if($_POST["money"] < $pay['max_amount']){
				   $user_id = (int)$_POST['users_id'];
				$inv_code = save_stat_pay(  $page['money'], $user_id, '1', 'piastrix' );
				$request = array(
					'amount' =>  $page['money'],
					'currency' => $currency,
					'shop_id' => $pay['merchant_id'],
					'shop_order_id' => $inv_code,
					'payway' => $psystem,
				);
				save_log(print_r($request, TRUE), 'piastrix.log');  
				ksort($request);
				$request['sign'] = hash('sha256', implode(':', $request).$pay['secret_key_1']);

				if (isset($_POST['addons'])){
					foreach ($_POST['addons'] as $k => $v){
						if ($v){
							$request[$k] = $v;
						}
					}
				}
				if (isset($request['phone']) AND $psystem != 'qiwi_rub'){
					$request['phone'] = substr($request['phone'], 1);
				}
				$answer = file_get_contents('https://core.piastrix.com/invoice/create', FALSE, stream_context_create(array(
					'http' => array(
						'method' => 'POST',
						'header' => 'Content-Type: application/json; charset=utf-8'."\r\n",
						'content' => json_encode($request)
					)
				)));
				$json = json_decode($answer, TRUE);
				if ($json['result'] == '1'){
					if ($json['data']['method'] == 'OFFLINE'){
						$result = array(
							'result' => 'err',
							'message' => $json['data']['data']['ru']
						);
					}
					else{
						$db->query("update w_transactions set status=1 where id='$inv_code'" );		
			
						$form = '<form id="'.$psystem.'" action="'.$json['data']['url'].'" method="'.$json['data']['method'].'">';
						foreach ($json['data']['data'] as $k => $val)
						{
							$form .= '<input name="'.$k.'" value="'.$val.'" />';
						}
						$form .= '</form>';  
						$info = array
						(
							'result' => 'ok',
							'form' => $form,
							'form_id' => $psystem
						);
						
					}
				}
				else{
					$info = [
						'error'=> $json['message'],
						'message'=> $json['message'],
						'success'=> false
					];
				}
			}
			else
			{
				$info = [
					'error'=> "Максимальная сумма пополнение {$pay['max_amount']}",
					'message'=> "Максимальная сумма пополнение {$pay['max_amount']}",
					'success'=> false
				];
			}
		} 
		else 
		{		
			$info = [
				'error'=> "Минимальная сумма пополнения {$pay['min_amount']}",
				'message'=> "Минимальная сумма пополнения {$pay['min_amount']}",
				'success'=> false
			];
		}
		echo json_encode($info);
	}
	if(isset($_GET['piastrix_cas'])){
		if(isset($_GET['users']) && isset($_GET['hash'])){
			
			$users = (int)$_GET['users'];

			$hashs = $_GET['hash'];
			if(md5($users.':9358741') == $hashs){
							if(check_mobile_device()){
				$ty = 3;
			}else{
				$ty = 5;
			}
				$count = $db->query("SELECT * FROM `w_pay_list` WHERE `type` = 'piastrix' AND status = '1'")->num_rows;
				$de = 0;
				$sumsing = $pay['max_amount'] / 2;
				$sumsing_3 = $pay['max_amount'] / 3;
				$payment__tooltip  ='<div class="payment__tooltip"><div class="payment__tooltip_inner"><div class="pay-tooltip"><div class="pay-tooltip__note" ><i class="fa fa-exclamation-triangle"></i><span class="error__info "></span></div>
				<div class="pay-tooltip__phone pay-tooltip__number_withplus" style="display: none">
					Мобильный:
                        <span class="pay-tooltip__input">
                            <input type="tel" name="addons[phone]" maxlength="14" placeholder="123456789" class="pay-tooltip__phone_inner js-input__inner">
                        </span>
                    </div>
					<div class="pay-tooltip__summ"><span class="messages_"></span>Сумма:<label><input id="p_0_500" type="radio" name="money" value="'.$pay['min_amount'].'"> '.$pay['min_amount'].'</label><label><input id="p_0_1000" type="radio" name="money" value="'.$sumsing.'">'.$sumsing.'</label><label><input id="p_0_5000" type="radio" name="money" value="'.$pay['max_amount'].'"> '.$pay['max_amount'].'</label><input id="l_0_num" type="radio" name="money" value="'.$sumsing_3.'" checked="" class="l_num"><div class="pay-tooltip__input input"><input type="text" name="summ" id="summ_summ" class="input__inner input_summ_val js-input__inner" required="" value="'.$sumsing_3.'"></div><div class="pay-tooltip__summ"><button type="submit"  id="btn_submit" class="pay-tooltip__button button button_color_orange btn_submit">Пополнить</button></div>   <div class="pay-tooltip__summ class_images_pay"></div>                        </div><div class="modal__error" style="display:none"><div class="modal__note_important"></div></div></div></div></div>';
				$pay_ = '';
				$sql = $db->query("SELECT * FROM `w_pay_list` WHERE `type` = 'piastrix' AND status = '1'");
				while($did = $sql->fetch_array(MYSQLI_ASSOC)){
					if($de++ %$ty ==0){
						$rus_0 = "<form method=\"POST\"  class=\"payment-form\" action=\"/piastrix.php\"><input type=\"hidden\" name=\"operation\" value=\"2\"><input type=\"hidden\" name=\"users_id\" value=\"{$users}\"><input type=\"hidden\" name=\"bonus_id\" class=\"deposit-bonus-id\" ><div class=\"payment__row\"><div class=\"payment__row-inner\">";
					}	else{
						$rus_0 = "";
					}	
					$d = "<label class=\"payment__item payitem\" data-paysys=\"{$did['id_']}\" url_img=\"{$did['img']}\"><input type=\"radio\" name=\"system\" id=\"system\" value=\"{$did['id_']}\" style=\"display:none\" ><div class=\"payitem__img\"><div class=\"payitem__img_inner\"><img src=\"{$did['img']}\" style=\"width: 85px;\" /></div></div><div class=\"payitem__footer\"><p class=\"payitem__note payitem__note_small\">Лимит:</p><p class=\"payitem__note\">{$pay['min_amount']} - {$pay['max_amount']} РУБ</p></div></label>";
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

	if (isset($_POST['status']) AND $_POST['status'] == 'success'){
		ksort($_POST);
		$_POST['ps_data'] = str_replace('\\', '', $_POST['ps_data']);
		$sign = $_POST['sign'];

		unset($_POST['sign']);
		$hash = hash('sha256', implode(':', $_POST).$pay['secret_key_1']);

		if ($sign == $hash){
			$inv = isset($_POST['shop_order_id']) ? $db->prepare($_POST['shop_order_id']) : false;
			$sum = isset($_POST['shop_amount']) ? floatval($_POST['shop_amount']) : 0;
			
			$piastrix_payways = array(
				'card_rub' => 'VISA/MASTERCARD',
				'qiwi_rub' => 'QIWI',
				'yamoney_rub' => 'YANDEX MONEY',
				'payeer_rub' => 'PAYEER',
				'perfectmoney_usd' => 'PERFECTMONEY',
				'beeline_rub' => 'BEELINE',
				'mts_rub' => 'MTS',
				'megafon_rub' => 'MEGAFON',
				'tele2_rub' => 'TELE2',
				'terminal_rub' => 'ТЕРМИНАЛ',
				'alfaclick_rub' => 'Alfa-Click',
			);

			$payways = array();
			$sys = isset($piastrix_payways[$_POST['payway']]) ? $piastrix_payways[$_POST['payway']] : $db->prepare($_POST['payway']);

			if (isset($_POST['ps_data'])){
				$ps_data = json_decode($_POST['ps_data'], TRUE);
				if (isset($ps_data['ps_payer_account'])){
					$sys .= $db->prepare($ps_data['ps_payer_account']);
				}
			}
			$order_row = $db->query("select * from w_transactions where status < 2 and payeer_id='$inv'")->fetch_array(MYSQLI_ASSOC);
			if ($order_row){
				if ($order_row['summ'] != $sum){
					$msg = 'неверная сумма';
				}
				else if (pay($order_row['id'])){
					$msg = 'OK';
				}
				else{
					$msg = 'Ошибка платежа';
				}
			}
			else{
				$msg = 'Платеж не найден';
			}
			echo $msg;
		}
		else{
			echo 'error';
		}
	}
	
	
	function generate($number){
		$arr = array(
			'a','b','c','d','e','f',
			'g','h','i','j','k','l',
			'm','n','o','p','r','s',
			't','u','v','x','y','z',
			'A','B','C','D','E','F',
			'G','H','I','J','K','L',
			'M','N','O','P','R','S',
			'T','U','V','X','Y','Z',
			'1','2','3','4','5','6',
			'7','8','9','0'
		);
		$code = "";
		for($i = 0; $i < $number; $i++){
			$index = rand(0, count($arr) - 1);
			$code .= $arr[$index];
		}
		return $code;
  }
	