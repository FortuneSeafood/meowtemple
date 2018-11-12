<?php
namespace App\Repositories\Meow;

use App\Models\Meow\Lottery as LotteryModel;

class Lottery
{
    private $oLotteryModel;
    /**
     * 建構子
     *
     * @param LotteryModel $_oModel
     */
    public function __construct(LotteryModel $_oModel)
    {
        $this->oLotteryModel = $_oModel;
    }
    /**
     * 取籤
     *
     * @param [int] $_iLotteryID 籤號
     * @return array
     */
    public function getLottery(int $_iLotteryID)
    {
        return $this->oLotteryModel->where('ID', $_iLotteryID)->get()->toArray();
    }
}
