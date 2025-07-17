import StatGroupCard from '@/components/StatGroupCard';
import StatsCard from '@/components/StatsCard';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { FileStack, FileText, MessagesSquareIcon, Rss, Speech, Users, UserSquareIcon } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/panel',
    },
];

export default function Dashboard() {
    const { whistle, contact, manuals, events, teams_, reports_ } = usePage().props;


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <StatGroupCard title={'Contact Stats & Shortcuts'}>
                    <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                        <StatsCard
                            title={'Newsletter Contacts'}
                            value={events}
                            icon={<UserSquareIcon />}
                            link={route('newsletters')}
                        />
                        <StatsCard
                            title={'Whistle Blowing'}
                            value={whistle}
                            icon={<Speech />}
                            link={route('whistleblowers')}
                        />
                        <StatsCard
                            title={'Contact Form Messages'}
                            value={contact}
                            icon={<MessagesSquareIcon />}
                            link={route('contact')}
                        />
                    </div>
                </StatGroupCard>

                <StatGroupCard title={'Other Stats  & Shortcuts'}>
                    <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
                        <StatsCard
                            title={'Training Manuals'}
                            value={manuals}
                            icon={<FileStack />}
                            link={route('training_manuals')}
                        />
                        <StatsCard
                            title={'Annual Reports'}
                            value={reports_}
                            icon={<FileText />}
                            link={route('reports')}
                        />
                        <StatsCard
                            title={'News & Events'}
                            value={events}
                            icon={<Rss />}
                            link={route('news_and_events')}
                        />
                        <StatsCard
                            title={'Teams'}
                            value={teams_}
                            icon={<Users />}
                            link={route('teams')}
                        />
                    </div>
                </StatGroupCard>
            </div>
        </AppLayout>
    );
}
