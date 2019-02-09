<?php
namespace App\Http\Controllers\Lottery;

use App\Http\Controllers\Controller;
use App\Services\Lottery\Lottery;

class Divination extends Controller
{
    private $oLottery;
    /**
     * 建構子
     *
     * @param Lottery $_oLottery
     */
    public function __construct(Lottery $_oLottery)
    {
        $this->oLottery = $_oLottery;
    }
    /**
     * 抽籤頁面
     */
    public function index()
    {
        return view('lottery');
    }
    /**
     * 抽一支籤
     *
     * @param [int] $_iLotteryID 籤號
     * @return json
     */
    public function get(int $_iLotteryID)
    {
        $aData = $this->oLottery->draw($_iLotteryID);
        // return view('lottery', ['data' => json_encode($aData)]);
        return response()->json([
            'result' => true,
            'data' => $aData
        ]);
    }
}
