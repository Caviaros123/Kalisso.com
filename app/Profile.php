<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use App\Likable;

class Profile extends Model 
{
     use Likable, Notifiable;

	protected $table = 'profiles';
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
         'store_name', 'type', 'description', 'store_id', 'adress', 'country', 'town', 'quarter', 'street', 'phone', 'logo', 'document', 'images', 'founder_name', 'capital_price', 'email', 'code_postal', 'transaction', 'web_site', 'social_links', 'statut', 'rating', 'story', 'slug',
    ];

    
    public function produits()
    {
    	return $this->hasMany('App\Product');

    }
    
}
