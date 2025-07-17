<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Volunteers extends Model
{
    protected $fillable = [
        'engagement_type',
        'full_name',
        'contact_person',
        'email',
        'phone',
        'location',
        'preferred_role',
        'availability',
        'skills_experience',
        'cv_path',
        'volunteering_reason',
        'information_accurate',
    ];

    // cv_path
    public function getCvPathAttribute($value)
    {
        return $value ? asset('storage/' . $value) : null;
    }
}
