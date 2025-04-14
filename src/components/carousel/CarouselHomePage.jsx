import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

// import required modules
import {
  Pagination,
  Navigation,
  FreeMode,
  Thumbs,
  Autoplay,
} from "swiper/modules";

export default function CarouselHomePage() {
  const sampleCarouselImg = ["./1.jpg", "./2.jpeg", "./3.jpeg", "./4.jpeg"];

  const pagination = {
    clickable: true,
  };
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={pagination}
        navigation={true}
        modules={[Pagination, Navigation, Thumbs, FreeMode, Autoplay]}
        className="mySwiper"
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
      >
        {sampleCarouselImg
          ? sampleCarouselImg.map((item, index) => (
              <SwiperSlide>
                <img
                  src={item}
                  alt="Carousel"
                  key={index}
                  style={{ backgroundSize: "contain" }}
                />
              </SwiperSlide>
            ))
          : "Loading the images"}
      </Swiper>
    </>
  );
}
