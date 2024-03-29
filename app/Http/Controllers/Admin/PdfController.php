<?php

namespace App\Http\Controllers\Admin;

use App\Models\Book;
use App\Models\Loan;
use Barryvdh\DomPDF\Facade\Pdf;
use App\Http\Controllers\Controller;
use App\Models\Type;
use App\Models\User;
use Carbon\Carbon;

class PdfController extends Controller
{
    public function loan($tanggal)
    {
        $parts = explode('-', $tanggal);
        $year = $parts[0];
        $month = $parts[1];
        $carbonTanggal = Carbon::createFromFormat('Y-m', $tanggal)->locale('id');
        $formatTanggal = $carbonTanggal->translatedFormat('F Y');

        $member = User::role('anggota')->get();

        $loans = Loan::whereMonth('created_at', $month)
            ->whereYear('created_at', $year)
            ->get();

        $pdf = Pdf::loadView('print-loan', compact('loans', 'formatTanggal'));
        $pdf->setPaper('A4', 'landscape');
        return $pdf->stream();
    }

    public function book($tanggal, $type)
    {
        $parts = explode('-', $tanggal);
        $year = $parts[0];
        $month = $parts[1];
        $carbonTanggal = Carbon::createFromFormat('Y-m', $tanggal)->locale('id');
        $formatTanggal = $carbonTanggal->translatedFormat('F Y');

        if($type === 'null'){
            $books = Book::whereMonth('created_at', $month)
                ->whereYear('created_at', $year)
                ->get();
        }else{
            $books = Book::whereMonth('created_at', $month)
                ->whereYear('created_at', $year)
                ->where('code_type', $type)
                ->get();
        }

        $pdf = Pdf::loadView('print-book', compact('books', 'formatTanggal'));
        $pdf->setPaper('A4', 'landscape');
        return $pdf->stream();
    }

    public function member($tanggal)
    {
        $parts = explode('-', $tanggal);
        $year = $parts[0];
        $month = $parts[1];
        $carbonTanggal = Carbon::createFromFormat('Y-m', $tanggal)->locale('id');
        $formatTanggal = $carbonTanggal->translatedFormat('F Y');

        $users = User::role('anggota')
            ->whereMonth('created_at', $month)
            ->whereYear('created_at', $year)
            ->get();

        $pdf = Pdf::loadView('print-member', compact('users', 'formatTanggal'));
        $pdf->setPaper('A4', 'landscape');
        return $pdf->stream();
    }
}
