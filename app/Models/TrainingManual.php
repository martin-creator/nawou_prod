<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class TrainingManual extends Model
{
    // title, description, file, image
    protected $fillable = ['title', 'description', 'file', 'image'];

    public function getFileAttribute($value)
    {
        return $value ? Storage::url( $value) : null;
    }

    public function getImageAttribute($value)
    {
        return $value ? Storage::url( $value) : null;
    }

    // download file
    public function downloadFile()
    {
        return Storage::download($this->file);
    }
}
