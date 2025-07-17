import Heading from '@/components/heading';
import WebLayout from '@/layouts/web/web-layout';
import { Head } from '@inertiajs/react';
import React from 'react'

export default function shop() {
    return (
        <WebLayout>
            <Head title="Our Shop" />

            <Heading title='Our Shop' />
        </WebLayout>
    );
}
