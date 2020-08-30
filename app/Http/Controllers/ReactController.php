<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReactController extends Controller
{
    public function adminHome() {
        return view('react-index');
    }


    public function frontHome() {
        return view('react-index');
    }
}
