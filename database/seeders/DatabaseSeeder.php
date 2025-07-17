<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        try {
            User::factory()->create([
                'name' => 'nawou',
                'email' => 'nawouug@gmail.com',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
            ]);
        } catch (\Throwable $th) {
            // Display the error message
            echo "Error: " . $th->getMessage() . "\n";
            
            // Optionally log the error
            \Log::error("Database seeding failed: " . $th->getMessage());
        }
    }
    
}