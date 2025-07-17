import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';

const sidebarNavItems: NavItem[] = [
    {
        title: 'Teams',
        url: '/panel/about/teams',
        icon: null,
    },
    {
        title: 'Testimonies',
        url: '/panel/about/testimonies',
        icon: null,
    },
    {
        title: 'FAQs',
        url: '/panel/about/faqs',
        icon: null,
    },
    {
        title: 'Story Videos',
        url: '/panel/about/story-video',
        icon: null,
    },
];

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
    const currentPath = window.location.pathname;
    return (
        <div className="px-0 py-2">
            <div className="flex flex-col">
                <aside className="w-full max-w-xl lg:w-35">
                    <nav className="flex flex-col lg:flex-row p-2 lg:p-0 space-y-2 space-x-3">
                        {sidebarNavItems.map((item) => (
                            <Button
                                key={item.url}
                                size="sm"
                                variant="ghost"
                                asChild
                                className={cn('w-full justify-start', {
                                    'bg-muted text-primary hover:text-primary': currentPath === item.url,
                                })}
                            >
                                <Link href={item.url} prefetch>
                                    {item.title}
                                </Link>
                            </Button>
                        ))}
                    </nav>
                </aside>
                <div className="flex-1 w-full">
                    <section className="w-full">{children}</section>
                </div>
            </div>
        </div>
    );
}
