<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FAQ extends Model
{
    // question, answer
    protected $fillable = ['question', 'answer'];
}
