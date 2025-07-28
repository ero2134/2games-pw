<?php
if(isset($_GET['replication'])){
	include('config_db.php');
	
	$id = (int)$_GET['replication'];
	$ip = getip();
	$premium_date_type_4 = date("Y-m-d");
	if(!file_exists('storage/logs/logo_ip/'.$ip.'.log')){
		if(!isset($_COOKIE['dipit'])){
			$TYPE = 3;
			setcookie("dipit", MD5(TIME()), time() +30 * 24 * 60 * 60); 
			######################################
			save_log('-------', 'logo_ip/'.$ip.'.log');#
			######################################
		}else{
			$TYPE = 5;
			######################################
			save_log('-------', 'logo_ip/'.$ip.'.log');#
			######################################
		}
		$db->query("INSERT INTO `w_partners_pay`(`type`, `user_id`, `suma`, `date_time` ,`status`) VALUES ('{$TYPE}','{$id}','0','{$premium_date_type_4}','1')");
		setcookie("code_referal", $id, time() + 30 * 24 * 60 * 60); 
		header('location: /');
        die();
	}else{
		$db->query("INSERT INTO `w_partners_pay`(`type`, `user_id`, `suma`, `date_time` ,`status`) VALUES ('5','{$id}','0','{$premium_date_type_4}','1')");
		header('location: /');
        die();
	}
}	