<?php

namespace App\Http\Controllers\Admin;

use Carbon\Carbon;
use App\Models\Book;
use App\Models\Loan;
use App\Models\Type;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::paginate(15);

        $books->load('type');
        return inertia('Admin/Book/index', [
            'books' => $books,
        ]);
    }

    public function search(Request $request)
    {
        $query = Book::query();
        if ($request->search) {
            $query->where('code', 'like', "%{$request->search}%")
                ->orWhere('code_type', 'like', "%{$request->search}%")
                ->orWhere('title', 'like', "%{$request->search}%")
                ->orWhere('publisher', 'like', "%{$request->search}%")
                ->orWhere('author', 'like', "%{$request->search}%")
                ->orWhere('release_year', 'like', "%{$request->search}%")
                ->orWhere('city', 'like', "%{$request->search}%")
                ->orWhere('location', 'like', "%{$request->search}%");
        }
        $books = $query->with('type')->paginate(15);

        return inertia('Admin/Book/index', [
            'books' => $books,
        ]);
    }

    public function edit($id)
    {
        $types = Type::all();
        $book = Book::find($id);
        return inertia('Admin/Book/edit', [
            'book' => $book,
            'types' => $types
        ]);
    }

    public function create()
    {
        $types = Type::all();
        // dd($types);
        return inertia('Admin/Book/create', [
            'types' => $types
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'code' => 'required|unique:books,code',
            'code_type' => 'required',
            'title' => 'required',
            'publisher' => 'required',
            'author' => 'required',
            'release_year' => 'required',
            // 'stock' => 'required',
            'location' => 'required',
        ], [
            'code.unique' => 'Kode buku telah digunakan',
            'code.required' => 'Kode Buku harus diisi.',
            'code_type.required' => 'Jenis harus diisi.',
            'title.required' => 'Judul harus diisi.',
            'publisher.required' => 'Penerbit harus diisi.',
            'author.required' => 'Penulis harus diisi.',
            'release_year.required' => 'Tahun Rilis harus diisi.',
            // 'stock.required' => 'Stok harus diisi.',
            'location.required' => 'Lokasi harus diisi.',
        ]);

        $format_year = Carbon::parse($request->release_year)->year;
        if ($request->file('book_image')) {
            $path = Storage::put('public/book_image', $request->file('book_image'));
            $pathUrl = Storage::url($path);
            Book::create([
                'code' => $request->code,
                'code_type' => $request->code_type,
                'title' => $request->title,
                'publisher' => $request->publisher,
                'author'  => $request->author,
                'release_year' => $format_year,
                // 'stock' => $request->stock,
                'location' => $request->location,
                'book_image' => $pathUrl,
                'city' => $request->city
            ]);

            return redirect()->route('buku.index')->with('message', 'Berhasil menambahkan data buku');
        }

        Book::create([
            'code' => $request->code,
            'code_type' => $request->code_type,
            'title' => $request->title,
            'publisher' => $request->publisher,
            'author'  => $request->author,
            'release_year' => $format_year,
            // 'stock' => $request->stock,
            'location' => $request->location,
            'city' => $request->city
        ]);

        return redirect()->route('buku.index')->with('message', 'Berhasil menambahkan data buku');
    }

    public function update(Request $request, $id)
    {
        // TODO buat validasi
        $format_year = Carbon::parse($request->release_year)->year;
        $book = Book::find($id);
        
        if (gettype($request->book_image) === 'object') {
            if (File::exists(public_path($book->book_image))) {
                File::delete(public_path($book->book_image));
                $path = Storage::put('public/book_image', $request->file('book_image'));
                $pathUrl = Storage::url($path);
                $book->update([
                    'code' => $request->code,
                    'code_type' => $request->code_type,
                    'title' => $request->title,
                    'publisher' => $request->publisher,
                    'author'  => $request->author,
                    'release_year' => $format_year,
                    // 'stock' => $request->stock,
                    'location' => $request->location,
                    'book_image' => $pathUrl,
                    'city' => $request->city
                ]);

                return redirect()->route('buku.index')->with('message', 'Berhasil update buku');
            }
        } else {

            $book->update([
                'code' => $request->code,
                'code_type' => $request->code_type,
                'title' => $request->title,
                'publisher' => $request->publisher,
                'author'  => $request->author,
                'release_year' => $format_year,
                // 'stock' => $request->stock,
                'location' => $request->location,
                'book_image' => $request->book_image,
                'city' => $request->city
            ]);

            return redirect()->route('buku.index')->with('message', 'Berhasil update buku');
        }
    }

    public function destroy($id)
    {
        $book = Book::find($id);
        // dd($book);
        $book->delete();
        session()->flash('message', 'Berhasil menghapus data buku');
    }
}
