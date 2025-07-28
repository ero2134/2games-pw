

<?php $__env->startSection('page-title', trans('app.register')); ?>

<?php $__env->startSection('content'); ?>
	<div class="main-content">
		<div class="content page-registration">
			<div class="registration-wrap">
				<div class="registration-left">
					<div class="registration-box">
		
						<h1 class="title center"> <?php echo app('translator')->getFromJson('app.register'); ?></h1>
						<form action="/register" method="post"  id="registrition">
							<input type="hidden" value="<?= csrf_token() ?>" name="_token">
							<div class="form-line">
								<label class="label" for="register_email"><?php echo app('translator')->getFromJson('app.email'); ?></label>
								<span class="form-elem-wrap form-elem-inpt">
									<input type="email" id="register_email" name="email" class="inpt inpt-js js-no-auto-complete" tabindex="12" maxlength="97" data-name="email" data-rule-email="true" data-rule-email-validation-extended="true" />
								</span>
								<div class="error" data-error="email"></div>
							</div>
							<div class="form-line form-line_paswrd-padding">
								<label class="label" for="register_passwordPlain"><?php echo app('translator')->getFromJson('app.password'); ?></label>
								<span class="form-elem-wrap form-elem-inpt">
									<input type="password" id="register_passwordPlain" name="password" class="inpt inpt-js" tabindex="13" autocomplete="off" maxlength="32" data-name="passwordPlain" data-rule-psswrd="true" />
								</span>
								<div class="error" data-error="passwordPlain"></div>
							</div>
							<div class="form-line chekcbox-reg">
								<input type="checkbox" id="register_t_and_c" checked="checked" name="tos" class="checkbox-custome" value="1" />
								<label class="label"for="register_t_and_c">Я подтверждаю, что мне исполнилось 18 лет, и я ознакомился с <a title="Читать Правила и Условия" target="_blank" href="/display/terms">Правилами и условиями использования</a> сайта, и принимаю <a title="Читать Политику конфиденциальности" target="_blank" href="/display/privacypolicy">Политику конфиденциальности</a> </label>
								<div class="error" data-error="t_and_c"></div>
							</div>
							  <div class="info_error"></div>
							<div class="btn-box-center">
								<button class="btn btn-green auth-btn" data-submit="" type="submit"> <?php echo app('translator')->getFromJson('app.register'); ?></button>
		
							</div>
						</form>
				
					</div>
				</div>
				<div class="registration-right bonus-reg-bg-ru"></div>
			</div>
			<div class="info-btm-box mobile-only-show">
				<p>Есть учетная запись?</p>
				<a href="/login" class="btn btn-transparent">{$lang['enter']}</a>
			</div>
		</div>
	</div>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('scripts'); ?>
    <script>
	        $(function () {
            $('#registrition').submit(function (e) {
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
                            $('input[name="'+ key +'"]', $this).addClass('is-invalid').parent().append('<div class="invalid-feedback">'+ value[0] +'</div>');
                        });
                    },
					success: function(data) {
						window.location.reload();
					},
                    complete: function() {
                        $('button', $this).prop('disabled', false);
                    }
                });
            });
        });

    </script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('frontend.layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>