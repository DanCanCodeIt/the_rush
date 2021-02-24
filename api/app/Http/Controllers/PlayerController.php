<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Laravel\Lumen\Routing\Controller as BaseController;

class PlayerController extends BaseController
{
    public function get(Request $request) {
        $sortBy = $request->get('sort_by');
        $name = $request->get('name');
        $dir = $request->get('dir') ?? 'ASC';

        $queryModel = DB::table('players');
    
        if ($sortBy) $queryModel->orderBy($sortBy, $dir);
        if ($name) $queryModel->where('player', 'LIKE', "%$name%");

        return $queryModel->paginate(20);
    }
}
