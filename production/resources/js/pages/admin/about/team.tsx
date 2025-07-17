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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import AboutUsLayout from '@/layouts/about/layout';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Deferred, Head, useForm, usePage } from '@inertiajs/react';
import { Edit2, Loader2, LoaderCircle, MoreHorizontal, PlusCircle, Trash2 } from 'lucide-react';
import { FormEventHandler, useState } from 'react';
import { toast } from 'sonner';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/panel' },
    { title: 'Our Teams', href: '/panel/about/teams' },
];

export default function OurTeam() {
    const { teams } = usePage().props;

    const {
        data,
        setData,
        post,
        processing,
        reset,
        patch,
        delete: deleteMe,
    } = useForm({
        name: '',
        title: '',
        avatar: null,
        type: 'admin',
        description: '',
    });

    const [modalOpen, setModalOpen] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [toDelete, setToDelete] = useState(null);
    const [editing, setEditing] = useState(null);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        if (editing) {
            post(route('teams.update', { id: editing }), {
                onSuccess: () => {
                    toast.success(`Team member updated successfully!`);
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
            deleteMe(route('teams', { id: toDelete?.id }), {
                onSuccess: () => {
                    toast.success(`Team member deleted successfully!`);
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
            post(route('teams'), {
                onSuccess: () => {
                    toast.success(`Team member added successfully!`);
                    setModalOpen(false);
                    reset();
                },
                onError: (errors) => {
                    for (const key in errors) {
                        toast.error(`${key} error`, { description: errors[key], closeButton: true, className: 'capitalize' });
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
            accessorKey: 'name',
            header: () => <div className="text-left">Name</div>,
            cell: ({ row }) => {
                return (
                    <div className="flex cursor-pointer items-center gap-2">
                        <img src={row.original?.avatar} alt="" className="h-10 w-10 rounded-lg" />
                        <div>
                            <div className="text-left font-medium">{row.original.name}</div>
                            <div className="text-left">{row.original.title}</div>
                        </div>
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
            accessorKey: 'type',
            header: () => <div className="text-left">Type</div>,
            cell: ({ row }) => {
                return <div className="truncate text-left capitalize">{row.getValue('type')}</div>;
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
            <Head title="Our Teams" />
            <AboutUsLayout>
                <div className="flex flex-col gap-4 p-4 py-1">
                    <Deferred data="teams" fallback="Loading...">
                        {teams?.length > 0 ? (
                            <DataTable
                                columns={columns}
                                data={teams}
                                searchableColumn="name"
                                placeholder="Search name..."
                                type="teams"
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
                                        <PlusCircle /> Add Team
                                    </Button>
                                }
                            />
                        )}
                    </Deferred>
                </div>

                {/* Modal for Adding News/Event */}
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
                        <DialogTitle>Add Team Member</DialogTitle>
                        <form onSubmit={submit} className="space-y-4">
                            <div>
                                <Label>Member Type</Label>
                                <Select value={data.type} disabled={processing} onValueChange={(value) => setData('type', value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="admin">Administrator</SelectItem>
                                        <SelectItem value="director">Director</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Label>Full Name</Label>
                                <Input
                                    type="text"
                                    disabled={processing}
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <Label>Title</Label>
                                <Input
                                    type="text"
                                    disabled={processing}
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <Label>Avartar</Label>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    disabled={processing}
                                    onChange={(e) => setData('avatar', e.target.files[0])}
                                    required={!editing}
                                />
                            </div>

                            <div>
                                <Label>Description</Label>
                                <Textarea
                                    type="text"
                                    disabled={processing}
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    required
                                />
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
                                Delete "<b>{toDelete?.name}</b>"?
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
            </AboutUsLayout>
        </AppLayout>
    );
}
