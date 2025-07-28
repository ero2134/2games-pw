<div class="popup-wrapp">
	<div class="popup-box js-auth-popup-box">
		<header class="popup-header">
			<span class="close-icon js-popup"></span>
		</header>
		<div class="popup-main">
			<div class="authorization-box">
				<h1 class="title center">
					 @lang('app.login')
				</h1>
				<form action="/login"  method="post" class="payment-form">
					<input type="hidden" value="<?= csrf_token() ?>" name="_token">
					@if (Input::has('to'))
                        <input type="hidden" value="{{ Input::get('to') }}" name="to">
                    @endif
					<div class="auth-popup-step-1">
						<div class="form-line">
							<span class="form-elem-wrap form-elem-inpt">
								<input placeholder="@lang('app.email_or_username')" class="inpt inpt-js" id="login_login" name="username" type="text"> 
								<label class="label" for="login_login">@lang('app.email_or_username'):</label>
								<div class="invalid__feedback"></div>
							</span>
							<div class="error" data-error="login"></div>
						</div>
						<div class="form-line">
							<span class="form-elem-wrap form-elem-inpt">
								<input placeholder="Password"class="inpt inpt-js"  id="login_passwordPlain" name="password" type="password"> 
								<label class="label" for="login_passwordPlain">@lang('app.password'):</label>
								<div class="invalid__feedback"></div>
							</span>
							<div class="error" data-error="passwordPlain"></div>
						</div>
						  <div class="pay-tooltip__note" style="display: none">
														<i class="fa fa-exclamation-triangle"></i>
														<span class="error__info"></span>
													</div>
						<div class="content-box-right">
            <a href="#" class="js-btn-restore" data-popup="xhr" data-popup-url="/password/remind">
                Забыли пароль?
            </a>
        </div>

						<div class="btn-box-center">
							<button class="btn btn-green auth-btn" data-submit="" type="submit">@lang('app.log_in')</button>
						</div>
					</div>
				</form>
			</div>
		</div>

		<footer class="popup-footer">
			<div class="btn-box-center">
				<p>
					@lang('app.dont_have_an_account')
				</p><a class="btn btn-transparent" href="/register">@lang('app.sign_up')</a>
			</div>
		</footer>
	</div>
</div>
