<?php
/**
 * @var VanguardDK\Model\PaymentSystem $paymentSystem
 */
?>
@extends('backend.layouts.app')

@section('page-title', 'Система оплаты')
@section('page-heading', 'Система оплаты')

@section('breadcrumbs')
    <li class="breadcrumb-item active">
        Система оплаты
    </li>
@stop

@section('content')

    @include('backend.partials.messages')
    <style>
        .box {
            padding: 5px 25px;
        }
    </style>

<div class="row">
    <div class="col-6">	
		<div class="card">
			<div class="card-body">
			  <label for="birthday">MAIL</label>
			   <form id="form-payment-MAIL" action="/backend/maill" method="POST">

					<div class="row">
						<label class="col-md-4 box">MAIL DRIVER</label>
						<div class="col-md-8 box">
							<select id="view" class="form-control input-solid" name="config[MAIL_DRIVER]">
								
								<option value="smtp" <?php if($System['MAIL_DRIVER'] == 'smtp') {echo "selected";}?>>SMTP</option>
							</select>
						</div>
					</div>
					<div class="row">
						<label class="col-md-4 box">MAIL HOST</label>
						<div class="col-md-8 box">
							<input type="text" class="form-control" name="config[MAIL_HOST]" value="{{$System['MAIL_HOST']}}">
						</div>
					</div>
					<div class="row">
						<label class="col-md-4 box">MAIL PORT</label>
						<div class="col-md-8 box">
							<input type="text" class="form-control" name="config[MAIL_PORT]" value="{{$System['MAIL_PORT']}}">
						</div>
					</div>
					<div class="row">
						<label class="col-md-4 box">MAIL USERNAME</label>
						<div class="col-md-8 box">
							<input type="text" class="form-control" name="config[MAIL_USERNAME]" value="{{$System['MAIL_USERNAME']}}">
						</div>
					</div>
					<div class="row">
						<label class="col-md-4 box">MAIL PASSWORD</label>
						<div class="col-md-8 box">
							<input type="text" class="form-control" name="config[MAIL_PASSWORD]" value="{{$System['MAIL_PASSWORD']}}">
						</div>
					</div>				
					<div class="row">
						<label class="col-md-4 box">MAIL ENCRYPTION</label>
						<div class="col-md-8 box">
							<input type="text" class="form-control" name="config[MAIL_ENCRYPTION]" value="{{$System['MAIL_ENCRYPTION']}}">
						</div>
					</div>
					<div class="row">
						<label class="col-md-4 box">MAIL FROM_NAME</label>
						<div class="col-md-8 box">
							<input type="text" class="form-control" name="config[MAIL_FROM_NAME]" value="{{$System['MAIL_FROM_NAME']}}">
						</div>
					</div>
					<div class="row">
						<label class="col-md-4 box">MAIL FROM_ADDRESS</label>
						<div class="col-md-8 box">
							<input type="text" class="form-control" name="config[MAIL_FROM_ADDRESS]" value="{{$System['MAIL_FROM_ADDRESS']}}">
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
	</div>
</div>
@stop

@section('scripts')
    <script>
	        $(function () {
            $('#form-payment-MAIL').submit(function (e) {
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
@stop
