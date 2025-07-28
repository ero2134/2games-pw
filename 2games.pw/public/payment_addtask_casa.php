<?php
		include("config_db.php");
		
		
		if ($_POST["amount"]<1){
		print 'The minimum amount is 1 RUB';			
		} else {		
		
		$result0 = $db->query("SELECT * FROM `w_users` where id='".htmlspecialchars($_POST["u"],ENT_QUOTES)."'");    
		if ($result0->num_rows == 0) {
		$balance = 0;
		} else {
		while($row0 = $result0->fetch_array(MYSQLI_ASSOC)) {
		$balance = $row0['balance'];
		}}
		
		if ($balance >= $_POST["amount"]){
		
		$db->query("INSERT INTO w_transactions (`user_id`,`payeer_id`,`system`,`type`,`summ`,`status`) VALUES ('".
		htmlspecialchars($_POST["u"],ENT_QUOTES)."','0','".
		htmlspecialchars($_POST["type"],ENT_QUOTES).": ".htmlspecialchars($_POST["account"],ENT_QUOTES)."','out','".
		htmlspecialchars($_POST["amount"],ENT_QUOTES)."','0')");
		$db->query("UPDATE w_users SET `balance` = `balance`-'".htmlspecialchars($_POST["amount"],ENT_QUOTES)."' where id = '".htmlspecialchars($_POST["u"],ENT_QUOTES)."'");
        print 'OK';
		
		} else {
		print 'No money in the account!';	
		}		
		}
?>