<?php

namespace App\Http\Controllers\Admin;

use App\Models\Book;
use App\Models\Type;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::paginate(15);

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
        return inertia('Admin/Book/create', [
            'types' => $types
        ]);
    }

    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'id_type' => 'required',
            'title' => 'required',
            'publisher' => 'required',
            'author' => 'required',
            'release_year' => 'required',
            'stock' => 'required',
            'location' => 'required',
            'book_image' => 'required'
        ], [
            'id_type.required' => 'Kolom Jenis harus diisi.',
            'title.required' => 'Kolom Judul harus diisi.',
            'publisher.required' => 'Kolom Penerbit harus diisi.',
            'author.required' => 'Kolom Penulis harus diisi.',
            'release_year.required' => 'Kolom Tahun Rilis harus diisi.',
            'stock.required' => 'Kolom Stok harus diisi.',
            'location.required' => 'Kolom Lokasi harus diisi.',
            'book_image.required' => 'Kolom Gambar Buku harus diisi.'
        ]);

        $path = Storage::put('public/book_image', $request->file('book_image'));
        $pathUrl = Storage::url($path);
        Book::create([
            'id_type' => $request->id_type,
            'title' => $request->title,
            'publisher' => $request->publisher,
            'author'  => $request->author,
            'release_year' => $request->release_year,
            'stock' => $request->stock,
            'location' => $request->location,
            'book_image' => $pathUrl
        ]);

        return redirect()->route('buku.index')->with('message', 'Berhasil menambahkan data buku');
    }

    public function update(Request $request, $id)
    {
        // dd(gettype($request->book_image));
        $book = Book::find($id);
        // dd($book);
        if(gettype($request->book_image) === 'object'){
            if(File::exists(public_path($book->book_image))){
                File::delete(public_path($book->book_image));
                $path = Storage::put('public/book_image', $request->file('book_image'));
                $pathUrl = Storage::url($path);
                $book->update([
                    'id_type' => $request->id_type,
                    'title' => $request->title,
                    'publisher' => $request->publisher,
                    'author'  => $request->author,
                    'release_year' => $request->release_year,
                    'stock' => $request->stock,
                    'location' => $request->location,
                    'book_image' => $pathUrl
                ]);
                return redirect()->route('buku.index')->with('message', 'Berhasil update buku');
            }
        }else{
            $book->update([
                'id_type' => $request->id_type,
                'title' => $request->title,
                'publisher' => $request->publisher,
                'author'  => $request->author,
                'release_year' => $request->release_year,
                'stock' => $request->stock,
                'location' => $request->location,
                'book_image' => $request->book_image
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
