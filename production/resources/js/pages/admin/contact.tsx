import { DataTable } from '@/components/data-table';
import EmptyState from '@/components/empty-state';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Deferred, Head, Link, usePage } from '@inertiajs/react';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/panel',
    },
    {
        title: 'Contact Us',
        href: '/contact',
    },
];

export default function ContactUs() {
    const { contacts } = usePage().props;

    const columns = [
        {
            accessorKey: 'id',
            header: () => <div className="text-center">#</div>,
            cell: ({ row }) => {
                return <div className="text-center font-medium">{row.index + 1}.</div>;
            },
        },
        {
            accessorKey: 'name',
            header: () => <div className="text-left">Name</div>,
        },
        {
            accessorKey: 'email',
            header: () => <div className="text-left">Email</div>,
        },
        {
            accessorKey: 'message',
            header: () => <div className="text-left">Message</div>,
            cell: ({ row }) => {
                return (
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="cursor-pointer truncate text-left">{row.getValue('message')?.substring(0, 50)}</div>
                            </TooltipTrigger>
                            <TooltipContent className="max-h-[250px] overflow-auto p-3">
                                <p>{row.getValue('message')}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                );
            },
        },
        {
            accessorKey: 'updated_at',
            header: () => <div className="text-left">Last Updated</div>,
            cell: ({ row }) => {
                return <div className="text-left font-medium">{new Date(row.original.updated_at).toLocaleString()}</div>;
            },
        },
        {
            id: 'actions',
            enableHiding: true,
            cell: ({ row }) => {
                return (
                    <Link data={{ id: row.original?.id }} onSuccess={()=>{
                        toast.success(`Contact us message deleted successfully!`);
                    }} as="button" href={route('contact')} method="delete">
                        <Button variant="outline" className="h-5 w-8 p-0 text-red-500">
                            <Trash2 />
                        </Button>
                    </Link>
                );
            },
        },
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Contact Us" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <Deferred data={'contacts'} fallback={'Loading...'}>
                    {contacts?.length > 0 ? (
                        <DataTable columns={columns} data={contacts} searchableColumn="name" placeholder="Search name..." type="messages" />
                    ) : (
                        <EmptyState message='Messages from contact us will appear here!' />
                    )}
                </Deferred>
            </div>
        </AppLayout>
    );
}
