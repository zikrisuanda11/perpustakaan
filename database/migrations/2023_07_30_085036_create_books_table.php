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
        Schema::create('books', function (Blueprint $table) {
            // $table->id();
            $table->string('code')->primary();
            // $table->string('code_type');
            // $table->foreign('code_type')->references('code')->on('types');
            $table->foreignId('id_type')->constrained('types')->onDelete('cascade');
            $table->string('title');
            $table->string('publisher');
            $table->string('author');
            $table->date('release_year');
            $table->integer('stock');
            $table->string('location');
            $table->string('book_image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
