import NawouForm from '@/components/web/forms/join_us';
import { TitleBanner } from '@/components/web/title-banner';
import WebLayout from '@/layouts/web/web-layout';
import { Head } from '@inertiajs/react';

export default function partnership() {
    return (
        <WebLayout>
            <Head title={'Partnership Form'} />

            <TitleBanner title={'Partnership Form'} />

            <NawouForm type="partnership" />
        </WebLayout>
    );
}
