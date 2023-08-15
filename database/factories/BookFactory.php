<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'code_type' => 1,
            'title' => fake()->jobTitle(),
            'publisher' => fake()->firstName(),
            'author' => fake()->firstName(),
            'release_year' => fake()->date(),
            'stock' => fake()->numberBetween(1, 20),
            'location' => 'rak' . fake()->randomNumber(2, true),
            'book_image' => fake()->image()
        ];
    }
}
