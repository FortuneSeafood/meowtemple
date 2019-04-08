<?php
namespace App\Http\Controllers\Dream;

use App\Http\Controllers\Controller;

class Main extends Controller
{
    /**
     * 建構子
     *
     * @param Lottery $_oLottery
     */
    public function __construct()
    {
    }
    /**
     * 抽籤頁面
     */
    public function index()
    {
        return view('dream');
    }
    /**
     * 抽一支籤
     *
     * @param [int] $_iLotteryID 籤號
     * @return json
     */
    public function get(int $_iLotteryID)
    {
        // $aData = $this->oLottery->draw($_iLotteryID);
        // return view('lottery', ['data' => json_encode($aData)]);
        // return response()->json([
        //     'result' => true,
        //     'data' => $aData
        // ]);
    }
}
