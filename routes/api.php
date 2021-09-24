<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Broadcast;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the 'api' middleware group. Enjoy building your API!
|
*/
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['prefix' => 'v1'], function () {
    Route::post('/','Api\HomeController@index');
    Broadcast::routes();

    //USER CONTROLLER
    Route::post('/login', 'Api\UserController@login');
    Route::post('/check', 'Api\UserController@checkUser');
    Route::post('/loginWithOtp', 'Api\UserController@loginWithOtp');
    Route::post('/sendOtp', 'Api\UserController@sendOtp');
    Route::post('/register', 'Api\UserController@register');
    Route::get('/product','Api\UserController@products');       
    Route::get('/category','Api\UserController@categories');


    //PRODUCT CONTROLLER
    Route::post('general/getRelatedProduct','Api\ProductController@getRelatedProduct');
    Route::post('general/getReview','Api\ProductController@getRelatedProduct');
    Route::post('home/getHomeTrending','Api\ProductController@getHomeTrending');
    Route::post('home/getLastSearch','Api\ProductController@getLastSearch');
    Route::post('home/getLastSearchInfinite','Api\ProductController@getLastSearchInfinite');
    Route::post('home/getRecomendedProduct','Api\ProductController@getRecomendedProduct');
    Route::post('getProductInfo','Api\ProductController@getProductInfo');
    

    //CATEGORY CONTROLLER
    Route::post('home/category/getCategory','Api\CategoryController@getCategory');
    Route::post('home/category/getCategoryAllProduct','Api\CategoryController@getCategoryAllProduct');
    Route::post('home/category/getCategoryBanner','Api\CategoryController@getCategoryBanner');
    Route::post('home/category/getCategoryForYou','Api\CategoryController@getCategoryForYou');
    Route::post('home/category/getCategoryTrendingProduct','Api\CategoryController@getCategoryTrendingProduct');
    Route::post('home/category/getCategoryNewProduct','Api\CategoryController@getCategoryNewProduct');

    //SEARCH CONTROLLER
    Route::post('home/search/getSearch','Api\SearchController@getSearch');
    Route::post('home/search/getSearchProduct','Api\SearchController@getSearch');

    //COUPON CONTROLLER
    Route::post('home/getCoupon','Api\CouponController@getCoupon');
    Route::post('home/getCouponDetail','Api\CouponController@getCouponDetail');

    //FLASH SALE CONTROLLER
    Route::post('home/getFlashsale','Api\FlashSaleController@getFlashsale');

    //BANNER CONTROLLER
    Route::get('home/getHomeBanner','Api\BannerController@getHomeBanner');

    //CART CONTROLLER
    Route::post('shopping_cart/getShoppingCart', 'Api\CartController@getShoppingCart');

    //WISHLIST CONTROLLER
    Route::post('wishlist/getWishlist', 'Api\WishlistController@getWishlist');
    
    
    Route::group(['middleware' => 'auth:api', 'web'], function () {
        Route::get('/logout','Api\UserController@logout');
        Route::get('/user','Api\UserController@getCurrentUser');
        Route::post('account/user/manage/store','Api\UserController@getUserStore');
        Route::post('account/user/update/profile','Api\UserController@updatePictureProfile');
        Route::post('account/user/product/lastSeen','Api\UserController@addProductLastSeen');
        Route::post('/account/user/new/product/review','Api\ProductController@productReview');
        Route::post('/account/user/save/search','Api\UserController@saveSearch');
        Route::post('/store/product/update','Api\ProductController@update');
        //ORDER AND LAST SEEN  ZONE
        Route::post('account/user/set/new/order','Api\CheckoutController@store');
        Route::post('account/getLastSeen','Api\UserController@getLastSeen');
        Route::post('account/getOrderList','Api\UserController@getOrderList');
        //ADDRESS ZONE
        Route::post('account/user/addAddress','Api\UserController@addAddress');
        Route::post('account/user/getDefaultAddress','Api\UserController@getDefaultAddress');
        Route::post('account/user/editAddress','Api\UserController@editAddress');
        Route::post('account/user/deleteAddress','Api\UserController@deleteAddress');
        Route::post('account/user/setDefaultAddress','Api\UserController@setDefaultAddress');
        //CART ZONE
        Route::post('account/cart/addToCart','Api\CartController@create');
        Route::post('account/cart/update','Api\CartController@update');
        Route::post('account/cart/delete','Api\CartController@destroy');
        //wishlist ZONE
        Route::post('account/user/addToWishList','Api\WishlistController@create');
        Route::post('account/user/checkWishList','Api\WishlistController@check');
        Route::post('account/user/removeFromWishList','Api\WishlistController@destroy');
        Route::post('account/user/store/add-new-product','Api\ProductController@store');
    });
});



