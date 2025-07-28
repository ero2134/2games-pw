<?php
	include("config_db.php");
	if(isset($_SERVER['HTTP_REFERER']) ){
		ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

		
		
		$locale 				= (isset($_GET['locale'])? 					trim(strip_tags(stripcslashes(htmlspecialchars($_GET['locale'])))) 		: '');
		$category 				= (isset($_GET['category'])? 				trim(strip_tags(stripcslashes(htmlspecialchars($_GET['category'])))) 	: '');
		$referal 					= (isset($_GET['query'])? 					trim(strip_tags(stripcslashes(htmlspecialchars($_GET['query'])))) 		: '');
		$needSeparateNewGames	= (isset($_GET['needSeparateNewGames'])? 	trim(strip_tags(stripcslashes(htmlspecialchars($_GET['needSeparateNewGames']))))		: 'false');
		$orderType 				= (isset($_GET['orderType'])? 				trim(strip_tags(stripcslashes(htmlspecialchars($_GET['orderType']))))	: ''); //max_bet - min_bet - popular
		$pageNum  				= (isset($_GET['page'])? 					trim(strip_tags(stripcslashes(htmlspecialchars($_GET['page'])))) 		: 1);
		$check  				= (isset($_GET['check'])? false : true);
		
			$rus = explode('categories',$_SERVER['HTTP_REFERER']);
			if(isset($rus[1])){
				$categories = explode('/',$rus[1]);
			}else{
				$categories[1] = 'top';
			}

			$countView = 20;
			$startIndex = ($pageNum - 1) * $countView;


			$rus = explode('categories',$_SERVER['HTTP_REFERER']);
			if(isset($rus[1])){
				$categories = explode('/',$rus[1]);
			}else{
				$categories[1] = 'top';
			}
			
			if($referal == ''){
				if($categories[1] == 'top'){
					$order___ = $db->query("SELECT * FROM `w_categories` WHERE `href` = 'top'")->fetch_array(MYSQLI_ASSOC);
				}else{
					$order___ = $db->query("SELECT * FROM `w_categories` WHERE `href` = '{$categories[1]}'")->fetch_array(MYSQLI_ASSOC);
				}
				$subti = $db->query("SELECT `game_id` FROM `w_game_categories` WHERE `category_id` = {$order___['id']}");
			
				
				
				$i = 1;
				$list = '';
				$count = $subti->num_rows;
				
				while($sup = $subti->fetch_array(MYSQLI_ASSOC)){
					if($count == $i){
						$l = '';
					}else{
						$l = ',';
					}
					$list .= $sup['game_id'].$l;
					$i++;
				}
				$cat = 'AND `id` IN ('.$list.') ';
				$lice = " AND `title` LIKE '%$referal%' ";
			}else{
				$cat = '';
				$lice = "AND `title` LIKE '%$referal%' LIMIT 50";
			}
			if($cat == ''){
				$add = " AND ";
			}else{
				$add = " ";
			}
			if($categories[1] == 'greentube'){
				if(check_mobile_device() ) {
					$NOT = '0,2';
				}
				else{
				  $NOT = '1,2';
				}
			}else{
				$NOT = '1,2';
			}
			$lice = " AND `title` LIKE '%$referal%' ";
			$order_row = $db->query("SELECT * FROM `w_games` WHERE  `device`  IN ({$NOT}) $lice $cat");
			$url = ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'];
		
	$drop = [];
$page = (int)(isset($_GET['page'])? $_GET['page']:0);
if($page == 0){

		while($run = $order_row->fetch_array(MYSQLI_ASSOC)){
			if($categories[1] == 'pragmatic'){
				if(check_mobile_device()) {
					$g = 'games';
				}
				else{
					$g = 'game';
				}
			}else{
				$g = 'game';
			}			
			$l = "{$url}/{$g}/{$run['name']}";
	
			$drop[] = [
				"id" =>  $run['id'],
				"title" => $run['title'],
				"realUrl" => $l,
				"demoUrl" => $l,
				"blockedByCountry" => false,
				"disabledLocale" => false,//игра не доступна
				"disabledCurrency" => false,//игра не подержывает вашу валюту
				"provider" => $categories[1],
				"isRealOnly" => false,
				"platform" => "desktop",
				"icon" => "{$url}/ico/{$run['name']}.png",
				"ribbon" => "exclusive",
				"unAvailable" => false,
				"jackpotSum" => null,
				"jackpotCurrency" => null,
				"isNetentLiveGame" => false
			];
		}
}
	$cat_bar = [];
	$subti = $db->query("SELECT * FROM `w_categories` WHERE `parent` = '2'");
	while($run = $subti->fetch_array(MYSQLI_ASSOC)){
		$count = $db->query("SELECT * FROM `w_game_categories` WHERE `category_id` = '{$run['id']}'")->num_rows;
		$cat_bar[] = [
			"name" => $run['title'],
			"key" => $run['href'],
			"nameKey" =>  $run['href'],
			"icon" => "/intonefront/images/provaider/".$run['href'].'.png',
			"ids" => $run['id'],
			"gameCount" => $count
		]; 
	}
	
	
	echo json_encode([
		"status" => "ok",
		"data" => [
			"authorized" 	=> true,
			"playerIsTest" 	=> false,
			"games" => $drop,
			"favorites" => [],
			"providers" => $cat_bar,
			"currentParams" => [
				"locale" 				=> "",
				"category" 				=> $categories[1],
				"provider" 				=> $categories[1],
				"providerNameKey" 		=> $categories[1],
				"query" 				=> $referal,
				"orderType" 			=> "popular",
				"volatility"			=> null,
				"isTournamentGame"		=> false,
				"needTiles" 			=> false,
				"needSeparateNewGames" 	=> false,
				"isMobile" 				=> false,
				"hasBonusGame" 			=> false,
				"hasBuyableBonusGame" 	=> false,
				"hasAchievements" 		=> false
			],
			"tiles" => [],
			"newGames" => []
		]
	],true);

}
