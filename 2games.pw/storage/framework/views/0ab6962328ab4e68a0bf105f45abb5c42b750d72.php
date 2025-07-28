<?php if((Input::get('status') == $stat->status)||(Input::get('status') == '')): ?>
<tr>
    <td style="width: 50px;">
        <a href="<?php echo e(route('backend.user.show', $user->id)); ?>">
            <img
                class="rounded-circle img-responsive"
                width="50"
                src="<?php echo e($user->present()->avatar); ?>"
                alt="<?php echo e($user->present()->name); ?>">
        </a>
    </td>
	<?php $sit = explode( ":", $stat->system );?>
    <td class="align-middle">
	<?php if(isset($sit[2])):?>
		<?php echo $sit[0];?>:<?php echo $sit[1];?>:
			<?php
			if($sit[2] == 'EUR'){
				echo '<span class="badge badge-success">EUR</span>';
			}
			else
			if($sit[2] == 'USD'){
				echo '<span class="badge badge-info">USD</span>';
			}
			else
			if($sit[2] == 'RUB'){
				echo '<span class="badge badge-lg badge-secondary">RUB</span>';
			}else{
				echo '<span class="badge badge-lg badge-secondary">RUB</span>';
			}?>
	<?php else:?>
		<?php echo $sit[0];?>
	<?php endif;?>
	
    </td>
	<td class="align-middle">
		<?php if($stat->type == 'add'): ?>
			<span class="badge badge-lg badge-primary">
		<?php else: ?>
			<span class="badge badge-lg badge-danger">
		<?php endif; ?>
		
		<?php echo e(abs($stat->summ)); ?>

		</span>
		
	</td>
	<td class="align-middle"><?php echo e((isset($stat->user->username)? $stat->user->username : 'NAN')); ?></td>
    <td class="align-middle"><?php echo e($stat->created_at->format(config('app.date_format'))); ?></td>
    <td class="align-middle">
													<?php if($stat->status == 1): ?>
														Success
													<?php elseif( $stat->status == -1 ): ?>
														Fail
													<?php else: ?>
														 
													<a href="javascript:void(0);" onClick="javascript:odobryams('y','<?php echo e($stat->id); ?>');" class="btn btn-primary">Yes</a>
													
													<a href="javascript:void(0);" onClick="javascript:odobryams('n','<?php echo e($stat->id); ?>');" class="btn btn-danger">No</a>
													
													<?php endif; ?>
	</td>
	
</tr>
<?php endif; ?>