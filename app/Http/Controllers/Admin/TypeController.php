<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Type;
use Illuminate\Http\Request;

class TypeController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'code' => 'required|unique:types,code',
            'name' => 'required'
        ], [
            'code.unique' => 'Kode sudah digunakan',
            'code.required' => 'kode Jenis Wajib diisi',
            'name.required' => 'Nama Jenis wajib diisi'
        ]);

        $type = Type::where('name', $request->name)->first();
        if($type){
            session()->flash('error', 'Jenis sudah ditambahkan');
        }else{
            Type::create([
                'code' => $request->code,
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
