

<?php $__env->startSection('page-title', $title); ?>
<?php $__env->startSection('body', ($body)); ?>
<?php $__env->startSection('keywords', $keywords); ?>
<?php $__env->startSection('description', $description); ?>

<?php $__env->startSection('content'); ?>
<?php echo $__env->make('frontend.partials.messages', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
			<?php 

function check_mobile_device____gif() { 
    $mobile_agent_array_ = array('ipad', 'iphone', 'android', 'pocket', 'palm', 'windows ce', 'windowsce', 'cellphone', 'opera mobi', 'ipod', 'small', 'sharp', 'sonyericsson', 'symbian', 'opera mini', 'nokia', 'htc_', 'samsung', 'motorola', 'smartphone', 'blackberry', 'playstation portable', 'tablet browser');
    $agent = strtolower($_SERVER['HTTP_USER_AGENT']);    
    // var_dump($agent);exit;
    foreach ($mobile_agent_array_ as $value__) {    
        if (strpos($agent, $value__) !== false) return true;   
    }       
    return false; 
}
?>	
	<?php if(check_mobile_device____gif()):?>
	  <div class="slider-general-mobile-wrap">
        <div class="slider-general-mobile owl-carousel">
                                        <div class="item">
                    <a href="#" class="slider-general__link">
                        <img class="owl-lazy" data-src="https://picture-storage.com/dyeppgkob/image/upload/f_auto/pf/ql74wrgovlom3c0jdzxm" alt="">
                    </a>
                </div>
                            <div class="item">
                    <a href="#" class="slider-general__link">
                        <img class="owl-lazy" data-src="https://picture-storage.com/dyeppgkob/image/upload/f_auto/pf/ckfqezg9wwahbmei5zag" alt="">
                    </a>
                </div>
                            <div class="item">
                    <a href="#" class="slider-general__link">
                        <img class="owl-lazy" data-src="https://picture-storage.com/dyeppgkob/image/upload/f_auto/pf/bwqm1qyzjvqcfhsdipru" alt="">
                    </a>
                </div>
                            <div class="item">
                    <a href="#" class="slider-general__link">
                        <img class="owl-lazy" data-src="https://picture-storage.com/dyeppgkob/image/upload/f_auto/pf/wzl5d221eyrtwqrhnvme" alt="">
                    </a>
                </div>
                            <div class="item">
                    <a href="#" class="slider-general__link">
                        <img class="owl-lazy" data-src="https://picture-storage.com/dyeppgkob/image/upload/f_auto/pf/tilh3ggxh2c8au0cp5q9" alt="">
                    </a>
                </div>
                            <div class="item">
                    <a href="#" class="slider-general__link">
                        <img class="owl-lazy" data-src="https://picture-storage.com/dyeppgkob/image/upload/f_auto/pf/hw5vvirertn3hbi2eowx" alt="">
                    </a>
                </div>
                            <div class="item">
                    <a href="#" class="slider-general__link">
                        <img class="owl-lazy" data-src="https://picture-storage.com/dyeppgkob/image/upload/f_auto/pf/5C-Uht0o5QLB" alt="">
                    </a>
                </div>
                    </div>
    </div>
		
	<?php else:?>
		<div class="main-slider"></div>
	<?php endif;?>
		
		
		
		<div class="main-content">
	<div class="new-width">
				<div class="game-list-config">
					<nav class="nav-category">
						<div class="nav-category-wrap">
							<ul class="nav-category-list js-nav-category-list">
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
							<?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
								<li class="nav-category-list__item disabled">
									<span class="nav-category-list__link nav-category__link_effect" data-href="<?php echo e(route('frontend.game.list.category', $category->href)); ?>" data-text="<?php echo e($category->title); ?>">
										<span class="nav-category-text"><?php echo e($category->title); ?></span>
									</span>
								</li>
							<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
							</ul>
						</div>
					</nav>
				</div>
			</div>
<div class="games__offer__text"></div>
			<div class="new-width">
				<div class="game-list-box js-index-games">
					<div class="preloader-wrapp preloader-wrapp__index-games">
						<div class="preloader-box"></div>
					</div>
				</div>
			</div>
				

			
		</div>			
<?php $__env->stopSection(); ?>

<?php echo $__env->make('frontend.layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>