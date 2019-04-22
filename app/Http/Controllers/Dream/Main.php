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
     * 解夢頁面
     */
    public function index()
    {
        return view('dream');
    }
    /**
     * 取包含關鍵字的夢境清單
     *
     * @param [string] $_sKeywords 關鍵字
     * @return json
     */
    public function getList(string $_sKeywords)
    {
        $aData = array('孕婦夢見別人流血', '孕婦夢見別人送葡萄', '孕婦夢見被追殺', '孕婦夢見別人懷孕');
        return response()->json([
            'result' => true,
            'data' => $aData
        ]);
    }
    /**
     * 取關鍵字的夢境解析
     *
     * @param [string] $_sKeywords 關鍵字
     * @return json
     */
    public function getInfo(string $_sKeywords)
    {
        $aData = array(
            '孕婦夢見別人流血是什麼意思？孕婦夢見別人流血好不好？孕婦夢見別人流血有現實的影響和反應，也有夢者的主觀想像',
            '孕婦夢見別人流血，則是暗示身邊的朋友會有出現一些困難',
            ''
        );
        return response()->json([
            'result' => true,
            'data' => $aData
        ]);
    }
}
