

<?php $__env->startSection('title', 'License'); ?>




<?php $__env->startSection('content'); ?>
    <h1 class="mt-5">License Activation !</h1>
    <p class="mt-3 lead">
	
		<?php echo $__env->make('frontend.partials.messages', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
		
				<form role="form" action="<?= route('frontend.new_license.post') ?>" method="POST" >
					<input type="hidden" value="<?= csrf_token() ?>" name="_token">
				
					<p>Licensed email address (for personal license)</p>
						<input type="text" size="50" name="email" value="">
                    <br />	<br />	
					<p>License code (for anonymous license)</p>
						<input type="text" size="50" name="code" value="">
					<br />	<br />	
						<button type="submit">OK</button>                				
                </form>
    </p>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.errors', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>