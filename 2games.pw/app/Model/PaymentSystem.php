<?php

namespace VanguardDK\Model;

use Illuminate\Database\Eloquent\Model;

/**
 * Class PaymentSystem
 * @package VanguardDK\Model
 * @property int $min_amount
 * @property int $max_amount
 * @property array $config
 * @property string $type
 */
class PaymentSystem extends Model
{
    const TYPE_FREE_KASSA = 'free_kassa';
	const TYPE_FREE_ENOT = 'ENOT_kassa';
	const TYPE_FREE_RESUL = 'resul_kassa';
	const TYPE_FREE_IASTRIX = 'resul_iastrix';
	
    protected $fillable = array(
        'min_amount',
        'max_amount',
        'config',
		'secret_key_1',
        'secret_key_2',
		'currency_id',
		
 
    );

    protected $attributes = [
        'config' => 'array'
    ];

    /**
     * @param string $name
     * @return string
     */
    public function getConfigParam($name){
        return isset($this->attributes[$name]) ? $this->attributes[$name] : '';
    }
    
}
