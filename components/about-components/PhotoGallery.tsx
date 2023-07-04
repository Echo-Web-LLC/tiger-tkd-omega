"use client";
import React from "react";
import Carousel from "../ui/carousel";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

const PhotoGallery = () => {
  const photos = [
    "/photo-gallery-1.png",
    "/photo-gallery-2.png",
    "/photo-gallery-3.png",
    "/photo-gallery-4.png",
    "/photo-gallery-5.png",
    "/photo-gallery-6.png",
  ];
  return (
    <section className="container mx-auto">
      <h2 className="text-center text-2xl font-medium py-12">Photo Gallery</h2>
      <Carousel>
        {photos.map((photo) => (
          <SwiperSlide key={photo}>
            <div className="h-96">
              <Image src={photo} fill alt="Photo Gallery One" />
            </div>
          </SwiperSlide>
        ))}
      </Carousel>
    </section>
  );
};

export default PhotoGallery;
