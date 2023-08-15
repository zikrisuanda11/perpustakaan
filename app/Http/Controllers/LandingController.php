<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class LandingController extends Controller
{
    public function index()
    {
        $book_recomendation = [
            '015.046',
            '015.173',
            '015.191',
            '017.094',
            '016.096',
            '010.001'
        ];

        $books = Book::whereIn('code', $book_recomendation)->get();
        return inertia('Landing/index', [
            'books' => $books,
        ]);
    }
}
