<?php

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

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', function () {
    return view('index');
});
Route::get('/draw/{systemID}/{cards}', 'Tarot\Divination@draw');
Route::get('/test1', 'Example\Test@testGetAndService');
Route::get('/test2', 'Example\Test@testGetDB');
Route::post('/lottery/get/{LotteryID}', 'Lottery\Divination@get');
Route::get('/lottery/index', 'Lottery\Divination@index');
Route::get('/dream', 'Dream\Main@index');
