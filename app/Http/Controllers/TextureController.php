<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Storage;
class TextureController extends Controller
{
    public function textures(){
        $files = Storage::disk('textures')->files('/');
        return $files;
    }
}
