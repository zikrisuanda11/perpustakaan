<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $primaryKey = 'code';

    protected $keyType = 'string'; // Ini jika code bertipe string

    public $incrementing = false;

    public function books()
    {
        return $this->hasMany(Book::class, 'code_type');
    }
}
