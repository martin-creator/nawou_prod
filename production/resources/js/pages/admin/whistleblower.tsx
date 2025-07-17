import { DataTable } from '@/components/data-table';
import EmptyState from '@/components/empty-state';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Deferred, Head, Link, usePage } from '@inertiajs/react';
import { ExternalLink, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/panel',
    },
    {
        title: 'Whistle Blowing',
        href: '/whistle',
    },
];

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
        header: () => <div className="text-left">Person</div>,
        cell: ({ row }) => {
            return (
                <div className="flex cursor-pointer items-center gap-2">
                    {
                        row.original.name?
                    <div>
                        
                        <div className="text-left font-medium">{row.original.name}</div>
                        <div className="text-left">{row.original.email}</div>
                    </div>:<></>
                    }
                </div>
            );
        },
    },
    {
        accessorKey: 'what_happened',
        header: () => <div className="text-left">What happened</div>,
        cell: ({ row }) => {
            return (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="cursor-pointer truncate text-left">{row.getValue('what_happened')?.substring(0, 50)}</div>
                        </TooltipTrigger>
                        <TooltipContent className="max-h-[250px] overflow-auto p-3">
                            <p>{row.getValue('what_happened')}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            );
        },
    },
    {
        accessorKey: 'where_it_happened',
        header: () => <div className="text-left">Where it happened</div>,
    },
    {
        accessorKey: 'who_was_involved',
        header: () => <div className="text-left">Who was involved</div>,
    },
    {
        accessorKey: 'evidence_file',
        header: () => <div className="text-left">Evidence File</div>,
        cell: ({ row }) => {
            return row.original.evidence_file?<a href={row.original.evidence_file} target='_blank'>
                <Button className="p-0" variant="link">Open File</Button>
            </a>:<></>;
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
                    toast.success(`Message deleted successfully!`);
                }} as="button" href={route('whistleblowers')} method="delete">
                    <Button variant="outline" className="h-5 w-8 p-0 text-red-500">
                        <Trash2 />
                    </Button>
                </Link>
            );
        },
    },
];

export default function Newsletter() {
    const {whistleblowers} = usePage().props
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Whistle Blowing" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <Deferred data={'whistleblowers'} fallback={'Loading...'}>
                    {whistleblowers?.length > 0 ? (
                                            <DataTable columns={columns} data={whistleblowers} searchableColumn="name" placeholder="Search name..." type="whistle blowers" />
                                        ) : (
                                            <EmptyState message='Messages from whistle blowing will appear here!' />
                                        )}
                </Deferred>
            </div>
        </AppLayout>
    );
}
