<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class StoryVideo extends Model
{
    // title, description, video
    protected $fillable = ['video','page'];

    public function getVideoAttribute($value)
    {
        if ($value && Str::startsWith($value, ['https://', 'http://'])) {
            return $value; // Return as is if it's already a full URL
        }

        return $value ? Storage::url($value) : null;
    }
}
