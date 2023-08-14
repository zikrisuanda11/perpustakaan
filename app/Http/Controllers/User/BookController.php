<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Type;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::paginate(15);
        $types = Type::all();
        return inertia('Book/index', [
            'books' => $books,
            'types' => $types
        ]);
    }

    public function update(Request $request)
    {
        // dd('ter');
        $search = $request->search;
        $books = Book::when($request->id_type, function ($query) use ($request) {
            return $query->where('id_type', $request->id_type);
        })
        ->when($search, function ($query) use ($search) {
            return $query->where('title', 'like', "%{$search}%");
        })
        ->when($request->id_type == null, function ($query){
            return $query;
        })
        ->paginate(15);
        // dd($books);
        // $books = Book::where('title', 'like', "%{$search}%")->paginate(15);
        // $books = Book::where('id_type', $request->id_type)->paginate(15);
        // if($request->id_type == null){
        //     $books = Book::paginate(15);
        // }
        $types = Type::all();
        return inertia('Book/index', [
            'books' => $books,
            'types' => $types
        ]);
    }
}
