<?php
/**
 * @var VanguardDK\Model\System $paymentSystem
 */
?>


<?php $__env->startSection('page-title', 'registration Bonuses'); ?>
<?php $__env->startSection('page-heading', 'registration Bonuses'); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <li class="breadcrumb-item active">
       registration Bonuses
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
				'url': '/result_bonus.php?admin=true&reg=true&users=<?php echo $user;?>&hash=<?php echo $md5;?>&list=true',
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
				function on_sers(id){
			jQuery.ajax({
				'type': 'POST',
				'url': '/result_bonus.php?admin=true&on_sers=true&users=<?php echo $user;?>&hash=<?php echo $md5;?>&u_id='+id,
				'cache': false,
				'data': jQuery(this).parents('form').serialize(),
				'success': function(html) {
					db_list();	
				}
			});
			return false;
		}		
</script>
<div class="card">
	<div class="card-body">
		<div class="row">
			<div class="col-md-12">	
				<div class="table-responsive" id="users-table-wrapper">
					<a href="#" class="btn btn-primary btn-rounded float-right update"><i class="fas fa-plus mr-2"></i>Oбновить</a>
				</div>

			</div>
		</div>
	</div>
</div>
<div class="card">
	<div class="card-body">
		<div class="row">
			<div class="col-md-12">	
				<div class="table-responsive" id="users-table-wrapper">
				<div class="shop_informat"></div>
				</div>

			</div>
		</div>
	</div>
</div>

<!-- Bootrstrap modal form -->
    <div class="modal fade" id="bonusForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel3" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h3 class="modal-title"></h3>
                </div>
                <form action="" method="post" class="validate">
					
					<input type="hidden" name="id" value="0"/>
					<input type="hidden" name="type" value="reg"/>
				
                <div class="modal-body">  
						<span id="error"></span>
                    <div class="row">
                            <div class="controls-row">
                                <div class="col-md-3">
                                    Имя                                </div>
                                <div class="col-md-9">
                                    <input type="text" name="name" value="" class="form-control validate[required]"/>                        
                                </div>
                            </div>
                            <div class="controls-row">
                                <div class="col-md-3">
                                     Картинка                                </div>
                                <div class="col-md-9">
                                    <input type="text" name="pic" value="" class="form-control validate[required]"/>                        
                                </div>
                            </div>
                                                                            <div class="controls-row">
                                <div class="col-md-3">
                                    Минимальный депозит                                </div>
                                <div class="col-md-9">
                                    <input type="text" name="min_deposit" value="" class="form-control"/>                        
                                </div>
                            </div>
                                                                            <div class="controls-row">
                                <div class="col-md-3">
                               Процент                                </div>
                                <div class="col-md-9">
                                    <input type="text" name="perc" value="" class="form-control"/>                        
                                </div>
                            </div>
                            
                                                    <div class="controls-row">
                                <div class="col-md-3">
                                    Множитель                                </div>
                                <div class="col-md-9">
                                    <input type="text" name="koef" value="" class="form-control"/>                        
                                </div>
                            </div>
                                                                            <div class="controls-row">
                                <div class="col-md-3">
                                    Макс. бонус                                </div>
                                <div class="col-md-9">
                                    <input type="text" name="max_bon" value="" class="form-control"/>                        
                                </div>
                            </div>
                                                    
                            <div class="controls-row">
                                <div class="col-md-3">
                                    Вейджер                                </div>
                                <div class="col-md-9">
                                    <input type="text" name="wager" value="" class="form-control"/>                        
                                </div>
                            </div>
                                                    
                                                    <div class="controls-row">
                                <div class="col-md-3">
                                    Время на активацию                                </div>
                                <div class="col-md-9">
                                    <input type="text" name="activate_time" value="" class="form-control"/>                        
                                </div>
                            </div>
                                                    <div class="controls-row">
                                <div class="col-md-3">
                                    Время жизни                                </div>
                                <div class="col-md-9">
                                    <input type="text" name="live_time" value="" class="form-control"/>                        
                                </div>
                            </div>
                                                    
                                                    
                            <div class="controls-row">
                                <div class="col-md-3">
                                    Описание                                </div>
                                <div class="col-md-9">
                                    <textarea name="desc" class="form-control">
                                    </textarea>                        
                                </div>
                            </div>
                    </div>
                                       
                </div>
                <div class="modal-footer">
                    <button class="btn btn-warning submit sawe">Ок</button> 
                    <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">Отмена</button> 
                               
                </div>
                </form>                
            </div>
        </div>
    </div>    
<?php $__env->stopSection(); ?>
<?php $__env->startSection('scripts'); ?>

<script>
	$(document).ready(function() {
		$(document).on('click', '.editBonus', function() {
			var bonus_id = $(this).parents('tr').data('id');
			$.get('/result_bonus.php?admin=true&reg=true&users=<?php echo $user;?>&hash=<?php echo $md5;?>&id=' + bonus_id, function(data) {
				$('#bonusForm form').attr('action', '/result_bonus.php?admin=true&reg=true&users=<?php echo $user;?>&hash=<?php echo $md5;?>&action=edit');
				$('#bonusForm .modal-title').html('Редактировать бонус');
				for (key in data.bonus) {
					if (data.bonus[key] == null) $('#bonusForm input[name=' + key + ']').attr('disabled', true);
					else $('#bonusForm input[name=' + key + ']').val(data.bonus[key]);
					if ($('#bonusForm input[name=' + key + ']').attr('type') == 'checkbox') {
						console.log(data.bonus[key]);
						if (data.bonus[key] == 1) $('#bonusForm input[name=' + key + ']').attr('checked', 'checked').iButton("repaint");
					}
					$('#bonusForm select[name=' + key + ']').find('[value=' + data.bonus[key] + ']').attr("selected", "selected");
					$('#bonusForm textarea[name=' + key + ']').html(data.bonus[key]);
				}
				$('#bonusForm').modal('show');
			}, 'json');
			return false;
		});

		$(document).on('click', '.sawe', function() {
			jQuery.ajax({
				'type': 'POST',
				'url': '/result_bonus.php?admin=true&reg=true&users=<?php echo $user;?>&hash=<?php echo $md5;?>&action=edit',
				'cache': false,
				'data': jQuery(this).parents('form').serialize(),
				'success': function(html) {
					$('#error').html(html);	
				}
			});
			return false;
		});
	});
</script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('backend.layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>