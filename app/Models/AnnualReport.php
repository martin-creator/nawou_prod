<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class AnnualReport extends Model
{
    // fillable fields /* file year key_impacts */
    protected $fillable = ['report_file', 'year', 'key_impacts'];

    // file path
    public function getReportFileAttribute($value)
    {
        return Storage::url($value);
    }

    // cast key_impacts as json
    protected $casts = [
        'key_impacts' => 'array'
    ];

}
