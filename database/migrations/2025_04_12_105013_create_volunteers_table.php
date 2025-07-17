<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('volunteers', function (Blueprint $table) {
            $table->id();
            $table->string('engagement_type');
            $table->string('full_name');
            $table->string('contact_person')->nullable();
            $table->string('email');
            $table->string('phone')->nullable();
            $table->string('location')->nullable();
            $table->string('preferred_role')->nullable();
            $table->string('availability')->nullable();
            $table->text('skills_experience')->nullable();
            $table->string('cv_path')->nullable(); // For uploaded CV/Resume
            $table->text('volunteering_reason')->nullable();
            $table->boolean('information_accurate')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('volunteers');
    }
};
