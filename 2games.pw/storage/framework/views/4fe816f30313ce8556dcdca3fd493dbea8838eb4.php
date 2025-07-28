<?php
/**
 * @var VanguardDK\Model\System $paymentSystem
 */
?>


<?php $__env->startSection('page-title', 'Процент отдачи'); ?>
<?php $__env->startSection('page-heading', 'Процент отдачи'); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <li class="breadcrumb-item active">
        Процент отдачи
    </li>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

    <?php echo $__env->make('backend.partials.messages', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    <style>
        .box {
            padding: 5px 25px;
        }
    </style>
<script src="/assets/js/datatables-1.9.4/jquery-2.0.2.min.js"></script>	
<?php
$user = csrf_token();
$md5 = md5($user.':["6JiPNWsmS8Be3CwJnTgPXS91n"]');
?>
<script>
		function db_list(){
			$('.shop_informat').html('Загрузка...');
			jQuery.ajax({
				'type': 'POST',
				'url': '/result_bonus.php?admin=true&gr_id&users=<?php echo $user;?>&hash=<?php echo $md5;?>&list=true',
				'cache': false,
				'data': jQuery(this).parents('form').serialize(),
				'success': function(html) {
					$('.shop_informat').html(html);	
				}
			});
		}
		db_list();
		$(document).on('click', '.update', function() {	
			db_list();
		});
	
  
</script>	
<div class="card">
	<div class="card-body">
		<div class="row">
			<div class="col-md-12">		
				<div class="shop_informat"></div>
			</div>
		</div>
	</div>
</div>
<script>
		$(document).on('click', '.sawe_00000', function() {
			var url = document.getElementById("url").value;
			jQuery.ajax({
				'type': 'POST',
				'url': url,
				'cache': false,
				'data': jQuery(this).parents('form').serialize(),
				'success': function(html) {
					$('#error').html(html);	
				}
			});
			return false;
		});
		
</script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('backend.layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>