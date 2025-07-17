<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class BlogOrNews extends Model
{
    // fillable fields
    protected $fillable = [
        'title', 'description', 'slug', 'image', 'type', 'event_date', 'location', 'register_link',
    ];

    // make slug from title
    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug']  = Str::slug($value);
    }

    public function getImageAttribute($value)
    {
        return $value ? Storage::url($value) : null;
    }

    // cast fields
    protected $casts = [
        'event_date' => 'datetime',
    ];
}
