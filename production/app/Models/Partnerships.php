<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Partnerships extends Model
{
    protected $fillable = [
        'engagement_type',
        'full_name',
        'contact_person',
        'email',
        'phone',
        'location',
        'organization_type',
        'partnership_area',
        'mission_focus',
        'proposal_path',
        'collaboration_method',
        'information_accurate',
    ];

    // proposal_path
    public function getProposalPathAttribute($value)
    {
        return $value ? asset('storage/' . $value) : null;
    }
}
