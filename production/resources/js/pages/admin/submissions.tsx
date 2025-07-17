import FormPreview from '@/components/admin/form-preview';
import { DataTable } from '@/components/data-table';
import EmptyState from '@/components/empty-state';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Deferred, Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/panel',
    },
    {
        title: 'Form Submissions',
        href: '/panel/submissions',
    },
];

const p_columns = [
    {
        accessorKey: 'id',
        header: () => <div className="text-center">#</div>,
        cell: ({ row }) => {
            return <div className="text-center font-medium">{row.index + 1}.</div>;
        },
    },
    {
        accessorKey: 'full_name',
        header: () => <div className="text-left">From</div>,
        cell: ({ row }) => {
            return (
                <div className="flex cursor-pointer items-center gap-2">
                    <div>
                        <div className="text-left font-medium">{row.original.full_name}</div>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: 'contact_person',
        header: () => <div className="text-left">Contact Person</div>,
        cell: ({ row }) => {
            return (
                <div className="flex cursor-pointer items-center gap-2">
                    <div>
                        <div className="text-left font-medium">{row.original.contact_person}</div>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: 'email',
        header: () => <div className="text-left">Email</div>,
        cell: ({ row }) => {
            return (
                <div className="flex cursor-pointer items-center gap-2">
                    <div>
                        <div className="text-left font-medium">{row.original.email}</div>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: 'organization_type',
        header: () => <div className="text-left">Organization Type</div>,
        cell: ({ row }) => {
            return (
                <div className="flex cursor-pointer items-center gap-2">
                    <div>
                        <div className="text-left font-medium">{row.original.organization_type}</div>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: 'options',
        header: () => <div className="text-left"></div>,
        cell: ({ row }) => {
            return <FormPreview data={row.original} type="partnerships" title="Partnership form submission" />;
        },
    },
];
const m_columns = [
    {
        accessorKey: 'id',
        header: () => <div className="text-center">#</div>,
        cell: ({ row }) => {
            return <div className="text-center font-medium">{row.index + 1}.</div>;
        },
    },
    {
        accessorKey: 'full_name',
        header: () => <div className="text-left">From</div>,
        cell: ({ row }) => {
            return (
                <div className="flex cursor-pointer items-center gap-2">
                    <div>
                        <div className="text-left font-medium">{row.original.full_name}</div>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: 'contact_person',
        header: () => <div className="text-left">Contact Person</div>,
        cell: ({ row }) => {
            return (
                <div className="flex cursor-pointer items-center gap-2">
                    <div>
                        <div className="text-left font-medium">{row.original.contact_person}</div>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: 'email',
        header: () => <div className="text-left">Email</div>,
        cell: ({ row }) => {
            return (
                <div className="flex cursor-pointer items-center gap-2">
                    <div>
                        <div className="text-left font-medium">{row.original.email}</div>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: 'member_type',
        header: () => <div className="text-left">Member Type</div>,
        cell: ({ row }) => {
            return (
                <div className="flex cursor-pointer items-center gap-2">
                    <div>
                        <div className="text-left font-medium">{row.original.member_type}</div>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: 'options',
        header: () => <div className="text-left"></div>,
        cell: ({ row }) => {
            return <FormPreview data={row.original} type="memberships" title="Memberships form submission" />;
        },
    },
];
const v_columns = [
    {
        accessorKey: 'id',
        header: () => <div className="text-center">#</div>,
        cell: ({ row }) => {
            return <div className="text-center font-medium">{row.index + 1}.</div>;
        },
    },
    {
        accessorKey: 'full_name',
        header: () => <div className="text-left">From</div>,
        cell: ({ row }) => {
            return (
                <div className="flex cursor-pointer items-center gap-2">
                    <div>
                        <div className="text-left font-medium">{row.original.full_name}</div>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: 'contact_person',
        header: () => <div className="text-left">Contact Person</div>,
        cell: ({ row }) => {
            return (
                <div className="flex cursor-pointer items-center gap-2">
                    <div>
                        <div className="text-left font-medium">{row.original.contact_person}</div>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: 'email',
        header: () => <div className="text-left">Email</div>,
        cell: ({ row }) => {
            return (
                <div className="flex cursor-pointer items-center gap-2">
                    <div>
                        <div className="text-left font-medium">{row.original.email}</div>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: 'engagement_type',
        header: () => <div className="text-left">Engagement Type</div>,
        cell: ({ row }) => {
            return (
                <div className="flex cursor-pointer items-center gap-2">
                    <div>
                        <div className="text-left font-medium">{row.original.engagement_type}</div>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: 'options',
        header: () => <div className="text-left"></div>,
        cell: ({ row }) => {
            return <FormPreview data={row.original} type="volunteers" title="Volunteer form submission" />;
        },
    },
];

export default function submissions() {
    const { volunteers, partners, memberships } = usePage().props;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Form Submissions" />

            <div className="h-full gap-4 rounded-xl p-4">
                <Tabs defaultValue="partnerships" className="w-full">
                    <TabsList className="flex h-auto gap-2 p-2">
                        <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
                        <TabsTrigger value="memberships">Memberships</TabsTrigger>
                        <TabsTrigger value="volunteers">Volunteers</TabsTrigger>
                    </TabsList>
                    <TabsContent value="partnerships">
                        <Deferred data={'partners'} fallback={'Loading...'}>
                            {partners?.length > 0 ? (
                                <DataTable
                                    columns={p_columns}
                                    data={partners}
                                    searchableColumn="email"
                                    placeholder="Search submission email..."
                                    type="submissions"
                                />
                            ) : (
                                <div className="mt-10">
                                    <EmptyState />
                                </div>
                            )}
                        </Deferred>
                    </TabsContent>
                    <TabsContent value="memberships">
                        <Deferred data={'memberships'} fallback={'Loading...'}>
                            {memberships?.length > 0 ? (
                                <DataTable
                                    columns={m_columns}
                                    data={memberships}
                                    searchableColumn="email"
                                    placeholder="Search submission email..."
                                    type="submissions"
                                />
                            ) : (
                                <div className="mt-10">
                                    <EmptyState />
                                </div>
                            )}
                        </Deferred>
                    </TabsContent>
                    <TabsContent value="volunteers">
                        <Deferred data={'volunteers'} fallback={'Loading...'}>
                            {volunteers?.length > 0 ? (
                                <DataTable
                                    columns={v_columns}
                                    data={volunteers}
                                    searchableColumn="email"
                                    placeholder="Search submission email..."
                                    type="submissions"
                                />
                            ) : (
                                <div className="mt-10">
                                    <EmptyState />
                                </div>
                            )}
                        </Deferred>
                    </TabsContent>
                </Tabs>
            </div>
        </AppLayout>
    );
}
