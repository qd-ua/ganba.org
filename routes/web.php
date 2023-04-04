<?php

use App\Models\BlackListUser;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $items = BlackListUser::with('contacts', 'files')->get();

    return view('home', compact('items'));
})->name('home');

Route::view('/about', 'about')->name('about');

Route::view('/donate', 'donate')->name('donate');

Route::get('/black-list/{item}', function (BlackListUser $item) {
    return view('black-list.show', compact('item'));
})->name('black-list.show');
