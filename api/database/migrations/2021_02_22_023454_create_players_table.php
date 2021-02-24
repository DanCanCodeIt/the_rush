<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlayersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('players', function (Blueprint $table) {
            $table->string('player');
            $table->string('team');
            $table->string('pos');
            $table->integer('att_g');
            $table->integer('att');
            $table->integer('yds');
            $table->integer('avg');
            $table->integer('yds_g');
            $table->integer('td');
            $table->string('lng');
            $table->integer('first');
            $table->integer('first_percent');
            $table->integer('twenty_plus_rush');
            $table->integer('fourty_plush_rush');
            $table->integer('fum');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('players');
    }
}
