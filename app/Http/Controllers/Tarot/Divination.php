<?php
namespace App\Http\Controllers\Tarot;

use App\Http\Controllers\Controller;
use App\Services\Tarot\Tarot;

/**
 * 塔羅牌占卜
 */
class Divination extends Controller
{
    private $oTarot;
    /**
     * 建構子
     *
     * @param Tarot $_oTarot
     */
    public function __construct(Tarot $_oTarot)
    {
        $this->oTarot = $_oTarot;
    }
    /**
     * 抽牌
     *
     * @param [int] $_iSystemID 體系編號
     * @param [int] $_iCards    要抽的數量
     * @return void
     */
    public function draw($_iSystemID, $_iCards)
    {
        $aCards = $this->oTarot->draw($_iSystemID, $_iCards);
        return response()->json([
            'result' => true,
            'data' => $aCards,
        ]);
    }
}
