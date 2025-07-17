<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Whistleblower extends Model
{
    // name, email, what_happened, where_it_happened, who_was_involved, evidence_file
    protected $fillable = ['name', 'email', 'what_happened', 'where_it_happened', 'who_was_involved', 'evidence_file'];

    public function getEvidenceFileAttribute($value)
    {
        return $value ? Storage::url($value) : null;
    }
}
