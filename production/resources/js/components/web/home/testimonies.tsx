import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { useIsMobile } from '@/hooks/use-mobile';
import { usePage } from '@inertiajs/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import TestimonialListLtem from '../testimonial-list-item';

type TestinonyProps = {
    title?: string;
    subtitle?: string;
    simple?: boolean;
};

export default function Testimonies({ title = 'Testimonials', subtitle = 'What They Say', simple = false }: TestinonyProps) {
    const isMobile = useIsMobile();
    const { testimonials, story_video } = usePage().props;
    const { url } = usePage();

    return (
        <section className="bg-secondary/5 w-full items-center py-10 lg:py-20">
            <div className="w-full px-5 lg:px-20">
                <div className={simple ? 'py-0' : 'py-5'}>
                    {subtitle && (
                        <span className="bg-secondary/5 text-md text-secondary rounded-2xl px-4 py-3 font-medium uppercase">What They Say</span>
                    )}
                    <h2 className={`text-secondary text-3xl lg:text-4xl ${simple ? 'font-semibold' : 'mt-4 font-bold'}`}>{title}</h2>
                </div>
                {!simple && (
                    <>
                        <div className="mt-5 grid w-full grid-cols-3 items-center">
                            <div className="col-span-12 lg:col-span-1">
                                <blockquote className="text-secondary mb-5 text-2xl lg:text-3xl font-medium lg:mt-6 lg:mb-0 text-center lg:text-left">
                                    “We have seen changes in our village communities” <br />- Ongom Severino Opoko.
                                </blockquote>
                            </div>
                            <div className="col-span-12 lg:col-span-2 lg:px-10">
                                <div className="col-span-12 lg:col-span-2 lg:px-10">
                                    {story_video ? (

                                        <iframe src={url=='/donate'?story_video?.donation?.video:story_video?.home?.video} className="h-auto min-h-[410px] max-h-[450px] w-full rounded-lg" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    ) : (
                                        <img src="/images/ytube.png" alt="Video Placeholder" />
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                )}
                <div className="mx-auto mt-5 w-full py-5 lg:py-10">
                    <Swiper
                        spaceBetween={40}
                        slidesPerView={isMobile ? 1.2 : 2.2}
                        loop
                        centeredSlides={false}
                        pagination={false}
                        grabCursor={true}
                        modules={[Pagination]}
                    >
                        {testimonials?.map((item, index) => (
                            <SwiperSlide key={index} className="min-h-[354px]">
                                <TestimonialListLtem testimony={item} key={index} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {!simple && (
                    <div className="w-full pt-0 lg:pt-5 text-center">
                        <p>Support More Women Like Amina – Shop, Donate, or Partner with Us!</p>
                    </div>
                )}
            </div>
        </section>
    );
}
