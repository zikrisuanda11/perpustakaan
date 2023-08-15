<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'address' => fake()->address(),
            'division' => fake()->jobTitle(),
            'position' => fake()->jobTitle(),
            'phone' => fake()->phoneNumber(),
            'password' => Hash::make('password')
        ]);

        $anggota = User::create([
            'name' => 'anggota',
            'email' => 'anggota@gmail.com',
            'address' => fake()->address(),
            'division' => fake()->jobTitle(),
            'position' => fake()->jobTitle(),
            'phone' => fake()->phoneNumber(),
            'password' => Hash::make('password')
        ]);

        $admin->assignRole('admin');
        $anggota->assignRole('anggota');
    }
}
