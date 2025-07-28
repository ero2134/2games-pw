

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
				<section class="section section_winsline">
	<div class="winsline" id="tracker">
		<?php
			$refuio = VanguardDK\StatGame::select("*")->where("win", ">", 0)->orderBy("date_time", "DESC")->limit(20)->get();
	function gen_password($length = 6)
{
	$password = '';
	$arr = array(
		'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
		'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
		'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
		'1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
	);
 
	for ($i = 0; $i < $length; $i++) {
		$password .= $arr[random_int(0, count($arr) - 1)];
	}
	return $password;
}
			foreach ($refuio as $StatGame):
				$game_run = VanguardDK\Game::select("*")->where("name", "like", "%" .$StatGame['game'] . "%")->first();
				$name_run = VanguardDK\User::select("*")->where("id",  $StatGame['user_id'])->first();
				if($game_run):
		?>		<a class="winsline__item"  <?php if(!Auth::check()): ?>data-toggle="modal" data-target="#login-modal"<?php else: ?> href="/game/<?php echo e($game_run->name); ?>" <?php endif; ?>>
					<div class="winsline__block">
						<img src="<?php echo e($game_run->name ? '/ico/' . $game_run->name . '.png' : ''); ?>" alt="<?php echo e($game_run->title); ?>" class="winsline__img">
						<div class="winsline__overlay">
							<button class="winsline__button button button_small">Играть</button>
						</div>
						<div class="winsline__content">
							<p class="winsline__title"><?php echo e($game_run->title); ?></p>
							<p class="winsline__title winsline__title_color_yellow"><?php echo e($StatGame['win'] * env('HEADER_TOP_X')); ?> RUB</p>
						
														<span class="winsline__note winsline__note_small"><?php if(isset($name_run->username)):?><?php echo e(($name_run->username != '234987') ? $name_run->username  : gen_password(rand(5,8))); ?><?php else:?><?php echo gen_password(rand(5,8));?><?php endif;?></span>
						</div>
					</div>
				</a>
			<?php endif;?>
		<?php endforeach;?>
		</div>
</section>
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