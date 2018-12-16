<?php
namespace App\Services\Lottery;

use App\Repositories\Meow\Lottery as LotteryRepository;

class Lottery
{
    private $oLotteryRepository;
    /**
     * 建構子
     *
     * @param LotteryRepository $_oRepo
     */
    public function __construct(LotteryRepository $_oRepo)
    {
        $this->oLotteryRepository = $_oRepo;
    }
    public function draw(int $_iLotteryID): array
    {
        $_iLotteryID = ($_iLotteryID == 0) ? rand(1, 100) : $_iLotteryID;
        return $this->oLotteryRepository->getLottery($_iLotteryID);
    }
}
