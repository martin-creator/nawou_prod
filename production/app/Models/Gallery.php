<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Gallery extends Model
{
    // fillables url caption type banner_url
    protected $fillable = ['url', 'caption', 'type', 'banner_url'];

    // get banner url attribute
    public function getBannerUrlAttribute($value)
    {
        return $value ? Storage::url($value) : null;
    }

    // get url attribute
    public function getUrlAttribute($value)
    {
        if ($value && Str::startsWith($value, ['https://', 'http://'])) {
            return $value; // Return as is if it's already a full URL
        }

        return $value ? Storage::url($value) : null;
    }
}
