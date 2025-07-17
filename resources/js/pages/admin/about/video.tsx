import EmptyState from '@/components/empty-state';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogFooter, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AboutUsLayout from '@/layouts/about/layout';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Deferred, Head, Link, useForm, usePage } from '@inertiajs/react';
import { Edit, LoaderCircle, Plus, PlusCircle, Trash } from 'lucide-react';
import { FormEventHandler, useState } from 'react';
import { toast } from 'sonner';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/panel' },
    { title: 'Story Video', href: '/panel/about/story-video' },
];

export default function FAQs() {
    const { videos } = usePage().props;

    const {
        data,
        setData,
        post,
        processing,
        reset,
        delete: deleteMe,
        errors
    } = useForm({
        video: null,
        page: 'home',
    });

    const [modalOpen, setModalOpen] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [toDelete, setToDelete] = useState(null);
    const [editing, setEditing] = useState(null);

    const [videoType, setVideoType] = useState('file');

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        if (editing) {
            post(route('story_video.update', { id: editing }), {
                onSuccess: () => {
                    toast.success(`Story video updated successfully!`);
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
        } else {
            post(route('story_video'), {
                onSuccess: () => {
                    toast.success(`Story video added successfully!`);
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

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Story Videos" />
            <AboutUsLayout>
                <div className="flex flex-col gap-4 p-4">
                    <Deferred data="videos" fallback="Loading...">
                        <Card className="rounded-md shadow-none">
                            <CardHeader className="flex border-b pb-5">
                                <CardTitle className="flex items-center justify-between">
                                    <h4 className="text-xl">Story Videos</h4>
                                    <Button onClick={() => setModalOpen(true)} variant={'outline'} size={'sm'}>
                                        <Plus /> Add video
                                    </Button>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="grid grid-cols-1 py-0 lg:grid-cols-3 gap-3">
                                {videos?.length>0 ? (
                                    videos?.map((video, index) => (
                                        <Card
                                            key={video?.id}
                                            className="relative overflow-hidden rounded-md p-0 shadow-none w-full"
                                            onMouseEnter={() => setIsHover(true)}
                                            onMouseLeave={() => setIsHover(false)}
                                            //key={index}
                                        >
                                            <CardContent className="p-0">
                                                <iframe
                                                    src={video?.video}
                                                    className="object-fit h-[200px] lg:h-[350px] w-full"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen
                                                ></iframe>

                                                <div
                                                    className="bottom-0 left-0 flex w-full items-center justify-between bg-white p-0"
                                                    animate={isHover ? 'visible' : 'hidden'}
                                                    variants={{
                                                        hidden: { opacity: 0 },
                                                        visible: { opacity: 1 },
                                                    }}
                                                    transition={{ duration: 0.2, ease: 'easeOut' }}
                                                >
                                                    <Link
                                                        as="button"
                                                        onSuccess={() => {
                                                            toast.success('Item trashed!', {
                                                                description: `Your ${video?.type} has been deleted from the gallery.`,
                                                                closeButton: true,
                                                            });
                                                        }}
                                                        method="delete"
                                                        href={route('story_video')}
                                                        data={{ id: video?.id }}
                                                    >
                                                        <Button variant={'link'} className="m-0 p-0" size={'sm'}>
                                                            <Trash />
                                                        </Button>
                                                    </Link>
                                                    <span className="text-md font-bold capitalize">{video?.page} page video</span>
                                                    <Button
                                                        variant={'link'}
                                                        onClick={() => {
                                                            setData(video);
                                                            setEditing(video?.id);
                                                            setModalOpen(true);
                                                        }}
                                                        className="m-0 p-0"
                                                        size={'sm'}
                                                    >
                                                        <Edit />
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))
                                ) : (
                                    <EmptyState
                                        actions={
                                            <Button variant="outline" onClick={() => setModalOpen(true)}>
                                                <PlusCircle /> Add New
                                            </Button>
                                        }
                                    />
                                )}
                            </CardContent>
                        </Card>
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
                        <DialogTitle>{editing ? 'Editing' : 'Add'} Story Video</DialogTitle>
                        <form onSubmit={submit} className="space-y-4">
                            <div>
                                <Label className="capitalize">story video {videoType}</Label>
                                <Input
                                    type={videoType}
                                    accept="video/*"
                                    defaultValue={videoType=='url'?data.video:undefined}
                                    disabled={processing}
                                    onChange={(e) => {
                                        if (e.type == 'file') {
                                            setData('video', e.target.files[0]);
                                        } else {
                                            setData('video', e.target.value);
                                        }
                                    }}
                                    required
                                    className="mb-2"
                                />
                                <Label className="cursor-pointer items-center">
                                    <Checkbox
                                        checked={videoType == 'url'}
                                        onCheckedChange={(val) => {
                                            if (val) {
                                                setVideoType('url');
                                            } else {
                                                setVideoType('file');
                                            }
                                        }}
                                    />{' '}
                                    Add video link instead.
                                </Label>
                            </div>

                            <div>
                                <Label>Page to show video</Label>
                                <Select value={data.page} disabled={processing} onValueChange={(value) => setData('page', value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="home">Home Page</SelectItem>
                                        <SelectItem value="about">About Page</SelectItem>
                                        <SelectItem value="donation">Donations Page</SelectItem>
                                    </SelectContent>
                                </Select>
                                <InputError message={errors.page} />
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
            </AboutUsLayout>
        </AppLayout>
    );
}
