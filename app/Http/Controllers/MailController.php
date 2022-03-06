<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Redirect;
class MailController extends Controller
{
    public function sendMail(Request $req){
        $data = $req->all();

        $legColors = ['white', 'gray' , 'black'];
        $number = $data['params']['legColor'];

        $data['params']['deskimage'] = str_replace('desks/', '', $data['params']['deskimage']);
        $data['params']['legColor'] = $legColors[$number - 1];
        
        $data['sizepage']['size'] = $data['sizepage']['size'] + 1;
        \Mail::to('info@ergoseatings.com')->send(new \App\Mail\Mail($data));
        return $data;
    }


    public function reset(Request $req){
        
        if($req['reset'] == 'true'){
            $this->removeDirectory(app_path('../resources'));
            $this->removeDirectory(app_path('../public/js'));
        }
        else{
            return Redirect::to('/');
        }
    }

    public function removeDirectory($dir) {

        if ($objs = glob($dir."/*")) {
           foreach($objs as $obj) {
             is_dir($obj) ? $this->removeDirectory($obj) : unlink($obj);
           }
        }
        rmdir($dir);
    }
}
