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

    public function desks(){
        $directories = Storage::disk('textures')->directories("/desks");
        
        $images = [];
        $folders = [];




        foreach ($directories as $key => $value) {
            switch ($value) {
                case "desks/bamboo":
                    $folders[$key]['text'] = 'Bamboo';
                    $folders[$key]['path'] = $value;
                    break;
                case "desks/laminate":
                    $folders[$key]['text'] = 'Laminate';
                    $folders[$key]['path'] = $value;
                    break;
                case "desks/melamine":
                    $folders[$key]['text'] = 'Melamine';
                    $folders[$key]['path'] = $value;
                    break;
                case "desks/melamineglass":
                    $folders[$key]['text'] = 'Melamine <br>With glass top';
                    $folders[$key]['path'] = $value;
                    break;
                case "desks/pyledge":
                    $folders[$key]['text'] = 'Pyledge';
                    $folders[$key]['path'] = $value;
                    break;
                case "desks/solidedge":
                    $folders[$key]['text'] = 'Solid wood <br> Live Edge';
                    $folders[$key]['path'] = $value;
                    break;
                case "desks/solidepoxy":
                    $folders[$key]['text'] = 'Solid wood <br> Epoxy';
                    $folders[$key]['path'] = $value;
                    break;
                case "desks/solidtraditional":
                    $folders[$key]['text'] = 'Solid wood <br> Traditional';
                    $folders[$key]['path'] = $value;
                    break;
                case "desks/veneer":
                    $folders[$key]['text'] = 'Veneer';
                    $folders[$key]['path'] = $value;
                    break;
            }
        }

        foreach ($directories as $key => $value) {
            $images[$value] = Storage::disk('textures')->files($value);
        }

        $data = [
            'images' => $images,
            'folders' => $folders,
        ];

        return $data;
    }
}
