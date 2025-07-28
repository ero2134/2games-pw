
<div class="popup-wrapp">
    <div class="popup-box">

        <div class="popup-main">
            <div class="authorization-box">
                                <span class="close-icon js-popup"></span>
                
                <h1 class="title center">Восстановление пароля</h1>

                <dvi class="restore-box">
    <form id="forgot-form-js" action="/password.php" method="post" data-form="password-forgot">
	    {{ csrf_field() }}

        <div class="form-line restore-email-field">
            <label class="label" for="password_forgot_email">Введите email указанный при регистрации</label>
            <span class="form-elem-wrap form-elem-inpt">
                <input type="email" id="password_forgot_email" name="email" class="inpt inpt-js" data-name="email" data-rule-email="true" />
            </span>
            <div class="error" data-error="email"></div>
        </div>

        
                   
        <div class="btn-box-center">
            <a href="#" class="btn btn-green restore-btn" data-submit>Отправить</a>
        </div>
    </form>
</dvi>
            </div>
        </div>
        <footer class="popup-footer">
            <div class="btn-box-center">
                <p>Нужен новый аккаунт?</p>
                <a href="/ru/registration" class="btn btn-transparent">Регистрация</a>
            </div>
        </footer>
    </div>
</div>
