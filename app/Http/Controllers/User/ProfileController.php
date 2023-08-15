<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Loan;
use App\Models\User;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $loans = Loan::where('id_borrower', $user->id)->orderBy('code', 'desc')->paginate(15);
        $loans->load('user', 'book');
        return inertia('Profile/Index', [
            'profile' => $user,
            'loans' => $loans
        ]);
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'address' => $request->address,
            'division' => $request->division,
            'position' => $request->position,
            'phone' => $request->phone,
        ]);

        session()->flash('message', 'Data berhasil disimpan');
    }
}
