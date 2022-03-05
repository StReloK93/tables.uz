<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/function/reset/params', [MailController::class, 'reset']);


Route::get('/', function () {
    return view('desktop');
});

Route::get('/desktop', function () {
    return view('desktop');
});

Route::get('/desktop/{path}', function () {
    return view('desktop');
})->where('path', '.*');

Route::get('/mobile', function () {
    return view('mobile');
});

Route::get('/mobile/{path}', function () {
    return view('mobile');
})->where('path', '.*');