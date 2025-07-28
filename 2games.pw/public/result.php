<?php
	include("config_db.php");
	$pay = $db->query("SELECT * FROM `w_payment_systems` where type='free_kassa'")->fetch_array(MYSQLI_ASSOC);
	

				
	if(isset($_POST["money"]) && isset($_POST['users_id']) && isset($_POST['system'])){
		
	$info = [
		'isFreekassa' => true
	];
	
	if ($page['money'] >= $pay['min_amount']){
		if($page['money'] <= $pay['max_amount']){
		    $user_id = (int)$_POST['users_id'];
		    
			$inv_code = save_stat_pay( $page['money'], $user_id, '1', 'freekassa' );
				if ( isset( $inv_code ) && $inv_code ) {
					$order_id = $inv_code;
			
					if ($page['bonusId']) {
						$db->query("UPDATE `w_bonus_user` SET `enter_id` = '".$order_id."' WHERE `bonus_id` = '".$page['bonusId']."' AND `user_id` = '".$page['users_id']."'");
					}
					
					$currency_id = $page['system'];
					
					$sign = md5($pay['merchant_id'].':'.$page['money'].':'.$pay['secret_key_1'].':'.$order_id);
					$info['status'] = true;
					$data = array(
						'm'  => $pay['merchant_id'],
						'oa' => $page['money'],
						'o'  => $order_id,
						's'  => $sign,
						'lang' => $pay['lang']
					);

					if($currency_id != 9999){
						$data['i'] = $currency_id;
					}
					
					$db->query("update w_transactions set status=0 where id='$order_id'" );		
					save_log( 'Старт = '.json_encode( $data, 1 ), 'freekassa.log' );
						
					$info['freekassaUrl'] = "https://www.free-kassa.ru/merchant/cash.php?".http_build_query($data);
				}else{
					$info = [
						'error'=> "server error",
						'message'=> "server error",
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
	if(isset($_GET['admin'])){
		$users = (isset($_GET['users'])? $_GET['users'] : 'NULL');
		$users_id = (isset($_GET['users'])? $_GET['users'] : 'NULL');
		$hashs = (isset($_GET['hash'])? $_GET['hash'] : 'NULL');
		
		if(md5($users.':["6JiPNWsmS8Be3CwJnTgPXS91n"]') == $hashs){
			if(isset($_GET['status'])){
				$id = (int)$_GET['id'];
				$sql = $db->query("SELECT * FROM `w_pay_list` WHERE `id` = '{$id}'")->fetch_array(MYSQLI_ASSOC);
				if($sql['id'] == $id){
					if($sql['status']  == 1){
						$status = 0;
						$txt = 'Disabled';
					}else{
						$status = 1;
						$txt = 'Enabled';
					}
					$db->query("update `w_pay_list` set `status` = '{$status}' WHERE `id` = '$id'");
					$t = [
						'status' => 1,
						'txt' => $sql['title'].' ['.$txt.']',
					];
				}else{
					$t = [
						'status' => 0,
						'txt' => 'ERROR NON FOUND ID:'.$id
					];
				}
				echo json_encode($t);
			}else{
				$htnl = '';
				if(isset($_GET['enot'])){
					$sql = $db->query("SELECT * FROM `w_pay_list` WHERE `type` = 'enot'");
					$htnl .= '<form id="form-payment-system" method="POST">';
					$i = 100;
					while($result = $sql->fetch_array(MYSQLI_ASSOC)){
						if($result['status'] == 1){
							$type = 'checked="checked"';
						}else{
							$type = '';
						}
						$img = '<img src="'.$result['img'].'" width="30">';
						$htnl .= '<div class="row">';
							$htnl .= '<label class="col-md-5 box">'.$img.' ['.$result['title'].']</label>';
							$htnl .= '<div class="col-md-3 box">';
								$htnl .= '<input type="checkbox" id="cb___'.$i.'" style="display: none;" onclick="on_sers('.$result['id'].');" class="tgl tgl-ios" name="type['.$result['id'].']" value="'.$result['status'].'" '.$type.'>';
								$htnl .= '<label class="tgl-btn" for="cb___'.$i.'">';
								$htnl .= '</label>';
							$htnl .= '</div>';
						$htnl .= '</div>';		
						$i++;			
					}
					$htnl .= '</form>';
				}elseif(isset($_GET['piastrix'])){
					$sql = $db->query("SELECT * FROM `w_pay_list` WHERE `type` = 'piastrix'");
					$htnl .= '<form id="form-payment-system" method="POST">';
					$i = 300;
					while($result = $sql->fetch_array(MYSQLI_ASSOC)){
						if($result['status'] == 1){
							$type = 'checked="checked"';
						}else{
							$type = '';
						}
						$img = '<img src="'.$result['img'].'" width="30">';
						$htnl .= '<div class="row">';
							$htnl .= '<label class="col-md-5 box">'.$img.' ['.$result['title'].']</label>';
							$htnl .= '<div class="col-md-3 box">';
								$htnl .= '<input type="checkbox" id="cb___'.$i.'" style="display: none;" onclick="on_sers('.$result['id'].');" class="tgl tgl-ios" name="type['.$result['id'].']" value="'.$result['status'].'" '.$type.'>';
								$htnl .= '<label class="tgl-btn" for="cb___'.$i.'">';
								$htnl .= '</label>';
							$htnl .= '</div>';
						$htnl .= '</div>';		
						$i++;			
					}
					$htnl .= '</form>';
				}elseif(isset($_GET['resul'])){
					$sql = $db->query("SELECT * FROM `w_pay_list` WHERE `type` = 'resul'");
					$htnl .= '<form id="form-payment-system" method="POST">';
					$i = 300;
					while($result = $sql->fetch_array(MYSQLI_ASSOC)){
						if($result['status'] == 1){
							$type = 'checked="checked"';
						}else{
							$type = '';
						}
						$img = '<img src="'.$result['img'].'" width="30">';
						$htnl .= '<div class="row">';
							$htnl .= '<label class="col-md-5 box">'.$img.' ['.$result['title'].']</label>';
							$htnl .= '<div class="col-md-3 box">';
								$htnl .= '<input type="checkbox" id="cb___'.$i.'" style="display: none;" onclick="on_sers('.$result['id'].');" class="tgl tgl-ios" name="type['.$result['id'].']" value="'.$result['status'].'" '.$type.'>';
								$htnl .= '<label class="tgl-btn" for="cb___'.$i.'">';
								$htnl .= '</label>';
							$htnl .= '</div>';
						$htnl .= '</div>';		
						$i++;			
					}
					$htnl .= '</form>';
				}else{
					$sql = $db->query("SELECT * FROM `w_pay_list` WHERE `type` = 'result'");
					$htnl .= '<form id="form-payment-system" method="POST">';
					$i = 200;
					while($result = $sql->fetch_array(MYSQLI_ASSOC)){
						if($result['status'] == 1){
							$type = 'checked="checked"';
						}else{
							$type = '';
						}
						$img = '<img src="'.$result['img'].'" width="60">';
						$htnl .= '<div class="row">';
							$htnl .= '<label class="col-md-5 box">'.$img.' ['.$result['title'].'<span class="  badge badge-lg badge-primary  ">ID:['.$result['id_'].']</span>]</label>';
							$htnl .= '<div class="col-md-3 box">';
								$htnl .= '<input type="checkbox" id="cb___'.$i.'" style="display: none;" onclick="on_sers('.$result['id'].');" class="tgl tgl-ios" name="type['.$result['id'].']" value="'.$result['status'].'" '.$type.'>';
								$htnl .= '<label class="tgl-btn" for="cb___'.$i.'">';
								$htnl .= '</label>';
							$htnl .= '</div>';
						$htnl .= '</div>';	
						$i++;
					}
					$htnl .= '</form>';
				}
				print $htnl;
			}
		}
	}
	if(isset($_GET['fretoplay_cas'])){
		if(isset($_GET['users']) && isset($_GET['hash'])){
			$users = (int)$_GET['users'];
			if(check_mobile_device()){
				$ty = 3;
			}else{
				$ty = 5;
			}
			$bonus = (isset($_GET['bonus'])?$_GET['bonus'] : 0);
			$hashs = $_GET['hash'];
			if(md5($users.':9358741') == $hashs){
				$count = $db->query("SELECT * FROM `w_pay_list` WHERE `type` = 'result' AND status = '1'")->num_rows;
				$de = 0;
				$sumsing = $pay['max_amount'] / 2;
				$sumsing_3 = $pay['max_amount'] / 3;
				$payment__tooltip  ='<div class="payment__tooltip"><div class="payment__tooltip_inner"><div class="pay-tooltip"><div class="pay-tooltip__note" ><i class="fa fa-exclamation-triangle"></i><span class="error__info "></span></div><div class="pay-tooltip__summ"><span class="messages_"></span>Сумма:<label><input id="p_0_500" type="radio" name="money" value="'.$pay['min_amount'].'"> '.$pay['min_amount'].'</label><label><input id="p_0_1000" type="radio" name="money" value="'.$sumsing.'">'.$sumsing.'</label><label><input id="p_0_5000" type="radio" name="money" value="'.$pay['max_amount'].'"> '.$pay['max_amount'].'</label><input id="l_0_num" type="radio" name="money" value="'.$sumsing_3.'" checked="" class="l_num"><div class="pay-tooltip__input input"><input type="text" name="summ" id="summ_summ" class="input__inner input_summ_val js-input__inner" required="" value="'.$sumsing_3.'"></div><div class="pay-tooltip__summ"><button type="submit"  id="btn_submit" class="pay-tooltip__button button button_color_orange btn_submit">Пополнить</button></div>  <div class="pay-tooltip__summ class_images_pay"></div>                         </div><div class="modal__error" style="display:none"><div class="modal__note_important"></div></div></div></div></div>';
				$pay_ = '';
				$sql = $db->query("SELECT * FROM `w_pay_list` WHERE `type` = 'result' AND status = '1'");
				while($did = $sql->fetch_array(MYSQLI_ASSOC)){
					if($de++ %$ty ==0){
						$rus_0 = "<form method=\"POST\"  class=\"payment-form\" action=\"/result.php\"><input type=\"hidden\" name=\"operation\" value=\"2\"><input type=\"hidden\" name=\"users_id\" value=\"{$users}\"><input type=\"hidden\" name=\"bonus_id\" class=\"deposit-bonus-id\" value=\"{$bonus}\"><div class=\"payment__row\"><div class=\"payment__row-inner\">";
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
	if(isset($_REQUEST['AMOUNT'])  && isset($_REQUEST['MERCHANT_ORDER_ID'])){
	
        $inv = isset( $_REQUEST['MERCHANT_ORDER_ID'] ) ? htmlspecialchars( $_REQUEST['MERCHANT_ORDER_ID'] ) : false;
        $sum = isset( $_REQUEST['AMOUNT'] ) ? floatval( $_REQUEST['AMOUNT'] ) : 0;
  
        $order_row = $db->query("select * from w_transactions where status < 2 and payeer_id='$inv'")->fetch_array(MYSQLI_ASSOC);
        $user_id =  $order_row['user_id'];
        $inv_code = $inv;
        
        $sign_hash = md5( implode( ':',
        	[
        		$_REQUEST['MERCHANT_ID'],
        		$_REQUEST['AMOUNT'],
        		$pay['secret_key_2'],
        		$_REQUEST['MERCHANT_ORDER_ID'],
        	] ) );
        
        if (true ) {
        
        	if ( $order_row['id'] > 1) {
        
        		if ( $order_row['summ'] != $sum ) {
        			$msg = 'неверная сумма';
        				save_log( 'неверная сумма '.$order_row['id'] , 'freekassa.log' );
        
        		} elseif ( pay( $order_row['id'] ) ) {
        			$msg = 'YES';
        				save_log( 'YES '.$order_row['id'] , 'freekassa.log' );
        
        		} else {
        			$msg = 'Ошибка платежа';
        				save_log( 'Ошибка платежа '.$order_row['id'] , 'freekassa.log' );
        		}
        
        	} else {
        		$msg = 'Платеж не найден';
        			save_log( 'Платеж не найден '.$order_row['id'] , 'freekassa.log' );
        	}
        
        } else {
            	save_log( 'Неверная подпись '.$order_row['id'] , 'freekassa.log' );
        	$msg = 'Неверная подпись';
        }
        echo $msg;
		
	}
	