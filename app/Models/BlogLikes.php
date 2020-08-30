<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

//Models
use App\User;
use App\Models\Blogs;

class BlogLikes extends Model
{
    protected $table = 'blog_likes';
    protected $primaryKey = 'id';

    protected $fillable = [
        'blog_id','user_id'
    ];


    public function user()
    {
        return $this->hasOne(User::class, 'id','user_id');
    }

    public function blogs()
    {
        return $this->hasMany(Blogs::class, 'id','blog_id');
    }
}
