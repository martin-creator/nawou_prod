import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, BookOpenText, FileBadge, FileStack, FileText, Folder, Globe, Grid, Images, LayoutGrid, MessagesSquareIcon, Rss, Speech, UserSquareIcon } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        url: '/panel',
        icon: LayoutGrid,
    },
    {
        title: 'Form Submissions',
        url: '/panel/submissions',
        icon: FileBadge,
    },
    {
        title: 'News & Events',
        url: '/panel/news-and-events',
        icon: Rss,
    },
    {
        title: 'About Us', // Team, Video link, FaQs, Testimonials
        url: '/panel/about/teams',
        icon: BookOpenText,
    },
    {
        title: 'Reports', // years, files to download, stats
        url: '/panel/reports',
        icon: FileText,
    },
    {
        title: 'Training Manuals',
        url: '/panel/training-manuals',
        icon: FileStack,
    },
    {
        title: 'Gallery', // videos, images
        url: '/panel/gallery',
        icon: Images,
    },
    {
        title: 'Contact Us',
        url: '/panel/contact',
        icon: MessagesSquareIcon,
    },
    {
        title: 'Whistle Blowing',
        url: '/panel/whistleblowing',
        icon: Speech,
    },
    {
        title: 'Newsletter Contacts',
        url: '/panel/newsletter',
        icon: UserSquareIcon,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Website Preview',
        url: route('home'),
        icon: Globe,
    }
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="offcanvas" variant="floating">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/panel" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
