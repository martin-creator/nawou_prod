import { Link } from '@inertiajs/react';
import { Button } from '../ui/button';
import NavMain from './nav-main';

export default function WebHeader() {
    const webRoutes = [
        {
            title: 'Home',
            route: '/',
        },
        {
            title: 'About',
            route: '/about',
        },
        {
            title: 'Programs',
            route: '/programs',
            children: [
                {
                    title: 'Economic Empowerment',
                    route: '/programs/economic-empowerment',
                },
                {
                    title: 'Governance and Leadership',
                    route: '/programs/governance-leadership',
                },
                {
                    title: 'Handmade Social Enterprise',
                    route: '/programs/handmade-social-enterprise',
                },
                {
                    title: 'Institutional Strengthening and Partnership',
                    route: '/programs/institutional-strengthening',
                },
                {
                    title: 'Gender, Social and Climate Justice',
                    route: '/programs/gender-social-climate-justice',
                },
            ],
        },
        {
            title: 'News and Events',
            route: '/news-and-events',
        },
        {
            title: 'Resources',
            route: '/resources',
        },
        {
            title: 'Contact Us',
            route: '/contact-us',
            children: [
                {
                    title: 'Contact Us',
                    route: '/contact-us',
                },
                {
                    title: 'Partner with Us',
                    route: '/contact-us/partner',
                },
                {
                    title: 'Volunteer',
                    route: '/contact-us/volunteer',
                },
                {
                    title: 'Be a Member',
                    route: '/contact-us/membership',
                },
            ],
        },
    ];

    return (
        <header className="lg:bg-primary/5 border-primary/10 sticky top-0 z-50 border-b bg-white lg:relative">
            <div className="mx-auto flex h-[90px] w-full items-center justify-between px-4 md:max-w-7xl">
                <NavMain routes={webRoutes} />
                <div className="flex items-center hidden lg:flex">
                    <Link aschild="true" href={route('donate')} prefetch>
                        <Button className="h-[42px] w-full cursor-pointer">Donate Now</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
