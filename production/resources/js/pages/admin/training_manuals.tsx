import { DataTable } from '@/components/data-table';
import EmptyState from '@/components/empty-state';
import { AlertDialogFooter, AlertDialogHeader } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Dialog, DialogContent, DialogFooter, DialogTitle } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
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
        title: 'Training Manuals',
        href: '/training_manuals',
    },
];

export default function TrainingMaterials() {
    const { training_manuals } = usePage().props;

    const {
        data,
        setData,
        post,
        processing,
        reset,
        patch,
        delete: deleteMe,
    } = useForm({
        file: null,
        image: null,
        title: '',
        description: '',
    });

    const [modalOpen, setModalOpen] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [toDelete, setToDelete] = useState(null);
    const [editing, setEditing] = useState(null);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        if (editing) {
            post(route('training_manuals.update', { id: editing }), {
                onSuccess: () => {
                    toast.success(`Training manual updated successfully!`);
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
            deleteMe(route('training_manuals', { id: toDelete?.id }), {
                onSuccess: () => {
                    toast.success(`Training manual deleted successfully!`);
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
            post(route('training_manuals'), {
                onSuccess: () => {
                    toast.success('Saved!', {
                        description: `Training manual has been saved successfully.`,
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
            accessorKey: 'title',
            header: () => <div className="text-left">Title</div>,
            cell: ({ row }) => {
                return (
                    <div className="flex cursor-pointer items-center gap-2">
                        {row.original.image ? <img src={row.original?.image} alt="" className="h-10 w-10 rounded-lg" /> : <></>}
                        <div className="text-left font-medium">{row.original.title}</div>
                    </div>
                );
            },
        },
        {
            accessorKey: 'description',
            header: () => <div className="text-left">Description</div>,
            cell: ({ row }) => {
                return (
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="cursor-pointer truncate text-left">{row.getValue('description')?.substring(0, 50)}</div>
                            </TooltipTrigger>
                            <TooltipContent className="max-h-[250px] overflow-auto p-3">
                                <p>{row.getValue('description')}</p>
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
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="h-5 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <a href={row.original.file} target="_blank" rel="noopener noreferrer">
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
            <Head title="Training Manuals" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <Deferred data={'training_manuals'} fallback={'Loading...'}>
                    {training_manuals?.length > 0 ? (
                        <DataTable
                            columns={columns}
                            data={training_manuals}
                            searchableColumn="title"
                            placeholder="Search title..."
                            type="Training Manuals"
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
                <DialogContent>
                    <DialogTitle>{editing ? 'Editing' : 'Add'} Media</DialogTitle>
                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <Label className="capitalize">Title</Label>
                            <Input type="text" disabled={processing} value={data.title} onChange={(e) => setData('title', e.target.value)} required />
                        </div>

                        <div>
                            <Label className="capitalize">Description</Label>
                            <Textarea
                                disabled={processing}
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <Label className="capitalize">Training Manual File</Label>
                            <Input
                                type="file"
                                disabled={processing}
                                onChange={(e) => setData('file', e.target.files[0])}
                                accept=".pdf,.doc,.docx"
                                required={!editing}
                            />
                        </div>
                        <div>
                            <Label className="capitalize">Thumbnail (Optional)</Label>
                            <Input disabled={processing} type="file" onChange={(e) => setData('image', e.target.files[0])} accept="image/*" />
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
