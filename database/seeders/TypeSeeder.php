<?php

namespace Database\Seeders;

use App\Models\Type;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Type::create([
        //     'name' => 'novel'
        // ]);
        // Type::create([
        //     'name' => 'science'
        // ]);
        // Type::factory()->count(25)->create();
        Type::create([
            'code' => '001',
            'name' => 'Novel'
        ]);
        Type::create([
            'code' => '002',
            'name' => 'Dongeng'
        ]);
        Type::create([
            'code' => '003',
            'name' => 'Teknologi'
        ]);
    }
}
