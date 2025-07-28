<?php
/**
 * @var VanguardDK\Model\PaymentSystem $paymentSystem
 */
?>
@extends('backend.layouts.app')

@section('page-title', 'Система оплаты')
@section('page-heading', 'Система оплаты')

@section('breadcrumbs')
    <li class="breadcrumb-item active">
        Система оплаты
    </li>
@stop

@section('content')

    @include('backend.partials.messages')
    <style>
        .box {
            padding: 5px 25px;
        }
    </style>
    <div class="card">
        <div class="card-body">
            <form id="form-payment-system" action="{{route('backend.payment.system.update')}}" method="POST">
                <div class="row">
                    <label class="col-md-2 box">Мерчант URL</label>
                    <div class="col-md-10 box">
                        <input type="text" class="form-control" name="config[merchant_url]" value="{{$paymentSystem->getConfigParam('merchant_url')}}">
                    </div>
                </div>
                <div class="row">
                    <label class="col-md-2 box">Мерчант ID</label>
                    <div class="col-md-10 box">
                        <input type="text" class="form-control" name="config[merchant_id]" value="{{$paymentSystem->getConfigParam('merchant_id')}}">
                    </div>
                </div>
                <div class="row">
                    <label class="col-md-2 box">Секретный ключ 1</label>
                    <div class="col-md-10 box">
                        <input type="text" class="form-control" name="config[secret_key_1]" value="{{$paymentSystem->getConfigParam('secret_key_1')}}">
                    </div>
                </div>
                <div class="row">
                    <label class="col-md-2 box">Секретный ключ 2</label>
                    <div class="col-md-10 box">
                        <input type="text" class="form-control" name="config[secret_key_2]" value="{{$paymentSystem->getConfigParam('secret_key_2')}}">
                    </div>
                </div>
                <div class="row">
                    <label class="col-md-2 box">ID валюты</label>
                    <div class="col-md-10 box">
                        <input type="text" class="form-control" name="config[currency_id]" value="{{$paymentSystem->getConfigParam('currency_id')}}">
                    </div>
                </div>
                <div class="row">
                    <label class="col-md-2 box">Мин. сумма</label>
                    <div class="col-md-10 box">
                        <input type="text" class="form-control" name="min_amount" value="{{$paymentSystem->min_amount}}">
                    </div>
                </div>
                <div class="row">
                    <label class="col-md-2 box">Макс. сумма</label>
                    <div class="col-md-10 box">
                        <input type="text" class="form-control" name="max_amount" value="{{$paymentSystem->max_amount}}">
                    </div>
                </div>
                <div class="row">
                    <input type="hidden" value="<?= csrf_token() ?>" name="_token">
                    <label class="col-md-2 box"></label>
                    <div class="col-md-10 box">
                        <button type="submit" class="btn btn-primary">Сохранить</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
@stop

@section('scripts')
    <script>
        $(function () {
            $('#form-payment-system').submit(function (e) {
                e.preventDefault();

                var $this = $(this);
                $('input', $this).removeClass('is-invalid');
                $('.invalid-feedback', $this).remove();

                $('button', $this).prop('disabled', true);

                $.ajax({
                    type: $this.attr('method'),
                    url: $this.attr('action'),
                    data: $this.serialize(),
                    error: function (xhr) {
                        var errors = xhr.responseJSON || {};

                        $.each(errors, function (key, value) {
                            console.log(key);

                            var array = key.split('.');
                            if (array[1]) {
                                key = array[0] + '[' + array[1] + ']';

                                console.log(key);
                            }

                            $('input[name="'+ key +'"]', $this)
                                .addClass('is-invalid')
                                .parent()
                                .append('<div class="invalid-feedback">'+ value[0] +'</div>');
                        });
                    },
                    complete: function() {
                        $('button', $this).prop('disabled', false);
                    }
                });
            });
        });
    </script>
@stop
