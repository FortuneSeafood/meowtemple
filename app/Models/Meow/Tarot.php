<?php
namespace App\Models\Meow;


use Illuminate\Database\Eloquent\Model;

class Tarot extends Model
{
    protected $connection = 'meow';
    protected $table = "Tarot";

    public $timestamps = false;
}
