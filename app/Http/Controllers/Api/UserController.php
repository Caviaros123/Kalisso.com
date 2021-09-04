<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Category;
use App\Events\SmsNotify;
use App\Product;
use App\Order;
use App\OrderProduct;
use App\Http\Resources\OrderResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\User;
use Composer\Util\Http\Response;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\GetLastSeen;
use App\Http\Resources\GetAddress;
use App\Http\Resources\GetOrderList;
use Illuminate\Support\Facades\DB;
use Image;


class UserController extends Controller
{

    public function saveSearch(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'search' => 'required|string'
        ]);


        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Echec de validation de la recherche'
            ], 400);
        }

        try {

            $checkExistSearch = \DB::table('tbl_search')->where('user_id', auth('api')->id())->where('search_word',  $request->search)->first();

            if ($checkExistSearch) {
                return response()->json([
                    'success' => false,
                    'message' => 'La recherche exsite deja',
                    'data' => $checkExistSearch
                ], 400);
            } else {

                \DB::table('tbl_search')->insert([
                    'user_id' => auth('api')->id(),
                    'search_word' => $request->search,
                    'search_date' => NOW()
                ]);

                return response()->json([
                    'success' => true,
                    'message' => 'Recherche enregistrer'
                ], 200);
            }
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e
            ], 400);
        }
    }


    public function updatePictureProfile(Request $request)
    {
        $path = public_path() . '/storage/users/' . date('FY');

        // return $path;
        $user = auth('api')->user();

        if (!is_dir($path)) {
            mkdir($path, 0755, true);
        } else {
            $path = $path . '/';
        }

        $validator = Validator::make($request->all(), [
            'image'   => 'required|image|mimes:jpg,jpeg,png,svg,gif|max:2048'
        ]);

        if ($validator->fails()) {

            return response()->json([
                'success' => false,
                'message' => 'Echec de validation de l\'image'
            ], 400);
        }

        if ($request->file('image') != null && auth('api')->user()) {

            try {
                $image = $request->file('image');
                // dd($request->file('document')[1]);
                $filename = strtolower(str_replace('-', '', date('d-m-Y') . $image->getClientOriginalName()));
                $image->move($path, $filename);
                $image_resize = Image::make($path . $filename)->encode('jpg', 50);
                $image_resize->resize(500, 500, function ($constraint) {
                    $constraint->aspectRatio();
                })->save($path . $filename, '50', 'jpg');
                $picture =  'users/' . date('FY') . '/' . $filename;

                User::where('id', auth('api')->id())->update([
                    'avatar' => $picture,
                ]);

                return response()->json([
                    'success' => true,
                    'message' => 'Votre photo de profile a bien été mise à jour',
                    'data' => $user
                ], 200);
            } catch (Exception $e) {
                return response()->json([
                    'success' => false,
                    'message' => $e
                ], 400);
            }
        }
    }

    public function getUserStore(Request $request)
    {
        // init
        $getSessionId = '';
        $user =  '';
        $store = '';
        $uid = '';
        $skip  = $request->skip;
        $limit = $request->limit;
        $products = '';
        $product = [];
        $getProductId = '';
        $data = [];
        $order = [];


        $getSessionId = \DB::table('tbl_session')->first();
        $user =  auth('api')->user();
        $store = \DB::table('profiles')->where('email', $user->email)->first();
        $uid = auth('api')->id();

        if (request()->has('skip') && request()->has('limit')) {
            $products = Product::where('store_id', $store->store_id)->orderBy('id', 'desc')->skip($request->skip)->limit($request->limit)->get();
        } else {
            $products = Product::where('store_id', $store->store_id)->orderBy('id', 'desc')->get();
        }

        $getProductId = Product::where('store_id', $store->store_id)->orderBy('id', 'desc')->get('id');

        foreach ($getProductId as $key => $value) {

            $data[] = $value['id'];
        }

        $product_ordering = OrderProduct::whereIn('product_id', $data)->get();
        $product_ordering_id = OrderProduct::whereIn('product_id', $data)->get('product_id');

        foreach ($product_ordering as $key => $value) {

            $order[] = $value['order_id'];
        }

        $orders = Order::whereIn('id', $order)->orderBy('id', 'desc')->get();

        $products_order = Product::whereIn('id', $product_ordering_id)->orderBy('id', 'desc')->get();

        // foreach ( as $key => $value) {

        //     $orders->merge([
        //             'name' =>  $products_order->name,
        //             'image' => $products_order->image,
        //             'payment'=> $orders['billing_total'] - (18 /100) - 1000
        //     ]);
        // }

        foreach ($products_order as $p => $vp) {
            foreach ($orders as  $o => $vo) {
                $rsData[$o]['id'] = (int) $vo['id'];
                $rsData[$o]['invoice'] = $vo['transaction_id'];
                $rsData[$o]['date'] = date('j F Y', strtotime($vo['created_at']));
                $rsData[$o]['status'] = $vo['paymentStatus'];
                $rsData[$o]['name'] = $vp['name'];
                $rsData[$o]['image'] = "https://kalisso.com/storage/" . $vp['image'];
                $rsData[$o]['payment'] = (float) $vo['billing_total'];
            }
        }

        // code...
        foreach ($products as $key => $value) {
            $product[$key]["id"] = (int) $value['id'];
            $product[$key]["name"] = $value['name'];
            $product[$key]["price"] = (float) $value['price'];
            $product[$key]["image"] = "https://kalisso.com/storage/" . $value['image'];
            $product[$key]["rating"] = (float) $value['rating'] ?? 0;
            $product[$key]["review"] = (int) $value['review'] ?? 0;
            $product[$key]["sale"] = (int) $value['product_sale'] ?? 0;
            $product[$key]["location"] = $value['location'];
        }


        // $sql = "SELECT tbl_order.order_id, invoice_number, order_status, total_price, order_date, product_name, product_image FROM tbl_product, tbl_order, tbl_order_detail WHERE tbl_order.order_id=tbl_order_detail.order_id AND tbl_product.product_id=tbl_order_detail.product_id AND user_id=$uid ORDER BY order_id ASC LIMIT $skip, $limit";

        // $getStoreOrders = \DB::select($sql);

        $data = array(
            'store' => $store,
            'orders' => $rsData ?? [],
            'orders_products' => $products_order,
            'products' => $product
        );

        try {

            if ($request->get('session_id') == $getSessionId->session_id) {
                if ($store != null) {
                    return response()->json([
                        "status" => 200,
                        "msg" => "Success",
                        "data" => $data
                    ], 200);
                } else {
                    return response()->json([
                        'success' => false,
                        'message' => 'aucune boutique trouver',
                        "data" => []
                    ], 404);
                }
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'false',
                    'data' => $request,
                ], 404);
            }
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Echec',
                "data" => $e
            ], 404);
        }
    }
    public function addProductLastSeen(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'product_id'   => 'required|numeric',
            'user_id'      => 'required|numeric',
        ]);

        if ($validator->fails()) {

            return response()->json([
                'success' => false,
                'message' => 'Echec de validation'
            ], 400);
        }

        $duplicated = \DB::table('tbl_last_seen')
            ->where('user_id', auth('api')->id())
            ->where('product_id', $request->product_id)
            ->first();



        if ($duplicated == null || $duplicated != null) {
            \DB::table('tbl_last_seen')->insert([
                'user_id'          => auth('api')->id(),
                'product_id' => $request->product_id,
                'last_seen_create_date'  => NOW()
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Nouveau produit vu récement'
            ], 201);
        } else {
            return response()->json([
                'status' => 404,
                'msg' => 'false',
                'data' => '',
            ]);
        }
    }



    public function getDefaultAddress(Request $request)
    {
        // init
        // $getSessionId = \DB::table('tbl_session')->first();
        $id = auth('api')->id();
        $dataAddress = \DB::table('tbl_address')->where('user_id', $id)->where('default_address', 1)->first();

        if ($dataAddress != null) {
            return response()->json([
                'status' => 200,
                'msg' => 'success',
                'data' => $dataAddress
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'msg' => 'false',
                'data' => []
            ]);
        }
    }

    public function deleteAddress(Request $request)
    {
        // init
        $getSessionId = \DB::table('tbl_session')->first();
        $uid = auth('api')->id();


        $validator = Validator::make($request->all(), [
            'id'     => 'required|numeric',
        ]);

        if ($validator->fails()) {

            return response()->json([
                'success' => false,
                'message' => 'Echec de validation'
            ], 400);
        }

        $exist = \DB::table('tbl_address')
            ->where('user_id', $uid)
            ->where('id', $request->id)
            ->first();

        if ($exist != null) {

            \DB::table('tbl_address')->where('id', $request->id)->where('user_id', auth('api')->id())->delete();

            return response()->json([
                'success' => true,
                'message' => 'Vous avez supprimer une adresse de livraison'
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'msg' => 'false',
            ]);
        }
    }



    public function editAddress(Request $request)
    {
        // init
        $getSessionId = \DB::table('tbl_session')->first();
        $uid = auth('api')->id();


        $validator = Validator::make($request->all(), [
            'id'               => 'required|numeric',
            'title'            => 'required|string',
            'recipient_name'   => 'required|string',
            'phone_number'     => 'required|numeric',
            'address_line1'    => 'required|string',
            'address_line2'    => 'required|string',
            'country'          => 'required|string',
            'state'            => 'required|string',
            'default_address'  => 'required|boolean'

        ]);

        if ($validator->fails()) {

            return response()->json([
                'success' => false,
                'message' => 'Echec de validation'
            ], 400);
        }



        $checkDefault = \DB::table('tbl_address')
            ->where('default_address', 1)
            ->first();

        if ($request->changeDefaultAddress) {
        }


        $check = \DB::table('tbl_address')
            ->where('user_id', auth('api')->id())
            ->where('id', $request->id)
            ->first();



        if ($check != null && $request->get('session_id') == $getSessionId->session_id) {


            \DB::table('tbl_address')
                ->where('user_id', auth('api')->id())
                ->where('id', $request->id)
                ->update([
                    'user_id'          => auth('api')->id(),
                    'title'            => $request->title,
                    'recipient_name'   => $request->recipient_name,
                    'phone_number'     => $request->phone_number,
                    'address_line1'    => $request->address_line1,
                    'address_line2'    => $request->address_line2,
                    'state'            => $request->state,
                    'country'          => $request->country,
                    'default_address'  => $request->default_address,
                    'updated_at'  => NOW()
                ]);

            return response()->json([
                'success' => true,
                'message' => 'Vous avez modifier une adresse de livraison'
            ], 201);
        } else {
            return response()->json([
                'status' => 404,
                'msg' => 'false'
            ]);
        }
    }



    public function addAddress(Request $request)
    {
        // init
        $getSessionId = \DB::table('tbl_session')->first();

        if ($request->default_address == 1) {
            \DB::table('tbl_session')->where('user_id', auth()->id())->where('default_address', true)->update([
                'default_address' => false
            ]);
        }

        $uid = auth('api')->id();


        $validator = Validator::make($request->all(), [
            'title'            => 'required|string',
            'recipient_name'   => 'required|string',
            'phone_number'     => 'required|numeric',
            'address_line1'    => 'required|string',
            'country'          => 'required|string',
            'state'            => 'required|string',
            'default_address'  => 'required|numeric|min:1|max:1'

        ]);

        if ($validator->fails()) {

            return response()->json([
                'success' => false,
                'message' => 'Echec de validation',
                'data' => $validator
            ], 405);
        }

        $duplicated = \DB::table('tbl_address')
            ->where('user_id', auth('api')->id())
            ->where('title', $request->title)
            ->first();



        if ($duplicated != null) {

            return response()->json([
                'success' => true,
                'message' => 'Cette adresse existe déjà'
            ], 405);
        }

        if ($request->get('session_id') == $getSessionId->session_id) {
            $data = \DB::table('tbl_address')->insert([
                'user_id'          => auth('api')->id(),
                'title'            => $request->title,
                'recipient_name'   => $request->recipient_name,
                'phone_number'     => $request->phone_number,
                'address_line1'    => $request->address_line1,
                'address_line2'    => $request->address_line2,
                'state'            => $request->state,
                'country'          => $request->country,
                'default_address'  => $request->default_address,
                'created_at'  => NOW(),
                'updated_at'  => NOW()
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Vous avez ajouter une nouvelle adresse de livraison',
                'data' => $data
            ], 201);
        } else {
            return response()->json([
                'status' => 404,
                'msg' => 'false',
                'data' => '',
            ]);
        }
    }
    /**
     * Show the form for editing the specified resource.
     *
  
     * @return \Illuminate\Http\Response
     */
    public function edit()
    {
        $orders = auth()->user()->orders()->with('products')->latest()->get(); //n + 1 issues

        return view('mon-compte', compact('orders'))->with('user', auth()->user());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'lastname' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email,' . auth()->id()],
            'password' => ['sometimes', 'nullable', 'string', 'min:8', 'confirmed'],
        ]);

        $user = auth()->user();
        $input = $request->except('password', 'password_confirmation');

        if (!$request->filled('password')) {

            $user->fill($input)->save();

            return back()->with('success_message', 'Le profile a bien été mise à jour');
        }

        $user->password = bcrypt($request->password);
        $user->fill($input)->save();

        return back()->with('success_message', 'Le profile et le mot de passe ont bien été mise à jour');
    }

    // API LOGIN
    public function login()
    {

        if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) {

            $user = Auth::user();
            $success['token'] = $user->createToken(request('device_name'))->accessToken;
            //After successfull authentication, notice how I return json parameters
            return response()->json([
                'success' => true,
                'token' => $success,
                'user' => $user,
                'data' => $user
            ], 200);
        } else {
            //if authentication is unsuccessfull, notice how I return json parameters
            return response()->json([
                'success' => false,
                'message' => 'Email ou mot de passe invalide',
                'user' => [],
                'data' => []
            ], 401);
        }
    }

    public function loginWithOtp(Request $request)
    {
        $user = User::where([['phone', '=', request('phone')]])->first();

        if ($user) {

            Auth::login($user, true);
            $user = Auth::user();
            $success['token'] = $user->createToken(request('device_name'))->accessToken;
            //User::where('phone','=', $request->phone)->update(['otp' => null]);

            DB::table('users')->where('id', auth('api')->id())->update([
                'phone_verified_at' => NOW(),
                'otp' => null
            ]);

            //After successfull authentication, notice how I return json parameters
            return response()->json([
                'success' => true,
                'token' => $success,
                'user' => $user
            ], 201);
        } else {
            //if authentication is unsuccessfull, notice how I return json parameters
            return response()->json([
                'success' => false,
                'message' => 'Invalid Otp or Phone',
            ], 401);
        }
    }

    public function sendOtp(Request $request)
    {

        $otp = rand(1000, 9999);
        $phone =  phoneNumber($request->phone);
        $contents = '<#> Kalisso.com: Votre code de vérificattion est ' . $otp;
        $user =  User::where('phone', $phone)->update([
            'otp' => $otp
        ]);
        if ($request->status == 'signUpWithEmail') {
            return response()->json([
                'success' => true,
                'user' => $otp
            ], 200);
        } elseif ($user == 0) {
            return response()->json([
                'success' => false,
                'message' => 'Utilisateur introuvable'
            ]);
        } elseif ($request->status == 'signUpWithPhone' && $user == 0) {
            return response()->json([
                'success' => false,
                'message' => 'Utilisateur introuvable'
            ]);
        } elseif ($user == 0 && $request->status == 'register') {
            try {
                // $sms = array(
                //     'client'=>    'caviaros123',
                //     'password'=>    'FilsdeDieu1995@',
                //         'phone'=>    $phone,// The number that will receive the text message
                //         'from'=>    'Kalisso.com',// The sender of the SMS
                //         'affiliate' => '999',
                //         'text' => utf8_decode(urldecode($contents)), // The content of the text message
                //     );

                // $context = stream_context_create(array(
                //     'http' => array(
                //       'method' => 'POST',
                //       'header'  => "Content-type: application/x-www-form-urlencoded",
                //       'content' => http_build_query($sms),
                //   )));

                // $response = file_get_contents("https://api.wirepick.com/httpsms/send", false, $context);

                return response()->json([
                    'success' => true,
                    'user' => $otp
                ], 200);
            } catch (\Throwable $th) {
                return response()->json([
                    'success' => false,
                    'message' => 'Invalid Send verification code',
                ], 401);
            }
        } else if ($user == 1 && $request->status == 'login') {
            try {
                // $sms = array(
                //   'client'=>    'caviaros123',
                //   'password'=>    'FilsdeDieu1995@',
                //       'phone'=>    $phone,// The number that will receive the text message
                //       'from'=>    'Kalisso.com',// The sender of the SMS
                //       'affiliate' => '999',
                //       'text' => utf8_decode(urldecode($contents)), // The content of the text message
                //   );

                // $context = stream_context_create(array(
                //   'http' => array(
                //     'method' => 'POST',
                //     'header'  => "Content-type: application/x-www-form-urlencoded",
                //     'content' => http_build_query($sms),
                // )));

                // $response = file_get_contents("https://api.wirepick.com/httpsms/send", false, $context);

                return response()->json([
                    'success' => true,
                    'user' => $otp
                ], 200);
            } catch (\Throwable $th) {
                return response()->json([
                    'success' => false,
                    'message' => 'failed to found this phone'
                ]);
            }
        }
    }

    public function checkUser(Request $request)
    {


        if ($request->status == 'signUpWithEmail') {
            $user = User::where('email', $request->email)->first();
            $otp = rand(1000, 9999);
        } else if ($request->status == 'signUpWithPhone') {
            $user = User::where('phone', $request->phone)->first();
        }

        if ($user != null) {
            return response()->json([
                'success' => false,
                'message' => 'Cette utilisateur existe déjà',
            ], 401);
        } else {

            return response()->json([
                'success' => true,
                'user' => $user,
                'otp' => $otp ?? ''
            ], 200);
        }
    }


    /**
     * Register api.
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        if ($request->status == 'registerWithPhone') {

            $validator = Validator::make($request->all(), [
                'phone' => 'required|numeric',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => $validator->errors(),
                ], 401);
            }
            
            $user = User::where('phone', $request->phone)->first();

            if ($user = User::where('phone', $request->phone)->first()) {

                $update = User::where('phone', $request->phone)->update([
                    'otp' => null,
                    'phone_verified_at' => NOW()
                ]);
                // code...
            }

            return response()->json([
                'success' => true,
                'message' => 'Félicitation vous êtes inscrit sur la plus grande\n plateforme de vente en ligne au Congo-Brazzaville',
                'data' => $user
            ]);
        } elseif ($request->status == 'signUpWithEmail') {

            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'lastname' => 'required',
                'phone' => 'required|unique:users',
                'email' => 'required|email|unique:users',
                'password' => 'required'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => $validator->errors(),
                ], 401);
            }

            $request->merge([
                'email_verified_at' => NOW(),
                'otp' => rand(100000, 999999)

            ]);

            $input = $request->all();
            $input['password'] = bcrypt($input['password']);
            $user = User::create($input);
            $success['token'] = $user->createToken('appToken')->accessToken;

            return response()->json([
                'success' => true,
                'token' => $success,
                'user' => $user
            ]);
        }
    }

    // logout
    public function logout()
    {

        if (Auth::user()) {
            Auth::user()->tokens->each(function($token, $key){
                $token->delete();
            });

            return response()->json([
                'success' => true,
                'message' => 'Logout successfully'
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Can\'t Logout'
            ]);
        }
    }


    public function products()
    {

        # code...
        $products = Product::all();

        $this->response['message'] = 'success';
        $this->response['data'] = $products;

        return response()->json($this->response, 200);
    }


    public function getCurrentUser()
    {

        # code...
        $user =  Auth::user();
        $orders = Order::where('user_id', auth()->id())->get();
        $wishlist = DB::table('tbl_wishlist')->where('user_id', auth()->id())->get();
        $address = DB::table('tbl_address')
                        ->where('user_id', auth()->id())
                        ->where('default_address', 1)
                        ->get();

        return response()->json([
            'success' => true,
            'message' => 'User information',
            'data' => $user,
            'orders' => $orders,
            'wishlist' => $wishlist,
            'address' => $address,
        ]);
    }

    public function categories()
    {

        # code...
        $products = Category::all();

        $this->response['message'] = 'success';
        $this->response['data'] = $products;

        return response()->json($this->response, 200);
    }
}
