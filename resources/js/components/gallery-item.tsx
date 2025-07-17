import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { ExternalLink, Trash } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { toast } from 'sonner';
import { ProgressiveBlur } from './motion-primitives/progressive-blur';
import { Button } from './ui/button';

export function GalleryItem({ item }) {
    const [isHover, setIsHover] = useState(false);

    return (
        <Card key={item.id} className="relative overflow-hidden p-0" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <CardContent className="p-0">
                {item.type === 'image' ? (
                    <img src={item.url} alt={item.caption} className="h-40 w-full object-cover" />
                ) : (
                    <iframe src={item.url} className="h-40 w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                )}
                <div
                    className="bottom-0 left-0 flex w-full justify-between bg-white p-0"
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
                                description: `Your ${item.type} has been deleted from the gallery.`,
                                closeButton: true,
                            });
                        }}
                        method="delete"
                        href={route('gallery')}
                        data={{ id: item.id }}
                    >
                        <Button variant={'link'} className="m-0 p-0" size={'sm'}>
                            <Trash />
                        </Button>
                    </Link>

                    <a href={`${item.url}?preview=true`} target="_blank">
                        <Button variant={'link'} className="m-0 p-0" size={'sm'}>
                            <ExternalLink />
                        </Button>
                    </a>
                </div>
            </CardContent>
        </Card>
    );
}
