import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import logoApp from "@/public/logo.png";
import Image from "next/image";

import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

// Ativar o módulo Autoplay
SwiperCore.use([Autoplay]);

const images = [logoApp, logoApp, logoApp
    , logoApp
    , logoApp
    , logoApp
    , logoApp
    ];

function SwipperComponent() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={4}
      centeredSlides={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: true,
      }}
      speed={2000} // Velocidade da transição entre slides em milissegundos
      loop={true}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ width: "150px", height: "auto" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwipperComponent;
