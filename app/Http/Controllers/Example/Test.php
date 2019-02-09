<?php
namespace App\Http\Controllers\Example;

use App\Exceptions\Example\ExampleTestException;
use App\Http\Controllers\Controller;
use App\Model\Example\TestModel;
use App\Repositories\Example\Test as TestRepositories;
use App\Services\Example\TestService;
use DB;
use Illuminate\Http\Request;
use Redis;
use Validator;

class Test extends Controller
{

    ## http get test + service注入
    ## 點燈防
    public function testGetAndService(Request $_oRequest)
    {
        echo $_oRequest->input('abc');
        echo 'Test1';
    }

    public function testGetDB(Request $_oRequest)
    {
        $oResult2 = DB::connection('meow')->select('SELECT * FROM user_info WHERE userID = :id', ['id' => 1]);
        dd($oResult2);
        // echo 'Test1';
    }

    public function testVue(Request $_oRequest)
    {
        return response()->json([
            'result' => true,
            'data' => 'It\'s Data',
        ]);
    }
}