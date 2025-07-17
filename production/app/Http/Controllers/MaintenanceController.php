<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class MaintenanceController extends Controller {
    public function index() {
        $isMaintenance = DB::table('maintenance')->where('id', 1)->value('enabled') ?? false;

        return Inertia::render('settings/maintenance', [
            'isMaintenance' => $isMaintenance,
        ]);
    }

    public function toggle(Request $request, $value) {
        DB::table('maintenance')->updateOrInsert(['id' => 1], ['enabled' => $value]);
    }
}

