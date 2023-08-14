<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Loan>
 */
class LoanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // $table->foreignId('id_borrower')->constrained('users');
        //     $table->foreignId('id_book')->constrained('books');
        //     $table->integer('stock');
        //     $table->date('loan_date');
        //     $table->date('return_date');
        //     $table->enum('status', ['borrowed', 'returned']);
        return [
            'code' => 'KDPJM' . fake()->randomNumber(3),
            'id_borrower' => 2,
            'code_book' => '001.254',
            'stock' => 1,
            'loan_date' => fake()->date(),
            'return_date' => fake()->date(),
            'status' => collect([
                'borrowed',
                'returned',
                'pending'
            ])->random()
        ];
    }
}
