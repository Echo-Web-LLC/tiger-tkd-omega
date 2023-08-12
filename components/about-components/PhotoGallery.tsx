"use client";
import React from "react";
import Carousel from "../ui/carousel";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

const PhotoGallery = () => {
  const photos = [
    "/IMG_0867.png",
    "/IMG_0938.png",
    "/IMG_0874.png",
    "/IMG_0885.png",
    "/IMG_0852.png",
    "/c1.png",
    "/c2.png",
    "/c3.png",
    "/c4.png",
    "/c5.png",
    "/c6.png",
  ];
  return (
    <section className="container mx-auto">
      <h2 className="text-center text-4xl font-medium py-12">Photo Gallery</h2>
      <Carousel>
        {photos.map((photo) => (
          <SwiperSlide key={photo}>
            <div className="vh-25">
              <Image src={photo} fill alt="Photo Gallery One" />
            </div>
          </SwiperSlide>
        ))}
      </Carousel>
    </section>
  );
};

export default PhotoGallery;
