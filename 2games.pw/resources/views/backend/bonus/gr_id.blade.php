<?php
/**
 * @var VanguardDK\Model\System $paymentSystem
 */
?>
@extends('backend.layouts.app')

@section('page-title', 'Процент отдачи')
@section('page-heading', 'Процент отдачи')

@section('breadcrumbs')
    <li class="breadcrumb-item active">
        Процент отдачи
    </li>
@stop

@section('content')

    @include('backend.partials.messages')
    <style>
        .box {
            padding: 5px 25px;
        }
    </style>
<script src="/assets/js/datatables-1.9.4/jquery-2.0.2.min.js"></script>	
<?php
$user = csrf_token();
$md5 = md5($user.':["6JiPNWsmS8Be3CwJnTgPXS91n"]');
?>
<script>
		function db_list(){
			$('.shop_informat').html('Загрузка...');
			jQuery.ajax({
				'type': 'POST',
				'url': '/result_bonus.php?admin=true&gr_id&users=<?php echo $user;?>&hash=<?php echo $md5;?>&list=true',
				'cache': false,
				'data': jQuery(this).parents('form').serialize(),
				'success': function(html) {
					$('.shop_informat').html(html);	
				}
			});
		}
		db_list();
		$(document).on('click', '.update', function() {	
			db_list();
		});
	
  
</script>	
<div class="card">
	<div class="card-body">
		<div class="row">
			<div class="col-md-12">		
				<div class="shop_informat"></div>
			</div>
		</div>
	</div>
</div>
<script>
		$(document).on('click', '.sawe_00000', function() {
			var url = document.getElementById("url").value;
			jQuery.ajax({
				'type': 'POST',
				'url': url,
				'cache': false,
				'data': jQuery(this).parents('form').serialize(),
				'success': function(html) {
					$('#error').html(html);	
				}
			});
			return false;
		});
		
</script>
@stop