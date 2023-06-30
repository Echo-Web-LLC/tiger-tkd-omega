import React, { useRef } from "react";
import Image from "next/image";
import { Swiper } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Pagination, Navigation]);

const Carousel = ({ children }: { children: React.ReactNode }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full relative">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        className="relative"
        style={
          {
            "--swiper-pagination-color": "#000080",
            "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
          } as React.CSSProperties
        }
      >
        {children}
      </Swiper>
      <button ref={prevRef}>
        <Image
          src="/left-arrow.png"
          width={20}
          height={20}
          alt="carousel left arrow"
          className="absolute z-10 top-1/2 left-0 -translate-y-1/2 ml-2"
        />
      </button>
      <button ref={nextRef}>
        <Image
          src="/right-arrow.png"
          width={20}
          height={20}
          alt="carousel right arrow"
          className="absolute z-10 top-1/2 right-0 -translate-y-1/2 mr-2"
        />
      </button>
    </div>
  );
};

export default Carousel;
