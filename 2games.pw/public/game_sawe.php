<?php
		include("config_db.php");
		
		$referal = trim(strip_tags(stripcslashes(htmlspecialchars($_GET["sawe"]))));
	
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
			$add = " ";{$url}/game/{$run['name']}
		}
		$lice = " AND `title` LIKE '%$referal%' ";
		$order_row = $db->query("SELECT * FROM `w_games` WHERE  device > 0 $lice $cat");
		$url = ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'];
		if($order_row->num_rows > 0){
			while($run = $order_row->fetch_array(MYSQLI_ASSOC)){
				echo"<div class='col-1-6' data-name='{$run['name']}' data-uid='{$run['id']}'>";
					echo"<div class='game__box sign__up' style='cursor: pointer;'>";
						echo"<div class='game__box__img__container'>";
							echo"<img ng-src='{$url}/ico/{$run['name']}.png' src='{$url}/ico/{$run['name']}.png' class='preview__img' alt='{$run['name']}'>";
						echo"</div>";
						echo"<div class='h-overlay'>";
							echo"<h4>{$run['title']}</h4>";
							echo"<a href='' class='games__button button-register sign__up' style='cursor: pointer;'>";
								echo"Play"; 
							echo"</a>";				
						echo"</div>";
					echo"</div>";
				echo"</div>";
			}
		}else{
			echo '<div class="pay-tooltip__note_error" style="">';
				echo '<i class="fa fa-exclamation-triangle"></i>';
				echo '<span class="error__info">According to the results of (<b>'.$referal.'</b>) searches nothing was found</span>';
			echo '</div>';
		}
		?>