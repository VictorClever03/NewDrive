import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import logoApp from "@/public/logo.png";


import CustomNextButton from './buttonsNextPrev/CustomNextButton';
import CustomPrevButton from './buttonsNextPrev/CustomPrevButton';
import Image from 'next/image';

const images = [
  logoApp,
  logoApp,
  logoApp,
  logoApp,
];

function Carousel() {
  return (
    <div className="relative mx-auto">
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

export default Carousel;
