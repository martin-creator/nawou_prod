import { Button } from '@/components/ui/button';
import BlogEventListItem from '@/components/web/blog-event-list-item';
import WebLayout from '@/layouts/web/web-layout';
import { Head, usePage } from '@inertiajs/react';

const EventDetails = () => {
    const { event, related } = usePage().props;
    return (
        <WebLayout>
            <Head title={event?.title}>
                <meta name="description" content={event?.description?.substring(0, 160)} />
                <meta name="keywords" content="NAWOU, women artisans, Uganda, crafts, social enterprise" />
                <meta property="og:title" content={event.title} />
                <meta property="og:description" content={event?.description?.substring(0, 160)} />
                <meta property="og:image" content={event.image} />
                <meta property="og:type" content="article" />
            </Head>

            <section className="flex w-full flex-col items-center gap-2 px-[10px] py-5 lg:px-[104px] lg:py-10">
                <div className="w-full lg:max-w-4xl">
                    <img src={event?.image} alt="Empowered Women Artisans" className="w-full rounded-lg object-contain bg-gray-100 lg:h-[540px] lg:w-[1032px]" />
                    <div className="mx-auto">
                        <h1 className="text-secondary my-5 text-2xl font-semibold md:text-4xl">{event.title}</h1>
                        <div className="flex flex-col gap-3 whitespace-pre-line">
                            <p className="text-[18px] lg:text-[20px]">Date: {new Date(event.event_date)?.toDateString()}</p>
                            <p className="text-[18px] lg:text-[20px]">Time: {new Date(event.event_date)?.toLocaleTimeString()}</p>
                            <p className="text-[18px] lg:text-[20px]">Location: {event.location}</p>
                            <p className="mt-5 text-[18px] text-[#585858] lg:text-[20px]">{event.description}</p>
                        </div>
                        {event?.register_link && (
                            <a href={event.register_link||"#"} target="_blank">
                                <Button className="mt-5 h-[52px] w-full lg:w-[160px]">Register Now</Button>
                            </a>
                        )}
                        {
                            related?.length?
                        <h2 className="text-secondary mt-12 text-center text-[25px] font-semibold lg:text-[40px]">Upcoming Events</h2>:<></>
                        }
                    </div>
                </div>

                <div className="mt-2 grid grid-cols-1 gap-5 lg:grid-cols-3  w-full">
                    {related?.map((item, index) => (
                        <BlogEventListItem item={item} key={index} />
                    ))}
                </div>
            </section>
        </WebLayout>
    );
};

export default EventDetails;
