import { DialogTitle } from '@radix-ui/react-dialog';
import { useState } from 'react';
import { CarouselItem } from './ui/carousel';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import SliderContent from './ui/slider-content';

export default function PhotoGallery({gallery=[]}) {
    // Split images into groups of 5
    const slides = [];
    for (let i = 0; i < gallery.length; i += 5) {
        slides.push(gallery.slice(i, i + 5));
    }

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <SliderContent title="Pictures">
            {slides.map((slide, slideIndex) => (
                <CarouselItem key={slideIndex} className="w-full">
                    <div className="grid grid-cols-3 gap-4 md:grid-cols-3">
                        {slide.map((image, index) => (
                            <div key={index} className={`overflow-hidden rounded-lg ${index === 0 ? 'row-span-2 md:col-span-1' : ''}`}>
                                <Dialog>
                                    <DialogTrigger
                                        onClick={() => setSelectedImage(image.url)}
                                        className="h-full w-full cursor-pointer rounded-lg text-left"
                                    >
                                        <img
                                            src={image.url}
                                            alt={image.caption}
                                            className={`h-full w-full rounded-lg object-cover bg-gray-100 transition-transform hover:grayscale ${
                                                index === 0 ? 'lg:h-[540px]' : 'lg:h-[240px]'
                                            }`}
                                        />
                                        <p className="hidden text-[#585858] md:block">{image.caption}</p>
                                    </DialogTrigger>
                                    <DialogContent className="p-2 md:max-w-3xl max-h-[calc(100%-90px)] overflow-y-auto">
                                        <DialogTitle>{image.caption}</DialogTitle>
                                        {selectedImage && <img src={selectedImage} alt="Preview" className="w-full h-full rounded-lg" />}
                                    </DialogContent>
                                </Dialog>
                            </div>
                        ))}
                    </div>
                </CarouselItem>
            ))}
        </SliderContent>
    );
}
