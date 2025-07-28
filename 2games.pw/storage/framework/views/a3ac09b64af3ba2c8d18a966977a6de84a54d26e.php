<?php
/**
 * @var VanguardDK\Model\System $paymentSystem
 */
?>


<?php $__env->startSection('page-title', 'Управление кодами'); ?>
<?php $__env->startSection('page-heading', 'Управление кодами'); ?>

<?php $__env->startSection('breadcrumbs'); ?>
    <li class="breadcrumb-item active">
        Управление кодами
    </li>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

    <?php echo $__env->make('backend.partials.messages', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    <style>
        .box {
            padding: 5px 25px;
        }
    </style>
<div class="card">
    <div class="card-body">
		<div class="shop_informat"></div>
        <form id="form-payment-system_enot" action="#" method="POST">
                <div class="row">
                    <label class="col-md-2 box">Количество:</label>
                    <div class="col-md-10 box">
                        <input type="text" class="form-control" name="code[count]" value="1">
                    </div>
                </div>
                <div class="row">
                    <label class="col-md-2 box">вейджер:</label>
                    <div class="col-md-10 box">
                        <input type="text" class="form-control" name="code[span]" value="1">
                    </div>
                </div>
                <div class="row">
                    <label class="col-md-2 box">Тип :</label>
                    <div class="col-md-10 box">
                        <select  id="scaleMode" class="form-control" name="code[scaleMode]" required="" aria-required="true" aria-invalid="false">
							<option value="0">Одноразовый</option>
							<option value="1">Бесконечгный</option>
						</select>
                    </div>
                </div>				
                <div class="row">
                    <label class="col-md-2 box">Цена:</label>
                    <div class="col-md-10 box">
                        <input type="text" class="form-control" name="code[price]">
                    </div>
                </div>
                <div class="row">
                    <input type="hidden" value="<?= csrf_token() ?>" name="_token">
                    <label class="col-md-2 box"></label>
                    <div class="col-md-10 box">
                        <button type="submit" class="btn btn-primary" id="ajaxbutton_form_shop">Create</button>
                    </div>
                </div>
        </form>
    </div>
</div>
<div class="card">
	<div class="card-body">
		<div class="row">
			<div class="col-md-12">
				  <a download href="/result_bonus_code.php?admin=9b65780da884f131853e0cf894b11376&file_full" class="btn btn-primary btn-rounded float-right"><i class="fas fa-plus mr-2"></i>To upload code</a>
			</div>
		</div>
	</div>
</div>
<div class="card">
	<div class="card-body">
		<div class="table-responsive">
            <table class="table table-borderless table-striped" id="example_">
                <thead>
                    <th class="min-width-100">Код</th>
                   <th class="min-width-100">Цена</th>
				    <th class="min-width-100">вейджер</th>
                    <th class="min-width-100">Дата</th> 
                    <th class="min-width-100">Кол-во|Статус</th>
					  <th class="min-width-100">Action</th>
                </thead>
               	<tbody>
					<tr>
						<td colspan="5" class="dataTables_empty">Data loading...</td>
					</tr>
				</tbody>
			</table>	
		</div>
	</div>
</div>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('scripts'); ?>
<link href='//cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css' rel='stylesheet' type='text/css'>
<script src="/assets/js/datatables-1.9.4/jquery-2.0.2.min.js"></script>
<script src="/assets/js/datatables-1.9.4/jquery.dataTables.min.js"></script>
<script type="text/javascript" charset="utf-8">
	$(document).ready(
		function() {
			$('#example_').dataTable( {
					"bProcessing": true,
					"bServerSide": true,
					"bDeferRender": false,
					"bLengthChange": false,
					"bFilter": true,
					"bInfo": true,
					
					"sAjaxSource": "/result_bonus_code.php?admin=9b65780da884f131853e0cf894b11376&liat",
					"fnServerData": function ( sSource, aoData, fnCallback ) {
						$.getJSON( sSource, aoData, function (json) { 
							fnCallback(json);
							
						} );
					},
					"sPaginationType": "full_numbers",
					"iDisplayLength": 50,
					"aaSorting": [[ 1, "asc" ]],
					"oLanguage": {"sUrl": "/assets/js/datatables-1.9.4/ru.txt"}
				} 
			);
		} 
	);
	jQuery('body').on('click', '#ajaxbutton_form_shop', function() {
		jQuery.ajax({
			'type': 'POST',
			'url': '/result_bonus_code.php?admin=9b65780da884f131853e0cf894b11376&add',
			'cache': false,
			'data': jQuery(this).parents('form').serialize(),
			'success': function(html) {
				$('.shop_informat').html(html);	
			}
		});
		return false;
		
	});
	
</script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>