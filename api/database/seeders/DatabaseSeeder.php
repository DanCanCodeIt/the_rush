<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    const SEED_FILE_PATH = __DIR__ . "/rushing.json";

    public function run()
    {
        $decodedFile = json_decode(file_get_contents(self::SEED_FILE_PATH), true);

        foreach ($decodedFile as $playerInput) {
            $player = [
                'player' => $playerInput["Player"],
                'team' => $playerInput['Team'],
                'pos' => $playerInput['Pos'],
                'att' => $playerInput['Att'],
                'att_g' => $playerInput['Att/G'],
                'yds' => (int)$playerInput['Yds'],
                'avg' => $playerInput['Avg'],
                'yds_g' => $playerInput['Yds/G'],
                'td' => $playerInput['TD'],
                'lng' => (string)$playerInput['Lng'],
                'first' => $playerInput['1st'],
                'first_percent' => $playerInput['1st%'],
                'twenty_plus_rush' => $playerInput['20+'],
                'fourty_plush_rush' => $playerInput['40+'],
                'fum' => $playerInput['FUM']
            ];
            DB::table('players')->insert($player);
        }
    }
}
