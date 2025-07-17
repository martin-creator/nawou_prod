<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    // name, email, message
    protected $fillable = ['name', 'email', 'message'];
}
