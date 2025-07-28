<?php 
namespace VanguardDK;

use Illuminate\Database\Eloquent\Model;

class Returns extends Model
{
    protected $table = "return";
    protected $fillable = ["min_pay", "max_pay", "percent"];
    public $timestamps = false;
}
