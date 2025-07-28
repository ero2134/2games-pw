<?php

namespace VanguardDK\Model;

use Illuminate\Database\Eloquent\Model;

/**
 * Class CodeSystem
 * @package VanguardDK\Model
 * @property int $code
 * @property int $statys
 * @property array $sum
 * @property string $created_at
 */
class CodeSystem extends Model
{
	protected $table = "code";
    protected $fillable = array(
        'code',
        'statys',
        'sum',
		'created_at'
    );

    protected $attributes = [
        'code' => 'array'
    ];

    /**
     * @param string $name
     * @return string
     */
    public function getConfigParam($name){
        return isset($this->attributes[$name]) ? $this->attributes[$name] : '';
    }
     
}
