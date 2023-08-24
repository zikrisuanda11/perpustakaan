<?php

namespace App\Http\Controllers\User;

use Carbon\Carbon;
use App\Models\Book;
use App\Models\Loan;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Support\Facades\DB;

class LoanController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'return_date' => 'required'
        ], [
            'return_date.required' => 'Tanggal wajib pilih'
        ]);

        $loanCheck = Loan::where('id_borrower', auth()->user()->id)
            ->where(function ($query) {
                $query->where('status', 'borrowed')
                    ->orWhere('status', 'pending');
            })
            ->count();
        $maxLoan = Setting::where('name', 'max_loans')->first();

        if ($loanCheck >= $maxLoan->value) {
            return session()->flash('error', 'Sudah mencapai maksimal peminjaman');
        }

        $lastLoan = Loan::orderBy('code', 'desc')->first();
        $nextCodeNumber = $lastLoan ? (int)substr($lastLoan->code, -4) + 1 : 1;
        $formattedNextCode = str_pad($nextCodeNumber, 4, '0', STR_PAD_LEFT);
        $nextCode = 'KDPJM' . $formattedNextCode;

        Loan::create([
            // nilai increment 4 digit berdasarkan nilai terakhir di table loans column code 
            'code' => $nextCode,
            'id_borrower' => auth()->user()->id,
            'code_book' => $request->code_book,
            'stock' => 1,
            'loan_date' => Carbon::now(),
            'return_date' => $request->return_date,
            'status' => 'pending'
        ]);

        $book = Book::find($request->code_book);
        $book->update([
            'stock' => $book->stock - 1
        ]);

        return session()->flash('message', 'Berhasil meminjam buku');
    }

    public function destroy($id)
    {
        $loan = Loan::where('code', $id);   
        $loan->delete();

        return session()->flash('message', 'Berhasil membatakan peminjaman');
    }
}
