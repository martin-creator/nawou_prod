<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Testimonial extends Model
{
    protected $fillable = ['message','person_name','person_avatar','person_title'];

    // get avatar url attribute
    public function getPersonAvatarAttribute($value)
    {
        return $value ? Storage::url($value) : null;
    }
}
