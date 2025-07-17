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
        Schema::create('partnerships', function (Blueprint $table) {
            $table->id();
            $table->string('engagement_type');
            $table->string('full_name');
            $table->string('contact_person')->nullable();
            $table->string('email');
            $table->string('phone')->nullable();
            $table->string('location')->nullable();
            $table->string('organization_type')->nullable();
            $table->string('partnership_area')->nullable();
            $table->string('mission_focus')->nullable();
            $table->string('proposal_path')->nullable(); // For uploaded partnership docs
            $table->text('collaboration_method')->nullable();
            $table->boolean('information_accurate')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('partnerships');
    }
};
