<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $primaryKey = 'code';

    public function books()
    {
        return $this->hasMany(Book::class, 'code_type');
    }
}
