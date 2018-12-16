<?php
namespace App\Models\Meow;

use Illuminate\Database\Eloquent\Model;

class Lottery extends Model
{
    protected $connection = 'meow';
    protected $table = "Lottery";
    public $timestamps = false;
}
