<?php
namespace App\Models\Meow;
use Illuminate\Database\Eloquent\Model;
class DreamInfo extends Model
{
    protected $connection = 'meow';
    protected $table = "DreamInfo";
    public $timestamps = false;
}