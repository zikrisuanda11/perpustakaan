<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function loans()
    {
        return $this->hasMany(Loan::class, 'id_book');
    }

    public function type()
    {
        return $this->belongsTo(Type::class, 'id_type');
    }
}
