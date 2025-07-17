import { Card, CardContent } from '@/components/ui/card';
import { usePage } from '@inertiajs/react';

export const OurStory = () => {
    const { story_video } = usePage().props;

    console.log("story_video", story_video);


    const content = [
        {
            title: 'Mission',
            description:
                'To empower women and girls in Uganda by amplifying their voices, promoting gender equality, and creating sustainable opportunities for economic and social development.',
            icon: '/images/mission.png',
        },
        {
            title: 'Vision',
            description: 'A Uganda where all women and girls are empowered, valued, and given equal opportunities to thrive in every aspect of life.',
            icon: '/images/vision.png',
        },
    ];
    return (
        <>
            {/* Our Story */}
            <blockquote className="border-primary flex flex-col gap-[16px] border-l-[8px] py-5 pl-6">
                <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">Our Story</h2>
                <p className="text-[20px] font-medium text-[#585858]">
                    In 1992, a movement was born out of necessity—a movement to uplift, empower, and advocate for women. The National Association of
                    Women’s Organizations in Uganda (NAWOU) began as a small network of passionate women determined to create opportunities where
                    there were none.
                </p>

                <p className="text-[20px] font-medium text-[#585858]">
                    Since our founding, we have grown into a nationwide force for change, bringing together organizations, leaders, and communities to
                    champion gender equality, economic empowerment, and social justice.
                </p>

                <p className="text-[20px] font-medium text-[#585858]">Together, we are stronger. Together, we make a difference.</p>
            </blockquote>

            {/*  Watch Our Story */}
            <div className="mx-auto w-full">
                <h2 className="mt-4 text-[28px] font-semibold text-[#585858]">Watch Our Story</h2>

                <div className="mt-5 w-full cursor-pointer bg-gray-100">
                    {story_video ? (
                        <iframe src={story_video?.about?.video} className="min-h-[540px] max-h-[540px] w-full rounded-lg" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    ) : (
                        <img src="/images/ytube.png" className="max-h-[540px] w-full rounded-xl object-cover hover:opacity-90" alt="" />
                    )}
                </div>
            </div>

            {/* Mission and ision */}

            <div className="grid w-full gap-6 md:grid-cols-2">
                {content.map((item, index) => (
                    <Card key={index} className="border-primary w-full border-1 shadow-none">
                        <CardContent className="space-y-4 px-6 py-0">
                            <img src={item.icon} className="h-[40px] w-[40px]" />
                            <div className="flex flex-col gap-[20px] space-x-3">
                                <h3 className="text-secondary text-2xl font-semibold">{item.title}</h3>
                                <p className="text-[20px] font-medium text-[#585858]">{item.description}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    );
};
