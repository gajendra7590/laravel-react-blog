<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

//Models
use App\models\Recipes;

class User extends Authenticatable
{
    use Notifiable,HasRoles,HasApiTokens;

    protected $appends = ['photo_url'];

    protected $table = 'users';
    protected $primaryKey = 'id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name','last_name','display_name', 'email', 'password','phone','photo','address_line','city','state','country',
        'zip','last_login','ip_address','reset_token','reset_token_at','status','about_me','email_verified_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token','email_verified_at'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime', 
    ]; 

    public static function boot() {
        parent::boot();
        self::creating(function ($model) {
            $model->display_name = ($model->display_name!='')?$model->display_name:( $model->first_name.' '.$model->last_name);
        });
    }


    public function getUserRoleNameAttribute(){
        if( $this->hasRole('admin') ){
            return 'admin';
        } else if( $this->hasRole('author') ){
            return 'author';
        } else if( $this->hasRole('user') ){
            return 'user';
        }else{
            return null;
        }
    }

    public function getDisplayNameAttribute($value){ 
        if($value!=''){
            return $value;
        }else{
            return "{$this->first_name} {$this->last_name}";
        }

    }

    public function getPhotoUrlAttribute(){  
        if($this->photo !=''){
            return \url('/').'/images/'.$this->photo;
        } else{
            return \url('/').'/default_img/user_default.png';
        }
 
     }


}
