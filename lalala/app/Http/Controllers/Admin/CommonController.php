<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Session;
class CommonController extends Controller
{
	public function __construct()
	{
		// 验证登录状态 如果没有登录则跳转到登录
		if (!Session::has("userData"))
		{
			header("Location:login");
			exit;
		}
	}
}