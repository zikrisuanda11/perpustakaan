<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Loan;
use Illuminate\Http\Request;

class LoanController extends Controller
{
    public function index()
    {
        $loans = Loan::orderBy('code', 'desc')->paginate(15);
        $loans->load('user', 'book');
        return inertia('Admin/Loan/index', [
            'loans' => $loans
        ]);
    }

    public function returned(Request $request, $id)
    {
        // dd($id);
        $loan = Loan::where('code', $id);
        $loan->update([
            'status' => 'returned'
        ]);

        $book = Book::where('code', $request->code_book)->first();
        $book->update([
            'stock' => $book->stock + 1
        ]);

        session()->flash('message', 'Berhasil mengambalikan buku');
    }

    public function accepted($id)
    {
        $loan = Loan::where('code', $id);
        $loan->update([
            'status' => 'borrowed'
        ]);

        session()->flash('message', 'Berhasil meminjamkan buku');
    }

    public function update(Request $request)
    {
        $query = Loan::query();

        if ($request->search) {
            $query->where('code', 'like', "%{$request->search}%")
                ->orWhereHas('user', function ($userQuery) use ($request) {
                    $userQuery->where('name', 'like', "%{$request->search}%");
                })
                ->orWhereHas('book', function ($bookQuery) use ($request) {
                    $bookQuery->where('title', 'like', "%{$request->search}%");
                });
        }

        $loans = $query->orderBy('code', 'desc')
            ->with('user', 'book')
            ->paginate(15);

        return inertia('Admin/Loan/index', [
            'loans' => $loans
        ]);
    }
}
