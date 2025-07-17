import { DataTable } from '@/components/data-table';
import EmptyState from '@/components/empty-state';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Deferred, Head, Link, usePage } from '@inertiajs/react';
import { Trash2 } from 'lucide-react';
import { toast } from 'sonner';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/panel',
    },
    {
        title: 'Newsletter Contacts',
        href: '/newsletter',
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
        header: () => <div className="text-left">Name</div>,
    },
    {
        accessorKey: 'email',
        header: () => <div className="text-left">Email</div>,
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
                <Link
                    data={{ id: row.original?.id }}
                    onSuccess={() => {
                        toast.success(`Contact deleted successfully!`);
                    }}
                    as="button"
                    href={route('newsletters')}
                    method="delete"
                >
                    <Button variant="outline" className="h-5 w-8 p-0 text-red-500">
                        <Trash2 />
                    </Button>
                </Link>
            );
        },
    },
];

export default function Newsletter() {
    const { newsletters } = usePage().props;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Newsletter Contacts" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <Deferred data={'newsletters'} fallback={'Loading...'}>
                    {newsletters?.length > 0 ? (
                        <DataTable columns={columns} data={newsletters} searchableColumn="name" placeholder="Search name..." type="messages" />
                    ) : (
                        <EmptyState message="Newsletter contacts will appear here." />
                    )}
                </Deferred>
            </div>
        </AppLayout>
    );
}
