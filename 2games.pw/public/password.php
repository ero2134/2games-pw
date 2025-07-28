<?php
	include("config_db.php");

$url = "/password/remind";

$post_data = array (
    "email" => $_POST['email'],
    "_token" => $_POST['_token']
);

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch,CURLOPT_USERAGENT,'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 (.NET CLR 3.5.30729)');
        // Установка referer
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 3);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post_data));

$output = curl_exec($ch);

curl_close($ch);
print_r($output);