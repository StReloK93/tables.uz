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
                    $folders[$key]['text'] = 'Thicker solid wood';
                    $folders[$key]['path'] = $value;
                    break;
                case "desks/solidepoxy":
                    $folders[$key]['text'] = 'Solid wood <br> Epoxy';
                    $folders[$key]['path'] = $value;
                    break;
                case "desks/solidtraditional":
                    $folders[$key]['text'] = 'Thinner solid wood';
                    $folders[$key]['path'] = $value;
                    break;
                case "desks/veneer":
                    $folders[$key]['text'] = 'Veneer';
                    $folders[$key]['path'] = $value;
                    break;
            }
        }

        
        foreach ($directories as $value) {
            $files = Storage::disk('textures')->allFiles($value);
            $easy = [];
            foreach ($files as $key => $image) {
                $urlToFile = Storage::disk('textures')->url($image);

                $easy[$key]['path'] = $image;
                $easy[$key]['file'] = pathinfo($urlToFile)['filename'];
            }
            $images[$value] = $easy;
        }


        $data = [
            'images' => $images,
            'folders' => $folders,
        ];

        return $data;
    }
}
