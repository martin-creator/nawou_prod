<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AnnualReport;
use App\Models\BlogOrNews;
use App\Models\Contact;
use App\Models\FAQ;
use App\Models\Gallery;
use App\Models\Memberships;
use App\Models\Newsletter;
use App\Models\Partnerships;
use App\Models\StoryVideo;
use App\Models\Team;
use App\Models\Testimonial;
use App\Models\TrainingManual;
use App\Models\Volunteers;
use App\Models\Whistleblower;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContentController extends Controller
{

    public function dashboard()
    {
        $newsletters = Newsletter::count();
        $whistle     = Whistleblower::count();
        $contact     = Contact::count();
        $manuals     = TrainingManual::count();
        $events      = BlogOrNews::count();
        $teams       = Team::count();
        $reports     = AnnualReport::count();

        return Inertia::render('admin/panel', [
            'newsletters' => $newsletters,
            'whistle'     => $whistle,
            'contact'     => $contact,
            'manuals'     => $manuals,
            'events'      => $events,
            'teams_'      => $teams,
            'reports_'    => $reports,
        ]);
    }

    // newsletters post and get
    public function newsletters(Request $request)
    {
        if ($request->isMethod('post')) {
            // validate request
            $validated = $request->validate([
                'email' => 'required|email|unique:newsletters',
                'name'  => 'required|string',
            ]);

            // save to database
            Newsletter::create($validated);

            return redirect()->back()->with('success', 'You have successfully subscribed to our newsletter');
        } elseif ($request->isMethod('delete')) {
            // validate request
            $id = $request->input('id');

            // delete from database
            Newsletter::destroy($id);

            return redirect()->back()->with('success', 'A contact has been deleted successfully');
        } else {
            $newsletters = Inertia::defer(fn() => Newsletter::latest()->get());
            return Inertia::render('admin/newsletters', ['newsletters' => $newsletters]);
        }
    }

    // whistleblowers post and get
    public function whistleblower(Request $request)
    {
        // name, email, what_happened, where_it_happened, who_was_involved, evidence_file
        if ($request->isMethod('post')) {
            // validate request
            $validated = $request->validate([
                'name'              => 'nullable|string',
                'email'             => 'nullable|email',
                'what_happened'     => 'required|string',
                'where_it_happened' => 'required|string',
                'who_was_involved'  => 'required|string',
                'evidence_file'     => 'nullable|file|mimes:pdf,doc,docx,image|max:2048', // 2MB and pdf, doc, docx, image
            ]);

            // Handle file upload if exists
            if ($request->hasFile('evidence_file')) {
                $validated['evidence_file'] = $request->file('evidence_file')->store('evidence_files', 'public');
            }

            // save to database
            Whistleblower::create($validated);

            return redirect()->back()->with('success', 'Your report has been submitted successfully');
        } elseif ($request->isMethod('delete')) {
            // validate request
            $id = $request->input('id');

            // delete from database
            Whistleblower::destroy($id);

            return redirect()->back()->with('success', 'Message has been deleted successfully');
        } else {
            $whistleblowers = Inertia::defer(fn() => Whistleblower::latest()->get());
            return Inertia::render('admin/whistleblower', ['whistleblowers' => $whistleblowers]);
        }
    }

    // contact post and get
    public function contact(Request $request)
    {
        if ($request->isMethod('post')) {
            // validate request, nmame, email, message (no html or script)
            $validated = $request->validate([
                'name'    => 'required|string',
                'email'   => 'required|email',
                'message' => 'required|string',
            ]);

            // save to database
            Contact::create($validated);

            return redirect()->back()->with('success', 'Your message has been submitted successfully');
        } elseif ($request->isMethod('delete')) {
            // validate request
            $id = $request->input('id');

            // delete from database
            Contact::destroy($id);

            return redirect()->back()->with('success', 'Message has been deleted successfully');
        } else {
            $contacts = Inertia::defer(fn() => Contact::latest()->get());
            return Inertia::render('admin/contact', ['contacts' => $contacts]);
        }
    }

    // gallery (image & video) post and get
    public function gallery(Request $request)
    {
        // url, caption, type (image, video)
        if ($request->isMethod('post')) {
            // validate request
            $validated = $request->validate([
                'url'        => 'required',
                'caption'    => 'required|string',
                'type'       => 'required|in:image,video',
                'banner_url' => 'nullable|file',
            ]);

            if ($request->hasFile('url')) {
                $validated['url'] = $request->file('url')->store('galleries', 'public');
            }

            if ($request->hasFile('banner_url')) {
                $validated['banner_url'] = $request->file('banner_url')->store('banners', 'public');
            }

            // save to database
            Gallery::create($validated);

            return redirect()->back()->with('success', 'Your gallery item has been submitted successfully');
        } elseif ($request->isMethod('patch')) {
            $id = $request->input('id');
            // validate request
            $validated = $request->validate([
                'caption' => 'required|string',
                'type'    => 'required|in:image,video',
            ]);

            if ($request->hasFile('url')) {
                $validated['url'] = $request->file('url')->store('galleries', 'public');
            }

            if ($request->hasFile('banner_url')) {
                $validated['banner_url'] = $request->file('banner_url')->store('banners', 'public');
            }

            // update database
            Gallery::find($id)->update($validated);

            return redirect()->back()->with('success', 'Your gallery item has been updated successfully');
        } elseif ($request->isMethod('delete')) {
            // validate request
            $id = $request->input('id');

            // delete from database
            Gallery::destroy($id);

            return redirect()->back()->with('success', 'Your gallery item has been deleted successfully');
        } else {
            $galleries = Inertia::defer(fn() => Gallery::latest()->paginate(8));
            return Inertia::render('admin/gallery', ['galleries' => $galleries]);
        }
    }

    // training manuals post and get
    public function training_manuals(Request $request)
    {
        // url, caption, type (image, video)
        if ($request->isMethod('post')) {
            // validate request
            $validated = $request->validate([
                'file'        => 'required|file|mimes:pdf,doc,docx',
                'image'       => 'nullable|file|mimes:jpeg,png,jpg|max:2048',
                'title'       => 'required|string',
                'description' => 'required|string',
            ]);

            $validated['file'] = $request->file('file')->store('training_manuals', 'public');
            if ($request->hasFile('image')) {
                $validated['image'] = $request->file('image')->store('training_manuals', 'public');
            }

            // save to database
            TrainingManual::create($validated);

            return redirect()->back()->with('success', 'Your training manual has been submitted successfully');
        } elseif ($request->isMethod('patch')) {
            $id = $request->input('id');
            // validate request
            $validated = $request->validate([
                'title'       => 'required|string',
                'description' => 'required|string',
            ]);

            if ($request->hasFile('file')) {
                $validated['file'] = $request->file('file')->store('training_manuals', 'public');
            }

            if ($request->hasFile('image')) {
                $validated['image'] = $request->file('image')->store('training_manuals', 'public');
            }

            // update database
            TrainingManual::find($id)->update($validated);

            return redirect()->back()->with('success', 'Your training manual has been updated successfully');
        } elseif ($request->isMethod('delete')) {
            // validate request
            $id = $request->input('id');

            // delete from database
            TrainingManual::destroy($id);

            return redirect()->back()->with('success', 'Your training manual has been deleted successfully');
        } else {
            $training_manuals = Inertia::defer(fn() => TrainingManual::latest()->get());
            return Inertia::render('admin/training_manuals', ['training_manuals' => $training_manuals]);
        }
    }

    // training_manuals_update
    public function training_manuals_update(Request $request, $id)
    {
        // validate request 'video'
        $validated = $request->validate([
            'title'       => 'required|string',
            'description' => 'required|string',
        ]);

        if ($request->hasFile('file')) {
            $validated['file'] = $request->file('file')->store('training_manuals', 'public');
        }

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('training_manuals', 'public');
        }

        // update database
        TrainingManual::find($id)->update($validated);

        return redirect()->back()->with('success', 'Story video has been updated successfully');
    }

    // reports post and get
    public function reports(Request $request)
    {
        if ($request->isMethod('post')) {
            // validate request
            $validated = $request->validate([
                'report_file'   => 'required|file|mimes:pdf,doc,docx',
                'year'          => 'required|integer',
                'key_impacts'   => 'required|array',
                'key_impacts.*' => 'required',
            ]);

            $validated['report_file'] = $request->file('report_file')->store('reports', 'public');
            if ($request->hasFile('image')) {
                $validated['image'] = $request->file('image')->store('reports', 'public');
            }

            // save to database
            AnnualReport::create($validated);

            return redirect()->back()->with('success', 'Your report has been submitted successfully');
        } elseif ($request->isMethod('patch')) {
            $id = $request->input('id');
            // validate request
            $validated = $request->validate([
                'year'          => 'required|integer',
                'key_impacts'   => 'required|array',
                'key_impacts.*' => 'required',
            ]);

            if ($request->hasFile('report_file')) {
                $validated['report_file'] = $request->file('report_file')->store('reports', 'public');
            }

            // update database
            AnnualReport::find($id)->update($validated);

            return redirect()->back()->with('success', 'Your report has been updated successfully');
        } elseif ($request->isMethod('delete')) {
            // validate request
            $id = $request->input('id');

            // delete from database
            AnnualReport::destroy($id);

            return redirect()->back()->with('success', 'Your report has been deleted successfully');
        } else {
            $reports = Inertia::defer(fn() => AnnualReport::latest()->get());
            return Inertia::render('admin/reports', ['reports' => $reports]);
        }
    }

    // news_and_events
    public function news_and_events(Request $request)
    {
        if ($request->isMethod('post')) {
            // validate request
            $validated = $request->validate([
                'title'         => 'required|string',
                'description'   => 'required|string',
                'image'         => 'required|file|mimes:jpeg,png,jpg|max:2048',
                'type'          => 'required|in:events,news',
                'event_date'    => 'nullable|date',
                'location'      => 'nullable|string',
                'register_link' => 'nullable|url',
            ]);

            $validated['image'] = $request->file('image')->store('news_and_events', 'public');

            // save to database
            BlogOrNews::create($validated);

            return redirect()->back()->with('success', 'Your news or event has been submitted successfully');
        } elseif ($request->isMethod('delete')) {
            // validate request
            $id = $request->input('id');

            // delete from database
            BlogOrNews::destroy($id);

            return redirect()->back()->with('success', 'Your news or event has been deleted successfully');
        } elseif ($request->isMethod('patch')) {
            $id = $request->input('id');
            // validate request
            $validated = $request->validate([
                'title'         => 'required|string',
                'description'   => 'required|string',
                'type'          => 'required|in:events,news',
                'event_date'    => 'nullable|date',
                'location'      => 'nullable|string',
                'register_link' => 'nullable|url',
            ]);

            if ($request->hasFile('image')) {
                $validated['image'] = $request->file('image')->store('news_and_events', 'public');
            }

            // update database
            BlogOrNews::find($id)->update($validated);

            return redirect()->back()->with('success', 'Your news or event has been updated successfully');
        } else {
            $news_and_events = Inertia::defer(fn() => BlogOrNews::latest()->get());
            return Inertia::render('admin/news_and_events', ['news_and_events' => $news_and_events]);
        }
    }

    // about
    public function about(Request $request)
    {
        $teams = Inertia::defer(fn() => Team::latest()->get());
        return Inertia::render('admin/about', ['teams' => $teams]);
    }

    // team
    public function team(Request $request)
    {
        if ($request->isMethod('post')) {
            // validate request 'name','title','avatar','type','description'
            $validated = $request->validate([
                'name'        => 'required|string',
                'title'       => 'required|string',
                'avatar'      => 'required|file|mimes:jpeg,png,jpg|max:2048',
                'type'        => 'required|string',
                'description' => 'required|string',
            ]);

            $validated['avatar'] = $request->file('avatar')->store('teams', 'public');

            // save to database
            Team::create($validated);

            return redirect()->back()->with('success', 'Team member has been added successfully');
        } elseif ($request->isMethod('delete')) {
            // validate request
            $id = $request->input('id');

            // delete from database
            Team::destroy($id);

            return redirect()->back()->with('success', 'Your news or event has been deleted successfully');
        } else {
            $teams = Inertia::defer(fn() => Team::orderBy('id', 'asc')->get());
            return Inertia::render('admin/about/team', ['teams' => $teams]);
        }
    }

    // team_update
    public function team_update(Request $request)
    {
        $id = $request->input('id');
        // validate request 'name','title','avatar','type','description'
        $validated = $request->validate([
            'name'        => 'required|string',
            'title'       => 'required|string',
            'type'        => 'required|string',
            'description' => 'required|string',
        ]);

        if ($request->hasFile('avatar')) {
            $validated['avatar'] = $request->file('avatar')->store('teams', 'public');
        }

        // update database
        Team::find($id)->update($validated);

        return redirect()->back()->with('success', 'Team member has been updated successfully');
    }

    // testimonies
    public function testimonies(Request $request)
    {
        if ($request->isMethod('post')) {
            // validate request 'message','person_name','person_avatar',person_title
            $validated = $request->validate([
                'message'       => 'required|string',
                'person_name'   => 'required|string',
                'person_avatar' => 'required|file|mimes:jpeg,png,jpg|max:2048',
                'person_title'  => 'required|string',
            ]);

            $validated['person_avatar'] = $request->file('person_avatar')->store('testimonies', 'public');

            // save to database
            Testimonial::create($validated);

            return redirect()->back()->with('success', 'Testimony has been added successfully');
        } elseif ($request->isMethod('patch')) {
            $id = $request->input('id');
            // validate request 'message','person_name','person_avatar',person_title
            $validated = $request->validate([
                'message'      => 'required|string',
                'person_name'  => 'required|string',
                'person_title' => 'required|string',
            ]);

            if ($request->hasFile('person_avatar')) {
                $validated['person_avatar'] = $request->file('person_avatar')->store('testimonies', 'public');
            }

            // update database
            Testimonial::find($id)->update($validated);

            return redirect()->back()->with('success', 'Testimony has been updated successfully');
        } elseif ($request->isMethod('delete')) {
            // validate request
            $id = $request->input('id');

            // delete from database
            Testimonial::destroy($id);

            return redirect()->back()->with('success', 'Your testimony has been deleted successfully');
        } else {
            $testimonies = Inertia::defer(fn() => Testimonial::latest()->get());
            return Inertia::render('admin/about/testimonies', ['testimonies' => $testimonies]);
        }
    }

    // faqs
    public function faqs(Request $request)
    {
        if ($request->isMethod('post')) {
            // validate request 'question','answer'
            $validated = $request->validate([
                'question' => 'required|string',
                'answer'   => 'required|string',
            ]);

            // save to database
            FAQ::create($validated);

            return redirect()->back()->with('success', 'FAQ has been added successfully');
        } elseif ($request->isMethod('patch')) {
            $id = $request->input('id');
            // validate request 'question','answer'
            $validated = $request->validate([
                'question' => 'required|string',
                'answer'   => 'required|string',
            ]);

            // update database
            FAQ::find($id)->update($validated);

            return redirect()->back()->with('success', 'FAQ has been updated successfully');
        } elseif ($request->isMethod('delete')) {
            // validate request
            $id = $request->input('id');

            // delete from database
            FAQ::destroy($id);

            return redirect()->back()->with('success', 'Your FAQ has been deleted successfully');
        } else {
            $faqs = Inertia::defer(fn() => FAQ::latest()->get());
            return Inertia::render('admin/about/faqs', ['faqs' => $faqs]);
        }
    }

    // story_video
    public function story_video(Request $request)
    {
        if ($request->isMethod('post')) {
            // validate request 'video'
            $validated = $request->validate([
                'video' => 'required',
                'page'  => 'required|in:home,about,donation|unique:story_videos,page',
            ]);

            if ($request->hasFile('video')) {
                $validated['video'] = $request->file('video')->store('story_videos', 'public');
            }

            // save to database
            StoryVideo::create($validated);

            return redirect()->back()->with('success', 'Story video has been added successfully');
        } elseif ($request->isMethod('delete')) {
            // validate request
            $id = $request->input('id');

            // delete from database
            StoryVideo::destroy($id);

            return redirect()->back()->with('success', 'Your story video has been deleted successfully');
        } else {
            $story_videos = Inertia::defer(fn() => StoryVideo::latest()->get());
            return Inertia::render('admin/about/video', ['videos' => $story_videos]);
        }
    }

    // story_video update
    public function story_video_update(Request $request, $id)
    {
        // validate request 'video'
        $validated = $request->validate([
            'video' => 'required',
        ]);

        if ($request->hasFile('video')) {
            $validated['video'] = $request->file('video')->store('story_videos', 'public');
        }

        // update database
        StoryVideo::find($id)->update($validated);

        return redirect()->back()->with('success', 'Story video has been updated successfully');
    }

    // form_submissions
    public function form_submissions(Request $request)
    {
        $voluteers   = Inertia::defer(fn() => Volunteers::latest()->get());
        $partners    = Inertia::defer(fn() => Partnerships::latest()->get());
        $memberships = Inertia::defer(fn() => Memberships::latest()->get());
        return Inertia::render('admin/submissions',
            [
                'volunteers'  => $voluteers,
                'partners'    => $partners,
                'memberships' => $memberships,
            ]
        );
    }

    // form_submission_destroy
    public function form_submission_destroy(Request $request, $type, $id)
    {
        // delete from database
        if ($type == 'volunteers') {
            Volunteers::destroy($id);
        } elseif ($type == 'partnerships') {
            Partnerships::destroy($id);
        } elseif ($type == 'memberships') {
            Memberships::destroy($id);
        }
    }

}
