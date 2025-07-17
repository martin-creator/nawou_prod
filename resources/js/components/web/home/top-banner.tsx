import { TextLoop } from '@/components/motion-primitives/text-loop';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Link } from '@inertiajs/react';
import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';

export default function TopBanner() {
    const slides = ['/images/slider/1.jpg', '/images/slider/2.jpg', '/images/slider/3.jpg', '/images/slider/4.jpg', '/images/slider/5.jpg'];

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'start',
            containScroll: 'trimSnaps',
        },
        [
            AutoScroll({
                playOnInit: true,
                stopOnMouseEnter: false,
                stopOnInteraction: false,
                delay: 0,
                speed: 2,
            }),
        ],
    );

    return (
        <>
            <section className="bg-white px-4 pt-15 pb-10 text-center lg:pt-20 lg:pb-0">
                <h1 className="scroll-m-20 text-4xl leading-10 font-bold tracking-tight lg:text-6xl lg:leading-20">
                    Empowering
                    <TextLoop
                        className="ml-3 p-0"
                        transition={{
                            type: 'spring',
                            stiffness: 500,
                            damping: 90,
                            mass: 10,
                        }}
                        interval={5}
                        variants={{
                            initial: {
                                y: 20,
                                rotateX: 90,
                                opacity: 0,
                                filter: 'blur(4px)',
                            },
                            animate: {
                                y: 0,
                                rotateX: 0,
                                opacity: 1,
                                filter: 'blur(0px)',
                            },
                            exit: {
                                y: -20,
                                rotateX: -90,
                                opacity: 0,
                                filter: 'blur(4px)',
                            },
                        }}
                    >
                        <span className="text-primary italic">Women,</span>
                        <span className="text-primary italic">Women,</span>
                    </TextLoop>
                    <br /> Transforming Communities.
                </h1>
                <p className="mx-auto mt-0 max-w-4xl text-[20px] font-medium text-gray-600">
                    Empowering women in Uganda to create sustainable futures and transform communities.
                </p>
                <div className="mt-6 flex flex-col justify-center gap-4 lg:flex-row">
                    <Link href={route('donate')} className="w-full lg:w-[152px]">
                        <Button className="bg-primary hover:primary/7 h-[42px] w-full cursor-pointer rounded-lg px-6 py-2 text-white lg:w-[152px]">
                            Donate Now
                        </Button>
                    </Link>
                    <Link href={route('about')} className="w-full lg:w-[152px]">
                        <Button
                            variant="outline"
                            className="border-primary text-primary hover:text-primary h-[42px] w-full cursor-pointer rounded-lg px-6 py-2 lg:w-[152px]"
                        >
                            Learn more
                        </Button>
                    </Link>
                </div>
            </section>
            <div className="w-full px-4 lg:px-5">
                <div className="border-gray-100 mt-7 overflow-hidden rounded-[20px] border-4">
                    <div ref={emblaRef} className="overflow-hidden  bg-white">
                        <div className="flex bg-white">
                            {slides.map((slide, index) => (
                                <div key={index} className="h-[250px] lg:h-[450px] min-w-0 flex-shrink-0 basis-1/1 lg:basis-1/4 mr-1">
                                    <img src={slide || '/images/slider/placeholder.svg'} alt={`Slide ${index + 1}`} className="h-full w-full object-cover bg-gray-100" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
