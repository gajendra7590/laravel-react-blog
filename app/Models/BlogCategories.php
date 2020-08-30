<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Blogs;

class BlogCategories extends Model
{
    protected $appends = ['photo_url'];


    protected $table = 'blog_categories';
    protected $primaryKey = 'id';

    protected $fillable = [
        'name','slug','description', 'photo','status'
    ];


    public function blogs()
    {
        return $this->hasMany(Blogs::class, 'category_id','id');
    }


    //Get Total Arts Count
    public function getCountsAttribute(){
        return Recipes::where(['category_id' => $this->id])->get()->count();
    }

    public function getPhotoUrlAttribute(){
        if($this->photo !=''){
            return \url('/').'/images/'.$this->photo;
        } else{
            return \url('/').'/default_img/default.jpg';
        }
    }
}
