<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Type;
use Illuminate\Http\Request;

class TypeController extends Controller
{
    public function store(Request $request)
    {
        $type = Type::where('name', $request->name)->first();
        if($type){
            session()->flash('error', 'Jenis sudah ditambahkan');
        }else{
            Type::create([
                'name' => ucfirst($request->name)
            ]);
            session()->flash('message', 'Berhasil menambahkan jenis buku');
        }
    }

    public function destroy($id)
    {
        $type = Type::find($id);
        if(!$type){
            session()->flash('error', 'Jenis buku tidak di temukan');
        }
        $type->delete();
        session()->flash('message', 'Berhasil menghapus jenis buku');
    }
}
