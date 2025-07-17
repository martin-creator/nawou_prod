import NawouForm from '@/components/web/forms/join_us';
import { TitleBanner } from '@/components/web/title-banner';
import WebLayout from '@/layouts/web/web-layout';
import { Head } from '@inertiajs/react';

export default function volunteer() {
    return (
        <WebLayout>
            <Head title={'Volunteer Form'} />

            <TitleBanner title={'Volunteer Form'} />

            <NawouForm type="volunteer" />
        </WebLayout>
    );
}
