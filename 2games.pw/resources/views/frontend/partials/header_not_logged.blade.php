<section class="games__hero__wrapper">
    <div class="top__section" id="tothetop">
        <div>
            <div>
                <div id="navbar-mobile-overlay"></div>
                <div id="navbar-mobile">
                    <a href="/" class="close">
                        <img src="/assets/_new-style/images/icon_close.png"/>
                    </a>
                    <div class="navbar-mobile-logo sign__up">
                        <img src="/assets/_new-style/images/logo.png" alt="logo" class="logo"/>
                    </div>

                    <ul class="navbar-nav">
                        <li class="nav-item sign__up">
                            <a class="nav-link" href="index.html#">@lang('app.home')</a>
                        </li>
                    </ul>

                    <div>
                        <button class="games__button button-register spin-gradient sign__up sign__up">@lang('app.register')</button>

                    </div>
                    <div id="mobile-submenu">
                        <a href="index.html#" class="close">
                            <img src="/assets/_new-style/images/icon_close.png"/>
                        </a>
                        <div class="navbar-mobile-logo sign__up">
                            <a>
                                <img src="/assets/_new-style/images/logo.png"
                                     alt="logo" class="logo"/>
                            </a>
                        </div>
                        <a href="index.html#"><span class="back">
                        <img src="/assets/_new-style/images/left_chevron.png"/>@lang('app.back')</span></a>
                    </div>
                </div>


                <nav class="navbar navbar-toggleable-md navbar-inverse" id="navbar-main">
                    <div class="container">

                        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <a href="/" class="navbar-brand sign__up">
                            <img src="/assets/_new-style/images/logo.png" alt="logo"/>
                        </a>
                                                    <ul class="games__button__mobile">
                                <li>
                                    <a href="#" class="games__button button-login sign__in" ng-click="openModal($event, '#login-modal')">
                                        @lang('app.login')                                   </a>
                                </li>
                            </ul>
                        
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto"></ul>
                            <!-- START OF DESKTOP NAV -->
                            <div class="games__header__wrapper">
                                <ul class="container">
                                    <li class="brand sign__up">
                                        <a href="/">
                                            <img src="/assets/_new-style/images/logo.png"/>
                                        </a>
                                    </li>
                                                                        <li>
                                        <a href="#" class="games__button button-login sign__in" ng-click="openModal($event, '#login-modal')">
                                            @lang('app.login')                                        </a>
                                    </li>
                                    <li>
                                        <a class="games__button button-register spin-gradient sign__up" ng-click="openModal($event, '#registration-confirm')">
                                            @lang('app.register')                                        </a>
                                    </li>
                                        <li>
                                       <div id="language-select" class="btn-info button-lang btn-collapsible lc">
											<?php
												$lang = [
													'ru' => '<i data-lang-code="ru" class="flag-icon flag-icon-ru"></i>',
													'en' => '<i data-lang-code="en" class="flag-icon flag-icon-en"></i>',
													'de' => '<i data-lang-code="de" class="flag-icon flag-icon-de"></i>'
												];
												
												if (isset($_COOKIE['language'])) {
													$laut = htmlspecialchars($_COOKIE['language']);
													$active_lang = $lang[$laut];
												}else{
													$laut = 'en';
													$active_lang = $lang['en'];
												}
											?>
												<?php echo $active_lang;?>
												<span>
													<?php foreach ($lang as $key => $dater):?>
														<?php if($key != $laut):?>
															<?php echo $dater;?>
														<?php endif;?>
													<?php endforeach;?>
												</span>
										</div>
                                    </li>                                
                                </ul>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>

        </div>
    </div>
    <div class="games__hero__offer__wrapper ">
        <div class="cobranded_board">
            <img src="/assets/_new-style/images/casinoreviewslogo.png"/>
        </div>
        <div class="cobranded_board_mobile">
            <img src="/assets/_new-style/images/casinoreviewslogo.png"/>
        </div>
        <div class="container">
            <div class="grid">
                <div class="">
                    <div class="games__offer__text ">
                        <h1>A Casino.org Exclusive</h1>
                        <h2>$2000 Welcome Bonus!</h2>
                                                <a class="games__button button-hero sign__up" ng-click="openModal($event, '#registration-confirm')">
                            SIGN UP
                            <img src="/assets/_new-style/images/cta-arrow.png" alt="cta arrow" class="cta-arrow"/>
                        </a>
                        
                        <!--style-->
                        <style>
                            .more-info-overlay {
                                background: rgba(0, 0, 0, .9);
                                height: 100vw;
                                width: 100vw;
                                position: absolute;
                                top: 0;
                                z-index: 9999
                            }

                            .more_info_box {
                                display: block;
                                font-size: 20px;
                                background: rgba(4, 2, 2, .75);
                                border-radius: 3px;
                                margin-top: 5px;
                                cursor: pointer;
                                width: 66%;
                                margin: 0 auto;
                                color: #fff;
                                text-align: center;
                                font-family: montserrat, sans-serif;

                            }

                            .more_info_dialog {
                                background: #171717;
                                border-radius: 15px;
                                font-size: 3.2vw;
                                top: 10%;
                                max-width: 650px;
                                width: 90%;
                                text-align: center;
                                margin: 10% auto;
                                position: relative;
                                border: 3px solid #393b44;
                            }

                            .bonus-button {
                                text-transform: uppercase;
                                padding: 10px 0;
                                color: #fff;
                                font-weight: 700;
                                border-radius: 40px;
                                width: 65%;
                                display: block;
                                margin: 3.25vw auto;
                                font-size: 18px;
                                cursor: pointer;
                                transition: .2s;
                                will-change: transform
                            }

                            .bonus-button:hover {
                                transform: scale(1.05)
                            }

                            .bonus-button span img {
                                max-width: 14px;
                                height: auto;
                                display: inline-block;
                                margin: 0 0 0 8px
                            }

                            .bonus-text {
                                margin: 0 auto 2vw;
                                max-width: 85%;
                                color: #fff;
                                font-size: 1em;
                                line-height: 1.4em;
                                margin-bottom: 10px;
                            }

                            .more_info_dialog img {
                                max-width: 35%;
                                height: auto;
                                margin: 5vw 0
                            }

                            .pop-close-icon {
                                background-position: 0 98.5%;
                                height: 25px;
                                width: 25px;
                                position: absolute;
                                right: 5px;
                                cursor: pointer;
                                color: red !important
                            }

                            .close-icon {
                                background-image: url("/assets/_new-style/images/close-button.png");
                                background-position: center;
                                background-repeat: no-repeat;
                                padding: 10px;
                                border-radius: 60px;
                                margin-top: 10px;
                                margin-right: 8px;
                                transition: .2s;
                                will-change: transform
                            }

                            .close-icon:hover {
                                transform: scale(1.12)
                            }

                            .bonus-breakdown {
                                color: white;
                                font-family: inherit;
                                font-weight: normal;
                                box-sizing: border-box;
                                padding: 1%;
                                font-size: 1em;
                                max-width: 45%;
                                margin-top: 10px;
                            }

                            .terms-breakdown {
                                cursor: pointer;
                                text-decoration: underline;
                            }

                            .bonus-breakdown.box {
                                background: rgba(0, 0, 0, 0.7);
                                border-radius: 1vw;
                            }

                            .more-info-button {
                                padding: 1vw 12vw;
                                margin: 1.2vw auto 0;
                                width: auto;
                                background: rgba(0, 0, 0, 0.7);
                                color: white;
                                display: table;
                                text-align: center;
                            }

                        </style>


                        <!--desktop html-->
                        <div class="bonus-breakdown box">
                            <p class="bonus-text-1">1st Deposit - Match Bonus up to $800 • 2nd Deposit - Match Bonus up
                                to $500 • 3rd Deposit - Match Bonus up to $700 • New customers only • Min deposit $10 •
                                50x wagering &nbsp<a class="terms-breakdown terms-link tc">Terms apply</a></p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>

</section>