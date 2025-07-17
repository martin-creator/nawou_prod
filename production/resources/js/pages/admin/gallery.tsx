import { GalleryItem } from '@/components/gallery-item';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

import { Dialog, DialogContent, DialogFooter, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Deferred, Head, Link, useForm, usePage } from '@inertiajs/react';
import { LoaderCircle, Plus } from 'lucide-react';
import { FormEventHandler, useState } from 'react';
import { toast } from 'sonner';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/panel',
    },
    {
        title: 'Gallery',
        href: '/gallery',
    },
];

export default function Gallery() {
    const { galleries } = usePage().props;

    const { data, setData, post, processing, reset } = useForm({
        url: null,
        caption: '',
        type: 'image',
        banner_url: null,
    });

    const [videoType, setVideoType] = useState('file');

    const [modalOpen, setModalOpen] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('gallery'), {
            onSuccess: () => {
                toast.success('Gallery updated!', {
                    description: `Your ${data.type} has been added to the gallery.`,
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
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Gallery" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <Deferred data={'galleries'} fallback={'Loading...'}>
                    <>
                        <Card className="rounded-md shadow-none">
                            <CardHeader className="flex border-b pb-5">
                                <CardTitle className="flex items-center justify-between">
                                    <h4 className="text-xl">Gallery</h4>
                                    <Button onClick={() => setModalOpen(true)} variant={'outline'} size={'sm'}>
                                        <Plus /> Add to gallery
                                    </Button>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                    {galleries?.data.map((item) => <GalleryItem item={item} key={item.id} />)}
                                </div>
                            </CardContent>
                            <CardFooter className="border-t pt-5">
                                {/* Pagination */}
                                <Pagination>
                                    <PaginationContent>
                                        {galleries?.links.map((link, index) => (
                                            <PaginationItem key={index}>
                                                <Link href={link.url} method="get" as="button" only={['galleries']} preserveScroll prefetch>
                                                    <PaginationLink
                                                        href={link.url}
                                                        size={'sm'}
                                                        isActive={link.active}
                                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                                    />
                                                </Link>
                                            </PaginationItem>
                                        ))}
                                    </PaginationContent>
                                </Pagination>
                            </CardFooter>
                        </Card>
                    </>
                </Deferred>
            </div>

            <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                <DialogContent>
                    <DialogTitle>Add Media</DialogTitle>
                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <Label>Type</Label>
                            <Select value={data.type} disabled={processing} onValueChange={(value) => setData('type', value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="image">Image</SelectItem>
                                    <SelectItem value="video">Video</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label className="capitalize">{data.type} {videoType}</Label>
                            <Input
                                type={data.type=='video'?videoType:'file'}
                                accept={`${data.type}/*`}
                                disabled={processing}
                                onChange={(e) => {
                                    if(e.type =='file'){
                                        setData('url', e.target.files[0])
                                    }else{
                                        setData('url', e.target.value)
                                    }
                                }}
                                required
                                className="mb-1"
                            />
                            {data.type == 'video' ? (
                                <Label className="cursor-pointer items-center">
                                    <Checkbox checked={videoType=='url'}
                                        onCheckedChange={(val) => {
                                            if(val){
                                                setVideoType('url')
                                            }else{
                                                setVideoType('file')
                                            }
                                        }}
                                    />{' '}
                                    Add video link instead.
                                </Label>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div>
                            <Label className="capitalize">{data.type} Caption</Label>
                            <Input
                                type="text"
                                disabled={processing}
                                value={data.caption}
                                onChange={(e) => setData('caption', e.target.value)}
                                required
                            />
                        </div>

                        {data.type == 'video' ? (
                            <div>
                                <Label className="capitalize">{data.type} Banner (Optional)</Label>
                                <Input disabled={processing} type="file" onChange={(e) => setData('banner_url', e.target.files[0])} />
                            </div>
                        ) : (
                            ''
                        )}
                        <DialogFooter>
                            <Button type="submit" disabled={processing}>
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Submit
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </AppLayout>
    );
}
