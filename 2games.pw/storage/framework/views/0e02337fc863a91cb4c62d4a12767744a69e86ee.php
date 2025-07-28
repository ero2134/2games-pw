

<?php $__env->startSection('page-title', $title); ?>
<?php $__env->startSection('body', ($body)); ?>
<?php $__env->startSection('keywords', $keywords); ?>
<?php $__env->startSection('description', $description); ?>

<?php $__env->startSection('content'); ?>
<?php echo $__env->make('frontend.partials.messages', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
	
<!-- BLOCK WITH GAMES -->
<div class="game__list__wrapper">
    <div class="container games-wrap">
        <div class="grid">
		<div class="game-list show" data-game-type="top">
			<?php if(count($games)): ?>
				<?php $__currentLoopData = $games; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $game): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
					<div class="col-1-6" data-name="<?php echo e($game->title); ?>" data-uid="<?php echo e($game->id); ?>">
					<div class="game__box sign__up">
					                    <div class="game__box__img__container">
                        <img ng-src="<?php echo e($game->name ? '/ico/' . $game->name . '.png' : ''); ?>"
                             src="/assets/_new-style/images/game-preloder.gif"
                             class="preview__img"
                             alt="<?php echo e($game->title); ?>"
                        >
                    </div>
					                    <div class="h-overlay">
                        <h4><?php echo e($game->title); ?></h4>
						<?php if( Auth::check() ): ?>
										<a href="<?php echo e(route('frontend.game.go', $game->name)); ?>" class="games__button button-register sign__up" style="cursor: pointer;">
                                <?php echo app('translator')->getFromJson('app.list_games_login'); ?>                            </a>
									<?php else: ?>
										<div ng-click="openModal($event, '#login-modal')" class="games__button button-register">
										                                <?php echo app('translator')->getFromJson('app.list_games_not_login'); ?>                           </div>
									<?php endif; ?>		
                                            </div>
                </div>
					</div>
				<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            <?php else: ?>
				<?php echo app('translator')->getFromJson('app.no_records_found'); ?>
			<?php endif; ?>
            
			
        </div>
        </div>
    </div>
</div>
<script>

$(document).ready(function() {

	$("#dinosaurFilterType").change(function() {
		
		var value = $("#dinosaurFilterType").val();
	
		arr = [
			<?php if(count($games)): ?>
				<?php $__currentLoopData = $games; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $game): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
				{
					"id":"<?php echo e($game->id); ?>",
					"name":"<?php echo e($game->title); ?>"
				},	
				<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
			<?php endif; ?>
		];
		
		var search = value;
		var result = arr.filter(function(el){
			for(var field in el){
				if(el[field].indexOf(search) > -1){
					return true;//если нашли хотя бы одно поле содержащее искомую строку, оставляем объект
				}
			}
			return false;
		});
		
	});
});
   
	</script>          
<?php $__env->stopSection(); ?>

<?php echo $__env->make('frontend.layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>