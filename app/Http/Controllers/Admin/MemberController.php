<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MemberController extends Controller
{
    public function index()
    {
        $members = User::role('anggota')->paginate();
        return inertia('Admin/Member/index', [
            'members' => $members
        ]);
    }

    public function create()
    {
        return inertia('Admin/Member/create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users,email',
            'password' => 'required|min:8|max:18'
        ], [
            'name.required' => 'Kolom Nama harus diisi.',
            'email.unique' => 'Email sudah digunakan.',
            'email.required' => 'Kolom Email harus diisi.',
            'password.required' => 'Kolom Password harus diisi',
            'password.min' => 'Minimal 8 karakter',
            'password.max' => 'Password melebihi 18 karakter'
        ]);

        $member = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'address' => $request->address,
            'division' => $request->division,
            'position' => $request->position,
            'phone' => $request->phone,
            'password' => $request->password,
        ]);

        $member->assignRole('anggota');

        return redirect()->route('anggota.index')->with('message', 'Berhasil menambahkan anggota');
    }

    public function edit($id)
    {
        $member = User::find($id);
        return inertia('Admin/Member/edit', [
            'member' => $member
        ]);
    }

    public function update(Request $request, $id)
    {
        // dd($id);
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'address' => 'required',
            'phone' => 'required',
        ], [
            'name.required' => 'Kolom Nama harus diisi.',
            'email.required' => 'Kolom Email harus diisi.',
            'address.required' => 'Kolom Alamat harus diisi.',
            'phone.required' => 'Kolom No HP harus diisi.',
        ]);

        $member = User::find($id);

        if ($request->password == null) {
            $member->update([
                'name' => $request->name,
                'email' => $request->email,
                'address' => $request->address,
                'division' => $request->division,
                'position' => $request->position,
                'phone' => $request->phone,
            ]);

            return redirect()->route('anggota.index')->with('message', 'Berhasil mengubah data');
        } else {
            $member->update([
                'name' => $request->name,
                'email' => $request->email,
                'address' => $request->address,
                'division' => $request->division,
                'position' => $request->position,
                'phone' => $request->phone,
                'password' => $request->password,
            ]);

            return redirect()->route('anggota.index')->with('message', 'Berhasil mengubah data');
        }
    }

    public function destroy($id)
    {
        $member = User::find($id);
        $member->delete();
        session()->flash('message', 'Berhasil menghapus data anggota');
    }
}
