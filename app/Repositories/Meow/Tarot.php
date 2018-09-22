<?php
namespace App\Repositories\Meow;

use App\Models\Meow\Tarot as TarotModel;
/**
 * 塔羅牌資料庫
 */
class Tarot
{
    private $oTarotModel;
    /**
     * 建構子
     *
     * @param TarotModel $_oTarot
     */
    public function __construct(TarotModel $_oTarot)
    {
        $this->oTarotModel = $_oTarot;
    }
    /**
     * 取套牌
     *
     * @param [int] $_iSystemID 系統編號
     * @return void
     */
    public function getDeck($_iSystemID)
    {
        return $this->oTarotModel->where('systemID', $_iSystemID)->get()->toArray();
    }
}
