

<?php
if(isset($_GET['balance'])){
	if(isset($_GET['payment'])){
		if(isset($_GET['activate_bonus'])){
			$payment = true;
			$bonus_type = true;
			$activate_bonus = (int)$_GET['activate_bonus'];
		}else{
			$bonus_type = false;
			$payment = true;
		}
	}else{
		$payment = false;
	}
	if(isset($_GET['withdraw'])){
		$withdraw = true;
	}else{
		$withdraw = false;
	}
	if(isset($_GET['history'])){
		$history = true;
	}else{
		$history = false;
	}
	if(isset($_GET['bonus_code'])){
		$bonus_code = true;
	}else{
		$bonus_code = false;
	}
	
	if(!isset($_GET['bonus_code'])){
		if(!isset($_GET['history'])){ 
			if(!isset($_GET['withdraw'])){ 
				if(!isset($_GET['payment'])){
					$payment = true;
				}
			}
		}
	}
	
	$balance___ = true;
}else{
	$balance___ = false;
}
if(isset($_GET['index'])){
	if(isset($_GET['password'])){
		$password = true;
	}else{
		$password = false;
	}
	$index = true;
}else{
	$index = false;
}
if(isset($_GET['bonus'])){
	$bonus = true;
}else{
	$bonus = false;
}
if(isset($_GET['vip'])){
	$vip = true;
}else{
	$vip = false;
}

$password_page =  (isset($password)? $password: false);
$balance_page =  (isset($balance___)? $balance___: false);
$index_page =  (isset($index)? $index: false);
$bonus_page =  (isset($bonus)? $bonus: false);
$vip_page =  (isset($vip)? $vip: false);

if(isset($payment)){
	$payment_page_l = $payment;
}else{
	$payment_page_l = false;
}
if(isset($withdraw)){	
	$withdraw_page_l = $withdraw;
}else{
	$withdraw_page_l = false;
}
if(isset($history)){	
	$history_page_l = $history;
}else{
	$history_page_l = false;
}
if(isset($bonus_code)){	
	$bonus_code_page_l = $bonus_code;
}else{
	$bonus_code_page_l = false;
}
$answer_bonus_type  =   (isset($bonus_type)? $bonus_type: false);
?>
<?php $__env->startSection('page-title', trans('app.my_profile')); ?>
<?php $__env->startSection('page-heading', trans('app.my_profile')); ?>


