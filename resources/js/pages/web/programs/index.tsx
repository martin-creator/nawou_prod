import Heading from '@/components/heading';
import { TitleBanner } from '@/components/web/title-banner';
import WebLayout from '@/layouts/web/web-layout';
import { Head, usePage } from '@inertiajs/react';

export default function ProgramDetails() {
    const page = usePage().props
    return (
        <WebLayout>
            <Head title={page.slug} />

            <TitleBanner title={page.slug} />

        </WebLayout>
    );
}
