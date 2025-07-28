<?php
	include("config_db.php");
	
	$pay = $db->query("SELECT * FROM `w_payment_systems` where type='ENOT_kassa'")->fetch_array(MYSQLI_ASSOC);
$bonusId  = isset( $_REQUEST['bonus_id'] ) ? $_REQUEST['bonus_id'] : false;
	if(isset($_POST["money"]) && isset($_POST['users_id']) && isset($_POST['system'])){
		$psystem  = isset( $_POST['system'] ) ? $_POST['system'] : false;

		$info = [
			'isFreekassa' => true
		];

		if ($_POST["money"] >= $pay['min_amount']){
			if($_POST["money"] < $pay['max_amount']){
			
				$currency_id = (int)$_POST['system'];
				$amount = htmlspecialchars($_POST["money"]);
				$user_id = htmlspecialchars($_POST['users_id']);
				
				$uid = save_stat_pay( $amount, $user_id, '1', 'enot' );
		
				if ($bonusId) {
					$db->query("UPDATE `w_bonus_user` SET `enter_id` = '".$uid."' WHERE `bonus_id` = '".$bonusId."' AND `user_id` = '".$user_id."'");
				}
		
				$sign = md5($pay['merchant_id'].':'.$amount.':'.$pay['secret_key_1'].':'.$uid);  //Генерация ключа
				
				$db->query("update w_transactions set status=1 where payeer_id='$uid'" );	
				
				$info['status'] = true;
				$info['freekassaUrl'] = "https://enot.io/{$pay['lang']}/pay?m={$pay['merchant_id']}&oa={$amount}&p={$psystem}&o={$uid}&s={$sign}&cr={$pay['currency_id']}";
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
	if(isset($_GET['enot_cas'])){
		if(isset($_GET['users']) && isset($_GET['hash'])){
			
			$users = (int)$_GET['users'];

			$hashs = $_GET['hash'];
			if(md5($users.':9358741') == $hashs){
							if(check_mobile_device()){
				$ty = 3;
			}else{
				$ty = 5;
			}
				$count = $db->query("SELECT * FROM `w_pay_list` WHERE `type` = 'enot' AND status = '1'")->num_rows;
				$de = 0;
				$sumsing = $pay['max_amount'] / 2;
				$sumsing_3 = $pay['max_amount'] / 3;
				$payment__tooltip  ='<div class="payment__tooltip"><div class="payment__tooltip_inner"><div class="pay-tooltip"><div class="pay-tooltip__note" ><i class="fa fa-exclamation-triangle"></i><span class="error__info "></span></div><div class="pay-tooltip__summ"><span class="messages_"></span>Сумма:<label><input id="p_0_500" type="radio" name="money" value="'.$pay['min_amount'].'"> '.$pay['min_amount'].'</label><label><input id="p_0_1000" type="radio" name="money" value="'.$sumsing.'">'.$sumsing.'</label><label><input id="p_0_5000" type="radio" name="money" value="'.$pay['max_amount'].'"> '.$pay['max_amount'].'</label><input id="l_0_num" type="radio" name="money" value="'.$sumsing_3.'" checked="" class="l_num"><div class="pay-tooltip__input input"><input type="text" name="summ" id="summ_summ" class="input__inner input_summ_val js-input__inner" required="" value="'.$sumsing_3.'"></div><div class="pay-tooltip__summ"><button type="submit"  id="btn_submit" class="pay-tooltip__button button button_color_orange btn_submit">Пополнить</button></div>   <div class="pay-tooltip__summ class_images_pay"></div>                        </div><div class="modal__error" style="display:none"><div class="modal__note_important"></div></div></div></div></div>';
				$pay_ = '';
				$sql = $db->query("SELECT * FROM `w_pay_list` WHERE `type` = 'enot' AND status = '1'");
				while($did = $sql->fetch_array(MYSQLI_ASSOC)){
					if($de++ %$ty ==0){
						$rus_0 = "<form method=\"POST\"  class=\"payment-form\" action=\"/raccoon.php\"><input type=\"hidden\" name=\"operation\" value=\"2\"><input type=\"hidden\" name=\"users_id\" value=\"{$users}\"><input type=\"hidden\" name=\"bonus_id\" class=\"deposit-bonus-id\" ><div class=\"payment__row\"><div class=\"payment__row-inner\">";
					}else{
						$rus_0 = "";
					}						
					$d = "<label class=\"payment__item payitem\" data-paysys=\"{$did['id_']}\" url_img=\"{$did['img']}\"><input type=\"radio\"  name=\"system\" id=\"system\" value=\"{$did['id_']}\" style=\"display:none\" ><div class=\"payitem__img\"><div class=\"payitem__img_inner\"><img src=\"{$did['img']}\" style=\"width: 85px;\" /></div></div><div class=\"payitem__footer\"><p class=\"payitem__note payitem__note_small\">Лимит:</p><p class=\"payitem__note\">{$pay['min_amount']} - {$pay['max_amount']} {$pay['currency']}</p></div></label>";
					if($de %$ty ==0 || $de == $count){
						$rus_1 = "</div></div>{$payment__tooltip}</form>";
					}else{
						$rus_1 = '';
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
	if(isset($_REQUEST['merchant']) && isset($_REQUEST['amount']) && isset($_REQUEST['credited']) && isset($_REQUEST['intid']) && isset($_REQUEST['merchant_id']) && isset($_REQUEST['method']) && isset($_REQUEST['sign']) && isset($_REQUEST['sign_2'])){
		
		$merchant = htmlspecialchars($_REQUEST['merchant'],ENT_QUOTES);
		$uid = htmlspecialchars($_REQUEST['merchant_id'],ENT_QUOTES);
		
	
		$sign_hash = md5($merchant.':'.$_REQUEST['amount'].':'.$pay['secret_key_2'].':'.$_REQUEST['merchant_id']);
		$sum = isset( $_REQUEST['amount'] ) ? floatval( $_REQUEST['amount'] ) : 0;
		if($sign_hash === $_REQUEST['sign_2']) {

			$order_row = $db->query("SELECT * FROM `w_transactions` where payeer_id='{$uid}'");    
			$order_row = $payeer->fetch_array(MYSQLI_ASSOC);
		    $user_id =  $order_row['user_id'];
			$inv_code = $inv;
			
			if ( $order_row['id'] > 1) {
				if ( $order_row['summ'] != $sum ) {
					$msg = 'неверная сумма';
				} 
				else
				if ( pay( $order_row['id'] ) ) {
					$msg = 'YES';
				} 
				else 
				{
					$msg = 'Ошибка платежа';
				}
			} else {
				$msg = 'Платеж не найден';
			}
		}
		echo $msg;
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
	