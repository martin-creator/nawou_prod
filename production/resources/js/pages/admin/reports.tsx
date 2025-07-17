import { DataTable } from '@/components/data-table';
import EmptyState from '@/components/empty-state';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

import { Dialog, DialogContent, DialogFooter, DialogTitle } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Deferred, Head, useForm, usePage } from '@inertiajs/react';
import { Edit2, ExternalLink, Loader2, LoaderCircle, MoreHorizontal, PlusCircle, Trash2 } from 'lucide-react';
import { FormEventHandler, useState } from 'react';
import { toast } from 'sonner';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/panel',
    },
    {
        title: 'Annual reports',
        href: '/reports',
    },
];

export default function AnnualReports() {
    const { reports } = usePage().props;

    const {
        data,
        setData,
        post,
        processing,
        reset,
        patch,
        delete: deleteMe,
    } = useForm({
        report_file: null,
        year: '',
        key_impacts: [
            {
                title: '',
                description: '',
            },
        ],
    });

    const [modalOpen, setModalOpen] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [toDelete, setToDelete] = useState(null);
    const [editing, setEditing] = useState(null);

    // Handle key impacts change
    const handleKeyImpactChange = (index, field, value) => {
        const updatedKeyImpacts = [...data.key_impacts];
        updatedKeyImpacts[index][field] = value;
        setData('key_impacts', updatedKeyImpacts);
    };

    // Add a new key impact
    const addKeyImpact = () => {
        setData('key_impacts', [...data.key_impacts, { title: '', description: '' }]);
    };

    // Remove a key impact
    const removeKeyImpact = (index) => {
        const updatedKeyImpacts = data.key_impacts.filter((_, i) => i !== index);
        setData('key_impacts', updatedKeyImpacts);
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        if (editing) {
            patch(route('reports', { id: editing }), {
                onSuccess: () => {
                    toast.success(`Anuual report updated successfully!`);
                    setModalOpen(false);
                    reset();
                },
                onError: (errors) => {
                    for (const key in errors) {
                        toast.error(`${key} error`, { description: errors[key], closeButton: true, className: 'capitalize' });
                    }
                },
                onFinish: () => {
                    setToDelete(null);
                    setEditing(null);
                },
            });
        } else if (toDelete) {
            deleteMe(route('reports', { id: toDelete?.id }), {
                onSuccess: () => {
                    toast.success(`Anuual report deleted successfully!`);
                    setModalOpen(false);
                    reset();
                    setConfirm(false);
                },
                onError: (errors) => {
                    for (const key in errors) {
                        toast.error(`${key} error`, { description: errors[key], closeButton: true, className: 'capitalize' });
                    }
                },
                onFinish: () => {
                    setToDelete(null);
                    setEditing(null);
                },
            });
        } else {
            post(route('reports'), {
                onSuccess: () => {
                    toast.success('Saved!', {
                        description: `Annual report has been saved successfully.`,
                        closeButton: true,
                    });
                    setModalOpen(false);
                    reset();
                },
                onError: (errors) => {
                    for (const key in errors) {
                        toast.error(`${key} error`, {
                            description: errors[key],
                            closeButton: true,
                            className: 'capitalize',
                        });
                    }
                },
            });
        }
    };

    const columns = [
        {
            accessorKey: 'id',
            header: () => <div className="text-center">#</div>,
            cell: ({ row }) => {
                return <div className="text-center font-medium">{row.index + 1}.</div>;
            },
        },
        {
            accessorKey: 'year',
            header: () => <div className="text-left">Year</div>,
            cell: ({ row }) => {
                return (
                    <div className="flex cursor-pointer items-center gap-2">
                        <div>
                            <div className="text-left font-medium">{row.original.year}</div>
                        </div>
                    </div>
                );
            },
        },
        {
            accessorKey: 'key_impacts',
            header: () => <div className="text-left">Key Impacts</div>,
            cell: ({ row }) => {
                return (
                    <div className="flex cursor-pointer items-center gap-2">
                        <div>
                            <div className="text-left font-medium">{row.original.key_impacts?.length} Items</div>
                        </div>
                    </div>
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
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="h-5 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <a href={row.original.report_file} target="_blank" rel="noopener noreferrer">
                                <DropdownMenuItem>
                                    <ExternalLink />
                                    Open
                                </DropdownMenuItem>
                            </a>
                            <DropdownMenuItem
                                onClick={() => {
                                    setData(row.original);
                                    setEditing(row.original.id);
                                    setModalOpen(true);
                                }}
                            >
                                <Edit2 />
                                Edit
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={() => {
                                    setToDelete(row.original);
                                    setConfirm(true);
                                }}
                            >
                                <Trash2 />
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Annual reports" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <Deferred data={'reports'} fallback={'Loading...'}>
                    {reports?.length > 0 ? (
                        <DataTable
                            columns={columns}
                            data={reports}
                            searchableColumn="year"
                            placeholder="Search report year..."
                            type="reports"
                            actions={
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                        setModalOpen(true);
                                    }}
                                >
                                    <PlusCircle /> Create
                                </Button>
                            }
                        />
                    ) : (
                        <EmptyState
                            actions={
                                <Button variant="outline" onClick={() => setModalOpen(true)}>
                                    <PlusCircle /> Create New
                                </Button>
                            }
                        />
                    )}
                </Deferred>
            </div>

            <Dialog
                open={modalOpen}
                onOpenChange={(state) => {
                    setModalOpen(state);
                    // reset form inputs here
                    if (state == false) {
                        reset();
                        setEditing(null);
                    }
                }}
            >
                <DialogContent className="max-h-[700px] overflow-auto">
                    <DialogTitle>{editing ? 'Editing' : 'Add'} Annual Report</DialogTitle>
                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <Label className="capitalize">Year</Label>
                            <Input type="number" disabled={processing} value={data.year} onChange={(e) => setData('year', e.target.value)} required />
                        </div>

                        <div>
                            <Label className="capitalize">Annual report File</Label>
                            <Input
                                type="file"
                                disabled={processing}
                                onChange={(e) => setData('report_file', e.target.files[0])}
                                accept=".pdf,.doc,.docx"
                                required={!editing}
                            />
                        </div>

                        {/* Key Impacts */}
                        <div className="mb-4">
                            <Label>Key Impacts</Label>
                            {data.key_impacts?.map((impact, index) => (
                                <div key={index} className="mb-2 flex gap-2 border-b pb-2">
                                    <Input
                                        type="text"
                                        placeholder="Title"
                                        value={impact.title}
                                        onChange={(e) => handleKeyImpactChange(index, 'title', e.target.value)}
                                        required
                                        className="w-1/2 rounded border p-2"
                                    />
                                    <Textarea
                                        placeholder="Description"
                                        value={impact.description}
                                        onChange={(e) => handleKeyImpactChange(index, 'description', e.target.value)}
                                        required
                                        className="w-1/2 rounded border p-2"
                                    />
                                    {index > 0 && (
                                        <Button
                                            variant={'link'}
                                            type="button"
                                            size={'sm'}
                                            onClick={() => removeKeyImpact(index)}
                                            className="p-1 text-red-500"
                                        >
                                            ✖
                                        </Button>
                                    )}
                                </div>
                            ))}
                            <Button type="button" variant={'link'} onClick={addKeyImpact} className="mt-2 p-0">
                                + Add Key Impact
                            </Button>
                        </div>
                        <DialogFooter>
                            <Button type="submit" disabled={processing}>
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Submit
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            {/* delete confirm */}
            <AlertDialog open={confirm} onOpenChange={setConfirm}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Delete "<b>{toDelete?.year}</b> Report"?
                        </AlertDialogTitle>
                        <AlertDialogDescription>This will delete the item and all related data continue?</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction variant="destructive" disabled={processing} onClick={submit}>
                            {processing && <Loader2 className="animate-spin" />}
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </AppLayout>
    );
}
