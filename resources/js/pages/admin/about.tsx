import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AboutUsLayout from '@/layouts/about/layout';
import AppLayout from '@/layouts/app-layout';
import { NavItem, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'About',
        href: '/panel/about',
    },
];



export default function About() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="About" />
            <AboutUsLayout>
                <h1>Teams</h1>
            </AboutUsLayout>
        </AppLayout>
    );
}
