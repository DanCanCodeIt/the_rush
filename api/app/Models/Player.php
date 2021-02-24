<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    protected $table = "players";
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'player', 'team', "pos", "att_g", "att", "yds", "avg", "yds_g", "td", "lng", "first", "first_percent", "twenty_plus_rush", "fourty_plush_rush", "fum" 
    ];

}
