
@if(isset ($errors) && count($errors) > 0)
	@foreach($errors->all() as $error)
	<script>alersing_stup('{{ $error }}');</script> 
	@endforeach
@endif

@if(Session::get('success', false))
    <?php $data = Session::get('success'); ?>
    @if (is_array($data))
        @foreach ($data as $msg)
       
	<script>alersing_stup('{{ $msg }}');</script> 
	@endforeach
    @else

			<script>alersing_stup('{{ $data }}');</script> 
    @endif
@endif