<?php $__env->startSection('content'); ?>
<div class="main-content page-dashboard">
	<div class="content width content-device-padding">
		<!-- START TOP DASHBOARD:DEFAULT -->
		<div class="top-dashboard">
			<div class="top-dashboard__left dashboard-top-shadow">
				<!-- START DASHBOARD USERNAME:DEFAULT -->
				<div class="dashboard-username">
					<div class="dashboard-username__name">
						<?php echo e(auth()->user()->present()->username); ?>

					</div>
				</div><!-- START DASHBOARD USERNAME:DEFAULT -->
			</div>
			<div class="top-dashboard__right">
				<!-- START DASHBOARD TOP NAV:DEFAULT -->
				<div class="nav-dashboard-scroll">
					<nav class="nav-dashboard">
						<ul class="nav-dashboard-list">
		
							<li class="nav-dashboard-list__item">
								<a href="/profile?index=true" class="nav-dashboard-list__link   <?php if($index_page == true):?>is-active<?php endif;?>">
									<svg class="icon-man-dashboard-nav" >
										<use xlink:href="#icon-man"style="fill: #f9b242;">
											<svg id="icon-man" viewBox="0 0 32 32"><path class="cls-1" d="M8.86,15.05a6.08,6.08,0,0,1-1.59-3.74A1.29,1.29,0,0,1,8,10H8C8,3.5,11,0,16,0a7.12,7.12,0,0,1,6.44,3.36A12.94,12.94,0,0,1,24,10a1.35,1.35,0,0,1,.72,1.19,5.55,5.55,0,0,1-1.39,3.56C22.58,17.17,20,22,16,22S9.78,17.61,8.86,15.05Z"></path><path class="cls-2" d="M9.21,22.93C5.5,24.16,0,26,0,26v6H12Z"></path><polygon class="cls-1" points="18.06 24.03 14 24 15.22 27.06 14 32 18 32 16.93 27 18.06 24.03"></polygon><path class="cls-2" d="M23.53,23.18,20,32H32V26S27.17,24.37,23.53,23.18Z"></path></svg>
										</use>
									</svg>
									<span class="nav-dashboard-list-text"><?php echo app('translator')->getFromJson('app.my_profile'); ?></span>
								</a>
							</li>
							<li class="nav-dashboard-list__item">
								<a href="/profile?balance=true" class="nav-dashboard-list__link  <?php if($balance_page == true):?>is-active<?php endif;?>">
									<svg id="icon-cashwallet" viewBox="0 0 64 64"><path style="fill-rule:evenodd;clip-rule:evenodd; fill:#FCBF61;" d="M64,24.001c0-4.002-4.006-8.005-7.996-8.005H0.008L0,55.999c0,4.004,3.992,8,7.996,8h48.008C59.994,64,64,59.997,64,55.993v-7.994H52c0,0-8.006-0.002-8.006-7.997c0-8.004,8.006-8.004,8.006-8.004h12V24.001z"></path><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#40B549;" d="M52.086,36.004c2.209,0,4.004,1.791,4.004,4.002c0,2.203-1.795,3.992-4.004,3.992c-2.213,0-4.006-1.789-4.006-3.992C48.08,37.795,49.873,36.004,52.086,36.004z M49.562,5.003l2.551,6.994h3.977L52.086,0L37.865,5.334L36.084,0L4.078,11.997H28L49.562,5.003z"></path></svg>
									<span class="nav-dashboard-list-text">Баланс</span>
								</a>
							</li>
							<li class="nav-dashboard-list__item  <?php if($bonus_page == true):?>is-active<?php endif;?>">
								<a class="nav-dashboard-list__link" href="/profile?bonus=true">
								<svg class="icon-note-dashboard-nav">
								<svg id="icon-present" viewBox="0 0 19 20"><g fill="none"><rect width="8" height="9" x="1" y="11" fill="#F9B242"></rect><rect width="8" height="9" x="10" y="11" fill="#F9B242"></rect><rect width="9" height="4" y="6" fill="#F9B242"></rect><rect width="9" height="4" x="10" y="6" fill="#F9B242"></rect><path stroke="#F9B242" d="M5.41654192,0.5 C7.48039055,0.5 8.84208687,2.01998019 9.4878082,4.89025868 L9.6249806,5.5 L9,5.5 C8.03690365,5.5 6.79071794,5.22179148 5.2126908,4.65655747 C4.19789606,4.20345559 3.53363304,3.26515935 3.50120241,2.31709358 C3.46516137,1.26348242 4.21400263,0.5 5.41654192,0.5 Z"></path><path stroke="#F9B242" d="M11.4165419,0.5 C13.4803906,0.5 14.8420869,2.01998019 15.4878082,4.89025868 L15.6249806,5.5 L15,5.5 C14.0369037,5.5 12.7907179,5.22179148 11.2126908,4.65655747 C10.1978961,4.20345559 9.53363304,3.26515935 9.50120241,2.31709358 C9.46516137,1.26348242 10.2140026,0.5 11.4165419,0.5 Z" transform="matrix(-1 0 0 1 25 0)"></path></g></svg>
								
								<span class="nav-dashboard-list-text"><?php echo app('translator')->getFromJson('app.bonus'); ?></span></a>
							</li>
							<li class="nav-dashboard-list__item  <?php if($vip_page == true):?>is-active<?php endif;?>">
								<a class="nav-dashboard-list__link" href="/profile?vip=true"><svg class="icon-talk-dashboard-nav">
								<svg id="icon-profile" viewBox="0 0 33 32"><g fill="none" fill-rule="evenodd"><path fill="#F4C271" d="M17.5 8h11V6h-11v2zm0 4h11v-2h-11v2zm-2 5h-13v-2.437s3.867-1.296 4.862-1.613l.305-.584c-.585-.426-1.195-1.212-1.565-2.251a2.46 2.46 0 0 1-.644-1.519c-.026-.403.292-.532.292-.532v-.001C5.75 5.423 6.968 4 9 4c1.165 0 2.062.468 2.615 1.364.406.658.629 1.594.635 2.699.166.117.292.238.292.482 0 .622-.286 1.113-.565 1.447-.311 1.001-.867 1.754-1.568 2.374l.229.597c.907.264 4.862 1.6 4.862 1.6V17zM28.501 0H2.499A1.999 1.999 0 0 0 .5 1.999v18.002C.5 21.105 1.395 22 2.499 22h12.202c.926-4.564 4.961-8 9.799-8a9.94 9.94 0 0 1 6 2.014V1.999A1.999 1.999 0 0 0 28.501 0z"></path><path fill="#63B357" d="M31.477 20.093l-5.492 5.492L24.572 27l-4.037-4.035 1.415-1.415 2.62 2.62 5.701-5.7A7.967 7.967 0 0 0 24.5 16a8 8 0 1 0 8 8c0-1.42-.375-2.751-1.023-3.907"></path></g></svg>
								<span class="nav-dashboard-list-text">Вип</span></a>
							</li>
						</ul>
					</nav>
				</div><!-- END DASHBOARD TOP NAV:DEFAULT -->
			</div>
		</div><!-- END TOP DASHBOARD:DEFAULT -->
		<div class="dashboard dashboard-bg">
			<div class="dashboard-grid">
				<div class="dashboard-grid__left">
					<?php if($answer_bonus_type == true):?>
								<div class="popup_section__aside">
									<div class="aside aside_promo">
										<div class="aside__promo-bonus promo-bonus">
											<div class="promo-bonus__img">
												<img src="" id="bonus-img"/>
											</div>
										</div>
									</div>
								</div>
								<script>

								$.post('/result_bonus.php?reg_bonus=true',{'id':<?php echo e($activate_bonus); ?>,'users':'<?php echo e(Auth::user()->id); ?>','hash':'<?php echo md5(e(Auth::user()->id).':9358741'); ?>'}, function (data) {
										if (data.status && data.is_deposit) {
											$('#bonus-img').attr('src', data.image);
											$('#bonus-deposit-sum').html(data.deposit);
											console.log($('.min'));
											$('.min').html(data.deposit);
											$('.deposit-campaign-id').val(data.campaign_id);
											$('#deposit-for-bonus-modal .aside__promo-table .table__body').html('');
											$('.deposit-bonus-id').val(id);
											$.each(data.winners, function ($key, $item) {
												var $row = "<tr class='table__row'><td class='table__cell'>" + ($key + 1) + "</td><td class='table__cell'>" + $item.login + "</td><td class='table__cell'>" + Math.round($item.win) + "</td></tr>";
												$('#deposit-for-bonus-modal .aside__promo-table .table__body').append($row);
											});
											$('#cabinet-modal').hide();
											$('#deposit-for-bonus-modal').show();
											$('html').addClass('modal_open');
										} 
										if(data.error){
											
												alersing_stup(data.error);
										}
									}, 'json');
								</script>
							
								<?php endif;?>
					<?php if($balance_page == true):?>
					<ul class="nav-sub-dashboard">
						<li class="nav-sub-dashboard__item">
							<a class="nav-sub-dashboard__link <?php if($payment_page_l == true):?>is-active<?php endif;?>" href="/profile?balance=true&payment">Депозит</a>
						</li>
						<li class="nav-sub-dashboard__item">
							<a class="nav-sub-dashboard__link <?php if($withdraw_page_l == true):?>is-active<?php endif;?>" href="/profile?balance=true&withdraw">Вывод</a>
						</li>
						<li class="nav-sub-dashboard__item">
							<a class="nav-sub-dashboard__link <?php if($history_page_l == true):?>is-active<?php endif;?>" href="/profile?balance=true&history">История</a>
						</li>
						<li class="nav-sub-dashboard__item">
							<a class="nav-sub-dashboard__link <?php if($bonus_code_page_l == true):?>is-active<?php endif;?>" href="/profile?balance=true&bonus_code=true">Бонус код</a>
						</li>						
					</ul>
					<?php endif;?>
					<?php if($vip_page == true):?>
					<ul class="nav-sub-dashboard">
						<li class="nav-sub-dashboard__item">
							<a class="nav-sub-dashboard__link <?php if($vip_page == true):?>is-active<?php endif;?>" href="/profile?vip=true">Вип</a>
						</li>
					</ul>
					<?php endif;?>
					<?php if($bonus_page == true):?>
					<ul class="nav-sub-dashboard">
						<li class="nav-sub-dashboard__item">
							<a class="nav-sub-dashboard__link <?php if($bonus_page == true):?>is-active<?php endif;?>" href="/profile?bonus">Бонусы</a>
						</li>
					</ul>
					<?php endif;?>					
					<?php if($index_page == true):?>
						 <div class="profile__aside">
                        <div class="profile__info">
                            <div class="profile-info">
                                <div class="profile-info__title title title_font_largest"></div>
								<div class="profile-info__caption title">Ваш уровень</div>
								<div class="profile-info__status">
                                    <div class="status status_huge">
                                        <div class="status__icon">
                                            <img src="/frontend/img/points/<?php echo e(Auth::user()->point->img); ?>" width="110">
                                        </div>
                                        <span class="status__note"><?php echo e(Auth::user()->point->name); ?></span>
                                    </div>
                                </div>
								
                                <div class="profile-info__rating">
                                    <div class="rating rating_profile">
                                        <div class="rating__stars rating__stars_large">
                                            <?php $level = 6 - Auth::user()->rating; ?>
											<?php for($i=1; $i <= Auth::user()->rating; $i++): ?>
												<svg class="rating__icon svg-star">
                                                <use xlink:href="/assets/img/svgsprite.svg#star-filled"></use>
                                            </svg>
											<?php endfor; ?> 
											<?php if( $level ): ?>
												<?php for($i=1; $i <= $level; $i++): ?>
													<svg class="rating__icon svg-star_disabled svg-star">
                                                <use xlink:href="/assets/img/svgsprite.svg#star"></use>
                                            </svg>
												<?php endfor; ?>  
											<?php endif; ?>    
											
                                        </div>
                                        <div class="rating__bar">
                                            <div style="width:<?php echo e(Auth::user()->percent_next_level()); ?>%" class="rating__inner">
                                                <div class="rating__percent"><?php echo e(Auth::user()->percent_next_level()); ?>%</div>
                                            </div>
                                            <div class="rating__info">
                                                <i class="icon icon_info-light"></i>
                                                <div class="rating__tooltip tooltip tooltip_right">
                                                    <div class="tooltip__content">Вам нужно сделать депозитов на <?php echo e(Auth::user()->left_next_level()); ?> для получения следующего уровня</div>
                                                    <div class="tooltip__arrow tooltip__arrow_right"></div>
                                                </div>
                                            </div>
                                        </div>
										<td>
										
									
                                        <div class="rating__summary">
                                            <span class="rating__caption">Баланс:
                                            <span class="rating__caption_accent"><?php echo e(auth()->user()->present()->balance); ?> руб</span>
                                            </span>
                                            <span class="rating__title rating__title_large">Вип очки:</span>
                                            <span class="rating__title rating__title_large rating__title_accent">
                                                <?php echo e(Auth::user()->points); ?>

                                                <div class="rating__info">
                                                    <i class="icon icon_info-light"></i>
                                                    <div class="rating__tooltip tooltip">
                                                        <div class="tooltip__content">Вам нужно сделать депозитов на <?php echo e(Auth::user()->left_next_level()); ?> рублей для получения следующего уровня</div>
                                                        <div class="tooltip__arrow"></div>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
										<?php if (Auth::user()->wager > 0):?>
											<?php $progres = Auth::user()->wager_bonus ? round((Auth::user()->wager_bonus - Auth::user()->wager) / Auth::user()->wager_bonus *100,2): 0;?>
										
											<div class="rating__summary">
												<span class="rating__caption">
													Бонус:<span class="rating__caption_accent"><?php echo auth()->user()->present()->wager_bonus;?> руб</span>
												</span>
											</div>
											
											<div class="rating__bar">
												<div style="width:<?php  echo $progres; ?>%" class="rating__inner">
													<div class="rating__percent"><?php  echo $progres; ?>%</div>
												</div>
												<div class="rating__info">
													<i class="icon icon_info-light"></i>
													<div class="rating__tooltip tooltip tooltip_right">
														<div class="tooltip__content">До отыгрыша бонуса осталось проставить <?php echo  Auth::user()->wager;?></div>
														<div class="tooltip__arrow tooltip__arrow_right"></div>
													</div>
												</div>
											</div>
										<?php endif;?>
										
                                    </div>
                                </div>
								<ul class="nav-sub-dashboard">
									<li class="nav-sub-dashboard__item">
										<a class="nav-sub-dashboard__link {if $password_page == true}is-active{/if}" href="/profile?index=true&password=true">Изменить пароль</a>
									</li>
								</ul>	
                                </div>
                            </div>
                        </div>
					<?php endif;?>					
				</div>
				<div class="dashboard-grid__right">
					<div class="history-box">
						<div class="dashboard-content">
					<?php if($password_page== false):?>	
						<?php if($index_page == true):?>
							 <div class="profile__table">
                   
                    <div class="profile__main">
                        <form  method="post" action="<?= route('frontend.profile.update.details') ?>" id="profile__form" class="tab-profile__form">
						<input type="hidden" value="<?= csrf_token() ?>" name="_token">
                            <div class="profile-details">
                                <h3 class="profile-details__title title title_align_center">Персональная информация</h3>
                                <div class="profile-details__action">
                                    <div class="profile-details__input">
                                        <div class="form-group field-profileform-firstname">
                                            <input type="text" id="profileform-firstname" class="input__inner" name="first_name" value="<?php echo e(auth()->user()->present()->first_name); ?>" placeholder="Имя">
                                            <div class="help-block"></div>
                                        </div>
                                    </div>
                                    <div class="profile-details__input">
                                        <div class="form-group field-profileform-lastname">
                                            <input type="text" id="profileform-lastname" class="input__inner" name="last_name" value="<?php echo e(auth()->user()->present()->last_name); ?>" placeholder="Фамилия">
                                            <div class="help-block"></div>
                                        </div>
                                    </div>
                                    <div class="profile-details__input">
                                        <div class="form-group field-profileform-birthday">
                                            <input type="date" id="profileform-birthday" class="input__inner datepicker_birth" name="birthday" value="<?php echo e(optional(auth()->user()->present()->birthday)->format('Y-m-d')); ?>" placeholder="Birthday">
                                            <div class="help-block"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="profile-contacts">
                                <h3 class="profile-contacts__title title title_align_center">Контакты</h3>
                                <div class="profile-contacts__action">
                                    <div class="profile-contacts__item">
                                        <div class="profile-contacts__input input">
                                            <div class="form-group field-profileform-email">
                                                <input type="text" id="profileform-email" class="input__inner input__inner_readonly" name="email" value="<?php echo e(auth()->user()->present()->email); ?>" readonly placeholder="Your e-mail">
                                                <div class="help-block"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="profile-contacts__item">
                                        <div class="profile-contacts__input input">
                                            <div class="form-group field-profileform-phone">
                                                <input type="text" id="profileform-phone" class="js-input__inner_tel input__inner" name="phone" value="<?php echo e(auth()->user()->present()->phone); ?>" maxlength="12" placeholder="70000000000">
                                                <div class="help-block"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div class="modal__error" style="display:none">
                                    <div class="modal__note_important"></div>
                                </div>
                                <div class="profile__action">
                                    <button type="submit"
                                            class="profile__button profile__button_submit button button_color_orange">Сохранить</button>
                                </div>
                        </form>
						 <script>
						$(function () {
						$('#profile__form').submit(function (e) {
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
									alersing_stup(data.success);
								},
								complete: function() {
									$('button', $this).prop('disabled', false);
								}
							});
						});
					});

				</script>
                    </div>
                </div>
						<?php endif;?>
						
					<?php else:?>
					<div class="dashboard-content">
                    <div class="change-password-box-wrapp">
                        <form action="<?= route('frontend.profile.update.password') ?>" method="post" novalidate="novalidate" id="change_password">
							<input type="hidden" value="<?= csrf_token() ?>" name="_token">
                            <div class="form-line">
                                <span class="form-elem-wrap form-elem-inpt">
                                    <label class="label" for="password_change_password" style="display: block;">Предыдущий пароль</label>
                                    <input type="password" id="password_change_password" name="old_password" class="inpt inpt-js" data-name="password" data-rule-psswrd="true" aria-invalid="false">
                                </span>
                                <div class="error" data-error="password"></div>
                            </div>
                            <div class="form-line">
                                <span class="form-elem-wrap form-elem-inpt">
                                    <label class="label" for="password_change_passwordPlain_first" style="display: block;">Новый пароль</label>
                                    <input type="password" id="password_change_passwordPlain_first" name="password" class="inpt inpt-js" data-name="new" data-rule-psswrd="true">
                                </span>
                                <div class="error" data-error="new"></div>
                            </div>

                            <div class="form-line">
                                <span class="form-elem-wrap form-elem-inpt">
                                    <label class="label" for="password_change_passwordPlain_second" style="display: block;">Повторите новый пароль:</label>
                                    <input type="password" id="password_change_passwordPlain_second" name="password_confirmation" class="inpt inpt-js" data-name="passwordPlain" data-rule-psswrd="true" data-rule-psswrd-repeat="new">
                                </span>
                                <div class="error" data-error="passwordPlain"></div>
                            </div>
                            <div class="btn-box-center change-password-box-btn">
								<button class="btn btn-green">Изменить</button>
                            </div>
                            
                        </form>
					  <script>
						$(function () {
						$('#change_password').submit(function (e) {
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
									alersing(data.success);
								},
								complete: function() {
									$('button', $this).prop('disabled', false);
								}
							});
						});
					});

				</script>

        <div class="modal-preloader" style="display:none"></div>
                    </div>
                </div>
						<?php endif;?>
						<?php if($bonus_page == true):?>
						<span class="tab-bonuses__gallery payment"id="html_reg_bonus"></span>
						<div class="tab-bonuses__gallery payment" id="bonuses_div"></div>
						<script>
							jQuery('body').on('click', '#hvbhghjubjbj', function() {
								bonus();
								return false;
							});

							function bonus() {
								jQuery.ajax({
									'type': 'POST',
									'url': '/result_bonus.php?html=true&users=<?php echo e(Auth::user()->id); ?>&hash=<?php echo md5(e(Auth::user()->id).':9358741'); ?>',
									'cache': false,
									dataType: 'json',
									'data': jQuery(this).parents('form').serialize(),
									'success': function(data) {
										if (data.status === true) {
											$('#bonuses_div').html(data.html);
											$('#html_reg_bonus').html(data.html_reg_bonus);
										}
									}
								});
							}

							function sleep(milliseconds) {
								const date = Date.now();
								let currentDate = null;
								do {
									currentDate = Date.now();
								} while (currentDate - date < milliseconds);
							}
							bonus();
							sleep(2000);
							bonus();
						</script>  
						<?php endif;?>
						<?php if($vip_page == true):?>
							 <div class="vip__header">
								<span class="vip__title">
								Ваши очки: <?php echo e(Auth::user()->points); ?>

									<span class="vip__icon">
										<div class="rating__info">
												<i class="icon icon_info-light"></i>
											<div class="rating__tooltip rating__tooltip_right tooltip">
												<div class="tooltip__content">Вам нужно сделать депозитов на <?php echo e(Auth::user()->left_next_level()); ?> для получения следующего уровня</div>
												<div class="tooltip__arrow tooltip__arrow_right"></div>
											</div>
										</div>
									</span>
								</span>
							</div>
							<div class="vip__action">
									<form  action="<?= route('frontend.profile.exchange') ?>" method="POST"
										  id="exchange-exchange">	
										  <input type="hidden" value="<?= csrf_token() ?>" name="_token">
										<div class="vip__table">
												<div class="vip__cell">
													<span class="vip__subtitle">Количество очков</span>
													<div class="vip__input vip__input_color_white">
														<input type="text" id="exchange-input" name="sumpoints" class="input__inner" max="0.00" min="100" data-cours="0.01">
													</div>
												</div>
												<div class="vip__cell">
													<span class="vip__subtitle">Курс обмена</span>
													<div class="vip__viewrate">100:1</div>
												</div>
												<div class="vip__cell">
													<span class="vip__subtitle">Вы получите</span>
													<div class="vip__input vip__input_color_yellow">
														<input type="text" id="exchange-output" class="input__inner" data-cours="0.01">
													</div>
												</div>
										</div>
										<div class="modal__error" style="display: none">
											<span class="modal__note modal__note_important"></span>
											<span class="modal__note modal__note_accent"></span>
										</div>
										<button class="vip__button button button_color_orange">
											Обменять на деньги                          </button>
									</form>
									 <script>
						$(function () {
						$('#exchange-exchange').submit(function (e) {
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
									$.each(errors, function (index, value) {
										alersing_stup(value);
									});
								},
								success: function(data) {
									alersing_stup(data.success);
								},
								complete: function() {
									$('button', $this).prop('disabled', false);
								}
							});
						});
					});

				</script>
								</div>
							<div class="vip__levels-table">
								<div class="levels-table">
									<div class="levels-table__table">                                     
										<?php $__currentLoopData = \VanguardDK\Point::orderBy('rating', 'ASC')->get(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $point): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
										<div class="levels-table__item <?php if($point->rating == Auth::user()->rating): ?> levels-table__item_active <?php endif; ?>" data-toggle="tab" data-target="#vip_level_description_<?php echo e($point->rating); ?>">
											<p class="levels-table__title levels-table__title_small"><?php echo e($point->name); ?></p>
											<img src="/frontend/img/points/<?php echo e($point->img); ?>" class="levels-table__icon">
											<div class="levels-table__ratenote"></div>
											<span class="levels-table__caption">Exchange rate</span>
											<div class="levels-table__viewrate"><?php echo e($point->exchange_rate()); ?></div>
											<a class="levels-table__link">Still</a>
											<span class="levels-table__arrow levels-table__arrow_active"></span>
											<div class="levels-table__ratenote levels-table__ratenote_zero"><?php echo e(round($point->sum)); ?></div>
										</div>
										<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>                                               
									</div>
									<div class="levels-table__slider">
										<div class="levels-table__slider-bar">
											<div class="levels-table__slider-inner" style="width:<?php echo e(Auth::user()->total_percent()); ?>%"></div>
										</div>
									</div>
									<div class="tab__content">						
										<?php $__currentLoopData = \VanguardDK\Point::orderBy('rating', 'ASC')->get(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $point): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>							
										<div class="levels-table__info <?php if($point->rating == Auth::user()->rating): ?> active <?php endif; ?>" id="vip_level_description_<?php echo e($point->rating); ?>">
											<div class="levels-table__status">
												<div class="levels-table__status-inner status status_huge">
													<img src="/frontend/img/points/<?php echo e($point->img); ?>" class="status__icon" >
													<span class="status__note"><?php echo e($point->name); ?></span>
												</div>
											</div>
											<div class="levels-table__summary">
												<p class="levels-table__title levels-table__title_accent"><?php echo e($point->title); ?></p>
												<div class="levels-table__note"><?php echo $point->description; ?></div>
											</div>
										</div>							
										<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
									</div>
								</div>
							</div>
						<?php endif;?>
						<?php if($bonus_code_page_l == true):?>
						<div class="payment__gallery">
								
									<form method="POST"  class="payment-form" action="/result_bonus_code.php" id="code_inform">	
										<input type="hidden" name="_token" value="<?= csrf_token() ?>">
										<input type="hidden" id="users_id" name="users_id" value="<?php echo e(Auth::user()->id); ?>">
                                        <input type="hidden" name="bonus_id" class="deposit-bonus-id">
										
                                        <div class="payment__row">
                                            <div class="payment__row-inner">	
												<label class="payment__item payitem" data-paysys="222">
                                                
                                                    <div class="payitem__img">
                                                        <div class="payitem__img_inner">
                                                            <img src="/frontend/img/bonus_code.png" style="width: 85px;" />
                                                        </div>
                                                    </div>
                                                    <div class="payitem__footer">
                                                      
                                                        <p class="payitem__note">Активация бонус кода</p>
                                                    </div>
                                                </label>         
											</div>
                                        </div>
                                        <div class="payment__tooltip">
                                            <div class="payment__tooltip_inner">
                                                <div class="pay-tooltip">
                                                    <div class="pay-tooltip__note_error" style="display: none">
														<i class="fa fa-exclamation-triangle"></i>
														<span class="error__info"></span>
													</div>
													<div class="pay-tooltip__note_ok" style="display: none">
														<i class="fa fa-exclamation-triangle"></i>
														<span class="error__info"></span>
													</div>
                                                    <div class="pay-tooltip__summ">
														Бонус-код:
                                                        <span class="pay-tooltip__input">
															<input type="text" name="pin" maxlength="14" placeholder="xxxxxxxxxx" class="pay-tooltip__pin_inner js-input__inner">
                                                        </span>
                                                        <button type="submit"  id="ajaxbutton_form_shop" class="pay-tooltip__button button button_color_orange">ПОПОЛНИТЬ</button>
                                                     
                                                    </div>
													
                                                </div>
                                            </div>
                                        </div>
                                    </form>
									<script>
										jQuery('body').on('click', '#ajaxbutton_form_shop', function() {
											var $form = $('#code_inform');
											jQuery.ajax({
												'type': 'POST',
												'url': '/result_bonus_code.php',
												'cache': false,
												dataType: 'json',
												'data': jQuery(this).parents('form').serialize(),
												'success': function(data) {
													
														alersing_stup(data.message);		
													
														
												}
											});
											return false;
											
										});
									</script>			
								</div>
								<div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 3px;">
									<div class="ps-scrollbar-x" style="left: 0px; width: 0px;" tabindex="0"></div>
								</div>
								<div class="ps-scrollbar-y-rail" style="top: 0px; right: 3px; height: 440px;">
									<div class="ps-scrollbar-y" style="top: 0px; height: 80px;" tabindex="0"></div>
								</div>
						<?php endif;?>
						<?php if($balance_page == true):?>
							<?php if($payment_page_l == true):?>
								<div class="fretoplay_cas"></div>    
								<div class="enot_cas"></div>    
								<div class="piastrix_cas"></div>    
								<div class="_cas"></div>
								<script>
									function fretoplay_cas(){
										jQuery.ajax({
											'type': 'POST',
											'url': '/result.php?fretoplay_cas=true&users=<?php echo e(Auth::user()->id); ?>&hash=<?php echo md5(e(Auth::user()->id).':9358741'); ?><?php if($answer_bonus_type == true):?>&bonus=<?php echo e($activate_bonus); ?><?php endif;?>',
											'cache': true,
											dataType: 'json',
											'data': jQuery(this).parents('form').serialize(),
											'success': function(run) {
												if(run.status === true){
													$('.fretoplay_cas').html(run.data);
												}else{
													$('.fretoplay_cas').html('false');
												}					
											}
										});
									}
									fretoplay_cas();
									function enot_cas(){
										jQuery.ajax({
											'type': 'POST',
											'url': '/raccoon.php?enot_cas=true&users=<?php echo e(Auth::user()->id); ?>&hash=<?php echo md5(e(Auth::user()->id).':9358741'); ?><?php if($answer_bonus_type == true):?>&bonus=<?php echo e($activate_bonus); ?><?php endif;?>',
											'cache': true,
											dataType: 'json',
											'data': jQuery(this).parents('form').serialize(),
											'success': function(run) {
												if(run.status === true){
													$('.enot_cas').html(run.data);
												}else{
													$('.enot_cas').html('false');
												}					
											}
										});
									}
									enot_cas();
									function piastrix_cas(){
										jQuery.ajax({
											'type': 'POST',
											'url': '/piastrix.php?piastrix_cas=true&users=<?php echo e(Auth::user()->id); ?>&hash=<?php echo md5(e(Auth::user()->id).':9358741'); ?><?php if($answer_bonus_type == true):?>&bonus=<?php echo e($activate_bonus); ?><?php endif;?>',
											'cache': true,
											dataType: 'json',
											'data': jQuery(this).parents('form').serialize(),
											'success': function(run) {
												if(run.status === true){
													$('.piastrix_cas').html(run.data);
												}else{
													$('.piastrix_cas').html('false');
												}					
											}
										});
									}
									piastrix_cas();									
								</script>
							<?php endif;?>
							<?php if($withdraw_page_l == true):?>
						        <div class="payment__gallery">
									<div class="payment__gallery payment_fff"></div>
									<script>
											function payment(){
												jQuery.ajax({
													'type': 'POST',
													'url': '/payment_addtask.php?payment=true&users=<?php echo e(Auth::user()->id); ?>&hash=<?php echo md5(e(Auth::user()->id).':9358741'); ?>',
													'cache': true,
													dataType: 'json',
													'data': jQuery(this).parents('form').serialize(),
													'success': function(run) {
														if(run.status === true){
															$('.payment_fff').html(run.data);
														}else{
															$('.payment_fff').html('false');
														}					
													}
												});
											}
										payment();	
									</script>
								</div>
							<?php endif;?>
							<?php if($history_page_l == true):?>
								<div id="history-tab" class="history">
									<table class="dashboard-table table">
										<thead class="history__head">
											<tr class="history__row">
												<th class="history__cell">ID</th>
												<th class="history__cell"><?php echo app('translator')->getFromJson('app.date'); ?></th>
												<th class="history__cell"><?php echo app('translator')->getFromJson('app.type'); ?></th>
												<th class="history__cell"><?php echo app('translator')->getFromJson('app.sum'); ?></th>
												<th class="history__cell"><?php echo app('translator')->getFromJson('app.system'); ?></th>
												<th class="history__cell"><?php echo app('translator')->getFromJson('app.status'); ?></th>
											</tr>
										</thead>
										<tbody class="history__body">
										
											<?php
												$history = VanguardDK\Transaction::where('user_id', Auth::user()->id)->orderBy('created_at', 'DESC')->paginate(15);
											?>
										
											<?php if(count($history)): ?>
												<?php $__currentLoopData = $history; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
												<tr class="history__row">
													<td class="history__cell"><?php echo e($item->payeer_id); ?></td>
													<td class="history__cell"><?php echo e($item->created_at->format(config('app.date_format'))); ?></td>
													<td class="history__cell"><?php echo e($item->type); ?></td>
													<td class="history__cell"><?php echo e(abs($item->summ)); ?></td>
													<td class="history__cell"><?php echo e($item->admin ? $item->admin->username : $item->system); ?></td>
													<td class="history__cell">
														<?php if($item->status == 2): ?>
															Success
														<?php elseif( $item->status == -1 ): ?>
															Fail
														<?php else: ?>
															Waiting
														<?php endif; ?>
													</td>
												</tr>
												<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
											<?php else: ?>
												<tr class="history__row">
													<td colspan="6"><?php echo app('translator')->getFromJson('app.no_records_found'); ?></td>
												</tr>
											<?php endif; ?>
										</tbody>
									</table>
								</div>
							<?php endif;?>
						<?php endif;?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('frontend.layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>