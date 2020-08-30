<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


use App\User;
use App\Models\BlogCategories;
use App\Models\BlogTagsSelected;
use App\Models\BlogLikes;
use App\Models\BlogRating;

class Blogs extends Model
{
    protected $appends = ['avg_rating','photo_url'];


    protected $table = 'blogs';
    protected $primaryKey = 'id';

    protected $fillable = [
        'category_id','user_id','title', 'slug','photo','short_desc','description','status'
    ];


    public function user()
    {
        return $this->hasOne(User::class, 'id','user_id');
    }

    public function category()
    {
        return $this->hasOne(BlogCategories::class, 'id','category_id');
    }

    public function selectedTags()
    {
        return $this->hasMany(BlogTagsSelected::class, 'blog_id','id');
    }

    public function likes()
    {
        return $this->hasMany(BlogLikes::class, 'blog_id','id');
    }

    public function comments()
    {
        return $this->hasMany(BlogRating::class, 'blog_id','id');
    }

    public function ratings()
    {
        return $this->hasMany(BlogRating::class, 'blog_id','id');
    }

    public function getAvgRatingAttribute(){
        $rating = BlogRating::where(['blog_id' => $this->id])->avg('rating');
        return round($rating,1);
    }


    public function getPhotoUrlAttribute(){
        if($this->photo !=''){
            return \url('/').'/images/'.$this->photo;
        } else{
            return \url('/').'/default_img/default.jpg';
        }
    }
}
