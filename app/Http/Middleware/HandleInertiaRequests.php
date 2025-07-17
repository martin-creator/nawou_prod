<?php

namespace App\Http\Middleware;

use App\Models\AnnualReport;
use App\Models\BlogOrNews;
use App\Models\FAQ;
use App\Models\StoryVideo;
use App\Models\Team;
use App\Models\Testimonial;
use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        // make them available all the time

        [$message, $author] = str(Inspiring::quotes()->random())->explode('-');
        $reports = Inertia::defer(fn () => AnnualReport::orderBy('year','desc')->get());
        $news_and_events = Inertia::defer(fn () => BlogOrNews::latest()->get());
        $testimonials = Testimonial::latest()->get();
        $teams = Team::orderBy('id','asc')->get()->groupBy('type');
        $faqs = FAQ::latest()->get();
        $story_video = StoryVideo::latest()->get()->groupBy('page')->map->first();

        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'quote' => ['message' => trim($message), 'author' => trim($author)],
            'reports'=> $reports,
            'news_and_events'=> $news_and_events,
            'testimonials'=> $testimonials,
            'teams'=> $teams,
            'faqs'=> $faqs,
            'story_video'=> $story_video,
            'auth' => [
                'user' => $request->user(),
            ],
        ];
    }
}
