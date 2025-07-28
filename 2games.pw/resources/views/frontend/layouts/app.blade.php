<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="ru">
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<meta name="description" content="@yield('description')">
	<meta name="keywords" content="@yield('keywords')" />
	<meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('page-title') - {{ settings('app_name') }}</title>    <link href='https://fonts.googleapis.com/css?family=Noto+Sans:400,700&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
		
	<script src="/intonefront/js/jquery.min.js?068bd7e"></script>
	
		<?php 

function check_mobile_device___() { 
    $mobile_agent_array = array('ipad', 'iphone', 'android', 'pocket', 'palm', 'windows ce', 'windowsce', 'cellphone', 'opera mobi', 'ipod', 'small', 'sharp', 'sonyericsson', 'symbian', 'opera mini', 'nokia', 'htc_', 'samsung', 'motorola', 'smartphone', 'blackberry', 'playstation portable', 'tablet browser');
    $agent = strtolower($_SERVER['HTTP_USER_AGENT']);    
    // var_dump($agent);exit;
    foreach ($mobile_agent_array as $value) {    
        if (strpos($agent, $value) !== false) return true;   
    }       
    return false; 
}
?>	
	<script src="//ulogin.ru/js/ulogin.js" type="text/javascript"></script>
  	@if(Auth::check())
		 <script>
		var search_games = '/search_games.php';
		</script>
	@else
		 <script>var search_games = '/search_games.php?check';
	 </script>
	@endif
  <script>
		var url_slidebar = '/banners_for_slider.json';
	
			
		
		
	
		var app = {"locale":"ru","mobile":<?php if(check_mobile_device___()):?>true<?php else:?>false<?php endif;?>,"backend":"https:\/\/gms-on.com","trans":{"live.play":"live.play","live.dealer":"live.dealer","live.min_bet":"MIN \u0441\u0442\u0430\u0432\u043a\u0430","live.max_bet":"live.max_bet","live.seats_always_available":"live.seats_always_available","live.no_seats":"\u041c\u0435\u0441\u0442 \u043d\u0435\u0442","live.available_seats":"\u0421\u0432\u043e\u0431\u043e\u0434\u043d\u043e","tournaments.days":"\u0434\u043d\u0435\u0439","tournaments.hours":"\u0447\u0430\u0441","tournaments.minutes":"\u043c\u0438\u043d","tournaments.seconds":"\u0441\u0435\u043a","tournaments.min_bet":"min. \u0441\u0442\u0430\u0432\u043a\u0430","tournaments.max_spins":"max. \u0441\u043f\u0438\u043d\u043e\u0432","tournaments.start":"\u0441\u0442\u0430\u0440\u0442","tournaments.finish":"\u0444\u0438\u043d\u0438\u0448","tournaments.tourn_join":"\u0423\u0447\u0430\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c","tournaments.duration":"\u0414\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c","tournaments.start_in":"\u041d\u0430\u0447\u0430\u043b\u043e \u0441\u043f\u0440\u0438\u043d\u0442\u0430 \u0447\u0435\u0440\u0435\u0437","tournaments.win_prize":"\u0412\u044b\u0438\u0433\u0440\u0430\u0439 %value% %prizeType%","tournaments.registration":"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f","tournaments.race":"\u0421\u043f\u0440\u0438\u043d\u0442","tournaments.before_end":"\u0414\u043e \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0442\u0443\u0440\u043d\u0438\u0440\u0430","tournaments.before_start":"\u0414\u043e \u0441\u0442\u0430\u0440\u0442\u0430 \u0442\u0443\u0440\u043d\u0438\u0440\u0430","common_tournament.drift-races.subtournament.timer.days":"\u0434\u043d\u0435\u0439","common_tournament.drift-races.subtournament.timer.hour":"\u0447\u0430\u0441","common_tournament.drift-races.subtournament.timer.min":"\u043c\u0438\u043d","common_tournament.drift-races.subtournament.timer.sec":"\u0441\u0435\u043a","verification.error.exceeded_filesize_limit":"\u041e\u0431\u044a\u0435\u043c \u0444\u0430\u0439\u043b\u0430 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c 10 \u041c\u0431.","dashboard.history.payments.cancellation_confirmation.question_text_title":"\u041e\u0442\u043c\u0435\u043d\u0430 \u0437\u0430\u044f\u0432\u043a\u0438 \u043d\u0430 \u0432\u044b\u0432\u043e\u0434","dashboard.history.payments.cancellation_confirmation.question_text":"\u0412\u044b \u0442\u043e\u0447\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443 \u043d\u0430 \u0432\u044b\u0432\u043e\u0434 \u0441\u0440\u0435\u0434\u0441\u0442\u0432?","dashboard.history.payments.cancellation_confirmation.button_yes":"\u0414\u0430, \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c","dashboard.history.payments.cancellation_confirmation.button_no":"\u041d\u0435\u0442","dashboard.history.payments.form.status.cancelled":"\u041e\u0442\u043c\u0435\u043d\u0435\u043d\u0430","games.is_blocked_for_locale":"\u0418\u0433\u0440\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430","games.is_blocked_for_currency":"\u0418\u0433\u0440\u0430 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0430\u0432\u043a\u0438 \u0432 \u0412\u0430\u0448\u0435\u0439 \u0432\u0430\u043b\u044e\u0442\u0435","games.is_blocked_in_country":"\u042d\u0442\u0430 \u0438\u0433\u0440\u0430 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0435","games.play_real":"\u0418\u0433\u0440\u0430\u0442\u044c \u043d\u0430 \u0434\u0435\u043d\u044c\u0433\u0438","games.play_demo":"\u0414\u0435\u043c\u043e","games.show_all":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435","games.not_found":"\u041f\u043e \u0412\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e \u043d\u0438 \u043e\u0434\u043d\u043e\u0439 \u0438\u0433\u0440\u044b.","games.providers":"\u0412\u0441\u0435 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b","games.search":"\u041f\u043e\u0438\u0441\u043a","games.filters.sort_title":"\u041f\u0435\u0440\u0435\u0447\u0435\u043d\u044c \u0438\u0433\u0440","games.filters.sort_newest":"\u041d\u043e\u0432\u0438\u043d\u043a\u0438","games.filters.sort_maxbet":"MAX \u0441\u0442\u0430\u0432\u043a\u0430","games.filters.sort_minbet":"MIN \u0441\u0442\u0430\u0432\u043a\u0430","games.filters.show_filters":"\u0411\u043e\u043b\u044c\u0448\u0435 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432","games.filters.hide_filters":"\u0421\u043a\u0440\u044b\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u044b","games.filters.volatility":"\u0412\u043e\u043b\u0430\u0442\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c","games.filters.volatility_any":"\u041b\u044e\u0431\u0430\u044f","games.filters.volatility_high":"\u0412\u044b\u0441\u043e\u043a\u0430\u044f","games.filters.volatility_medium":"\u0421\u0440\u0435\u0434\u043d\u044f\u044f","games.filters.volatility_low":"\u041d\u0438\u0437\u043a\u0430\u044f","games.filters.bonus_checkbox":"\u0411\u043e\u043d\u0443\u0441\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f","games.filters.buy_bonus_checkbox":"\u041f\u043e\u043a\u0443\u043f\u043a\u0430 \u0431\u043e\u043d\u0443\u0441\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438","games.filters.achivement_checkbox":"\u0414\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f","games.filters.tournament_checkbox":"\u0422\u0443\u0440\u043d\u0438\u0440\u043d\u044b\u0435 \u0438\u0433\u0440\u044b","winter_map.read_more":"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435","winter_map.provider_netent_title":"\u0417\u0438\u043c\u043d\u044f\u044f \u043c\u0430\u0433\u0438\u044f","winter_map.provider_netent_text":"\u0427\u0443\u0434\u0435\u0441\u043d\u043e\u0435 \u043d\u0430\u0447\u0430\u043b\u043e \u0437\u0438\u043c\u044b \u0441\u043e <strong>\u20ac150 000<\/strong><br\/>\u0432 \u043b\u043e\u0442\u0435\u0440\u0435\u0435 \u043e\u0442 NetEnt \u0441 1 \u043f\u043e 8 \u0434\u0435\u043a\u0430\u0431\u0440\u044f!","winter_map.provider_race_title":"\u0421\u043d\u0435\u0436\u043d\u044b\u0435 \u0432\u0438\u0440\u0430\u0436\u0438","winter_map.provider_race_text":"\u041d\u043e\u0432\u044b\u0435 \u0432\u0438\u0440\u0430\u0436\u0438 \u0432 3 \u044d\u0442\u0430\u043f\u0430 \u0437\u0430 <strong>\u20ac50 000<\/strong><br\/>\u0441 3 \u043f\u043e 26 \u0434\u0435\u043a\u0430\u0431\u0440\u044f!","winter_map.provider_yggd_1_title":"\u0421\u0435\u0437\u043e\u043d \u0447\u0443\u0434\u0435\u0441","winter_map.provider_yggd_1_text":"<strong>\u0420\u043e\u0436\u0434\u0435\u0441\u0442\u0432\u0435\u043d\u0441\u043a\u0438\u0435 \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f<\/strong><br\/>\u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0441\u0435\u0437\u043e\u043d\u0430 \u043f\u0440\u0430\u0437\u0434\u043d\u0438\u0447\u043d\u044b\u0445 \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u0441 <strong>\u20ac50 000<\/strong>!<br\/>\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0435 \u043f\u0440\u0438\u0437\u044b \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0442 \u0441 16 \u043f\u043e 22 \u0434\u0435\u043a\u0430\u0431\u0440\u044f","winter_map.provider_yggd_2_title":"\u0420\u043e\u0436\u0434\u0435\u0441\u0442\u0432\u0435\u043d\u0441\u043a\u0438\u0435 \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f","winter_map.provider_yggd_2_text":"<strong>\u0413\u0430\u0432\u0430\u0439\u0441\u043a\u0438\u0439 \u0441\u043e\u0447\u0435\u043b\u044c\u043d\u0438\u043a<\/strong><br\/>\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u2014 \u0413\u0430\u0432\u0430\u0439\u0438! <strong>\u20ac150 000<\/strong> \u0438 \u043f\u043e\u0435\u0437\u0434\u043a\u0430 \u043d\u0430 \u0434\u0432\u043e\u0438\u0445!<br\/>\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0439\u0442\u0435 \u043c\u0438\u0441\u0441\u0438\u0438 \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0441 23 \u043f\u043e 29 \u0434\u0435\u043a\u0430\u0431\u0440\u044f!","winter_map.provider_yggd_3_title":"\u0420\u043e\u0436\u0434\u0435\u0441\u0442\u0432\u0435\u043d\u0441\u043a\u0438\u0435 \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f","winter_map.provider_yggd_3_text":"<strong>\u041f\u0440\u0430\u0437\u0434\u043d\u0438\u0447\u043d\u043e\u0435 \u0440\u0430\u0437\u0434\u0432\u043e\u0435\u043d\u0438\u0435<\/strong><br\/>\u0422\u0440\u0435\u0442\u0438\u0439 \u044d\u0442\u0430\u043f \u0440\u043e\u0436\u0434\u0435\u0441\u0442\u0432\u0435\u043d\u0441\u043a\u0438\u0445 \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u0441\u043e <strong>\u20ac100 000<\/strong>!<br\/>\u0414\u0432\u043e\u0439\u043d\u043e\u0439 \u0448\u0430\u043d\u0441 \u0440\u043e\u0441\u0442\u0430 \u043f\u0440\u0438\u0437\u043e\u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0441 30 \u0434\u0435\u043a\u0430\u0431\u0440\u044f \u043f\u043e 6 \u044f\u043d\u0432\u0430\u0440\u044f!","winter_map.provider_yggd_4_title":"\u041f\u0440\u0430\u0437\u0434\u043d\u0438\u0447\u043d\u043e\u0435 \u0440\u0430\u0437\u0434\u0432\u043e\u0435\u043d\u0438\u0435","winter_map.provider_yggd_4_text":"<strong>\u041f\u043e\u043b\u044f\u0440\u043d\u044b\u0435 \u0438\u0433\u0440\u0438\u0449\u0430<\/strong><br\/>\u0424\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043e\u0442 Yggdrasil \u043d\u0430 <strong>\u20ac50 000<\/strong>!<br\/>\u0421\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0439\u0434\u0435\u0442 \u0441 7 \u043f\u043e 12 \u044f\u043d\u0432\u0430\u0440\u044f!","winter_map.lottery_title":"\u041f\u043e\u043b\u043d\u044b\u0439 \u0443\u043b\u0435\u0442","winter_map.lottery_text":"<strong>\u20ac50 000<\/strong> \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043d\u0430\u0433\u0440\u0430\u0434\u044b \u0437\u0430 \u043b\u043e\u0442\u0435\u0440\u0435\u0439\u043d\u044b\u0435 \u0431\u0438\u043b\u0435\u0442\u044b<br>\u0441 17 \u0434\u0435\u043a\u0430\u0431\u0440\u044f \u043f\u043e 21 \u044f\u043d\u0432\u0430\u0440\u044f!","winter_map.provider_tour_micra_title":"\u0429\u0435\u0434\u0440\u0430\u044f \u043c\u0435\u0442\u0435\u043b\u044c","winter_map.provider_tour_micra_text":"\u0421\u043e\u0441\u0442\u044f\u0437\u0430\u043d\u0438\u0435 \u0437\u0430 <strong>7 000 000<\/strong> \u043f\u043e\u0438\u043d\u0442\u043e\u0432 \u0432 \u0438\u0433\u0440\u0430\u0445 Microgaming<br\/>\u0441 13 \u043f\u043e 23 \u0434\u0435\u043a\u0430\u0431\u0440\u044f!","winter_map.provider_tour_playngo_title":"\u0418\u0433\u0440\u043e\u0432\u043e\u0439 \u043b\u0435\u0434\u043e\u043a\u043e\u043b","winter_map.provider_tour_playngo_text":"\u0422\u0443\u0440\u043d\u0438\u0440 \u043f\u043e \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u043c \u0438\u0433\u0440\u0430\u043c Play'n Go \u0441 <strong>7 000 000<\/strong> \u043f\u043e\u0438\u043d\u0442\u043e\u0432<br\/>\u0441 24 \u043f\u043e 30 \u0434\u0435\u043a\u0430\u0431\u0440\u044f!","winter_map.cashback_title":"\u041d\u043e\u0432\u043e\u0433\u043e\u0434\u043d\u0438\u0439 CashBack +50%!","winter_map.cashback_text":"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 <strong>50%<\/strong> \u043a\u044d\u0448\u0431\u0435\u043a\u0430<br\/>\u0434\u043b\u044f \u043f\u0440\u0430\u0437\u0434\u043d\u0438\u0447\u043d\u043e\u0433\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f!","winter_map.youtube_title":"winter_map.youtube_title","winter_map.youtube_text":"winter_map.youtube_text","winter_map.minigame_name":"\u0411\u0435\u0433\u0443\u0449\u0438\u0439 \u0421\u0430\u043d\u0442\u0430","winter_map.minigame_after_1_win":"\u041e\u0442\u043b\u0438\u0447\u043d\u044b\u0439 \u0437\u0430\u0431\u0435\u0433! \u041c\u043e\u0436\u0435\u0442, \u0441\u0442\u043e\u0438\u0442 \u0435\u0433\u043e \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c?","winter_map.minigame_after_game_button_run":"\u0411\u0435\u0436\u0430\u0442\u044c \u0435\u0449\u0435!","winter_map.minigame_after_game_button_take":"\u0417\u0430\u0431\u0440\u0430\u0442\u044c \u0432\u044b\u0438\u0433\u0440\u044b\u0448","winter_map.minigame_after_2_win":"\u041d\u0430\u043f\u043e\u0440\u0438\u0441\u0442\u043e\u0441\u0442\u044c \u2014 \u044d\u0442\u043e \u0437\u0434\u043e\u0440\u043e\u0432\u043e! \u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u043e\u0441\u0442\u0430\u043b\u0430\u0441\u044c 1 \u043f\u043e\u043f\u044b\u0442\u043a\u0430!","winter_map.minigame_after_any_fail":"\u0413\u043b\u0430\u0432\u043d\u043e\u0435 \u2014 \u043d\u0435 \u0441\u0434\u0430\u0432\u0430\u0442\u044c\u0441\u044f!","winter_map.minigame_after_3_fail":"\u041f\u0440\u0430\u0437\u0434\u043d\u0438\u043a \u043d\u0435 \u0443\u0431\u0435\u0436\u0438\u0442! \u041f\u043e\u043f\u044b\u0442\u043e\u043a \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435\u0442, \u0437\u0430\u0442\u043e \u0435\u0441\u0442\u044c \u0435\u0449\u0435 \u043c\u043d\u043e\u0433\u043e \u0447\u0435\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0433\u043e \u043d\u0430 Play Fortuna!","winter_map.minigame_after_3_win":"\u041e\u0442\u043b\u0438\u0447\u043d\u044b\u0439 \u0437\u0430\u0431\u0435\u0433! Free Spins \u0432 \u0438\u0433\u0440\u0435 Rise of Merlin","winter_map.minigame_no_tries_or_game_over":"\u0412\u044b \u043d\u0435\u0443\u0442\u043e\u043c\u0438\u043c\u044b, \u043d\u043e \u0443\u0436\u0435 \u043f\u0440\u043e\u0431\u0435\u0436\u0430\u043b\u0438 3 \u0440\u0430\u0437\u0430! \u0421\u0430\u043d\u0442\u0435 \u043d\u0443\u0436\u0435\u043d \u043e\u0442\u0434\u044b\u0445!","winter_map.unvalid_social_title":"\u041d\u0435\u043e\u043f\u043e\u0437\u043d\u0430\u043d\u043d\u044b\u0439 \u0441\u0442\u0440\u0430\u043d\u043d\u0438\u043a!","winter_map.unvalid_social_text":"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443\u044e \u043f\u043e\u0447\u0442\u0443 \u0438 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u043f\u0435\u0440\u0435\u0434 \u0432\u0445\u043e\u0434\u043e\u043c","two_factor_auth.success_disable_message":"two_factor_auth.success_disable_message","two_factor_auth.success_enable_message":"two_factor_auth.success_enable_message","two_factor_auth.login_mess_on_2fa":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432 \u044d\u0442\u043e \u043f\u043e\u043b\u0435 \u043a\u043e\u0434 \u0438\u0437 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f Google Authenticator","two_factor_auth.login_mess_on_2fa_sms":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434 \u0438\u0437 SMS-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f:","two_factor_auth.authorize":"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"},"system_data":{"timestamp":1598856187},"domain_sse":"https:\/\/notifier-pa.com"};
    </script>
    <script>
		dataLayer = [{
			'auth_token': '0'
		}];
		function alersing_stup(text){
			$('#redireftion').html('<div class="notification-box notification-system"><span class="close-icon" onclick="this.parentNode.parentNode.removeChild(this.parentNode)"></span><div class="text" id="text_notification"></div></div>');
			$('.notification-box').addClass('notification-box notification-system active');
			$('#text_notification').text(text);
		}
    </script>
	<style>.async-hide { opacity: 0 !important} </style>
    </head>
<body>
	<script>
		window.addEventListener('load', function () {
			
			function sendTermsRequest(link) {
				$.ajax({
					async: false,
					cache: false,
					url: link,
					method: 'post',
					dataType: 'json',
					success: function (data) {
						var message = data.message;
						if (message.hasOwnProperty('accepted') && true === message.accepted) {
							$('.notification-line').remove();
							var detectPresentetionUIpopup = new Event('detectPresentetionUIpopup');
							document.dispatchEvent(detectPresentetionUIpopup);
						} else if (message.hasOwnProperty('redirect')) {
							window.location = message.redirect;
						}
					}
				});
			}
			$('.btn-cookie-policy').click(function (event) {
				event.preventDefault();
				var link = $(this).data('href');
				sendTermsRequest(link);
			});
		});
	</script>    
	<div class="container  is-auth">
		<header class="header  is-auth" itemscope itemtype="https://schema.org/WPHeader">
			<div class="header-width">
				<div class="header-grid is-auth">
					<div class="header-grid__item header-logo ">
						<a href="/" class="logo is-auth"></a>
					</div>
					@if(!Auth::check())
	
						<div class="header-grid__item header-user-entry">
							<span class="btn btn-gold header-auth-btn" data-popup="xhr" data-popup-url="/login">ВОЙТИ</span>
						   <a href="/register" class="btn btn-green header-register-btn">@lang('app.register')</a>
						</div>
						@else
							<div class="header-grid__item header-tools">
								<a href="/profile?bonus=true" class="header-tools-circle header-bonus-link ">
									<svg class="icon-present-header">
										<svg id="icon-present" viewBox="0 0 19 20"><g fill="none"><rect width="8" height="9" x="1" y="11" fill="#F9B242"></rect><rect width="8" height="9" x="10" y="11" fill="#F9B242"></rect><rect width="9" height="4" y="6" fill="#F9B242"></rect><rect width="9" height="4" x="10" y="6" fill="#F9B242"></rect><path stroke="#F9B242" d="M5.41654192,0.5 C7.48039055,0.5 8.84208687,2.01998019 9.4878082,4.89025868 L9.6249806,5.5 L9,5.5 C8.03690365,5.5 6.79071794,5.22179148 5.2126908,4.65655747 C4.19789606,4.20345559 3.53363304,3.26515935 3.50120241,2.31709358 C3.46516137,1.26348242 4.21400263,0.5 5.41654192,0.5 Z"></path><path stroke="#F9B242" d="M11.4165419,0.5 C13.4803906,0.5 14.8420869,2.01998019 15.4878082,4.89025868 L15.6249806,5.5 L15,5.5 C14.0369037,5.5 12.7907179,5.22179148 11.2126908,4.65655747 C10.1978961,4.20345559 9.53363304,3.26515935 9.50120241,2.31709358 C9.46516137,1.26348242 10.2140026,0.5 11.4165419,0.5 Z" transform="matrix(-1 0 0 1 25 0)"></path></g></svg>
									   </svg>
									<span class="header-count-notification" id="bonus_count"></span>
								</a>
							</div>
							<div class="header-grid__item header-user-name">
								<div class="header-user-name-inner">
									<a class="header-user-name__link" href="/profile?index=true">{{ Auth::user()->username }}</a>
								</div>
							</div>
							<div class="header-grid__item header-user-general">
									<a href="/profile?balance=true&payment" class="header-user-general-link">

										<div class="header-user-price-wrapp">
											<div class="header-user-price" data-user-info="%balance%">{{ auth()->user()->present()->balance }}</div>
											<span class="header-user-price-currency" data-user-info="%currency%">RUB</span>
										</div>
										<div class="header-user-price-name">
											
											<div class="header-user-price-name-inner">
												{{  Auth::user()->username  }}
											</div>
										</div>
									</a>
									<a href="/profile?balance=true&payment" class="btn btn-green btn-header-cash">
										<span class="btn-header-cash__text">@lang('app.pay_ok_title')</span>
									</a>
									
							</div>
						@endif
						<div class="header-grid__item header-conf">
			
							@if(Auth::check())
							<a href="/logout" title="logout" class="header-exit-link is-auth">
								<svg class="icon-exit-header is-auth">
									<svg id="icon-exit" viewBox="0 0 16 16"><path id="In_2_" style="fill-rule:evenodd;clip-rule:evenodd;" d="M4,11.002V9H0V7h4V5l5.001,3.002L4,11.002zM15.999,0.001V0H4v3l0.999,0.002l0.004-1.951L14.999,1v0.001L11,5v10H5v-2H4v3h7l0,0h5V0L15.999,0.001z"></path></svg>
								</svg>
							</a>
							@endif
						</div>
						
				</div>
				<span id="redireftion"></span>
				
				<nav class="header-nav nav-general" itemscope itemtype="https://ruschema.org/SiteNavigationElement">
					<div class="nav-general__item">
						<a class="nav-general__link is-active" href="/">@lang('app.home')</a>
					</div>		
				</nav>
			</div>
		</header>
		
		
		@yield('content')

	  
		<footer class="footer" itemscope itemtype="https://schema.org/WPFooter">
			<div class="new-width">
				<ul class="payment-box">
					<li class="payment-box__item">
						<div class="payment-box__link visa-icon">
							<span class="payment-box__text">Visa/MasterCard</span>
						</div>
					</li>
					<li class="payment-box__item">
						<div class="payment-box__link maestro-icon">
							<span class="payment-box__text">Maestro</span>
						</div>
					</li>
					<li class="payment-box__item">
						<div class="payment-box__link qiwi-icon">
							<span class="payment-box__text">QIWI</span>
						</div>
					</li>
					<li class="payment-box__item">
						<div class="payment-box__link webmoney-icon">
							<span class="payment-box__text">WebMoney</span>
						</div>
					</li>
					<li class="payment-box__item">
						<div class="payment-box__link yandex-wallet-icon">
							<span class="payment-box__text">Yandex.Money</span>
						</div>
					</li>
					<li class="payment-box__item">
						<div class="payment-box__link skrill-icon">
							<span class="payment-box__text">Skrill</span>
						</div>
					</li>
					<li class="payment-box__item">
						<div class="payment-box__link neteller-icon">
							<span class="payment-box__text">Neteller</span>
						</div>
					</li>
					<li class="payment-box__item">
						<div class="payment-box__link express-connect-icon">
							<span class="payment-box__text">Express Connect</span>
						</div>
					</li>
					<li class="payment-box__item">
						<div class="payment-box__link interac-etransfer-icon">
							<span class="payment-box__text">Interac <span class="payment-box__text_word">e-Transfer</span></span>
						</div>
					</li>
					<li class="payment-box__item">
						<div class="payment-box__link interac-online-icon">
							<span class="payment-box__text">Interac Online</span>
						</div>
					</li>
				</ul>
			</div>


			<div class="footer__nav-box">
				<div class="new-width">
					<ul class="footer-nav" itemscope itemtype="#">
						<li class="footer-nav__item"><a class="footer-nav__link" href="#">Ответственная игра</a></li>
						<li class="footer-nav__item"><a class="footer-nav__link" href="#">Защита информации</a></li>
						<li class="footer-nav__item"><a class="footer-nav__link" href="#">Условия и положения</a></li>
						<li class="footer-nav__item"><a class="footer-nav__link" href="#">Безопасность</a></li>
					</ul>
				</div>
			</div>

		</footer>

	</div>
	
    <script src="/intonefront/js/exponea_function.js?068bd7e"></script>
    <script src="/intonefront/js/jquery.cookies.2.2.0.min.js?068bd7e"></script>
	<script src="/intonefront/js/bootstrap.min.js?068bd7e"></script>
	<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
	<script>
        exponea.initialize({
            "token": "b230a6e2-f3ff-11e9-906f-026b7d0927d7",
            "track": {
            "visits": true
        },
            customer: window.loggedInCustomer
        });
    </script>
    <script src="/intonefront/js/exponea.js?068bd7e"></script>
    <script src="/intonefront/js/main.js?b43cbbc"></script>
    <script src="/intonefront/js/build.js?a76afc8"></script>
    <script async src="https://secure.comodoca.com/trustlogo/javascript/trustlogo.js"></script>
	<script id="sqwonchatConfig">
		window.SqwonchatConfig = {
			clientId: "",
			depositStatus: '',
			device: 'desktop',
			email: "",
			fio: "",
			ipLastAuth: "",
			levelStatus: '',
			locale: "ru",
			profileCountry: "",
			project: "playfortuna",
			username: "",
			vipStatus: false
		};
	</script>

	     <script>
    if ($.validator && $.validator.messages) {
        $.extend($.validator.messages, {
            "login": "",
            "login.blank": "Логин должен содержать от 5 до 17 знаков (латинских букв, цифр)",
            "login.max": "Логин должен содержать от 5 до 17 знаков (латинских букв, цифр)",
            "login.min": "Логин должен содержать от 5 до 17 знаков (латинских букв, цифр)",
            "login.wrong": "Некорректный логин",
            "login.invalid": "Логин или пароль введены некорректно",

            "login-exist": "Такой логин уже зарегистрирован",
            "login-notexist": "Логин не зарегистрирован в системе. Пройдите, пожалуйста, регистрацию.",

            "email": "",
            "email.blank": "Поле не может быть пустым",
            "email.wrong": "Некорректный Email",
            "email.notvalid": "Невалидный почтовый адрес",
            "email.exist": "Почтовый адрес уже зарегистрирован",
            "email.not.exist": "Почтовый адрес не зарегистрирован",

            "email-exist": "Почтовый адрес уже зарегистрирован",
            "email-notexist": "Почтовый адрес не зарегистрирован",

            "email.not.allowed.host": "Упс! Регистрация с домена @email@ запрещена. Возможно у вас есть другой email?",

            "psswrd": "",
            "psswrd.blank": "Поле не может быть пустым",
            "psswrd.repeat": "Пароли не совпадают",
            "psswrd.wrong": "Пароль должен содержать от 8 до 32 знаков (латинских букв, цифр)",
            "psswrd.wrong_length": "Пароль должен состоять минимум из 8 символов",

            "password.current": "Пароль не совпадает с текущим",
            "passwordPlain.repeat": "Пароли не совпадают",

            "captcha": "",
            "captcha.blank": "Необходимо ввести 4 цифры",
            "captcha.wrong": "Неверное число",
            "captcha.invalid": "Капча не совпадает",

            "recaptcha.invalid": "проверка reCAPTCHA не пройдена",

            "auth_2fac_code.invalid_format": "Необходимо ввести 6 цифр",
            "auth_2fac_code.check_failed": "Код не актуален. Введите действующий.",

            "firstname": "",
            "firstname.blank": "Имя должно содержать от 3 до 32 букв кириллицы или латинского алфавита",
            "firstname.wrong": "Имя должно содержать от 3 до 32 букв кириллицы или латинского алфавита",

            "lastname": "",
            "lastname.blank": "Фамилия должно содержать от 3 до 32 букв кириллицы или латинского алфавита",
            "lastname.wrong": "Фамилия должно содержать от 3 до 32 букв кириллицы или латинского алфавита",

            "phone": "",
            "phone.blank": "Телефон должен содержать от 5 до 15 цифр",
            "phone.wrong": "Телефон должен содержать от 5 до 15 цифр",

            "city": "",
            "city.blank": "Город должен содержать от 1 до 64 символов",
            "city.wrong": "Город должен содержать от 1 до 64 символов",

            "country": "",
            "country.blank": "Не выбрана страна",
            "country.wrong": "Не выбрана страна",

            "file": "Можно прикреплять файлы только со следующим расширением: *.jpg, *.jpeg, *.png, *.bmp, *.doc, *.docx, *.pdf, *.tiff",

            "radio": "Выберите ваш пол",

            "select": "Заполните дату рождения",

            "checkbox": "Необходимо согласиться с правилами",

            "required": "Поле не может быть пустым",

            'code.phone_already_verified': 'Данный номер телефона уже верифицирован в другом аккаунте.',
            'code.blank': 'Код не может быть пустым',
            'code.wrong': 'Код должен содержать 7 цифр',
            'code.invalid': 'Код не совпадает', // response from server
        });
    }
</script><link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

    <link type="text/css" rel="stylesheet" href="/intonefront/css/main.css?2d56034"/>
	<script>
	
$('.winsline').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipe: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          pauseOnFocus: true
        }
      },
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          pauseOnFocus: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          pauseOnFocus: true
        }
      }
    ]
  });

  $('.winsline').show();


  (function($) {
    if ($(window).width() < 768) {
      $('.leaderboard__slider').slick({
        dots: true,
        infinite: false,
        arrows: false
      });
      $('.lottery-details__tickets').slick({
        dots: true,
        infinite: false,
        arrows: false
      });
    }
  })(jQuery);

	
	</script>
    <script src="/intonefront/js/main-category.js?4a7ef94"></script>
	<script>
	let utmParameters = [];
	for (let utmKey in utmParameters) {
		document.cookie = utmKey + "=" + utmParameters[utmKey];
	}
	@if(Auth::check())
		function bonus_count(){
			jQuery.ajax({
				'type': 'POST',
				'url': '/result_bonus.php?count=true&users=<?php echo e(Auth::user()->id); ?>&hash=<?php echo md5(e(Auth::user()->id).':9358741'); ?>',
				'cache': true,
				dataType: 'json',
				'data': jQuery(this).parents('form').serialize(),
				'success': function(run) {
					if(run.status === true){
						$('#bonus_count').text(run.count);
					}else{
						$('#bonus_count').text(run.count);
					}					
				}
			});
		}
		bonus_count();	
		
	@else



	@endif
	
	</script>
	@yield('scripts')
	<script src="//code.tidio.co/flwnh3r1wb1vkogvyezefmghogfg7y1q.js" async></script><a href="//free-kassa.ru/"><img src="//www.free-kassa.ru/img/fk_btn/17.png" title="��� ������ �� ᠩ� ���⠬�"></a>
</body>
</html>