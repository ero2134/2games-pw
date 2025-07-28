<!-- UNIT WITH POPP WINDOWS, BEGINNING -->
<!-- POPUP REGISTRATION AND AUTHORIZATION -->
<div class="modal" id="login-modal" style="display: none">
        <header class="modal__header">
            <div class="span modal__title">Sign in to start your session</div>
            <span ng-click="closeModal($event)" class="modal__icon icon icon_cancel js-close-popup"></span>
        </header>
    <form  ng-submit="sendForm($event)" action="<?= route('frontend.auth.login.post') ?>" method="POST">
		<input type="hidden" value="<?= csrf_token() ?>" name="_token">
		<div class="modal__content">
                <div class="modal__input input">
                    <input placeholder="Username" type="text" name="username"
                           class="modal__input-inner input__inner">
                </div>
                <div class="modal__input input">
                    <input placeholder="Password" type="password" name="password"
                           class="modal__input-inner input__inner">
						   <?php if(settings('forgot_password')): ?>
                                            <span class="modal__caption" ng-click="openModal($event, '#restore-password')">
                            Forgot Your Password?                        </span>
							<?php endif; ?>
                                    </div>
                <div class="modal__error" style="display: none"></div>
            </div>
            <div class="popup__footer">
                <input type="submit" value="Login" class="popup__button button"/>
            </div>
        </form>
        <div class="modal-preloader" style="display:none"></div>
    </div>

<!-- POPUP REGISTRATION AND AUTHORIZATION -->
<!-- POPUP RECOVER PASSWORD -->
<?php if(settings('forgot_password')): ?>
<div class="modal" id="restore-password" style="display: none">
            <header class="modal__header">
                <div class="span modal__title">Restore Password</div>
                <span ng-click="closeModal($event)" class="modal__icon icon icon_cancel js-close-popup"></span>
            </header>
    <form  ng-submit="sendForm($event)" action="<?= route('frontend.password.remind.post') ?>" method="POST" data-modal-success="#restore-password-success">
                <div class="modal__content">
                    <div class="modal__input input input-restore-email">
                        <input type="text" name="email" required class="modal__input-inner input__inner"
                               placeholder="Email">
                    </div>
                    <div class="modal__error" style="display:none"></div>
                </div>
                <div class="popup__footer">
                    <input type="submit" value="Request new password" class="popup__button button"/>
                </div>
            </form>
            <div class="modal-preloader" style="display:none"></div>
        </div>
<?php endif; ?>
<!-- POPUP RECOVER PASSWORD -->
<!-- POPUP RECOVER PASSWORD INFO WINDOW -->
<?php if(settings('forgot_password')): ?>
            <div class="modal" id="restore-password-success" style="display:none">
            <header class="modal__header">
                <div class="span modal__title">System notification</div>
                <span ng-click="closeModal($event)" class="modal__icon icon icon_cancel js-close-popup"></span>
            </header>
            <div class="modal__content">
                <div id="restore-password-success-text" class="modal-text">Your password has been sent to your mail<br/>Good luck in the games!</div>
            </div>
            <div class="popup__footer">
                <input ng-click="closeModal($event)" type="submit" value="Close"
                       class="popup__button button"/>
            </div>
        </div>
<?php endif; ?>
<!-- POPUP RECOVER PASSWORD INFO WINDOW -->
<!-- POPUP REGISTRATION -->
<?php if(settings('reg_enabled')): ?>
            <div class="modal" id="registration-confirm" style="display: none">
            <header class="modal__header">
                <div class="span modal__title">Register a new membership</div>
                <span ng-click="closeModal($event)" class="modal__icon icon icon_cancel js-close-popup"></span>
            </header>
    <form method="post" action="<?= route('frontend.register.post') ?>" ng-submit="sendForm($event)">
                <div class="modal__content">
                    <div class="modal__input input">
                        <input placeholder="Email" type="text" name="email"
                               class="modal__input-inner input__inner">
                    </div>
                    <div class="modal__input input">
                        <input placeholder="Password" type="password" name="password"
                               class="modal__input-inner input__inner">
                    </div>
                                            <div class="registration__checkbox checkbox">
                            <input type="checkbox" id="rules" name="tos" id="tos" value="1" checked="checked"
                                   class="checkbox__inner">
                            <label for="rules" class="checkbox__label">I accept</label>
                        </div>
                                        <div class="modal__error" style="display: none"></div>
                </div>
                <div class="popup__footer">
                    <input type="submit" value="Register" class="popup__button button"/>
                </div>
            </form>
            <div class="modal-preloader" style="display:none"></div>
        </div>
