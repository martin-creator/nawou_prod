import { Button } from '@/components/ui/button';
import { TitleBanner } from '@/components/web/title-banner';
import WebLayout from '@/layouts/web/web-layout';
import { Head, Link } from '@inertiajs/react';

export default function Page() {
    return (
        <WebLayout>
            <Head title="Volunteer" />

            <TitleBanner title="Volunteer" />

            <section className="px-[10px] py-5 lg:px-[104px] lg:py-5">
                <blockquote className="border-primary flex flex-col gap-[16px] border-l-[8px] py-5 pl-6">
                    <h2 className="text-secondary scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">Volunteer with Us</h2>
                    <p className="text-[20px] font-medium text-[#585858]">
                        At NAWOU, we believe in the power of collaboration to create lasting impact. Volunteer your skills to advance women’s rights
                        and empowerment in Uganda, your support is invaluable.
                    </p>
                </blockquote>

                <div className="bg-primary/5 my-20 flex flex-col gap-[16px] rounded-xl py-5 pl-6">
                    <h2 className="text-secondary scroll-m-20 text-[30px] font-semibold tracking-tight">Ways to Volunteer</h2>
                    <ul className="ml-6 list-outside list-disc space-y-2">
                        <li className="text-[20px] font-medium text-[#585858]">
                            Women’s Rights Advocacy: Assist in campaigns and awareness programs.
                        </li>
                        <li className="text-[20px] font-medium text-[#585858]">
                            Community Engagement: Support grassroots initiatives and mentorship programs.
                        </li>
                        <li className="text-[20px] font-medium text-[#585858]">
                            Capacity Building: Conduct training in leadership, entrepreneurship, or digital skills.
                        </li>
                        <li className="text-[20px] font-medium text-[#585858]">
                            Communications & Fundraising: Help with social media, grant writing, and donor outreach.
                        </li>
                    </ul>
                </div>

                <blockquote className="border-primary flex flex-col gap-[16px] border-l-[8px] py-5 pl-6">
                    <h2 className="text-secondary scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">Why Volunteer with NAWOU?</h2>
                    <ul className="ml-6 list-outside list-disc space-y-2">
                        <li className="text-[20px] font-medium text-[#585858]">Make a tangible difference in women’s lives.</li>
                        <li className="text-[20px] font-medium text-[#585858]">Gain valuable experience in the development sector.</li>
                        <li className="text-[20px] font-medium text-[#585858]">Join a network of like-minded changemakers.</li>
                    </ul>
                </blockquote>
                <div className="mt-10 text-[20px] font-medium text-[#585858]">
                    Ready to apply, fill the{" "}
                    <Link href={route('volunteer_form')}>
                        <Button>Volunteer Form</Button>
                    </Link>
                </div>
            </section>
        </WebLayout>
    );
}
