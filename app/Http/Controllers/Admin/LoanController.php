<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Loan;
use Illuminate\Http\Request;

class LoanController extends Controller
{
    public function index()
    {
        $loans = Loan::paginate(15);
        $loans->load('user', 'book');
        return inertia('Admin/Loan/index', [
            'loans' => $loans
        ]);
    }

    public function returned($id)
    {
        $loan = Loan::find($id);
        $loan->update([
            'status' => 'returned'
        ]);

        session()->flash('message', 'Berhasil mengambalikan buku');
    }

    public function accepted($id)
    {
        $loan = Loan::find($id);
        $loan->update([
            'status' => 'borrowed'
        ]);

        session()->flash('message', 'Berhasil meminjamkan buku');
    }
}
