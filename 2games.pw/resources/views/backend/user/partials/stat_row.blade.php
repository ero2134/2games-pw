@if ((Input::get('status') == $stat->status)||(Input::get('status') == ''))
<tr>
    <td style="width: 50px;">
        <a href="{{ route('backend.user.show', $user->id) }}">
            <img
                class="rounded-circle img-responsive"
                width="50"
                src="{{ $user->present()->avatar }}"
                alt="{{ $user->present()->name }}">
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
		@if ($stat->type == 'add')
			<span class="badge badge-lg badge-primary">
		@else
			<span class="badge badge-lg badge-danger">
		@endif
		
		{{ abs($stat->summ) }}
		</span>
		
	</td>
	<td class="align-middle">{{ (isset($stat->user->username)? $stat->user->username : 'NAN') }}</td>
    <td class="align-middle">{{ $stat->created_at->format(config('app.date_format')) }}</td>
    <td class="align-middle">
													@if ($stat->status == 1)
														Success
													@elseif( $stat->status == -1 )
														Fail
													@else
														 
													<a href="javascript:void(0);" onClick="javascript:odobryams('y','{{$stat->id}}');" class="btn btn-primary">Yes</a>
													
													<a href="javascript:void(0);" onClick="javascript:odobryams('n','{{$stat->id}}');" class="btn btn-danger">No</a>
													
													@endif
	</td>
	
</tr>
@endif