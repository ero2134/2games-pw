<?php $__env->startSection('page-title', 'Deposit Bonuses'); ?>
<?php $__env->startSection('page-heading', 'Deposit Bonuses'); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <li class="breadcrumb-item active">
       Deposit Bonuses
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
				'url': '/result_bonus.php?admin=true&dep=true&users=<?php echo $user;?>&hash=<?php echo $md5;?>&list=true',
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
			<div class="col-md-3"></div>
			<div class="col-md-3"></div>
			<div class="col-md-3">	
				<a href="#" class="btn btn-primary btn-rounded float-right update"><i class="fa fa-undo" aria-hidden="true"></i> Oбновить</a>
			</div>
			<div class="col-md-3">	
				<a href="#" class="btn btn-primary btn-rounded float-right addBonus" id="addBonus"><i class="fas fa-plus mr-2"></i>Добавление</a>
			</div>
		</div>
	</div>
</div>
<?php if(isset($_GET['status']) && isset($_GET['txt'])):?>
	<?php if($_GET['status'] == 0):?>
	<div class="alert alert-warning alert-dismissable">
	  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
	  <strong>Warning!</strong> <?php echo(isset($_GET['txt'])? $_GET['txt'] : 'ERROR');?>
	</div>
	<?php else:?>
	<div class="alert alert-success alert-dismissable">
	  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
	  <strong>success!</strong> <?php echo(isset($_GET['txt'])? $_GET['txt'] : 'ERROR');?>
	</div>
	<?php endif;?>
<?php endif;?>
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
				  <input type="hidden" name="url" id="url_iiiii" value=""/>
                  <input type="hidden" name="type" value="dep"/>
                <div class="modal-body">  
					<div id="error"></div>
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
                                   Номер пополнения                                </div>
                                <div class="col-md-9">
                                    <input type="text" name="num_deposit" value="" class="form-control"/>                        
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
                                     Дата начала                                </div>
                                <div class="col-md-9">
                                    <input type="text" name="start_date" value="" class="form-control datepicker validate[required]"/>                        
                                </div>
                            </div>
                                <div class="controls-row">
                                <div class="col-md-3">
                                                                     </div>
                                <div class="col-md-9">
                                    <input type="text" name="end_date" value="" class="form-control datepicker validate[required]"/>                        
                                </div>
                            </div>
               
                            <div class="controls-row">
                                <div class="col-md-3">
                                     Повторить ч-з 7 дней                                </div>
                                <div class="col-md-9">
								<label class="custom-checkbox">
                                    <input type="checkbox" name="is_loop" value="1" class="form-control ibutton"/> 
								</label>
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
                                    Игроки                                </div>
                                <div class="col-md-9">
                                    <select name="users" class="form-control">
                                      <option value="0">Все</option>
                                      <option value="1">Старые</option>
                                      <option value="2">Новые</option>
                                    </select>                        
                                </div>
                            </div>
                                                    
                            <div class="controls-row">
                                <div class="col-md-3">
                                    Описание                                
								</div>
                                <div class="col-md-9">
                                    <textarea name="desc" class="form-control">
                                    </textarea>                        
                                </div>
                            </div>
                    </div>
                                       
                </div>
                <div class="modal-footer">
                    <button class="btn btn-warning submit sawe_00000">Ок</button> 
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
		$('.addBonus').on('click',function(){
			$('#bonusForm form').attr('action', "/result_bonus.php?admin=true&dep=true&users=<?php echo $user;?>&hash=<?php echo $md5;?>&add=true");
			$('#bonusForm .modal-title').html('Добавить бонус');
			$('#bonusForm input').not("[name=type]").not("[type=checkbox]").val("");
			$('#bonusForm #url_iiiii').val("/result_bonus.php?admin=true&dep=true&users=<?php echo $user;?>&hash=<?php echo $md5;?>&add=true");
			$('#bonusForm textarea').html("");
			$('#bonusForm #error').html('');	
			$('#bonusForm input[name=start_time]').attr('disabled', false);
			$('#bonusForm input[name=end_time]').attr('disabled', false);
			$('#bonusForm input[name=is_loop]').attr('disabled', false);
			$('#bonusForm').modal('show');
		});
		$(document).on('click', '.editBonus', function() {
			var bonus_id = $(this).parents('tr').data('id');
			$.get('/result_bonus.php?admin=true&reg=true&users=<?php echo $user;?>&hash=<?php echo $md5;?>&id=' + bonus_id, function(data) {
				$('#bonusForm form').attr('action', '/result_bonus.php?admin=true&reg=true&users=<?php echo $user;?>&hash=<?php echo $md5;?>&action=edit');
				$('#bonusForm  #url_iiiii').val("/result_bonus.php?admin=true&dep=true&users=<?php echo $user;?>&hash=<?php echo $md5;?>&action=true");
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
		$(document).on('click', '.sawe_00000', function() {
			var url = document.getElementById("url_iiiii").value;
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
		$('.custom-checkbox').each(function(){
			var checkbox = $(this);
			checkbox.prepend('<span class="custom-checkbox-button"></span>');
			if( checkbox.find('input').is(':checked') ) {
				checkbox.addClass('checked');
			}
			checkbox.on('change', function () {
				var input = $(this).find('input');
				input.closest('.custom-checkbox').toggleClass('checked', input.is(':checked'));
			});
		});
	});
</script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('backend.layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>