<?php	
	include("config_db.php");
	
	if ($_POST["b"] == 'y'){
		$db->query("UPDATE w_transactions SET status = '1' where id = '".htmlspecialchars($_POST["id"],ENT_QUOTES)."'");
		print 'OK';
	} 
	else 
	{
		$db->query("UPDATE w_transactions SET status = '-1' where id = '".htmlspecialchars($_POST["id"],ENT_QUOTES)."'");
		$result0 = $db->query("SELECT * FROM `w_transactions` where id='".htmlspecialchars($_POST["id"],ENT_QUOTES)."'");    
		if ($result0->num_rows == 0) {
			$user_id = 0;
			$summ = 0;
		} 
		else 
		{
			while($row0 = $result0->fetch_array(MYSQLI_ASSOC)) {
				$user_id = $row0['user_id'];
				$summ = $row0['summ'];
			}
		}
		$db->query("UPDATE w_users SET `balance` = `balance`+'".$summ."' where id = '".$user_id."'");	
		print 'OK';	
	}		
?>