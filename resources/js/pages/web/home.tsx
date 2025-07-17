import AnnualReport from '@/components/web/annual-report';
import Counters from '@/components/web/counters';
import MissionSection from '@/components/web/home/mission-section';
import OurPartners from '@/components/web/home/partners';
import Testimonies from '@/components/web/home/testimonies';
import TopBanner from '@/components/web/home/top-banner';
import WhatWeDo from '@/components/web/home/what-we-do';
import NewsAndEvents from '@/components/web/news-and-events';
import OurProducts from '@/components/web/products';
import WebLayout from '@/layouts/web/web-layout';
import { Head } from '@inertiajs/react';

export default function home() {
    return (
        <WebLayout>
            <Head title="Welcome" />

            <TopBanner />

            <MissionSection />

            <section className="mt-[120px] flex">
                <Counters />
            </section>

            <WhatWeDo />

            <section className="flex p-0 pt-1 lg:p-[50px] lg:px-[70px] lg:pb-0">
                <AnnualReport image={false} />
            </section>

            <OurPartners />

            <OurProducts />

            <Testimonies />

            <NewsAndEvents />
        </WebLayout>
    );
}
