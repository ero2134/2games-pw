<?php
	echo'<script type="text/javascript" src="/assets/_new-style/js/jquery-1.7.1.min.js"></script>';
	if(isset($_REQUEST['MERCHANT_ORDER_ID'])){
		$id = $_REQUEST['MERCHANT_ORDER_ID'];
	}
	if(isset($_REQUEST['merchant_id'])){
		$id = $_REQUEST['merchant_id'];
	}
	if(isset($_REQUEST['AMOUNT'])){
		$toll = $_REQUEST['AMOUNT'];
	}

	echo'<form method="GET"  action="/" >';
		echo'<input type="hidden" name="AMOUNT" value="'.$toll.'">';
		echo'<input type="hidden" name="merchant_id" value="">';
		echo'<input type="submit" name="test" id="buttonID" value=" Loading... ">';
	echo'</form>';

	echo'<script>';
		echo'function foo() {';
			echo'$("#buttonID").click();';
		echo'}';
		echo'setTimeout(foo, 1000);';
	echo'</script>';
