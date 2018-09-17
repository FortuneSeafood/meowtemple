<?php
namespace App\Repositories\Meow;
use App\Models\Meow\DreamInfo as DreamModel;
/**
 * 塔羅牌資料庫
 */
class Dream
{
    private $oDreamModel;
    /**
     * 建構子
     *
     * @param DreamModel $_oTarot
     */
    public function __construct(DreamModel $_oDream)
    {
        $this->oDreamModel = $_oDream;
    }
    /**
     * 取夢境說明
     *
     * @param [int] $_iDreamID 夢境編號
     * @return void
     */
    public function getDream($_iDreamID)
    {
        return $this->oDreamModel->where('ID', $_iDreamID)->get()->toArray();
    }
}