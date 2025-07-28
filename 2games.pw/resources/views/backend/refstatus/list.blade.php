@extends('backend.layouts.app')

@section('page-title', 'Заявка вывода средств')
@section('page-heading', 'Заявка вывода средств')

@section('breadcrumbs')
    <li class="breadcrumb-item">
        <a href="{{ route('backend.ref') }}">Заявка вывода средств</a>
    </li>
    <li class="breadcrumb-item active">
        @lang('app.create')
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
				'url': '/result_bonus.php?admin=true&dep=true&users=<?php echo $user;?>&hash=<?php echo $md5;?>&refstatus=true',
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
			<div class="col-md-6" id="error"></div>
			<div class="col-md-3">	
				<a href="#" class="btn btn-primary btn-rounded float-right update"><i class="fa fa-undo" aria-hidden="true"></i> Oбновить</a>
			</div>
		</div>
	</div>
</div>
<?php if(isset($_GET['status']) && isset($_GET['txt'])):?>
	<?php if($_GET['status'] == 0):?>
	<div class="alert alert-warning alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Warning!</strong> '+result.txt+'</div>
	<?php else:?>
	<div class="alert alert-success alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button> <strong>success!</strong> Вы отклонили заявку на вывод средств</div>
	<?php endif;?>
<?php endif;?>
<div class="card">
	<div class="card-body">
		<div class="row">
			<div class="col-md-12">	
				<div class="table-responsive" id="users-table-wrapper">
				<div class="shop_informat"></div>
				</div>

			</div>
		</div>
	</div>
</div>

@stop
@section('scripts')
<script>
							function getdetails_ok(id){
								$.ajax({
									type: "POST",
									dataType: 'json',
									url: "/result_bonus.php?admin=true&dep=true&users=<?php echo $user;?>&hash=<?php echo $md5;?>&ok",
									data: {
										id:id,
									}
								}).done(function( result ){
									if(result.status == false){
										$('#error').html('<div class="alert alert-warning alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Warning!</strong> '+result.txt+'</div>');	
							
										$('#builder_'+id).html('');
											$('#der_'+id).html('<span class="badge badge-success">Успешно вывели</span>');
									}else{
										$('#error').html('<div class="alert alert-success alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button> <strong>success!</strong> Вы подтвердили вывод средств данному пользователю</div>');	
							
										$('#builder_'+id).html('');
											$('#der_'+id).html('<span class="badge badge-success">Успешно вывели</span>');
									}
								});
								return false;
							}
							
							function getdetails_off(id){
								$.ajax({
									type: "POST",
									dataType: 'json',
									url: "/result_bonus.php?admin=true&dep=true&users=<?php echo $user;?>&hash=<?php echo $md5;?>&off",
									data: {
										id:id,
									}
								}).done(function( result ){
									if(result.status == false){
											$('#error').html('<div class="alert alert-warning alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Warning!</strong> '+result.txt+'</div>');	
								
										$('#builder_'+id).html('');
											$('#der_'+id).html('<span class="badge badge-danger">Ошибка средства вернули</span>');
									}else{
									
										$('#error').html('<div class="alert alert-success alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button> <strong>success!</strong> Вы отклонили заявку на вывод средств</div>');	
										$('#builder_'+id).html('');
											$('#der_'+id).html('<span class="badge badge-danger">Ошибка средства вернули</span>');
									}
								});
								return false;
							}
							</script>
@stop