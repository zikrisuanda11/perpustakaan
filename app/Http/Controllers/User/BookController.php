<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Type;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->query('search');
        $type = $request->query('type');
        
        $books = Book::when($search, function ($query) use ($search) {
                return $query->where('title', 'like', "%{$search}%");
            })
            ->when($type, function ($query) use ($type) {
                return $query->where('code_type', $type);
            })
            ->paginate(15)
            ->withQueryString();
            // dd($books);
            // return response()->json($books);
        $types = Type::withCount('books')->get();

        // dd($types);
        // return response()->json($books);
        return inertia('Book/index', [
            'books' => $books,
            'types' => $types
        ]);
    }

    public function update(Request $request)
    {
        // dd($request->code_type);
        $search = $request->search;
        $books = Book::when($request->code_type, function ($query) use ($request) {
            return $query->where('code_type', $request->code_type);
        })
            ->when($search, function ($query) use ($search) {
                return $query->where('title', 'like', "%{$search}%");
            })
            ->when($request->code_type == null, function ($query) {
                return $query;
            })
            ->paginate(15);

        $types = Type::withCount('books')->get();
        return inertia('Book/index', [
            'books' => $books,
            'types' => $types
        ]);
    }
}
