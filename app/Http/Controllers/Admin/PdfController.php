<?php

namespace App\Http\Controllers\Admin;

use App\Models\Book;
use App\Models\Loan;
use Barryvdh\DomPDF\Facade\Pdf;
use App\Http\Controllers\Controller;
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
        $pdf->setPaper('A4', 'potrait');
        return $pdf->stream();
    }

    public function book($tanggal)
    {
        $parts = explode('-', $tanggal);
        $year = $parts[0];
        $month = $parts[1];
        $carbonTanggal = Carbon::createFromFormat('Y-m', $tanggal)->locale('id');
        $formatTanggal = $carbonTanggal->translatedFormat('F Y');

        $books = Book::whereMonth('created_at', $month)
            ->whereYear('created_at', $year)
            ->limit(25)
            ->get();

        $pdf = Pdf::loadView('print-book', compact('books', 'formatTanggal'));
        $pdf->setPaper('A4', 'potrait');
        return $pdf->stream();
    }
}
