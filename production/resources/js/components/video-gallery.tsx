import { CarouselItem } from '@/components/ui/carousel';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './ui/dialog';
import SliderContent from './ui/slider-content';
export default function VideoGallery({ videos = [] }) {
    const slides = [];
    for (let i = 0; i < videos.length; i += 4) {
        slides.push(videos.slice(i, i + 4));
    }

    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    return (
        <SliderContent title={'Videos'}>
            {slides?.map((slide, Sindex) => {
                return (
                    <CarouselItem className="grid w-full grid-cols-3 gap-4 md:grid-cols-2" key={Sindex}>
                        {slide.map((video, index) => (
                            <div key={index} className='overflow-hidden'>
                                {video.banner_url ? (
                                    <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedVideo(null)}>
                                        <DialogTrigger
                                            onClick={() => setSelectedVideo(video?.url)}
                                            className="h-full w-full cursor-pointer rounded-xl p-0"
                                        >
                                            <>
                                            <img
                                                src={video?.banner_url || '/images/ytube.png'}
                                                className="max-h-[250px] w-full rounded-xl bg-gray-100 object-cover hover:opacity-90"
                                                alt=""
                                            />
                                            <p className="text-sm text-left text-[#585858] capitalize"> {video?.caption || ""}</p>
                                            </>
                                        </DialogTrigger>
                                        <DialogContent className="max-h-[calc(100%-90px)] w-full overflow-hidden p-0 md:max-w-3xl">
                                            <DialogTitle className="hidden pt-4 pl-5 lg:block">{video?.caption}</DialogTitle>
                                            {selectedVideo && (
                                                <iframe
                                                    className="min-h-[500px] w-full"
                                                    src={selectedVideo}
                                                    title={video?.caption}
                                                    frameBorder="0"
                                                    allowFullScreen
                                                ></iframe>
                                            )}
                                        </DialogContent>
                                    </Dialog>
                                ) : (
                                    <>
                                    <iframe
                                        className="min-h-[200px] w-full lg:min-h-[250px]  bg-gray-100 rounded-xl"
                                        src={video?.url}
                                        title={video?.caption}
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                <p className="text-sm text-[#585858] capitalize"> {video?.caption || ""}</p>
                                    </>
                                )}
                            </div>
                        ))}
                    </CarouselItem>
                );
            })}
        </SliderContent>
    );
}
