<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MailController extends Controller
{
    public function sendMail(Request $req){
        $data = $req->all();

        $legColors = ['white', 'gray' , 'black'];
        $number = $data['params']['legColor'];

        $data['params']['deskimage'] = str_replace('desks/', '', $data['params']['deskimage']);
        $data['params']['legColor'] = $legColors[$number - 1];
        
        $data['sizepage']['size'] = $data['sizepage']['size'] + 1;
        \Mail::to('strelok0493@gmail.com')->send(new \App\Mail\Mail($data));
        return $data;
    }
}
