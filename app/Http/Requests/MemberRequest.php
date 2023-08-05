<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MemberRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required',
            'email' => 'required|unique:users,email',
            'address' => 'required',
            'no_ktp' => 'required',
            'phone' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Kolom Nama harus diisi.',
            'email.unique' => 'Email sudah digunakan.',
            'email.required' => 'Kolom Email harus diisi.',
            'address.required' => 'Kolom Alamat harus diisi.',
            'no_ktp.required' => 'Kolom No KTP harus diisi.',
            'phone.required' => 'Kolom No HP harus diisi.',
        ];
    }
}
