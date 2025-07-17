<?php

use App\Http\Controllers\Admin\ContentController;
use App\Http\Controllers\MaintenanceController;
use App\Http\Controllers\Web\WebController;
use Illuminate\Support\Facades\Route;

// Website routes
Route::controller(WebController::class)->group(function () {
    Route::get('/', 'home')->name('home');
    Route::get('/about', 'about')->name('about');
    Route::get('/programs', 'programs')->name('programs');
    Route::get('/programs/economic-empowerment', 'economic_empowerment')->name('programs.economic');
    Route::get('/programs/advocacy-leadership', 'advocacy_leadership')->name('programs.advocacy');
    Route::get('/programs/health-wellbeing', 'health_wellbeing')->name('programs.health');
    Route::get('/programs/education-skills', 'education_skills')->name('programs.education');
    Route::get('/programs/{slug}', 'program_details')->name('programs.program');

    Route::get('/news-and-events', 'news_and_events')->name('news_and_events');
    Route::get('/news-and-events/{type}/{slug}', 'news_or_events_details')->name('news_or_events_details');
    Route::get('/resources', 'resources')->name('resources');
    Route::post('/resources/download/{resource}', 'resource_download')->name('resource.download');
    Route::get('/resources/annual-report', 'annual_report')->name('annual_report');
    Route::get('/contact-us', 'contact_us')->name('contact_us');
    Route::get('/contact-us/partner', 'partner')->name('partner');
    Route::get('/contact-us/volunteer', 'volunteer')->name('volunteer');
    Route::get('/contact-us/membership', 'membership')->name('membership');
    Route::get('/contact-us/whistleblower', 'whistleblower')->name('whistleblower');

    Route::get('/donate', 'donate')->name('donate');
    Route::get('/shop', 'shop')->name('shop');

    // forms
    Route::get('/forms/membership', 'membership_form')->name('membership_form');
    Route::post('/forms/membership', 'membership_form_save')->name('membership_form.save');
    Route::get('/forms/volunteer', 'volunteer_form')->name('volunteer_form');
    Route::post('/forms/volunteer', 'volunteer_form_save')->name('volunteer_form.save');
    Route::get('/forms/partnership', 'partner_form')->name('partner_form');
    Route::post('/forms/partnership', 'partner_form_save')->name('partner_form.save');
});

// Admin routes
Route::prefix('panel')->group(function () {

    Route::controller(ContentController::class)->group(function () {
        // newsletters
        Route::match(['get', 'post', 'delete'], '/newsletter', 'newsletters')->name('newsletters');
        // whistlblower
        Route::match(['get', 'post', 'delete'], '/whistleblowing', 'whistleblower')->name('whistleblowers');
        // contact
        Route::match(['get', 'post', 'delete'], '/contact', 'contact')->name('contact');

        // need auth
        Route::middleware(['auth', 'verified'])->group(function () {
            Route::get('/', 'dashboard')->name('dashboard');
            // gallery (photos and videos)
            Route::match(['get', 'post', 'delete', 'patch'], '/gallery', 'gallery')->name('gallery');
            // training manuals
            Route::match(['get', 'post', 'delete', 'patch'], '/training-manuals', 'training_manuals')->name('training_manuals');
            Route::post('/training-manuals/{id}', 'training_manuals_update')->name('training_manuals.update');
            // reports
            Route::match(['get', 'post', 'delete', 'patch'], '/reports', 'reports')->name('reports');
            // news-and-events
            Route::match(['get', 'post', 'delete', 'patch'], '/news-and-events', 'news_and_events')->name('news_and_events');
            // Route::get('/about', 'about')->name('about');
            // team
            Route::match(['get', 'post', 'delete', 'patch'], '/about/teams', 'team')->name('teams');
            Route::post('/about/teams/update', 'team_update')->name('teams.update');
            // testimonies
            Route::match(['get', 'post', 'delete', 'patch'], '/about/testimonies', 'testimonies')->name('testimonies');
            // faqs
            Route::match(['get', 'post', 'delete', 'patch'], '/about/faqs', 'faqs')->name('faqs');
            // story-video
            Route::match(['get', 'post', 'delete', 'patch'], '/about/story-video', 'story_video')->name('story_video');
            Route::post('/about/story-video/{id}', 'story_video_update')->name('story_video.update');

            // form submissions
            Route::get('/submissions', 'form_submissions')->name('form_submissions');
            Route::delete('/submissions/{type}/{id}', 'form_submission_destroy')->name('form_submission_destroy');
        });
    });

    // maintenance mode
    Route::get('/settings/maintenance', [MaintenanceController::class, 'index'])->name('maintenance.index');
    Route::post('/settings/maintenance/toggle/{value}', [MaintenanceController::class, 'toggle'])->name('maintenance.toggle');
    require __DIR__ . '/settings.php';
});

require __DIR__ . '/auth.php';
