<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('loans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_borrower')->constrained('users');
            $table->foreignId('id_book')->constrained('books');
            $table->integer('stock');
            $table->date('loan_date');
            $table->date('return_date');
            $table->enum('status', ['pending','borrowed', 'returned']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loans');
    }
};
