<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Order;
use App\User;
use App\Product;
use App\OrderProduct;
use App\Mail\OrderPlaced;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\CheckoutRequest;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client as GuzzleClient;
use GuzzleHttp\Exception\ServerException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class CheckoutController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $phone_number = phoneNumber(auth('api')->user()->phone);
        $getAddress = \DB::table('tbl_address')->where('default_address', 1)->where('user_id', auth('api')->id())->first();
        $getCart = \DB::table('tbl_shopping_cart')->where('user_id', auth('api')->id())->get();
        $checkProduct = array();

        $validator = Validator::make($request->all(), [
           'amount'   => 'required|numeric', 
        ]);


        if ($validator->fails()) {

            return response()->json([
                'success' => false,
                'message' => 'Echec de validation'
            ], 400);

        }

        if ($getAddress == null) {
           return response()->json([
                'success' => false,
                'message' => 'Echec de la commande vous n\'avez pas d\'adresse de livraison!',
                'data' => $getAddress
            ], 400);
        }

         // return $getCart;

        $request->merge([
            'user_id'                   => auth('api')->user() ? auth('api')->id() : null,
            'email'                     => auth('api')->user()->email,
            'name'                      => $getAddress->recipient_name,
            'address'                   => $getAddress->address_line1,
            'city'                      => $getAddress->state,
            'phone'                     => phoneNumber($getAddress->phone_number),
            'country'                   => $getAddress->country,
            'payment_gateway'           => $request->payment_gateway ?? 'epay',
            'Reference'                 => uniqid(),
            'paymentStatus'             => 'pending',
            'shipped'                   => false,
            'pin_code'                  => rand(100000, 999999),
            'shoppingcart'              => $getCart
        ]);

        // return $request->shoppingcart;
        foreach($request->shoppingcart as $prod => $k){
            $checkProduct[] = $k->product_id;
        }

        $countProduct = count($checkProduct);

        $resultProduct = Product::find($checkProduct);

        if(count($resultProduct) != $countProduct){
            return response()->json([
                'success' => false,
                'message' => 'Echec un de vos produit n\'est plus valide!',
                'data' => []
            ], 400);
        }

        if ($request->shoppingcart->isEmpty()) {
            
            // if ($request->shoppingcart->product_id->) {
            //    return response()->json([
            //         'success' => false,
            //         'message' => 'Echec de la commande vous n\'avez pas d\'adresse de livraison!',
            //         'data' => $getAddress
            //     ], 400);
            // }
            return response()->json([
                'success' => false,
                'message' => 'Echec de la commande votre panier est vide!',
                'data' => $request->shoppingcart
            ], 400);
        }

        
       try{
            $order = $this->addToOrdersTables($request, null);
            Mail::send(new OrderPlaced($order));
            
            return response()->json([
                'success'           => true,
                'message'           => 'Votre commande à bien été enregistrer',
                'data'              => $order,
                'payment_data_epay' => Epay($request),  
            ], 200);
       }catch(\Exception $e){
            return response()->json([
                'success' => false,
                'message' => 'Echec de la commande',
                'data' => $e
            ], 400);
       }
        
    }


    protected function addToOrdersTables($request, $error)
    {

        // inserez la commandes dans la base de donnees
        // return $request->all();
      $order = Order::create([
        'user_id'                   => auth()->user() ? auth()->user()->id : null,
        'billing_email'             => $request->email,
        'billing_name'              => $request->name,
        'billing_adress'            => $request->address,
        'billing_city'              => $request->city,
        'billing_country'           => $request->country,
        'billing_phone'             => $request->phone,
        'transaction_id'            => $request->Reference,
        'billing_discount'          => getNumbers()->get('discount'),
        'billing_discount_code'     => getNumbers()->get('code'),
        'billing_subtotal'          => $request->amount,
        'billing_tax'               => getNumbers()->get('newTax'),
        'billing_total'             => $request->amount,
        'payment_gateway'           => $request->payment_gateway,
        'paymentStatus'             => $request->paymentStatus,
        'shipped'                   => $request->shipped,
        'error'                     => $error,
        'pin_code'                  => null,

    ]);

    
    // $getOrder = Order::where('transaction_id', $order->transaction_id)->first();

    // Boucle d'insertion de chaque produits dans la table ORDER_PRODUCT
      foreach ($request->shoppingcart as $item) {
         OrderProduct::create([
            'order_id' => $order->id,
            'product_id' => $item->product_id,
            'quantity' => $item->qty,
        ]);
     }

     return $order;
 }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
