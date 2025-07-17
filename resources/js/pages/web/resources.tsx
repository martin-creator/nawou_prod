import PhotoGallery from '@/components/photo-gallery';
import { Button } from '@/components/ui/button';
import VideoGallery from '@/components/video-gallery';
import AnnualReport from '@/components/web/annual-report';
import { TitleBanner } from '@/components/web/title-banner';
import WebLayout from '@/layouts/web/web-layout';
import { Deferred, Head, usePage } from '@inertiajs/react';
import { Loader } from 'lucide-react';

export default function resources() {
    const { manuals, gallery } = usePage().props;

    return (
        <WebLayout>
            <Head title="Resources" />

            <TitleBanner title={'Resources'} />

            <section className="px-[10px] pt-5 lg:px-[104px] lg:pt-5">
                <blockquote className="border-primary mb-10 flex flex-col gap-[16px] border-l-[8px] py-5 pl-6">
                    <h2 className="text-secondary scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">Explore Our Resources & Insights</h2>
                    <p className="text-[20px] font-medium text-[#585858]">
                        Stay informed and inspired with our latest reports, publications, and media content.
                    </p>
                </blockquote>

                <div className="my-10">
                    <AnnualReport image={false} />
                </div>
            </section>

            <section className={`px-[10px] pt-5 lg:px-[104px] lg:pt-5`}>
                <h2 className="text-secondary mt-4 text-[32px] font-bold">Training Manuals and Guides</h2>
                <Deferred data={'manuals'} fallback={<Loader className="animate-spin" />}>
                    <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
                        {manuals?.map((item, index) => (
                            <a
                                href={item.file}
                                target="_blank"
                                className={`hover:border-secondary/10 border-secondary/5 flex h-full w-full cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border bg-white`}
                                key={index}
                            >
                                <div className="relative">
                                    <img
                                        src={item.image || `/images/placeholder.png`}
                                        alt={item.title}
                                        className={`h-full max-h-[264px] w-full bg-gray-100 object-cover`}
                                    />
                                    <div className="p-[20px]">
                                        <h2 className="text-secondary text-md mt-[8px] lg:text-xl">{item.title}</h2>
                                        <p className={`mt-[8px] text-[#585858]`}>{item.description}</p>
                                    </div>
                                </div>

                                <div className="pt-[12px] pb-[20px] pl-[20px]">
                                    <a href={item.file} role="button" download={item.title}>
                                        <Button className="border-primary text-primary hover:text-primary m-0 p-0" variant={'link'}>
                                            Download File
                                        </Button>
                                    </a>
                                </div>
                            </a>
                        ))}
                    </div>
                </Deferred>
            </section>

            {/* gallery */}
            <section className={`flex flex-col gap-10 px-[10px] py-5 lg:px-[104px] lg:py-5`}>
                <h2 className="text-secondary mt-4 text-[32px] font-bold">Media Gallery</h2>
                <Deferred data={'gallery'} fallback={<Loader className="animate-spin" />}>
                    <>
                        <VideoGallery videos={gallery?.video} />
                        <PhotoGallery gallery={gallery?.image} />
                    </>
                </Deferred>
            </section>
        </WebLayout>
    );
}
