import React from "react";
import { Swiper } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Pagination, Navigation]);

const Carousel = ({ children }: { children: React.ReactNode }) => {
  return (
    <Swiper
      loop={true}
      spaceBetween={10}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      slidesPerView={1}
      className="h-96 w-full"
      style={
        {
          "--swiper-pagination-color": "#000080",
          "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
        } as React.CSSProperties
      }
    >
      {children}
    </Swiper>
  );
};

export default Carousel;
