<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Loan;
use Illuminate\Http\Request;

class LoanController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->query('search');
        $query = Loan::query();

        if ($search) {
            $query->where('code', 'like', "%{$search}%")
                ->orWhereHas('user', function ($userQuery) use ($search) {
                    $userQuery->where('name', 'like', "%{$search}%");
                })
                ->orWhereHas('book', function ($bookQuery) use ($search) {
                    $bookQuery->where('title', 'like', "%{$search}%");
                })
                ->orWhereHas('book', function ($bookQuery) use ($search) {
                    $bookQuery->where('code', 'like', "%{$search}%");
                });
        }

        $loans = $query->orderBy('created_at', 'desc')
            ->with('user', 'book')
            ->paginate(15);

        return inertia('Admin/Loan/index', [
            'loans' => $loans
        ]);
    }

    public function search(Request $request)
    {

        $query = Loan::query();

        if ($request->search) {
            $query->where('code', 'like', "%{$request->search}%")
                ->orWhereHas('user', function ($userQuery) use ($request) {
                    $userQuery->where('name', 'like', "%{$request->search}%");
                })
                ->orWhereHas('book', function ($bookQuery) use ($request) {
                    $bookQuery->where('title', 'like', "%{$request->search}%");
                })
                ->orWhereHas('book', function ($bookQuery) use ($request) {
                    $bookQuery->where('code', 'like', "%{$request->search}%");
                });
        }

        $loans = $query->orderBy('created_at', 'desc')
            ->with('user', 'book')
            ->paginate(15);

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

    public function update(Request $request, $id)
    {
        
        $loan = Loan::where('code', $id);
        
        $loan->update([
            'return_date' => $request->return_date,
            'status' => 'returned'
        ]);

        return session()->flash('message', 'Berhasil mengembalikan buku');
    }
}
