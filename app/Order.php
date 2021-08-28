<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{

	protected $fillable = ['user_id','billing_email','billing_name','billing_adress','billing_city','billing_phone','billing_discount','billing_discount_code','billing_subtotal','billing_tax','billing_total','error', 'payment_gateway', 'transaction_id', 'pin_code','billing_country',
	];

    public function user()
    {
    	return $this->belongsTo('App\User');
    }

    public function products()
    {
    	return $this->belongsToMany('App\Product')->withPivot('quantity');
    }
}