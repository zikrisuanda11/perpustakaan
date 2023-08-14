<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{
    use HasFactory;

    protected $primaryKey = ['code'];

    protected $fillable = [
        'code',
        'id_borrower',
        'code_book',
        'stock',
        'loan_date',
        'return_date',
        'status'
    ];

    protected $keyType = 'string';

    public $incrementing = false;

    // protected $guarded = ['id'];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_borrower');
    }

    public function book()
    {
        return $this->belongsTo(Book::class, 'code_book');
    }
}
