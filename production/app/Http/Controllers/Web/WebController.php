<?php
namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\AnnualReport;
use App\Models\BlogOrNews;
use App\Models\Gallery;
use App\Models\Memberships;
use App\Models\Partnerships;
use App\Models\TrainingManual;
use App\Models\Volunteers;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WebController extends Controller
{
    /**
     * Home page
     */
    public function home()
    {
        return Inertia::render('web/home');
    }

    /**
     * About page
     */
    public function about()
    {
        return Inertia::render('web/about');
    }

    /**
     * Programs page
     */
    public function programs()
    {
        return Inertia::render('web/programs');
    }

    // program_details
    /**
     * Program details page
     */
    public function program_details($slug){
        return Inertia::render("web/programs/{$slug}");
    }

    /**
     * Economic Empowerment page
     */
    public function economic_empowerment()
    {
        return Inertia::render('web/programs/economic-empowerment');
    }

    /**
     * Advocacy Leadership page
     */
    public function advocacy_leadership()
    {
        return Inertia::render('web/programs/advocacy-leadership');
    }

    /**
     * Health and Wellbeing page
     */
    public function health_wellbeing()
    {
        return Inertia::render('web/programs/health-wellbeing');
    }

    /**
     * Education and Skills page
     */
    public function education_skills()
    {
        return Inertia::render('web/programs/education-skills');
    }

    /**
     * News and Events page
     */
    public function news_and_events()
    {
        return Inertia::render('web/news_and_events');
    }

    // news_or_events_details
    /**
     * News or Events details page
     */
    public function news_or_events_details($type, $slug)
    {
        $data    = BlogOrNews::where('slug', $slug)->first();
        $related = BlogOrNews::where('type', $type)->where('slug', '!=', $slug)->latest()->limit(3)->get();
        if (! $data) {
            abort(404);
        }
        // render event if type is events
        if ($type == 'events') {
            return Inertia::render('web/blog/event', [
                'slug'    => $slug,
                'event'   => $data,
                'related' => $related,
            ]);
        }
        // render news if type is news
        return Inertia::render('web/blog/post', [
            'slug'    => $slug,
            'post'    => $data,
            'related' => $related,
        ]);
    }

    /**
     * Resources page
     */
    public function resources()
    {
        $manuals = Inertia::defer(fn() => TrainingManual::latest()->get());
        $gallery = Inertia::defer(fn() => Gallery::latest()->get()->groupBy('type'));
        return Inertia::render('web/resources', [
            'manuals' => $manuals,
            'gallery' => $gallery,
        ]);
    }

    // resource_download
    /**
     * Download resource
     */
    public function resource_download(Request $request, TrainingManual $resource)
    {
        return $resource->downloadFile();
    }

    // annual_report
    /**
     * Annual Report page
     */
    public function annual_report(Request $request)
    {
        $reportId = $request->query('report');
        $report   = AnnualReport::find($reportId);
        if (! $report) {
            $report = AnnualReport::orderBy('year', 'desc')->first();
        }
        return Inertia::render('web/annual-report', [
            'report' => $report,
        ]);
    }

    // whistleblower
    /**
     * Whistleblower page
     */
    public function whistleblower()
    {
        return Inertia::render('web/whistleblower');
    }

    /**
     * Contact Us page
     */
    public function contact_us()
    {
        return Inertia::render('web/contact_us');
    }

    /**
     * Donate page
     */
    public function donate()
    {
        return Inertia::render('web/donate');
    }

    /**
     * Partner page
     */
    public function partner()
    {
        return Inertia::render('web/partner_with_us');
    }

    /**
     * Voluteer page
     */
    public function volunteer()
    {
        return Inertia::render('web/volunteer');
    }

    /**
     * Membership page
     */
    public function membership()
    {
        return Inertia::render('web/membership');
    }

    /**
     * Shop page
     */
    public function shop()
    {
        return Inertia::render('web/shop');
    }

    // membership_form
    /**
     * Membership form page
     */
    public function membership_form()
    {
        return Inertia::render('web/forms/membership');
    }

    /**
     * Membership form save
     */
    public function membership_form_save(Request $request)
    {
        $validated = $request->validate([
            'engagement_type' => 'required|string|max:255',
            'full_name'       => 'required|string|max:255',
            'contact_person'  => 'required|string|max:255',
            'email'           => 'required|email|max:255',
            'phone'           => 'required|string|max:20',
            'location'        => 'required|string|max:255',
            'member_type'     => 'required|string|max:255',
            'organization_reg_number'=> 'required|string|max:255',
            'number_of_members'=> 'required|integer|min:1',
            'reason_for_joining'=> 'required|string|max:1000',
            'information_accurate'=> 'required|boolean',
            'legal_docs'     => 'required|file|mimes:pdf,doc,docx|max:2048',
        ]);

        $member = new Memberships;
        $member->engagement_type = $validated['engagement_type'];
        $member->full_name = $validated['full_name'];
        $member->contact_person = $validated['contact_person'];
        $member->email = $validated['email'];
        $member->phone = $validated['phone'];
        $member->location = $validated['location'];
        $member->member_type = $validated['member_type'];
        $member->organization_reg_number = $validated['organization_reg_number'];
        $member->number_of_members = $validated['number_of_members'];
        $member->reason_for_joining = $validated['reason_for_joining'];
        $member->information_accurate = $validated['information_accurate'];

        if ($request->hasFile('legal_docs')) {
            $legalDocsPath = $request->file('legal_docs')->store('membership_docs', 'public');
            $member->legal_docs_path = $legalDocsPath;
        }
        $member->save();
    }

    // volunteer_form
    /**
     * Volunteer form page
     */
    public function volunteer_form()
    {
        return Inertia::render('web/forms/volunteer');
    }

    /**
     * Volunteer form save
     */
    public function volunteer_form_save(Request $request)
    {
        $validated = $request->validate([
            'engagement_type' => 'required|string|max:255',
            'full_name'       => 'required|string|max:255',
            'contact_person'  => 'required|string|max:255',
            'email'           => 'required|email|max:255',
            'phone'           => 'required|string|max:20',
            'location'        => 'required|string|max:255',
            'preferred_role'  => 'required|string|max:255',
            'availability'    => 'required|string|max:255',
            'skills_experience'=> 'required|string|max:1000',
            'volunteering_reason'=> 'required|string|max:1000',
            'information_accurate'=> 'required|boolean',
            'cv'             => 'required|file|mimes:pdf,doc,docx|max:2048',
        ]);

        $voluteer = new Volunteers;
        $voluteer->engagement_type = $validated['engagement_type'];
        $voluteer->full_name = $validated['full_name'];
        $voluteer->contact_person = $validated['contact_person'];
        $voluteer->email = $validated['email'];
        $voluteer->phone = $validated['phone'];
        $voluteer->location = $validated['location'];
        $voluteer->preferred_role = $validated['preferred_role'];
        $voluteer->availability = $validated['availability'];
        $voluteer->skills_experience = $validated['skills_experience'];
        $voluteer->volunteering_reason = $validated['volunteering_reason'];
        $voluteer->information_accurate = $validated['information_accurate'];
        if ($request->hasFile('cv')) {
            $cvPath = $request->file('cv')->store('volunteer_cvs', 'public');
            $voluteer->cv_path = $cvPath;
        }
        $voluteer->save();

    }

    // partner_form
    /**
     * Partner form page
     */
    public function partner_form()
    {
        return Inertia::render('web/forms/partnership');
    }

    /**
     * Partner form save
     */
    public function partner_form_save(Request $request)
    {
        $validated = $request->validate([
            'engagement_type' => 'required|string|max:255',
            'full_name'       => 'required|string|max:255',
            'contact_person'  => 'required|string|max:255',
            'email'           => 'required|email|max:255',
            'phone'           => 'required|string|max:20',
            'location'        => 'required|string|max:255',
            'organization_type'=> 'required|string|max:255',
            'partnership_area'=> 'required|string|max:255',
            'mission_focus'   => 'required|string|max:1000',
            'collaboration_method'=> 'required|string|max:1000',
            'information_accurate'=> 'required|boolean',
            'proposal'        => 'required|file|mimes:pdf,doc,docx|max:2048',
        ]);

        $partner = new Partnerships;
        $partner->engagement_type = $validated['engagement_type'];
        $partner->full_name = $validated['full_name'];
        $partner->contact_person = $validated['contact_person'];
        $partner->email = $validated['email'];
        $partner->phone = $validated['phone'];
        $partner->location = $validated['location'];
        $partner->organization_type = $validated['organization_type'];
        $partner->partnership_area = $validated['partnership_area'];
        $partner->mission_focus = $validated['mission_focus'];
        $partner->collaboration_method = $validated['collaboration_method'];
        $partner->information_accurate = $validated['information_accurate'];
        if ($request->hasFile('proposal')) {
            $proposalPath = $request->file('proposal')->store('partnership_proposals', 'public');
            $partner->proposal_path = $proposalPath;
        }
        $partner->save();
    }
}
