<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function index()
    {
        $settings = Setting::all();
        return inertia('Admin/Setting/Index', [
            'settings' => $settings
        ]);
    }

    public function update(Request $request, $id)
    {
        // dd($id);
        $setting = Setting::find($id);
        $setting->update([
            'value' => $request->value
        ]);

        return session()->flash('message', 'Berhasil merubah pengaturan');
    }
}
