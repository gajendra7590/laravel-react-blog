<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlogTags extends Model
{
    protected $table = 'blog_tags';
    protected $primaryKey = 'id';

    protected $fillable = [
        'name','slug','description','status'
    ];
}
