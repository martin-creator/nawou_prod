import BlogEventListItem from '@/components/web/blog-event-list-item';
import { TitleBanner } from '@/components/web/title-banner';
import WebLayout from '@/layouts/web/web-layout';
import { Deferred, Head, usePage } from '@inertiajs/react';
import { Loader } from 'lucide-react';

export default function news_and_events() {
    const {news_and_events} = usePage().props;


    return (
        <WebLayout>
            <Head title="News and Events" />

            <TitleBanner title="News and Events" />

            <section className="w-full items-center px-5 py-5 pb-10 lg:px-20 lg:py-15">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                    <Deferred data={'news_and_events'} fallback={<Loader className='animate-spin' />}>

                    {news_and_events?.map((item, index) => (
                        <div key={index} className={`${index === 0 ? 'h-full lg:col-span-2 lg:row-span-2' : ''}`}>
                            <BlogEventListItem
                                descriptionClass={`${index === 0 ? 'line-clamp-2 lg:line-clamp-4' : 'line-clamp-2'}`}
                                className={`${index === 0 ? 'max-h-[580px]' : 'max-h-[200px]'}`}
                                item={item}
                            />
                        </div>
                    ))}
                    </Deferred>
                </div>
            </section>
        </WebLayout>
    );
}
