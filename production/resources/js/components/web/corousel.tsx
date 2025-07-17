'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

import { EffectCoverflow, Autoplay } from 'swiper/modules'

export function CoverflowCarousel({ slides }: { slides: string[] }) {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Autoplay]}
      className="w-full max-w-6xl"
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          className="w-[300px] h-[500px] flex items-center justify-center"
        >
          <img
            src={slide}
            alt={`Slide ${index}`}
            className="h-full w-full object-cover rounded-xl shadow-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
