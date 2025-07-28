<?php
	include("config_db.php");
	

	$dir = '/var/www/user24745/data/www/casino-software.ru/';
	$file = '.env';
	$myfile = htmlentities(file_get_contents($dir.$file));
	
	$type['PUBLIC_KEY'][1][1] = explode("COIN_PAYMENT_PUBLIC_KEY=",$myfile);
	$type['PRIVATE_KEY'][1][1] = explode("COIN_PAYMENT_PRIVATE_KEY=",$myfile);
	$type['MARCHANT_ID'][1][1] = explode("COIN_PAYMENT_MARCHANT_ID=",$myfile);
	$type['SECRET'][1][1] = explode("COIN_PAYMENT_IPN_SECRET=",$myfile);
	$type['DEBIG_EMAIL'][1][1] = explode("COIN_PAYMENT_IPN_DEBIG_EMAIL=",$myfile);
	$type['ADD_MIN'][1][1] = explode("COIN_PAYMENT_ADD_MIN=",$myfile);
	$type['ADD_MAX'][1][1] = explode("COIN_PAYMENT_ADD_MAX=",$myfile);
	
?>
	
	
PUBLIC_KEY = <?php echo $type['PUBLIC_KEY'][1][1];?><br>	
PRIVATE_KEY = <?php echo $type['PRIVATE_KEY'][1][1];?><br>
MARCHANT_ID = <?php echo $type['MARCHANT_ID'][1][1];?><br>
SECRET = <?php echo $type['SECRET'][1][1];?><br>
DEBIG_EMAIL = <?php echo $type['DEBIG_EMAIL'][1][1];?><br>
ADD_MIN = <?php echo print_r($type['ADD_MIN'][1]);?><br>
ADD_MAX = <?php echo $type['ADD_MAX'][1][1][1];?><br>

	
	
	
	
<?php	
	 
/* $dir =  __DIR__ ."/assets/_new-style/images/bonus";
	$indir = array_filter(scandir($dir), function($item) {
		return !is_dir($dir . $item);
	});

	foreach ($indir as $file){
		$files[$file] = filemtime("$dir/$file");
	}
	  
	arsort($files);
	$files = array_keys($files);
	$div = '';
	if (!empty($files)){
		foreach ($files as $key => $value){
			$type = explode(".",$value);
			if($type[1] == 'png'){
				$div .= '<div id="images_id_'.$key.'">';
					$div .= '<img src="/assets/_new-style/images/bonus/'.$value.'" width="100">';
					$div .= '<a href="#" class="btn btn-icon" title="" data-toggle="tooltip" data-placement="top" data-method="DELETE" data-confirm-title="Please Confirm" data-confirm-text="You go to delete an image from a folder?" data-confirm-delete="Yes, delete him!" data-original-title="Delete User">';
						$div .= '<i class="fas fa-trash"></i>';
					$div .= '</a>';
				$div .= '</div>';
			}
		}
	}else{
		$div .=  "Файлов нет";
	}
	
	echo $div;
*/