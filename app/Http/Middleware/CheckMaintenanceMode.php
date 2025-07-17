<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CheckMaintenanceMode
{
    public function handle(Request $request, Closure $next)
    {
        $isMaintenance = DB::table('maintenance')->where('id', 1)->value('enabled');

        // Allow access to /panel/* even in maintenance mode
        if (str_starts_with($request->path(), 'panel')) {
            return $next($request);
        }

        // Show maintenance page if enabled
        if ($isMaintenance) {
            abort(503);
        }

        return $next($request);
    }
}
