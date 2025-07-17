import NawouForm from '@/components/web/forms/join_us';
import { TitleBanner } from '@/components/web/title-banner';
import WebLayout from '@/layouts/web/web-layout';
import { Head } from '@inertiajs/react';

export default function membership() {
    return (
        <WebLayout>
            <Head title={'Membership Form'} />

            <TitleBanner title={'Membership Form'} />

            <NawouForm type="membership" />
        </WebLayout>
    );
}
