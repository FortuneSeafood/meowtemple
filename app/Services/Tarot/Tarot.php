<?php
namespace App\Services\Tarot;

use App\Repositories\Meow\Tarot as TarotRepository;

/**
 * Tarot class
 */
class Tarot
{
    private $oTarotRepository;
    /**
     * 建構子
     *
     * @param TarotRepository $_oTarot
     */
    public function __construct(TarotRepository $_oTarot)
    {
        $this->oTarotRepository = $_oTarot;
    }
    /**
     * 抽塔羅牌
     *
     * @param [int] $_iSystemID 體系編號
     * @param [int] $_iCards    要抽的數量
     * @return array
     */
    public function draw($_iSystemID, $_iCards): array
    {

        $aDeck = $this->oTarotRepository->getDeck($_iSystemID);
        $iCardsNumber = count($aDeck);
        for ($i = 0; $i < $_iCards; $i++) {
            $iSelectCard = rand(0, $iCardsNumber - 1);
            $aCards[$i] = $aDeck[$iSelectCard];
            $aCards[$i]['cardInfo'] = $this->selectUprightOrReversed($aCards[$i]);
        }
        return $aCards;
    }
    /**
     * 選擇正位或逆位
     *
     * @param [arrat] $_aCard 牌
     * @return array
     */
    public function selectUprightOrReversed($_aCard): array
    {
        $iIsReversed = rand(0, 1);
        $aCardMeanings = json_decode($_aCard['cardMeanings'], true);
        if ($iIsReversed) {
            $aCardInfo['reversed'] = $aCardMeanings['reversed'];
        } else {
            $aCardInfo['upright'] = $aCardMeanings['upright'];
        }
        return $aCardInfo;
    }

}
