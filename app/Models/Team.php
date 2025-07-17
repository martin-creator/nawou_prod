<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Team extends Model
{
    protected $fillable = ['name','title','avatar','type','description'];

    // get avatar url attribute
    public function getAvatarAttribute($value)
    {
        return $value ? Storage::url($value) : null;
    }

}
