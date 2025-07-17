import { OurStory } from '@/components/web/about/our-story';
import { OurTeam } from '@/components/web/about/out-team';
import Counters from '@/components/web/counters';
import { PartnerLogos } from '@/components/web/partners';
import { TitleBanner } from '@/components/web/title-banner';
import WebLayout from '@/layouts/web/web-layout';
import { Head } from '@inertiajs/react';

export default function about() {
    const coreValues = [
        { text: 'Sustainability' },
        { text: 'Empowerment' },
        { text: 'Equality' },
        { text: 'Innovation' },
        { text: 'Collaboration' },
        { text: 'Integrity' },
    ];

    return (
        <WebLayout>
            <Head title="About Us" />

            <TitleBanner title="About Us" />

            {/* Includes everything upto core values */}
            <section className="flex w-full flex-col items-center gap-[90px] px-[10px] py-15 lg:px-[104px] lg:py-25">
                <OurStory />
            </section>

            {/* core values */}
            <section className="bg-secondary flex flex-col px-4 py-0 lg:items-center lg:py-10">
                <img src="/images/corevalues.png" className="hidden max-h-[800px] object-cover lg:flex lg:min-h-[700px]" alt="" />
                <h2 className="my-5 scroll-m-20 text-left text-3xl font-semibold tracking-tight text-white lg:hidden lg:text-4xl">Core Values</h2>
                <div className="grid w-full grid-cols-2 gap-2 pt-12 pb-0 md:gap-8 lg:hidden">
                    {coreValues.map((value, index) => (
                        <div key={index} className="mb-8 flex flex-col items-center gap-4 rounded-lg bg-[#FED1D1] p-6 shadow-md">
                            <div className="mt-[-50px] flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white">
                                {/* Placeholder for Icon */}
                                <img src={`/images/values/${index + 1}.png`} className="object-fill" />
                            </div>
                            <span className="text-md font-semibold text-[#000000]">{value.text}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* figures */}
            <section className="flex w-full items-center  px-[10px] py-15 lg:px-[104px] lg:py-25">
                <Counters />
            </section>
            {/* Our Team */}
            <OurTeam />

            <section className="px-[10px] py-5 lg:px-[104px] lg:py-10">
                <blockquote className="border-primary flex flex-col gap-[16px] border-l-[8px] py-5 pl-6">
                    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">Our Members</h2>
                    {/* Partners */}
                    <PartnerLogos />
                </blockquote>
            </section>
        </WebLayout>
    );
}
