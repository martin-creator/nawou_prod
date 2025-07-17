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
import { Label } from '@/components/ui/label';
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
    { title: 'FAQs', href: '/panel/about/faqs' },
];

export default function FAQs() {
    const { faqs } = usePage().props;

    const {
        data,
        setData,
        post,
        processing,
        reset,
        patch,
        delete: deleteMe,
    } = useForm({
        question: '',
        answer: '',
    });

    const [modalOpen, setModalOpen] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [toDelete, setToDelete] = useState(null);
    const [editing, setEditing] = useState(null);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        if (editing) {
            patch(route('faqs', { id: editing }), {
                onSuccess: () => {
                    toast.success(`FAQ updated successfully!`);
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
            deleteMe(route('faqs', { id: toDelete?.id }), {
                onSuccess: () => {
                    toast.success(`FAQ deleted successfully!`);
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
            post(route('faqs'), {
                onSuccess: () => {
                    toast.success(`FAQ added successfully!`);
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
            accessorKey: 'question',
            header: () => <div className="text-left">Question</div>,
            cell: ({ row }) => {
                return (
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="cursor-pointer truncate text-left">{row.getValue('question')?.substring(0, 50)}</div>
                            </TooltipTrigger>
                            <TooltipContent className="max-h-[250px] overflow-auto p-3 ">
                                <p className='whitespace-pre-line'>{row.getValue('question')}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                );
            },
        },
        {
            accessorKey: 'answer',
            header: () => <div className="text-left">Answer</div>,
            cell: ({ row }) => {
                return (
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="cursor-pointer truncate text-left">{row.getValue('answer')?.substring(0, 50)}</div>
                            </TooltipTrigger>
                            <TooltipContent className="max-h-[250px] overflow-auto p-3">
                                <p className='whitespace-pre-line'>{row.getValue('answer')}</p>
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
            <Head title="FAQs" />
            <AboutUsLayout>
                <div className="flex flex-col gap-4 p-4">
                    <Deferred data="faqs" fallback="Loading...">
                        {faqs?.length > 0 ? (
                            <DataTable
                                columns={columns}
                                data={faqs}
                                searchableColumn="question"
                                placeholder="Search question..."
                                type="FAQs"
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
                        <DialogTitle>Add FAQ</DialogTitle>
                        <form onSubmit={submit} className="space-y-4">
                            <div>
                                <Label>Question</Label>
                                <Textarea
                                    disabled={processing}
                                    value={data.question}
                                    onChange={(e) => setData('question', e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <Label>Answer</Label>
                                <Textarea disabled={processing} value={data.answer} onChange={(e) => setData('answer', e.target.value)} required />
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
                                Delete "<b>{toDelete?.question}</b>"?
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
