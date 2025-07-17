/* eslint-disable @typescript-eslint/no-explicit-any */
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { Button } from './button';

type SliderContentProps = {
    children:any,
    title:string
}

const SliderContent = ({children, title}:SliderContentProps) => {

    const clickPrev = useRef<HTMLButtonElement>(null);
    const clickNext = useRef<HTMLButtonElement>(null);

  return (
    <div className="mx-auto w-full">
            <div className="mb-2 flex items-center justify-between">
                <h2 className="text-[24px] lg:text-[28px] font-semibold text-[#585858]">{title}</h2>
                <div>
                    <Button
                        variant={'ghost'}
                        size={'icon'}
                        className="rounded-full"
                        onClick={() => {
                            clickPrev.current?.click();
                        }}
                    >
                        <ChevronLeft />
                    </Button>
                    <Button
                        variant={'ghost'}
                        size={'icon'}
                        className="rounded-full"
                        onClick={() => {
                            clickNext.current?.click();
                        }}
                    >
                        <ChevronRight />
                    </Button>
                </div>
            </div>
            <div className="w-full">
                <Carousel
                    opts={{
                        align: 'start',
                        loop: true,
                    }}
                    orientation="horizontal"
                    className="w-full"
                >
                    <CarouselContent>
                        {children}
                    </CarouselContent>
                    <CarouselPrevious className="hidden" ref={clickPrev} />
                    <CarouselNext className="hidden" ref={clickNext} />
                </Carousel>
            </div>
        </div>
  )
}

export default SliderContent
