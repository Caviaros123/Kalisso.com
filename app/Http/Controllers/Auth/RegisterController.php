<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Mail;
use smsEvent;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/verify/otp';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
                'name' => ['required', 'string', 'max:255'],
                'lastname' => ['required', 'string', 'max:255'],
                'phone' => ['required', 'unique:users'],
                'code' => ['required'],
                'password' => ['required', 'string', 'min:8', 'confirmed'],
            ]);
        }

        /**
         * Create a new user instance after a valid registration.
         *
         * @param  array  $data
         * @return \App\User
         */
        protected function create(array $data)
        { 

            //init
            $otp = rand(100000, 999999);
            $message = "Bienvenue sur Kalisso ".$data['lastname'].", ton code de vérification est : $otp";
            $phone_number = phoneNumber($data['code'].$data['phone']);
            $seller = isset($data['isSeller']) ? '1' : '0';

            // session(['wirepick_request_id' => $code]);

            //SEND SMS FOR VERIFICATION
            // try {

            //     $sms = array(
            //         'client'=>    'caviaros123',
            //         'password'=>    'FilsdeDieu1995@',
            //                     'phone'=>    $phone_number,// The number that will receive the text message
            //                     'from'=>    'Kalisso.com',// The sender of the SMS
            //                     'affiliate' => '999',
            //                     'text' => utf8_decode(urldecode($message)), // The content of the text message
            //                 );

            //     $context = stream_context_create(array(
            //         'http' => array(
            //             'method' => 'POST',
            //             'header'  => "Content-type: application/x-www-form-urlencoded",
            //             'content' => http_build_query($sms),
            //         )));

            //     $response = file_get_contents("https://api.wirepick.com/httpsms/send", false, $context);

            // try {

            //             $message = "Un nouvel utilisateur s'est inscrit sur kalisso.com";
            //             $sms = array(
            //             'client'=>    'caviaros123',
            //             'password'=>    'FilsdeDieu1995@',
            //             'phone'=>    '242064272080',// The number that will receive the text message
            //             'from'=>    'Kalisso.com',// The sender of the SMS
            //             'affiliate' => '999',
            //             'text' => utf8_decode(urldecode($message)), // The content of the text message
            //             );

            //         $context = stream_context_create(array(
            //             'http' => array(
            //                 'method' => 'POST',
            //                 'header'  => "Content-type: application/x-www-form-urlencoded",
            //                 'content' => http_build_query($sms),
            //             )));

            //         $response = file_get_contents("https://api.wirepick.com/httpsms/send", false, $context);
                
            // } catch (Exception $e) {
            //         return back()->withErrors(['Une erreur est survenue lors de l\'envoi du message '.$e]);
                
            // }

            // } catch (Exception $e) {

            //                 // dd($th);
            //     return back()->withErrors(['Une erreur est survenue lors de l\'envoi du message de verification'.$e]);

            // }



        if (isset($data['isSeller'] )) {

            //session()->flash('success_message', '<h1 class="display-3">Bonjour '.$data['name'].'</h1><br>'.'Bienvenu sur la plus grande boutique du Congo-Brazzaville'.$response);

            return User::create([
                'name' => $data['name'],
                'lastname' => $data['lastname'],
                'email' => $data['email'],
                'phone' =>  $phone_number,
                'otp' =>   $otp,
                'isSeller' => $seller,
                'password' => Hash::make($data['password']),
            ]);
        } else {

            return User::create([
                'name' => $data['name'],
                'lastname' => $data['lastname'],
                'email' => $data['email'],
                'phone' =>  $phone_number,
                'otp' =>   $otp,
                'password' => Hash::make($data['password']),
            ]);
        }

    }

  
}
