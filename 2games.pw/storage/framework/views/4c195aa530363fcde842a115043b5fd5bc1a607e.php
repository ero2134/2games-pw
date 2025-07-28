<?php
/**
 * @var VanguardDK\Model\System $paymentSystem
 */
?>


<?php $__env->startSection('page-title', 'Bonuses Without Deposit'); ?>
<?php $__env->startSection('page-heading', 'Bonuses Without Deposit'); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <li class="breadcrumb-item active">
        Bonuses Without Deposit
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
				'url': '/result_bonus.php?admin=true&nondep=true&users=<?php echo $user;?>&hash=<?php echo $md5;?>&list=true',
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
                <form action="" id="form-data" method="post" class="validate">
                  <input type="hidden" name="id" value="0"/>
                  <input type="hidden" name="type" value="nondep"/>
				    <input type="hidden" name="url" id="url_iiiii" value=""/>
                <div class="modal-body">                       
					<div id="error"></div>
                    <div class="row">
                            <div class="controls-row">
                                <div class="col-md-3">
                                    Имя                               
								</div>
                                <div class="col-md-9">
                                    <input type="text" name="name" value="" class="form-control validate[required]"/>                        
                                </div>
                            </div>
                            <div class="controls-row">
                                <div class="col-md-3">
                                     Картинка                                
								</div>
                                <div class="col-md-9">
								
                                    <input name="file" type="file" class="form-control validate[required]"/>                        
                                </div>
                            </div>
                            <div class="controls-row">   
                                <div class="col-md-3">
                                   Пополнения                                </div>
                                <div class="col-md-9">
                                    <select name="num_deposit"  class="form-control">
                                      <option value='0'>Без пополнений</option>
                                      <option value='1'>С пополнениями</option>
                                    </select>                        
                                </div>
                            </div>
                                                                                                    <div class="controls-row">
                                <div class="col-md-3">
                               Сумма                                </div>
                                <div class="col-md-9">
                                    <input type="text" name="perc" value="" class="form-control"/>                        
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
                                    <input type="date" name="start_date" value="" class="form-control datepicker validate[required]"/>                        
                                </div>
                            </div>
                                <div class="controls-row">
                                <div class="col-md-3">
                                                                     </div>
                                <div class="col-md-9">
                                    <input type="date" name="end_date" value="" class="form-control datepicker validate[required]"/>                        
                                </div>
                            </div>
                       
                            <div class="controls-row">
                                <div class="col-md-3">
                                     Повторить ч-з 7 дней                                </div>
                                <div class="col-md-9">
                                    <input type="checkbox" name="is_loop" value="1" class="form-control ibutton"/>                        
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
                                    Описание                                </div>
                                <div class="col-md-9">
                                    <textarea name="desc" class="form-control">
                                    </textarea>                        
                                </div>
                            </div>
                    </div>
                                       
                </div>
                <div class="modal-footer">
                    <input type="submit" name="hiu" value="Отправить"/>
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
			$('#bonusForm form').attr('action', "/result_bonus.php?admin=true&nondep=true&users=<?php echo $user;?>&hash=<?php echo $md5;?>&add=true");
			$('#bonusForm .modal-title').html('Добавить бонус');
			$('#bonusForm input').not("[name=type]").not("[type=checkbox]").val("");
			$('#bonusForm #url_iiiii').val("/result_bonus.php?admin=true&nondep=true&users=<?php echo $user;?>&hash=<?php echo $md5;?>&add=true");
			$('#bonusForm textarea').html("");
			$('#bonusForm #error').html('');	
			$('#bonusForm input[name=start_time]').attr('disabled', false);
			$('#bonusForm input[name=end_time]').attr('disabled', false);
			$('#bonusForm input[name=is_loop]').attr('disabled', false);
			$('#bonusForm').modal('show');
			$("#bonusForm input[name='hiu']").val("Отправить");
		});
		$(document).on('click', '.editBonus', function() {
			var bonus_id = $(this).parents('tr').data('id');
			$.get('/result_bonus.php?admin=true&reg=true&users=<?php echo $user;?>&hash=<?php echo $md5;?>&id=' + bonus_id, function(data) {
				$('#bonusForm form').attr('action', '/result_bonus.php?admin=true&reg=true&users=<?php echo $user;?>&hash=<?php echo $md5;?>&action=edit');
				$('#bonusForm  #url_iiiii').val("/result_bonus.php?admin=true&nondep=true&users=<?php echo $user;?>&hash=<?php echo $md5;?>&action=true");
				$('#bonusForm .modal-title').html('Редактировать бонус');
				for (key in data.bonus) {
					if (data.bonus[key] == null) $('#bonusForm input[name=' + key + ']').attr('disabled', true);
					else $('#bonusForm input[name=' + key + ']').val(data.bonus[key]);
					if ($('#bonusForm input[name=' + key + ']').attr('type') == 'checkbox') {
						console.log(data.bonus[key]);
						//if (data.bonus[key] == 1) $('#bonusForm input[name=' + key + ']').attr('checked', 'checked').iButton("repaint");
					}
					$('#bonusForm select[name=' + key + ']').find('[value=' + data.bonus[key] + ']').attr("selected", "selected");
					$('#bonusForm textarea[name=' + key + ']').html(data.bonus[key]);
				}
				$('#bonusForm').modal('show');
			}, 'json');
			return false;
		});
	
		$('#form-data').on('submit', function(e){
            e.preventDefault()
            var form = $(this); // Предположу, что этот код выполняется в обработчике события 'submit' формы
            var data = new FormData();  // Для отправки файлов понадобится объект FormData. Подробнее про него можно прочитать в документации - https://developer.mozilla.org/en-US/docs/Web/API/FormData



            // Сбор данных из обычных полей
            form.find(':input[name]').not('[type="file"]').each(function() { 
                var field = $(this);
                data.append(field.attr('name'), field.val());
            });



            // Сбор данных о файле (будет немного отличаться для нескольких файлов)
            var filesField = form.find('input[type="file"]');
            var fileName = filesField.attr('name');
            var file = filesField.prop('files')[0];
            data.append(fileName, file) ;

			
			var url = document.getElementById("url_iiiii").value;
			$.ajax({
				'type': 'POST',
				'url': url,
				'cache': false,
				'processData': false,
				'contentType': false,
				'data': data,
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