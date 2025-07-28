<nav class="col-md-2 sidebar">
    <div class="user-box text-center pt-5 pb-3">
        <div class="user-img">
            <img src="{{ auth()->user()->present()->avatar }}"
                 width="90"
                 height="90"
                 alt="user-img"
                 class="rounded-circle img-thumbnail img-responsive">
        </div>
        <h5 class="my-3">
            <a href="/game">Balance: {{ auth()->user()->present()->balance }} USD</a>
        </h5>

        <ul class="list-inline mb-2">
            <li class="list-inline-item">
                <a href="{{ route('backend.profile') }}" title="@lang('app.my_profile')">
                    <i class="fas fa-cog"></i>
                </a>
            </li>

            <li class="list-inline-item">
                <a href="{{ route('backend.auth.logout') }}" class="text-custom" title="@lang('app.logout')">
                    <i class="fas fa-sign-out-alt"></i>
                </a>
            </li>
        </ul>
    </div>

    <div class="sidebar-sticky">
        <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link {{ Request::is('backend') ? 'active' : ''  }}" href="{{ route('backend.dashboard') }}">
                    <i class="fas fa-home"></i>
                    <span>@lang('app.dashboard')</span>
                </a>
            </li>

			@permission('users.manage')
            <li class="nav-item">
                <a class="nav-link {{ Request::is('backend/user*') ? 'active' : ''  }}" href="{{ route('backend.user.list') }}">
                    <i class="fas fa-users"></i>
                    <span>@lang('app.users')</span>
                </a>
            </li>
			@endpermission
			 <li class="nav-item">
                <a class="nav-link {{ Request::is('backend/code_system') ? 'active' : ''  }}" href="{{ route('backend.code.system') }}">
					<i class="fas fa-server"></i>
                    @lang('app.code_system')
                </a>
            </li>
			@permission('categories.manage')
            <li class="nav-item">
                <a class="nav-link {{ Request::is('backend/category*') ? 'active' : ''  }}" href="{{ route('backend.category.list') }}">
                    <i class="fas fa-server"></i>
                    <span>@lang('app.categories')</span>
                </a>
            </li>
			@endpermission
			
			<li class="nav-item">
                <a class="nav-link {{ Request::is('backend/pages*') ? 'active' : ''  }}" href="{{ route('backend.pages.list') }}">
                    <i class="fas fa-server"></i>
                    <span>@lang('app.pages')</span>
                </a>
            </li>
			
			<li class="nav-item">
                <a class="nav-link {{ Request::is('backend/points*') ? 'active' : ''  }}" href="{{ route('backend.points.list') }}">
                    <i class="fas fa-server"></i>
                    <span>@lang('app.points')</span>
                </a>
            </li>
			
			  <li class="nav-item">
                <a href="#roles-dropdowngg" class="nav-link" data-toggle="collapse" aria-expanded="{{ Request::is('backend/bonus*') || Request::is('backend/bonus*') ? 'true' : 'false' }}">
                    <i class="fas fa-users-cog"></i>
                    <span>@lang('app.bonus')</span>
                </a>
                <ul class="{{ Request::is('backend/bonus*') || Request::is('backend/bonus*') ? '' : 'collapse' }} list-unstyled sub-menu" id="roles-dropdowngg">
					
					<li class="nav-item">
                        <a class="nav-link {{ Request::is('backend/bonus/reg') ? 'active' : '' }}" href="/backend/bonus/reg">@lang('app.bonus_reg')</a>
                    </li>
					<li class="nav-item">
                        <a class="nav-link {{ Request::is('backend/bonus/dep') ? 'active' : '' }}" href="/backend/bonus/dep">@lang('app.bonus_dep')</a>
                    </li>
					<li class="nav-item">
                        <a class="nav-link {{ Request::is('backend/bonus/nondep') ? 'active' : '' }}" href="/backend/bonus/nondep">@lang('app.bonus_nondep')</a>
                    </li>					
   			
                    
                </ul>
            </li>
			
			
			<!--li class="nav-item">
                <a class="nav-link {{ Request::is('backend/returns*') ? 'active' : ''  }}" href="{{ route('backend.returns.list') }}">
                    <i class="fas fa-server"></i>
                    <span>@lang('app.returns')</span>
                </a>
            </li--->
			
			@permission('jackpots.manage')
           <!-- <li class="nav-item">
                <a class="nav-link {{ Request::is('backend/jackpot*') ? 'active' : ''  }}" href="{{ route('backend.jackpot.list') }}">
                    <i class="fas fa-server"></i>
                    <span>@lang('app.jackpots')</span>
                </a>
            </li> -->
			@endpermission
			
			@permission('games.manage')
			<li class="nav-item">
                <a class="nav-link {{ Request::is('backend/game') ? 'active' : ''  }}" href="{{ route('backend.game.list') }}">
                    <i class="fas fa-server"></i>
                    <span>@lang('app.games')</span>
                </a>
            </li>
			@endpermission
			
			<li class="nav-item">
                <a class="nav-link {{ Request::is('backend/statistics*') ? 'active' : ''  }}" href="{{ route('backend.statistics') }}">
                    <i class="fas fa-server"></i>
                    <span>@lang('app.statistics')</span>
                </a>
            </li>
			
			<li class="nav-item">
                <a class="nav-link {{ Request::is('backend/game_stat') ? 'active' : ''  }}" href="{{ route('backend.game_stat') }}">
                    <i class="fas fa-server"></i>
                    <span>@lang('app.game_stat')</span>
                </a>
            </li>

			@permission('users.activity')
            <li class="nav-item">
                <a class="nav-link {{ Request::is('backend/activity*') ? 'active' : ''  }}" href="{{ route('backend.activity.index') }}">
                    <i class="fas fa-server"></i>
                    <span>@lang('app.activity_log')</span>
                </a>
            </li>
			@endpermission
			
			@permission('roles.manage|permissions.manage')
            <li class="nav-item">
                <a href="#roles-dropdown"
                   class="nav-link"
                   data-toggle="collapse"
                   aria-expanded="{{ Request::is('backend/role*') || Request::is('backend/permission*') ? 'true' : 'false' }}">
                    <i class="fas fa-users-cog"></i>
                    <span>@lang('app.roles_and_permissions')</span>
                </a>
                <ul class="{{ Request::is('backend/role*') || Request::is('backend/permission*') ? '' : 'collapse' }} list-unstyled sub-menu" id="roles-dropdown">
					@permission('roles.manage')
					<li class="nav-item">
                        <a class="nav-link {{ Request::is('backend/role*') ? 'active' : '' }}"
                           href="{{ route('backend.role.index') }}">@lang('app.roles')</a>
                    </li>
					@endpermission
					@permission('permissions.manage')
					<li class="nav-item">
						<a class="nav-link {{ Request::is('backend/permission*') ? 'active' : '' }}"
                           href="{{ route('backend.permission.index') }}">@lang('app.permissions')</a>
                    </li>
                    @endpermission
                </ul>
            </li>
			@endpermission

			@permission('settings.general|settings.auth|settings.notifications')
            <li class="nav-item">
                <a href="#settings-dropdown"
                   class="nav-link"
                   data-toggle="collapse"
                   aria-expanded="{{ Request::is('backend/settings*') ? 'true' : 'false' }}">
                    <i class="fas fa-cogs"></i>
                    <span>@lang('app.settings')</span>
                </a>
                <ul class="{{ Request::is('backend/settings*') ? '' : 'collapse' }} list-unstyled sub-menu"
                    id="settings-dropdown">

					@permission('settings.general')
                    <li class="nav-item">
                        <a class="nav-link {{ Request::is('backend/settings') ? 'active' : ''  }}"
                           href="{{ route('backend.settings.general') }}">
                            @lang('app.general')
                        </a>
                    </li>
					@endpermission
					
                    <!--li class="nav-item">
                        <a class="nav-link {{ Request::is('backend/bots') ? 'active' : ''  }}"
                           href="{{ route('backend.settings.bots') }}">
                            @lang('app.bots')
                        </a>
                    </li-->
					            <li class="nav-item">
                        <a class="nav-link {{ Request::is('backend/maill') ? 'active' : ''  }}"
                           href="/backend/maill">
                            maill
                        </a>
                    </li>
					@permission('settings.auth')
                    <li class="nav-item">
                        <a class="nav-link {{ Request::is('backend/settings/auth*') ? 'active' : ''  }}"
                           href="{{ route('backend.settings.auth') }}">@lang('app.auth_and_registration')</a>
                    </li>
					@endpermission
					
					@permission('settings.notifications')
                    <li class="nav-item">
                        <a class="nav-link {{ Request::is('backend/settings/notifications*') ? 'active' : ''  }}"
                           href="{{ route('backend.settings.notifications') }}">@lang('app.notifications')</a>
                    </li>
					@endpermission
                </ul>
            </li>
			@endpermission
            <li class="nav-item">
                <a class="nav-link {{ Request::is('backend/payment_system') ? 'active' : ''  }}"
                   href="{{ route('backend.payment.system') }}">
                        <i class="fas fa-server"></i>
                        @lang('app.payment_system')
                </a>
            </li>
        </ul>
    </div>
</nav>

