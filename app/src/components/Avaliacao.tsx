import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import aval1 from "@/public/avaliacao-01.jpg";
import aval2 from "@/public/avaliacao-012.jpg";
import aval3 from "@/public/avaliacao-06.jpg";
import aval4 from "@/public/avaliacao-07.jpg";
import aval5 from "@/public/avaliacao-pub-1.jpg";
import aval6 from "@/public/avaliacao-09.jpg";


import CustomNextButton from './buttonsNextPrev/CustomNextButton';
import CustomPrevButton from './buttonsNextPrev/CustomPrevButton';
import Image from 'next/image';

const images = [
  aval1,
  aval2,
  aval3,
  aval4,
  aval5,
  aval6,
];

function Avaliacao() {
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

export default Avaliacao;
