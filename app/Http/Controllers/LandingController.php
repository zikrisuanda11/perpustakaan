<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LandingController extends Controller
{
    public function index()
    {
        // return inertia('Landing/index');
        return inertia('Landing/index');
    }
}
