<?php
namespace App\Http\Controllers\Dream;
use App\Http\Controllers\Controller;
use App\Services\Dream\Dream as DreamService;
/**
 * 解夢
 */
class Explanation extends Controller
{
    private $oDreamService;
    public function __construct(DreamService $_oDream)
    {
        $this->oDreamService = $_oDream;
    }
    /**
     * 抽牌
     *
     * @param [int] $_iDreamID  解夢編號
     * @return void
     */
    public function explan($_iDreamID)
    {
        $aDreamData = $this->oDreamService->getDreamData($_iDreamID);
        return response()->json([
            'result' => true,
            'data' => $aDreamData,
        ]);
    }
}