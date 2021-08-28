<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\HomeBanner;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    public function getHomeBanner(Request $request)
    {
        // init
        $getSessionId = \DB::table('tbl_session')->first();

        if ($request->get('session_id') == $getSessionId->session_id) {
           $data = \DB::table('tbl_home_banner')->get();
        
            return response()->json([
                    'status' => 200,
                    'msg' => 'success',
                    'data' => HomeBanner::collection($data),
            ]);
        }else {
             return response()->json([
                    'status' => 404,
                    'msg' => 'false',
                    'data' => $request->get('session_id'),
            ]);
        }

        
    }
}
