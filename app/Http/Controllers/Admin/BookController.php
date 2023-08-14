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
            'code' => 'required|unique:books,code',
            'id_type' => 'required',
            'title' => 'required',
            'publisher' => 'required',
            'author' => 'required',
            'release_year' => 'required',
            'stock' => 'required',
            'location' => 'required',
        ], [
            'code.unique' => 'Kode buku telah digunakan',
            'code.required' => 'Kode Buku harus diisi.',
            'id_type.required' => 'Jenis harus diisi.',
            'title.required' => 'Judul harus diisi.',
            'publisher.required' => 'Penerbit harus diisi.',
            'author.required' => 'Penulis harus diisi.',
            'release_year.required' => 'Tahun Rilis harus diisi.',
            'stock.required' => 'Stok harus diisi.',
            'location.required' => 'Lokasi harus diisi.',
        ]);

        if($request->file('book_image')){
            $path = Storage::put('public/book_image', $request->file('book_image'));
            $pathUrl = Storage::url($path);
            Book::create([
                'code' => $request->code,
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

        // dd($request->code);
        
        Book::create([
            'code' => $request->code,
            'id_type' => $request->id_type,
            'title' => $request->title,
            'publisher' => $request->publisher,
            'author'  => $request->author,
            'release_year' => $request->release_year,
            'stock' => $request->stock,
            'location' => $request->location,
        ]);

        return redirect()->route('buku.index')->with('message', 'Berhasil menambahkan data buku');



    }

    public function update(Request $request, $id)
    {
        // dd(gettype($request->book_image));
        $book = Book::find($id);
        // dd($request->all());
        if(gettype($request->book_image) === 'object'){
            if(File::exists(public_path($book->book_image))){
                File::delete(public_path($book->book_image));
                $path = Storage::put('public/book_image', $request->file('book_image'));
                $pathUrl = Storage::url($path);
                $book->update([
                    'code' => $request->code,
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
                'code' => $request->code,
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
