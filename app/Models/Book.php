<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $primaryKey = 'code';

    protected $fillable = [
        'code',
        'code_type',
        'title',
        'publisher',
        'author',
        'release_year',
        // 'stock',
        'location',
        'book_image',
        'city'
    ];

    protected $keyType = 'string';

    public $incrementing = false;

    // protected $guarded = ['code'];

    public function loans()
    {
        return $this->hasMany(Loan::class, 'id_book');
    }

    public function type()
    {
        return $this->belongsTo(Type::class, 'code_type');
    }
}
