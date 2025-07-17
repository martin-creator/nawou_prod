import { Button } from '@/components/ui/button';
import { TitleBanner } from '@/components/web/title-banner';
import WebLayout from '@/layouts/web/web-layout';
import { Head, Link } from '@inertiajs/react';

export default function Page() {
    return (
        <WebLayout>
            <Head title="Partnership" />

            <TitleBanner title="Partnership" />

            <section className="px-[10px] py-5 lg:px-[104px] lg:py-5">
                <blockquote className="border-primary flex flex-col gap-[16px] border-l-[8px] py-5 pl-6">
                    <h2 className="text-secondary scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">Partner with Us</h2>
                    <p className="text-[20px] font-medium text-[#585858]">
                        We collaborate with organizations, institutions, and businesses that share our mission of advancing women’s rights and gender
                        equality.
                    </p>
                </blockquote>

                <div className="bg-primary/5 my-20 flex flex-col gap-[16px] rounded-xl py-5 pl-6">
                    <h2 className="text-secondary scroll-m-20 text-[30px] font-semibold tracking-tight">Ways to Partner</h2>
                    <ul className="ml-6 list-outside list-disc space-y-2">
                        <li className="text-[20px] font-medium text-[#585858]">
                            Corporate Partnerships: Support our programs through funding, CSR initiatives, or employee engagement.
                        </li>
                        <li className="text-[20px] font-medium text-[#585858]">
                            NGO & Institutional Collaborations: Work together on advocacy, research, or capacity-building projects.
                        </li>
                        <li className="text-[20px] font-medium text-[#585858]">
                            Media & Awareness Partners: Help amplify women’s voices through storytelling and media campaigns.{' '}
                        </li>
                    </ul>
                </div>

                <blockquote className="border-primary flex flex-col gap-[16px] border-l-[8px] py-5 pl-6">
                    <h2 className="text-secondary scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">Why Partner with NAWOU?</h2>
                    <ul className="ml-6 list-outside list-disc space-y-2">
                        <li className="text-[20px] font-medium text-[#585858]">
                            Align with a respected organization championing women’s empowerment.
                        </li>
                        <li className="text-[20px] font-medium text-[#585858]">Expand your organization’s social impact and visibility.</li>
                        <li className="text-[20px] font-medium text-[#585858]">Join a strong network of local and international change agents.</li>
                    </ul>
                </blockquote>

                <div className="mt-10 text-[20px] font-medium text-[#585858]">
                    Ready to apply, fill the{" "}
                    <Link href={route('partner_form')}>
                        <Button>Partnership Form</Button>
                    </Link>
                </div>
            </section>
        </WebLayout>
    );
}
