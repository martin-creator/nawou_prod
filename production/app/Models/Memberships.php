<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Memberships extends Model
{
    protected $fillable = [
        'engagement_type',
        'full_name',
        'contact_person',
        'email',
        'phone',
        'location',
        'member_type',
        'organization_reg_number',
        'number_of_members',
        'legal_docs_path',
        'reason_for_joining',
        'information_accurate',
    ];

    // legal_docs_path
    public function getLegalDocsPathAttribute($value)
    {
        return $value ? asset('storage/' . $value) : null;
    }

}
