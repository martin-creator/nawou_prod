import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TitleBanner } from '@/components/web/title-banner';
import WebLayout from '@/layouts/web/web-layout';
import { Head } from '@inertiajs/react';
import WomenAtWork from './_partials/economic/women-at-work';
import HandMade from './_partials/economic/handmade';

export default function ProgramPage() {
    return (
        <WebLayout>
            <Head title={'Education and Skill Training'} />

            <TitleBanner title={'Education and Skill Training'} />

            <section className="px-[10px] pt-5 lg:px-[104px] lg:pt-5">
                <blockquote className="border-primary flex flex-col gap-[16px] border-l-[8px] py-5 pl-6">
                    <h2 className="text-secondary scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">Education and Skill Training</h2>
                    <p className="text-[20px] font-medium text-[#585858]">
                    The Governance & Leadership Program, rooted in the Uganda Constitution of 1995, seeks to address barriers that limit women’s and youth’s participation in decision-making. Although the Constitution provides for the inclusion of marginalized groups, women often lack civic education and information on their rights, restricting their ability to hold leaders accountable and to advocate for change.
                    To address these challenges, the Governance & Leadership Program empowers women and youth through civic education, equipping them with the tools and knowledge to assert their rights. By increasing information access, NAWOU supports women in actively engaging in public discourse, demanding accountability, and influencing policies. The program works to build an inclusive society where women’s voices play an equal role in Uganda’s democratic process.
                    </p>
                </blockquote>

                <h2 className="text-secondary mt-10 text-[32px] font-bold">Projects</h2>
            </section>
            <Tabs defaultValue={'handmade'} className="w-full overflow-hidden py-15 lg:py-10">
                <TabsList className="mb-5 flex flex-col gap-2 bg-white px-3 lg:mb-0 lg:flex-row lg:gap-4 lg:px-[10px] lg:px-[104px] lg:pt-5">
                    <TabsTrigger value="handmade" className={`min-h-[42px] w-full cursor-pointer text-xl`}>
                        WAVE Project
                    </TabsTrigger>
                    <TabsTrigger value="women_at_work" className={`min-h-[42px] w-full cursor-pointer text-xl`}>
                        Movement Strengthening Project
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="women_at_work">
                    <WomenAtWork />
                </TabsContent>
                <TabsContent value="handmade">
                    <HandMade />
                </TabsContent>
            </Tabs>
        </WebLayout>
    );
}


