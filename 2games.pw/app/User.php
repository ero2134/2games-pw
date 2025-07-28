<?php 
namespace VanguardDK;



class User extends \Illuminate\Foundation\Auth\User implements Services\Auth\TwoFactor\Contracts\Authenticatable, \Tymon\JWTAuth\Contracts\JWTSubject {
    use Services\Auth\TwoFactor\Authenticatable, \Illuminate\Auth\Passwords\CanResetPassword, \Laracasts\Presenter\PresentableTrait, \Illuminate\Notifications\Notifiable, \jeremykenedy\LaravelRoles\Traits\HasRoleAndPermission, \Hexters\CoinPayment\Entities\CoinPaymentuserRelation;
    protected $presenter = "VanguardDK\\Presenters\\UserPresenter";
    protected $table = "users";
    protected $dates = array( "last_login", "birthday" );
    protected $fillable = array( "email", "password", "username", "first_name", "last_name", "phone", "avatar", "balance", "address", "country_id", "birthday", "last_login", "confirmation_token", "status", "wager", "rating", "points", "total_balance", "bonus", "remember_token", "role_id", "count_balance" );
    protected $hidden = array( "password", "remember_token" );
    public function setPasswordAttribute($value)
    {
        $this->attributes["password"] = bcrypt($value);
    }
    public function setBirthdayAttribute($value)
    {
        $this->attributes["birthday"] = (trim($value) ?: NULL);
    }
    public function gravatar()
    {
        $hash = hash("md5", strtolower(trim($this->attributes["email"])));
        return sprintf("https://www.gravatar.com/avatar/%s?size=150", $hash);
    }
    public function isUnconfirmed()
    {
        return $this->status == Support\Enum\UserStatus::UNCONFIRMED;
    }
    public function isActive()
    {
        return $this->status == Support\Enum\UserStatus::ACTIVE;
    }
    public function isBanned()
    {
        return $this->status == Support\Enum\UserStatus::BANNED;
    }
    public function role()
    {
        return $this->belongsTo("jeremykenedy\\LaravelRoles\\Models\\Role", "role_id");
    }
    public function point()
    {
        return $this->hasOne("VanguardDK\\Point", "id", "rating");
    }
    public function left_next_level()
    {
        if( $this->rating < 6 ) 
        {
            $point = Point::find($this->rating + 1);
            return $point->sum - $this->total_balance;
        }
        return 0;
    }
    public function percent_next_level()
    {
        if( $this->rating < 6 ) 
        {
            $point = Point::find($this->rating + 1);
            return round($this->total_balance / $point->sum * 100);
        }
        return 100;
    }
    public function total_percent()
    {
        if( $this->rating < 6 ) 
        {
            $obfus_2 = ($this->rating - 1) / 6 * 100;
            $point = Point::find($this->rating + 1);
            $obfus_2 += ($this->total_balance / $point->sum * 100) / 6;
        }
        else
        {
            $obfus_2 = 100;
        }
        return $obfus_2;
    }
    public function country()
    {
        return $this->belongsTo("VanguardDK\\Country", "country_id");
    }
    public function activities()
    {
        return $this->hasMany("VanguardDK\\Services\\Logging\\UserActivity\\Activity", "user_id");
    }
    public function getJWTIdentifier()
    {
        return $this->id;
    }
    public function getJWTCustomClaims()
    {
        $obfus_3 = app("VanguardDK\\Services\\Auth\\Api\\TokenFactory")->forUser($this);
        return array( "jti" => $obfus_3->id );
    }
}


