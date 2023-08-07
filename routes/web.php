<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\Admin\BookController;
use App\Http\Controllers\Admin\LoanController;
use App\Http\Controllers\Admin\TypeController;
use App\Http\Controllers\Admin\MemberController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\User\BookController as UserBookController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [LandingController::class, 'index']);
Route::get('/buku', [UserBookController::class, 'index']);
Route::post('/clear-flash', function (Request $request) {
  $request->session()->forget('message');
  $request->session()->forget('error');
});
Route::get('/login', [AuthenticatedSessionController::class, 'create'])->name('login');
Route::post('/login', [AuthenticatedSessionController::class, 'store']);
Route::get('/register', [RegisteredUserController::class, 'create'])->name('register');
Route::post('/register', [RegisteredUserController::class, 'store']);


Route::middleware('auth')->group(function () {
  Route::post('/logout', [AuthenticatedSessionController::class, 'destroy']);

  Route::middleware('role:anggota')->group(function () {
  });

  Route::middleware('role:admin')->group(function () {
    Route::prefix('admin')->group(function () {
      Route::get('dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');
      Route::resource('buku', BookController::class)->except('update');
      Route::post('buku/{id}', [BookController::class, 'update']);
      Route::get('peminjaman', [LoanController::class, 'index']);
      Route::put('peminjaman/returned/{id}', [LoanController::class, 'returned']);
      Route::put('peminjaman/accepted/{id}', [LoanController::class, 'accepted']);
      Route::resource('anggota', MemberController::class);

      Route::post('type', [TypeController::class, 'store']);
      Route::delete('type/{id}', [TypeController::class, 'destroy']);
    });
  });
});
