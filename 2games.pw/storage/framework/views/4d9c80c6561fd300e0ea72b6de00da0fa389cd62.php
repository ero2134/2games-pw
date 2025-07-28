
<?php if(isset($_GET['merchant_id'])):?>

 <div class="modal" id="restore-password-success" style="display: block;">
            <header class="modal__header">
                <div class="span modal__title">  <?php echo app('translator')->getFromJson('app.pay_ok_title'); ?></div>
                <span ng-click="closeModal($event)" class="modal__icon icon icon_cancel js-close-popup"></span>
            </header>
            <div class="modal__content">
                <div id="restore-password-success-text" class="modal-text"><?php echo app('translator')->getFromJson('app.pay_ok_desk'); ?></div>
            </div>
            <div class="popup__footer">
                <input  type="submit" ng-click="closeModal($event)"  value="OK <?php echo $_GET['merchant_id'];?>" class="popup__button button"/>
            </div>
        </div>
		<script>
			history.pushState('', '', '/');
		</script>
<?php endif;?>

<?php if(isset($_GET['verify_email'])):?>
 <div class="modal" id="restore-password-success" style="display: block;">
            <header class="modal__header">
                <div class="span modal__title">  <?php echo app('translator')->getFromJson('app.mail_activ_title'); ?></div>
                <span ng-click="closeModal($event)" class="modal__icon icon icon_cancel js-close-popup"></span>
            </header>
            <div class="modal__content">
                <div id="restore-password-success-text" class="modal-text"><?php echo app('translator')->getFromJson('app.mail_activ_manage'); ?></div>
            </div>
            <div class="popup__footer">
                <input  type="submit" ng-click="closeModal($event)" value="OK" class="popup__button button"/>
            </div>
        </div>
		<script>
			history.pushState('', '', '/');
		</script>
	<?php endif;?>	
<?php if(isset($_GET['confirmEmail'])):?>
 <div class="modal" id="restore-password-success" style="display: block;">
            <header class="modal__header">
                <div class="span modal__title">  <?php echo app('translator')->getFromJson('app.mail_activ_title'); ?></div>
                <span ng-click="closeModal($event)" class="modal__icon icon icon_cancel js-close-popup"></span>
            </header>
            <div class="modal__content">
                <div id="restore-password-success-text" class="modal-text"><?php echo app('translator')->getFromJson('app.mail_action_code'); ?></div>
            </div>
            <div class="popup__footer">
                <input  type="submit" ng-click="openModal($event, '#my-account')"  value="OK" class="popup__button button"/>
            </div>
        </div>
		<script>
			history.pushState('', '', '/');
		</script>
	<?php endif;?>		
<!-- MENU MOBILE -->
		<?php if(Auth::check()): ?>
			<?php echo $__env->make('frontend.partials.header_logged', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
		<?php else: ?>
			<?php echo $__env->make('frontend.partials.header_not_logged', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
		<?php endif; ?>		

<!-- Games -->
<section class="games__wrapper">
    <div class="game__cat__header">
    <div class="container games-wrap">
        <div class="grid">
						<?php
					$current_cat = '';
					$cat_level_2 = '';
					$categories = VanguardDK\Category::where('parent', 0)->orderBy('position')->get();
					$route = Request::route()->getName();
					if( in_array($route, ['frontend.game.list.category','frontend.game.list.category_level2']) ){
					   $current_params = Route::current()->parameters();
					   $current_cat = isset($current_params['category1'])?$current_params['category1']:'';
					   $cat_level_2 = isset($current_params['category2'])?$current_params['category2']:'';
					}
					if( $route == 'frontend.game.list' ){
					   $category = VanguardDK\Category::where('parent', 0)->orderBy('position')->first();
						if( $category ){
							$current_cat = $category->href;
						}
					}
				?>				
				<?php $i = 1;?>
				<?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
			
<div class="col-1-8 ">
                <div class="game__category <?php if($category->href == $current_cat): ?> game-cat-active <?php endif; ?>" data-href="<?php echo e(route('frontend.game.list.category', $category->href)); ?>">
                    <div class="game_category__content">
                        <img src="/assets/_new-style/images/top_<?php echo $i;?>.png">
                        <a href="<?php echo e(route('frontend.game.list.category', $category->href)); ?>"><?php echo e($category->title); ?></a>
                    </div>
                </div>
            </div>
			<?php $i++;?>
				<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
				<div class="col-1-6-GRUN_SABU">
					<div class="jp__inner_sub ">
				
						<form class="tab-profile__form ng-pristine ng-valid">  
							<div class="profile-details__action">
								<div class="form-group field-profileform-firstname">
									<input type="text" class="input__inner_sawe who" name="referal" value="" title="Search games" placeholder="Search games" >
									<script>
									$(function() {
										//Живой поиск
										$('.who').bind("change keyup input click", function() {
											//if (this.value.length >= 2) {
												$.ajax({
													type: 'get',
													url: "/game_sawe.php?sawe="+this.value, //Путь к обработчику
													
													response: 'json',
													success: function(data) {
														$(".game-list").html(data); //Выводим полученые данные в списке
													}
												})
											//}
										})
									
									})
									</script>
								</div>      
							</div>
						</form>
					</div>
				</div>



                        <div class="col-1-4 toggle-cat jackpot__container sign__up">
                <div class="jp__inner">
                    <img src="/assets/_new-style/images/jp-img.png"/>
                    <div class="jp__text">
                        <span><?php echo app('translator')->getFromJson('app.jackpot_casino'); ?></span>
										<?php 
					$totalJackpots = round(\VanguardDK\Jackpot::sum('balance')); 
					for($i=1; $i<=10; $i++){
						$totalJackpots += round(\VanguardDK\Game::sum('jp_' . $i)); 
					}
				?>
                                                <h1 class="jp__amount">$ <?php echo e($totalJackpots); ?></h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
	
</div>
						<?php if( count($category->inner) > 0 ): ?>
						<div class="game__sub__cat__header">
							<ul >
							<?php $__currentLoopData = $category->inner; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $inner): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
								<li class="subnav__item">
									<a class="<?php if($inner->href == $cat_level_2 && $category->href == $current_cat): ?> game-cat-active <?php endif; ?>" 
										href="<?php echo e(route('frontend.game.list.category_level2', [$category->href, $inner->href])); ?>">
										<?php echo e($inner->title); ?>

									</a>
								</li>
							<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
							</ul>
						</div>
						<?php endif; ?>

</div>
