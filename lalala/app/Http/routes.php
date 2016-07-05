<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

// 后台首页
Route::get("/Admin","Admin\IndexController@index");
// 登录页面
Route::get("/login","Admin\LoginController@index");
Route::get("/logTodo","Admin\LoginController@logTodo");

// 获取验证码的地址
Route::get("/captcha/{tmp}","Admin\LoginController@captcha");
