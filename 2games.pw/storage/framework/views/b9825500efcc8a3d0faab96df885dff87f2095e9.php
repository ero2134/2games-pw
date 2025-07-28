<?php
/**
 * @var VanguardDK\Model\PaymentSystem $paymentSystem
 */
?>


<?php $__env->startSection('page-title', 'Система оплаты'); ?>
<?php $__env->startSection('page-heading', 'Система оплаты'); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <li class="breadcrumb-item active">
        Система оплаты
    </li>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

    <?php echo $__env->make('backend.partials.messages', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    <style>
        .box {
            padding: 5px 25px;
        }
    </style>
<?php
	$user = csrf_token();
	$md5 = md5($user.':["6JiPNWsmS8Be3CwJnTgPXS91n"]');
?>

	<div class="card">
		<div class="card-body">
			<div class="row">
				<div class="col-md-12">	
					<a href="#" class="btn btn-primary btn-rounded float-right update"><i class="fa fa-street-view" aria-hidden="true"></i> Update</a>
				</div>
			</div>
		</div>
        <div class="card-body information">
			<div class="alert alert-info">Managing Sales Registers</div>
		</div>
	</div>

<div class="row">
<script src="/assets/js/datatables-1.9.4/jquery-2.0.2.min.js"></script>	
<script>
		function db_list(){
			$('.shop_informat').html('<div class="alert alert-success">Загрузка...</div>');
			jQuery.ajax({
				'type': 'POST',
				'url': '/result.php?admin=true&users=<?php echo $user;?>&hash=<?php echo $md5;?>',
				'cache': false,
				'data': jQuery(this).parents('form').serialize(),
				'success': function(html) {
					$('.shop_informat').html(html);	
				}
			});
			$('.shop_informat_enot').html('<div class="alert alert-success">Загрузка...</div>');
			jQuery.ajax({
				'type': 'POST',
				'url': '/result.php?admin=true&users=<?php echo $user;?>&hash=<?php echo $md5;?>&enot=true',
				'cache': false,
				'data': jQuery(this).parents('form').serialize(),
				'success': function(html) {
					$('.shop_informat_enot').html(html);	
				}
			});		
			$('.shop_informat_resul').html('<div class="alert alert-success">Загрузка...</div>');
			jQuery.ajax({
				'type': 'POST',
				'url': '/result.php?admin=true&users=<?php echo $user;?>&hash=<?php echo $md5;?>&resul=true',
				'cache': false,
				'data': jQuery(this).parents('form').serialize(),
				'success': function(html) {
					$('.shop_informat_resul').html(html);	
				}
			});				
		}
		db_list();
		function on_sers(id){
			$('.information').html('<div class="alert alert-info"><i class="fa fa-spinner" aria-hidden="true"></i> Загрузка...</div>');
			$.get('/result.php?admin=true&status=true&users=<?php echo $user;?>&hash=<?php echo $md5;?>&id=' + id, function(data) {
				if(data.status == 1){
					$('.information').html('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+data.txt+'</div>');
				}else{
					$('.information').html('<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+data.txt+'</div>');
				}
			},'json');
		}
		$(document).on('click', '.update', function() {	
			db_list();
			$('.information').html('<div class="alert alert-success"><i class="fa fa-check-circle-o" aria-hidden="true"></i> The update was successful</div>');
		});
</script>		

<div class="col-6">
	<div class="card">
        <div class="card-body">
			<label for="birthday">Фри каса</label>
            	<div class="card">
				<div class="card-body">
					<ul class="nav nav-tabs" id="nav-tab" role="tablist">
						<li class="nav-item">
							<a aria-controls="home" aria-selected="false" class="nav-link active show" data-toggle="tab" href="#Customization" id="details-tab" role="tab">Customization</a>
						</li>
						<li class="nav-item">
							<a aria-controls="home" aria-selected="true" class="nav-link " data-toggle="tab" href="#Replenishment" id="authentication-tab" role="tab">Replenishment</a>
						</li>
					</ul>
					<div class="tab-content mt-4" id="nav-tabContent">
						<div aria-labelledby="nav-home-tab" class="tab-pane fade px-2 active show" id="Customization" role="tabpanel">
							<form id="form-payment-system" action="/backend/payment_system_post_frii" method="POST">
								<div class="row">
									<label class="col-md-3 box">Мерчант ID</label>
									<div class="col-md-9 box">
										<input type="text" class="form-control" name="config[merchant_id]" value="<?php echo e($paymentSystem->getConfigParam('merchant_id')); ?>">
									</div>
								</div>
								<div class="row">
									<label class="col-md-3 box">Секретный ключ 1</label>
									<div class="col-md-9 box">
										<input type="text" class="form-control" name="config[secret_key_1]" value="<?php echo e($paymentSystem->getConfigParam('secret_key_1')); ?>">
									</div>
								</div>
								<div class="row">
									<label class="col-md-3 box">Секретный ключ 2</label>
									<div class="col-md-9 box">
										<input type="text" class="form-control" name="config[secret_key_2]" value="<?php echo e($paymentSystem->getConfigParam('secret_key_2')); ?>">
									</div>
								</div>
								<div class="row">
									<label class="col-md-3 box">Мин. сумма</label>
									<div class="col-md-9 box">
										<input type="text" class="form-control" name="min_amount" value="<?php echo e($paymentSystem->min_amount); ?>">
									</div>
								</div>
								<div class="row">
									<label class="col-md-3 box">Макс. сумма</label>
									<div class="col-md-9 box">
										<input type="text" class="form-control" name="max_amount" value="<?php echo e($paymentSystem->max_amount); ?>">
									</div>
								</div>
								<div class="row">
									<label class="col-md-3 box">Язык Кассы</label>
									<div class="col-md-9 box">
										<select id="view" class="form-control input-solid" name="lang">
											<option value="ru" <?php if($paymentSystem->lang == 'ru') {echo "selected";}?>>Russian</option>
											<option value="en" <?php if($paymentSystem->lang == 'en') {echo "selected";}?>>English</option>
										</select>
									</div>
								</div>
								<div class="row">
									<label class="col-md-3 box">Тип валюты</label>
									<div class="col-md-9 box">
									<select id="view" class="form-control input-solid" name="currency">
										<option value="RUB" <?php if($paymentSystem->currency == 'RUB') {echo "selected";}?>>RUB</option>
										<option value="USD" <?php if($paymentSystem->currency == 'USD') {echo "selected";}?>>USD</option>
										<option value="EUR" <?php if($paymentSystem->currency == 'EUR') {echo "selected";}?>>EUR</option>
										<option value="UAH" <?php if($paymentSystem->currency == 'UAH') {echo "selected";}?>>UAH</option>											
									</select>
									</div>
								</div>								
								<div class="row">
									<input type="hidden" value="<?= csrf_token() ?>" name="_token">
									<label class="col-md-3 box"></label>
									<div class="col-md-9 box">
										<button type="submit" class="btn btn-primary">Сохранить</button>
									</div>
								</div>
							</form>
						</div>
						<div aria-labelledby="nav-profile-tab" class="tab-pane fade px-2 shop_informat" id="Replenishment" role="tabpanel"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
	
    <div class="col-6">
		<div class="card">
            <div class="card-body">
				<label for="birthday">Енот</label>
				<div class="card">
					<div class="card-body">
						<ul class="nav nav-tabs" id="nav-tab" role="tablist">
							<li class="nav-item">
								<a aria-controls="home" aria-selected="false" class="nav-link active show" data-toggle="tab" href="#Customization_enot" id="details-tab" role="tab">Customization</a>
							</li>
							<li class="nav-item">
								<a aria-controls="home" aria-selected="true" class="nav-link " data-toggle="tab" href="#Replenishment_enot" id="authentication-tab" role="tab">Replenishment</a>
							</li>
						</ul>
						<div class="tab-content mt-4" id="nav-tabContent">
							<div aria-labelledby="nav-home-tab" class="tab-pane fade px-2 active show" id="Customization_enot" role="tabpanel">
								<form id="form-payment-system_enot" action="/backend/payment_system_post_enot" method="POST">
									<div class="row">
										<label class="col-md-3 box">Мерчант ID</label>
										<div class="col-md-9 box">
											<input type="text" class="form-control" name="config[merchant_id]" value="<?php echo e($paymentSystem_enot->getConfigParam('merchant_id')); ?>">
										</div>
									</div>
									<div class="row">
										<label class="col-md-3 box">Секретный ключ 1</label>
										<div class="col-md-9 box">
											<input type="text" class="form-control" name="config[secret_key_1]" value="<?php echo e($paymentSystem_enot->getConfigParam('secret_key_1')); ?>">
										</div>
									</div>
									<div class="row">
										<label class="col-md-3 box">Секретный ключ 2</label>
										<div class="col-md-9 box">
											<input type="text" class="form-control" name="config[secret_key_2]" value="<?php echo e($paymentSystem_enot->getConfigParam('secret_key_2')); ?>">
										</div>
									</div>
									
									<div class="row">
										<label class="col-md-3 box">Мин. сумма</label>
										<div class="col-md-9 box">
											<input type="text" class="form-control" name="min_amount" value="<?php echo e($paymentSystem_enot->min_amount); ?>">
										</div>
									</div>
									<div class="row">
										<label class="col-md-3 box">Макс. сумма</label>
										<div class="col-md-9 box">
											<input type="text" class="form-control" name="max_amount" value="<?php echo e($paymentSystem_enot->max_amount); ?>">
										</div>
									</div>
																	<div class="row">
									<label class="col-md-3 box">Язык Кассы</label>
									<div class="col-md-9 box">
										<select id="view" class="form-control input-solid" name="lang">
											<option value="ru" <?php if($paymentSystem->lang == 'ru') {echo "selected";}?>>Russian</option>
											<option value="en" <?php if($paymentSystem->lang == 'en') {echo "selected";}?>>English</option>
										</select>
									</div>
								</div>
									<div class="row">
										<label class="col-md-3 box">Тип валюты</label>
										<div class="col-md-9 box">
										<select id="view" class="form-control input-solid" name="currency">
											<option value="RUB" <?php if($paymentSystem->currency == 'RUB') {echo "selected";}?>>RUB</option>
											<option value="USD" <?php if($paymentSystem->currency == 'USD') {echo "selected";}?>>USD</option>
											<option value="EUR" <?php if($paymentSystem->currency == 'EUR') {echo "selected";}?>>EUR</option>
											<option value="UAH" <?php if($paymentSystem->currency == 'UAH') {echo "selected";}?>>UAH</option>											
										</select>
										</div>
									</div>

									<div class="row">
										<input type="hidden" value="<?= csrf_token() ?>" name="_token">
										<label class="col-md-3 box"></label>
										<div class="col-md-9 box">
											<button type="submit" class="btn btn-primary">Сохранить</button>
										</div>
									</div>
								</form>
							</div>
							<div aria-labelledby="nav-profile-tab" class="tab-pane fade px-2 shop_informat_enot" id="Replenishment_enot" role="tabpanel"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-6">	
		<div class="card">
            <div class="card-body">
			<label for="birthday">Вывод баланса настройка</label>
				<ul class="nav nav-tabs" id="nav-tab" role="tablist">
					<li class="nav-item">
						<a aria-controls="home" aria-selected="false" class="nav-link active show" data-toggle="tab" href="#Customization_pit" id="details-tab" role="tab">Customization</a>
					</li>
					<li class="nav-item">
						<a aria-controls="home" aria-selected="true" class="nav-link " data-toggle="tab" href="#Replenishment_pit" id="authentication-tab" role="tab">Replenishment</a>
					</li>
				</ul>
				<div class="tab-content mt-4" id="nav-tabContent">
					<div aria-labelledby="nav-home-tab" class="tab-pane fade px-2 active show" id="Customization_pit" role="tabpanel">
						<form id="form-payment-system_resul" action="/backend/payment_system_post_resul" method="POST">
							<div class="row">
								<label class="col-md-3 box">Мин. сумма</label>
								<div class="col-md-9 box">
									<input type="text" class="form-control" name="min_amount" value="<?php echo e($paymentSystem_resul->min_amount); ?>">
								</div>
							</div>
							<div class="row">
							<label class="col-md-3 box">Макс. сумма</label>
								<div class="col-md-9 box">
									<input type="text" class="form-control" name="max_amount" value="<?php echo e($paymentSystem_resul->max_amount); ?>">
								</div>
							</div>
							<div class="row">
								<input type="hidden" value="<?= csrf_token() ?>" name="_token">
								<label class="col-md-3 box"></label>
								<div class="col-md-9 box">
									<button type="submit" class="btn btn-primary">Сохранить</button>
								</div>
							</div>
						</form>		
					</div>
					<div aria-labelledby="nav-profile-tab" class="tab-pane fade px-2 shop_informat_resul" id="Replenishment_pit" role="tabpanel">
					1
					</div>
				</div>
		  	</div>			
		</div>
	</div>
    <!--div class="col-6">	
	<div class="card">
            <div class="card-body">
		  <label for="birthday">JWT</label>
           <form id="form-payment-JWT" action="/backend/payment_system_post_jwt" method="POST">

                <div class="row">
                    <label class="col-md-4 box">платежная монета merchant id</label>
                    <div class="col-md-8 box">
                        <input type="text" class="form-control" name="config[COIN_PAYMENT_MARCHANT_ID]" value="<?php echo e(env('COIN_PAYMENT_MARCHANT_ID')); ?>">
                    </div>
                </div>
                <div class="row">
                    <label class="col-md-4 box">открытый ключ для оплаты монет</label>
                    <div class="col-md-8 box">
                        <input type="text" class="form-control" name="config[COIN_PAYMENT_PUBLIC_KEY]" value="<?php echo e(env('COIN_PAYMENT_PUBLIC_KEY')); ?>">
                    </div>
                </div>
                <div class="row">
                    <label class="col-md-4 box">Закрытый ключ оплаты</label>
                    <div class="col-md-8 box">
                        <input type="text" class="form-control" name="config[COIN_PAYMENT_PRIVATE_KEY]" value="<?php echo e(env('COIN_PAYMENT_PRIVATE_KEY')); ?>">
                    </div>
                </div>
                <div class="row">
                    <label class="col-md-4 box">оплата монета ипн секрет</label>
                    <div class="col-md-8 box">
                        <input type="text" class="form-control" name="config[COIN_PAYMENT_IPN_SECRET]" value="<?php echo e(env('COIN_PAYMENT_IPN_SECRET')); ?>">
                    </div>
                </div>
                <div class="row">
                    <label class="col-md-4 box">оплата монета ИПН электронной почты</label>
                    <div class="col-md-8 box">
                        <input type="text" class="form-control" name="config[COIN_PAYMENT_IPN_DEBIG_EMAIL]" value="<?php echo e(env('COIN_PAYMENT_IPN_DEBIG_EMAIL')); ?>">
                    </div>
                </div>				
                <div class="row">
                    <label class="col-md-4 box">Мин. сумма</label>
                    <div class="col-md-8 box">
                        <input type="text" class="form-control" name="config[COIN_PAYMENT_ADD_MIN]" value="<?php echo e(env('COIN_PAYMENT_ADD_MIN')); ?>">
                    </div>
                </div>
                <div class="row">
                    <label class="col-md-4 box">Макс. сумма</label>
                    <div class="col-md-8 box">
                        <input type="text" class="form-control" name="config[COIN_PAYMENT_ADD_MAX]" value="<?php echo e(env('COIN_PAYMENT_ADD_MAX')); ?>">
                    </div>
                </div>
                <div class="row">
                    <input type="hidden" value="<?= csrf_token() ?>" name="_token">
                    <label class="col-md-3 box"></label>
                    <div class="col-md-8 box">
                        <button type="submit" class="btn btn-primary">Сохранить</button>
                    </div>
                </div>
            </form>		 
		</div>			
    </div>
	</div-->
	</div>
  


<?php $__env->stopSection(); ?>

<?php $__env->startSection('scripts'); ?>
    <script>
	        $(function () {
            $('#form-payment-system_resul').submit(function (e) {
                e.preventDefault();

                var $this = $(this);
                $('input', $this).removeClass('is-invalid');
                $('.invalid-feedback', $this).remove();

                $('button', $this).prop('disabled', true);

                $.ajax({
                    type: $this.attr('method'),
                    url: $this.attr('action'),
                    data: $this.serialize(),
                    error: function (xhr) {
                        var errors = xhr.responseJSON || {};

                        $.each(errors, function (key, value) {
                            console.log(key);

                            var array = key.split('.');
                            if (array[1]) {
                                key = array[0] + '[' + array[1] + ']';

                                console.log(key);
                            }

                            $('input[name="'+ key +'"]', $this)
                                .addClass('is-invalid')
                                .parent()
                                .append('<div class="invalid-feedback">'+ value[0] +'</div>');
                        });
                    },
                    complete: function() {
                        $('button', $this).prop('disabled', false);
                    }
                });
            });
        });
        $(function () {
            $('#form-payment-system').submit(function (e) {
                e.preventDefault();

                var $this = $(this);
                $('input', $this).removeClass('is-invalid');
                $('.invalid-feedback', $this).remove();

                $('button', $this).prop('disabled', true);

                $.ajax({
                    type: $this.attr('method'),
                    url: $this.attr('action'),
                    data: $this.serialize(),
                    error: function (xhr) {
                        var errors = xhr.responseJSON || {};

                        $.each(errors, function (key, value) {
                            console.log(key);

                            var array = key.split('.');
                            if (array[1]) {
                                key = array[0] + '[' + array[1] + ']';

                                console.log(key);
                            }

                            $('input[name="'+ key +'"]', $this)
                                .addClass('is-invalid')
                                .parent()
                                .append('<div class="invalid-feedback">'+ value[0] +'</div>');
                        });
                    },
                    complete: function() {
                        $('button', $this).prop('disabled', false);
                    }
                });
            });
        });
		  $(function () {
            $('#form-payment-JWT').submit(function (e) {
                e.preventDefault();

                var $this = $(this);
                $('input', $this).removeClass('is-invalid');
                $('.invalid-feedback', $this).remove();

                $('button', $this).prop('disabled', true);

                $.ajax({
                    type: $this.attr('method'),
                    url: $this.attr('action'),
                    data: $this.serialize(),
                    error: function (xhr) {
                        var errors = xhr.responseJSON || {};

                        $.each(errors, function (key, value) {
                            console.log(key);

                            var array = key.split('.');
                            if (array[1]) {
                                key = array[0] + '[' + array[1] + ']';

                                console.log(key);
                            }

                            $('input[name="'+ key +'"]', $this)
                                .addClass('is-invalid')
                                .parent()
                                .append('<div class="invalid-feedback">'+ value[0] +'</div>');
                        });
                    },
                    complete: function() {
                        $('button', $this).prop('disabled', false);
                    }
                });
            });
        });
		 $(function () {
            $('#form-payment-system_enot').submit(function (e) {
                e.preventDefault();

                var $this = $(this);
                $('input', $this).removeClass('is-invalid');
                $('.invalid-feedback', $this).remove();

                $('button', $this).prop('disabled', true);

                $.ajax({
                    type: $this.attr('method'),
                    url: $this.attr('action'),
                    data: $this.serialize(),
                    error: function (xhr) {
                        var errors = xhr.responseJSON || {};

                        $.each(errors, function (key, value) {
                            console.log(key);

                            var array = key.split('.');
                            if (array[1]) {
                                key = array[0] + '[' + array[1] + ']';

                                console.log(key);
                            }

                            $('input[name="'+ key +'"]', $this)
                                .addClass('is-invalid')
                                .parent()
                                .append('<div class="invalid-feedback">'+ value[0] +'</div>');
                        });
                    },
                    complete: function() {
                        $('button', $this).prop('disabled', false);
                    }
                });
            });
        });
		

    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>