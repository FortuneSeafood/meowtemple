<?php
namespace App\Services\Dream;
use App\Repositories\Meow\Dream as DreamRepository;
/**
 * Tarot class
 */
class Dream
{
    private $oDreamRepository;
    /**
     * 建構子
     *
     * @param DreamRepository $_oDream
     */
    public function __construct(DreamRepository $_oDream)
    {
        $this->oDreamRepository = $_oDream;
    }
    /**
     * 抽塔羅牌
     *
     * @param [int] $_iDreamID  夢境編號
     * @return array
     */
    public function getDreamData($_iDreamID): array
    {
        $aDream = $this->oDreamRepository->getDream($_iDreamID);

        return $aDream;
    }
}