<?php

namespace App\Http\Controllers\Admin;

use App\Models\Book;
use App\Models\Loan;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;

class DashboardController extends Controller
{
    public function index()
    {
        $books = Book::count();
        $loans = Loan::orderBy('code', 'desc')->paginate(15);
        $loans->load('user', 'book');

        $returned = Loan::where('status', 'returned')->count();
        $borrowed = Loan::where('status', 'borrowed')->count();

        $member = User::role('anggota')->count();

        return inertia('Admin/Dashboard/index', [
            'total_books' => $books,
            'returned' => $returned,
            'borrowed' => $borrowed,
            'loans' => $loans,
            'member' => $member
        ]);
    }

    public function update(Request $request)
    {
        $books = Book::count();
        $loans = Loan::where('status', $request->status == 'all' ? '!=' : $request->status, 'all')->orderBy('code', 'desc')->paginate(15);
        $loans->load('user', 'book');

        $returned = Loan::where('status', 'returned')->count();
        $borrowed = Loan::where('status', 'borrowed')->count();

        $member = User::role('anggota')->count();

        return inertia('Admin/Dashboard/index', [
            'total_books' => $books,
            'returned' => $returned,
            'borrowed' => $borrowed,
            'loans' => $loans,
            'member' => $member
        ]);
    }
}