<?php endif; ?>
<!-- POPUP REGISTRATION -->


<?php if(Auth::check()): ?>
<!-- POPUP KASSA, PROFILE, VIP -->
	
    <div class="modal popup_tabs" id="my-account" style="display: none">
        <div class="tab">
            <div class="tab__action">
           
                <a ng-click="setActiveTab($event, 'profile')"
                   ng-class="{'tab__item_active': myAccountActiveTab === 'profile'}"
                   href="#profile"
                   class="tab__item">
                    Profile             
				</a>
				<a ng-click="setActiveTab($event, 'bonuses')"
                   ng-class="{'tab__item_active': myAccountActiveTab === 'bonuses'}"
                   href="#bonuses"
                   class="tab__item">
                    bonuses
                </a>	
                <a ng-click="setActiveTab($event, 'vip')"
                   ng-class="{'tab__item_active': myAccountActiveTab === 'vip'}"
                   href="#vip"
                   class="tab__item">
                    VIP
                </a>
				     <a ng-click="setActiveTab($event, 'cashier')"
                   ng-class="{'tab__item_active': myAccountActiveTab === 'cashier'}"
                   href="#cashier"
                   class="tab__item">
                    Cashbox             				
				</a>
            </div>
            <div class="tab__content">
				<div class="tab-bonuses" ng-show="isActiveTab('bonuses')" id="bonuses">
				<span class="tab-bonuses__gallery payment"id="html_reg_bonus"></span>
				<div class="tab-bonuses__gallery payment" id="bonuses_div"></div>
					
					<script>
						jQuery('body').on('click', '#hvbhghjubjbj', function() {
							bonus();			
							return false;			
						});
						function bonus(){
							jQuery.ajax({
								'type': 'POST',
								'url': '/result_bonus.php?html=true&users=<?php echo e(Auth::user()->id); ?>&hash=<?php echo md5(e(Auth::user()->id).':9358741'); ?>',
								'cache': false,
								dataType: 'json',
								'data': jQuery(this).parents('form').serialize(),
								'success': function(data) {
									if(data.status === true){
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
				</div>
                <div ng-show="isActiveTab('cashier')" class="tab-cashier" id="cashier">
                    <div class="sub_tab__action">
                        <ul>
						    <li>
                                <a ng-click="setActiveSubTab($event, 'pay_code')"
                                   ng-class="{'tab__item_active': cashierActiveTab === 'pay_code'}"
                                   href="#pay_code"
                                  >
                                    бонус коды                              
								</a>
                            </li>
                            <li>
                                <a ng-click="setActiveSubTab($event, 'payment')"
                                   ng-class="{'tab__item_active': cashierActiveTab === 'payment'}"
                                   href="#payment-tab"
                                   class="tab__item_active">
                                    Deposit                                </a>
                            </li>
                            <li>
                                <a ng-click="setActiveSubTab($event, 'history')"
                                   ng-class="{'tab__item_active': cashierActiveTab === 'history'}"
                                   href="#history-tab">
                                    History                                </a>
                            </li>
                            <li>
                                <a ng-click="setActiveSubTab($event, 'payout')"
                                   ng-class="{'tab__item_active': cashierActiveTab === 'payout'}"
                                   href="#payout-tab">
                                    Cash Withdrawal                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-cashier__content">
                        <div class="tab tab_style_button">
                        
							<div ng-show="isActiveSubTab('pay_code')" id="pay_code active"  class="payment ps-container ps-theme-tabs ps-active-y" data-ps-id="af3f49a5-5f8e-6fc9-b4cb-f1a5b64b073c">
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
														Pin-код:
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
													if(data.status === true){
														$form.find('.pay-tooltip__note_ok').show();	
														$form.find('.error__info').html(data.message);
														$form.find('.pay-tooltip__note_error').hide();	
													}else{
														$form.find('.pay-tooltip__note_error').show();	
														$form.find('.error__info').html(data.message);
														$form.find('.pay-tooltip__note_ok').hide();	
													}
														
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
							</div>						
                                <div ng-show="isActiveSubTab('payment')" id="payment-tab active" class="payment">
                                    <div class="payment__gallery">
                                    	<div class="fretoplay_cas"></div>    
										<div class="enot_cas"></div>    
										<div class="_cas"></div>
									</div>
                                </div>
                            </div>
                            <div ng-show="isActiveSubTab('history')" id="history-tab" class="history">
                                <table class="history__table">
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
												<td colspan="5"><?php echo app('translator')->getFromJson('app.no_records_found'); ?></td>
											</tr>
										<?php endif; ?>
                                    </tbody>
                                    </table>
                                </div>
								
                                <div ng-show="isActiveSubTab('payout')" id="payout-tab" class="history">
                                    <div class="payment__gallery payment_fff">
                                  
                                    
                                    </div>
                                </div>
                            </div>
                            <div class="tab__close js-close-popup"></div>
                        </div>
                    </div>
                </div>
            <div ng-show="isActiveTab('profile')" class="profile active" id="profile">
                <div class="profile__table">
                    <div class="profile__aside">
                        <div class="profile__info">
                            <div class="profile-info">
                                <div class="profile-info__title title title_font_largest"><?php echo e(auth()->user()->present()->username); ?></div>
								<div class="profile-info__caption title">Your level</div>
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
												
												<img src="/frontend/img/stars.png" class="star_icon">
											<?php endfor; ?> 
											<?php if( $level ): ?>
												<?php for($i=1; $i <= $level; $i++): ?>
													<img src="/frontend/img/stars-not-active.png" class="star_icon">
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
                                                    <div class="tooltip__content">You need to make deposits in the amount of <?php echo e(Auth::user()->left_next_level()); ?> for the next level</div>
                                                    <div class="tooltip__arrow tooltip__arrow_right"></div>
                                                </div>
                                            </div>
                                        </div>
										<td>
										
									
                                        <div class="rating__summary">
                                            <span class="rating__caption">Balance:
                                            <span class="rating__caption_accent"><?php echo e(auth()->user()->present()->balance); ?> USD</span>
                                            </span>
                                            <span class="rating__title rating__title_large">VIP POINTS:</span>
                                            <span class="rating__title rating__title_large rating__title_accent">
                                                <?php echo e(Auth::user()->points); ?>

                                                <div class="rating__info">
                                                    <i class="icon icon_info-light"></i>
                                                    <div class="rating__tooltip tooltip">
                                                        <div class="tooltip__content">You need to make deposits in the amount of <?php echo e(Auth::user()->left_next_level()); ?> for the next level</div>
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
								

								
                                    <div class="profile-info__action">
                                        <button ng-click="setActiveTab($event, 'cashier')"
                                                class="profile-info__button button">
                                            Deposit                                        </button>
                                        <div class="profile-info__icon">
                                            <svg class="svg-money svg-money-dims">
                                                <use xlink:href="/frontend/img/svgsprite.svg#money"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div class="profile__main">
                        <form  ng-submit="sendForm($event)" method="post" action="<?= route('frontend.profile.update.details') ?>" data-type="ajax" class="tab-profile__form">
                            <div class="profile-details">
                                <h3 class="profile-details__title title title_align_center">Personal information</h3>
                                <div class="profile-details__action">
                                    <div class="profile-details__input">
                                        <div class="form-group field-profileform-firstname">
                                            <input type="text" id="profileform-firstname" class="input__inner" name="first_name" value="<?php echo e(auth()->user()->present()->first_name); ?>" placeholder="First Name">
                                            <div class="help-block"></div>
                                        </div>
                                    </div>
                                    <div class="profile-details__input">
                                        <div class="form-group field-profileform-lastname">
                                            <input type="text" id="profileform-lastname" class="input__inner" name="last_name" value="<?php echo e(auth()->user()->present()->last_name); ?>" placeholder="Last Name">
                                            <div class="help-block"></div>
                                        </div>
                                    </div>
                                    <div class="profile-details__input">
                                        <div class="form-group field-profileform-birthday">
                                            <input type="text" id="profileform-birthday" class="input__inner datepicker_birth" name="birthday" value="<?php echo e(optional(auth()->user()->present()->birthday)->format('Y-m-d')); ?>" placeholder="Birthday">
                                            <div class="help-block"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="profile-contacts">
                                <h3 class="profile-contacts__title title title_align_center">Contact Information</h3>
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
                                                <input type="text" id="profileform-phone" class="js-input__inner_tel input__inner" name="phone" value="<?php echo e(auth()->user()->present()->phone); ?>" maxlength="12" placeholder="00000000000">
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
                                    <a class="profile__button button button_color_brightblue"
                                       ng-click="openModal($event, '#change-password')">Change password</a>
                                    <button type="submit"
                                            class="profile__button profile__button_submit button button_color_orange">
                                        Save changes                                    </button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
			
<!-- VIP -->

<div ng-show="isActiveTab('vip')" class="vip active" id="vip">
                <div class="vip__header">
                    <span class="vip__title">
					Your glasses: <?php echo e(Auth::user()->points); ?>

                        <span class="vip__icon">
                            <div class="rating__info">
                                <i class="icon icon_info-light"></i>
                                <div class="rating__tooltip rating__tooltip_right tooltip">
                                    <div class="tooltip__content">You need to make deposits in the amount of <?php echo e(Auth::user()->left_next_level()); ?> for the next level</div>
                                    <div class="tooltip__arrow tooltip__arrow_right"></div>
                                </div>
                            </div>
                        </span>
                    </span>
                </div>
				                    <div class="vip__action">
                        <form ng-submit="sendForm($event)" action="<?= route('frontend.profile.exchange') ?>" method="POST"
                              id="exchange-form">
                            <div class="vip__table">
                                    <div class="vip__cell">
                                        <span class="vip__subtitle">Number of points</span>
                                        <div class="vip__input vip__input_color_white">
                                            <input type="text" id="exchange-input" name="sumpoints" class="input__inner"
                                                   max="0.00" min="100"
                                                   data-cours="0.01">
                                        </div>
                                    </div>
                                    <div class="vip__cell">
                                        <span class="vip__subtitle">Exchange rate</span>
                                        <div class="vip__viewrate">100:1</div>
                                    </div>
                                    <div class="vip__cell">
                                        <span class="vip__subtitle">You will get</span>
                                        <div class="vip__input vip__input_color_yellow">
                                            <input type="text" id="exchange-output" class="input__inner"
                                                   data-cours="0.01">
                                        </div>
                                    </div>
                            </div>
                            <div class="modal__error" style="display: none">
                                <span class="modal__note modal__note_important"></span>
                                <span class="modal__note modal__note_accent"></span>
                            </div>
                            <button class="vip__button button button_color_orange">
                                Exchange for real money                            </button>
                        </form>
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
                                        <img src="/frontend/img/points/<?php echo e($point->img); ?>" class="status__icon">
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
            </div>

<!-- VIP -->			
			
			
			 <span ng-click="closeModal($event)" class="modal__icon icon icon_cancel js-close-popup"></span>
        </div>
    </div>
       
</div>
<!-- POPUP CASS, PROFILE -->
<?php endif; ?>
<!-- POPUP CHANGE PASSWORD -->
    <div class="modal popup_changePassword" id="change-password" style="display: none">
        <header class="modal__header">
            <div class="span modal__title">
                Change password           
				</div>
            <span ng-click="closeModal($event)" class="modal__icon icon icon_cancel js-close-popup"></span>
        </header>
    <form  ng-submit="sendForm($event)" action="<?= route('frontend.profile.update.password') ?>" method="POST" data-modal-success="#password-changed">
            <div class="modal__content">
                <div class="popup__input input">
                    <input type="password" name="old_password" required class="modal__input-inner input__inner"
                           placeholder="Current password">
                </div>
                <div class="popup__input input">
                    <input type="password" name="password" required class="modal__input-inner input__inner"
                           placeholder="New Password">
                </div>
                <div class="popup__input input">
                    <input type="password" name="password_confirmation" required class="modal__input-inner input__inner"
                           placeholder="Confirm Password">
                </div>
                <div class="modal__error" style="display:none">
                    <div class="modal__note_important"></div>
                </div>
            </div>
            <div class="popup__footer">
                <input type="submit" value="Change" class="popup__button button"/>
            </div>
        </form>
        <div class="modal-preloader" style="display:none"></div>
    </div>
    <div class="modal" id="bonus_giting-changed" style="display:none">
        <header class="modal__header">
            <div class="span modal__title">BONUS ERROR</div>
            <span class="modal__icon icon icon_cancel clossssssss_bonus"></span>
        </header>
        <div class="modal__content">
            <div class="modal-text"  id="bonus__infirgung"></div>
        </div>
        <div class="popup__footer">
            <input type="submit" value="Close" class="popup__button button clossssssss_bonus"/>
        </div>
    </div>
    <div class="modal" id="password-changed" style="display:none">
        <header class="modal__header">
            <div class="span modal__title">System notification</div>
            <span ng-click="closeModal($event)" class="modal__icon icon icon_cancel js-close-popup"></span>
        </header>
        <div class="modal__content">
            <div class="modal-text">Your password has been changed <br/>Good luck in the games!</div>
        </div>
        <div class="popup__footer">
            <input  ng-click="closeModal($event)" type="submit" value="Close" class="popup__button button"/>
        </div>
    </div>
<!-- POPUP CHANGE PASSWORD -->

<?php if(Auth::check()): ?>
<div class="popup popup_tabs popup_deposit_for_bonus" id="deposit-for-bonus-modal" style="display: none">
    <div class="popup__close">
       <span ng-click="closeModal($event)" class="modal__icon icon icon_cancel js-close-popup"></span>
    </div>
    <div class="popup__content">
        <p class="popup__title">Make deposit to activate bonus</p>
        <p class="popup__title">To get a bonus, you need tomake a deposit from <span class="popup__title popup__title_accent" id="bonus-deposit-sum"></span></p>
        <div class="popup_section__main">
            <div class="payment" style="text-align: center">
                <div class="payment__gallery">
					<div class="fretoplay_cas"></div>    
					<div class="enot_cas"></div>    
					<div class="_cas"></div>   
				</div>
            </div>
        </div>
         <div class="popup_section__aside">
            <div class="aside aside_promo">
                <div class="aside__promo-bonus promo-bonus">
                    <p class="promo-bonus__title">Gains using bonus</p>
                    <div class="promo-bonus__img">
                        <img src="" id="bonus-img"/>
                    </div>
                </div>
                <div class="aside__promo-table">
                    <table class="table table_promo">
                        <thead class="table__head">
                            <tr class="table__headrow">
                                <th class="table__cell">#</th>
                                <th class="table__cell table__cell_fluid">user</th>
                                <th class="table__cell">Gain</th>
                            </tr>
                        </thead>
                        <tbody class="table__body">
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
	function fretoplay_cas(){
		jQuery.ajax({
			'type': 'POST',
			'url': '/result.php?fretoplay_cas=true&users=<?php echo e(Auth::user()->id); ?>&hash=<?php echo md5(e(Auth::user()->id).':9358741'); ?>',
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
			'url': '/raccoon.php?enot_cas=true&users=<?php echo e(Auth::user()->id); ?>&hash=<?php echo md5(e(Auth::user()->id).':9358741'); ?>',
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
<?php endif; ?>