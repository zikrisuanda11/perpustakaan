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
            'no_ktp' => fake()->randomNumber(9, true),
            'phone' => fake()->phoneNumber(),
            'password' => Hash::make('password')
        ]);

        $pengunjung = User::create([
            'name' => 'pengunjung',
            'email' => 'pengunjung@gmail.com',
            'address' => fake()->address(),
            'no_ktp' => fake()->randomNumber(9, true),
            'phone' => fake()->phoneNumber(),
            'password' => Hash::make('password')
        ]);

        $admin->assignRole('admin');
        $pengunjung->assignRole('pengunjung');
    }
}
