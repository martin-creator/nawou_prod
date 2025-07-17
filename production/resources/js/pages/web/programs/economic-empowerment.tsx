import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TitleBanner } from '@/components/web/title-banner';
import WebLayout from '@/layouts/web/web-layout';
import { Head } from '@inertiajs/react';

import HandMade from './_partials/economic/handmade';
import WomenAtWork from './_partials/economic/women-at-work';

export default function ProgramPage() {
    return (
        <WebLayout>
            <Head title={'Economic Empowerment'} />

            <TitleBanner title={'Economic Empowerment'} />

            <section className="px-[10px] pt-5 lg:px-[104px] lg:pt-5">
                <blockquote className="border-primary flex flex-col gap-[16px] border-l-[8px] py-5 pl-6">
                    <h2 className="text-secondary scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">Economic Empowerment</h2>
                    <p className="text-[20px] font-medium text-[#585858]">
                        NAWOU's Economic Empowerment program focuses on equipping women with the skills, resources, and networks necessary to achieve
                        financial independence. A key initiatives under this program are the NAWOU Handmade project and the Women at Work project,
                        which supports women artisans in creating and marketing handmade products, thereby contributing to their household incomes.
                    </p>
                </blockquote>

                <h2 className="text-secondary mt-10 text-[32px] font-bold">Projects</h2>
            </section>
            <Tabs defaultValue={'women_at_work'} className="w-full overflow-hidden py-15 lg:py-10">
                <TabsList className="mb-5 flex flex-col gap-2 bg-white lg:mb-0 lg:flex-row px-3 lg:gap-4 lg:px-[10px] lg:px-[104px] lg:pt-5">
                    <TabsTrigger value="women_at_work" className={`min-h-[42px] w-full cursor-pointer text-xl`}>
                        Women at Work
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="women_at_work">
                    <WomenAtWork />
                </TabsContent>
            </Tabs>
        </WebLayout>
    );
}
