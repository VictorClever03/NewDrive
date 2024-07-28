import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import slide1 from "@/public/sala-01.jpg";
import slide2 from "@/public/sala-02.jpg";
import slide3 from "@/public/sala-03.jpg";
import slide4 from "@/public/sala-04.jpg";
import slide5 from "@/public/sala-05.jpg";
import slide6 from "@/public/sala-06.jpg";


import CustomNextButton from './buttonsNextPrev/CustomNextButton';
import CustomPrevButton from './buttonsNextPrev/CustomPrevButton';
import Image from 'next/image';

const images = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
];

export function SlideSalaOnline() {
  return (
    <div className="relative mx-auto ">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.custom-next-button',
          prevEl: '.custom-prev-button',
        }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
          </SwiperSlide>
        ))}
        <div className="custom-prev-button absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          <CustomPrevButton />
        </div>
      <div className="custom-next-button absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <CustomNextButton />
        </div>
      </Swiper>
    </div>
  );
}


