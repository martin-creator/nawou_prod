import { TeamMember } from '@/components/team-member';
import { CarouselItem } from '@/components/ui/carousel';
import SliderContent from '@/components/ui/slider-content';
import { usePage } from '@inertiajs/react';

export const OurTeam = () => {
    const { teams } = usePage().props;

    const theBoard = teams?.director || [];

    const theAdmin = teams?.admin || [];

    const slidesBoard = [];
    for (let i = 0; i < theBoard.length; i += 4) {
        slidesBoard.push(theBoard.slice(i, i + 4));
    }

    const slidesAdmin = [];
    for (let i = 0; i < theAdmin.length; i += 4) {
        slidesAdmin.push(theAdmin.slice(i, i + 4));
    }

    return (
        <>
            <section className="flex w-full flex-col items-center gap-[90px] px-[10px] py-15 lg:px-[104px] lg:py-25">
                {/* Our Team */}
                <blockquote className="border-primary flex flex-col gap-[16px] border-l-[8px] py-5 pl-6">
                    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">Our Team</h2>
                    <p className="text-[20px] font-medium text-[#585858]">
                        At the National Association of Women’s Organizations in Uganda (NAWOU), our Board of Directors is comprised of visionary
                        leaders who guide our mission to empower women and foster community development across Uganda. Each member brings a wealth of
                        experience and a deep commitment to advancing women’s rights and opportunities.
                    </p>
                </blockquote>
            </section>

            <section className="bg-secondary/5 flex w-full flex-col gap-[10px] px-[10px] py-10 lg:px-[104px]">
                <SliderContent
                    title={<h4 className="text-secondary scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl">Board of Directors</h4>}
                >
                    {slidesBoard.map((slide, slideIndex) => (
                        <CarouselItem key={slideIndex} className="w-full">
                            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                                {slide.map((member, index) => (
                                    <TeamMember member={member} key={index} />
                                ))}
                            </div>
                        </CarouselItem>
                    ))}
                </SliderContent>
            </section>

            <section className="flex w-full flex-col gap-[10px] px-[10px] py-10 lg:px-[104px]">
                <SliderContent
                    title={<h4 className="text-secondary scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl">Administrative Team</h4>}
                >
                    {slidesAdmin.map((slide, slideIndex) => (
                        <CarouselItem key={slideIndex} className="w-full">
                            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                                {slide.map((member, index) => (
                                    <TeamMember member={member} key={index} />
                                ))}
                            </div>
                        </CarouselItem>
                    ))}
                </SliderContent>
            </section>
        </>
    );
};
