"use client";
import React from "react";
import Carousel from "../ui/carousel";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import Button from "../ui/button";

const Testimonials = () => {
  const mockData = [
    {
      id: 1,
      stars: 5,
      date: new Date(2022, 2, 2),
      author: "Person Person",
      review:
        "It was cool, yes it was so cool. It was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so cool.It was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so coolIt was cool, yes it was so cool",
    },
    {
      id: 2,
      stars: 3,
      date: new Date(2023, 1, 3),
      author: "Person Person",
      review: "It was cool, yes it was so cool",
    },
    {
      id: 3,
      stars: 4,
      date: new Date(),
      author: "Person Person",
      review: "It was cool, yes it was so cool",
    },
  ];

  const renderStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <span key={i} className="text-yellow-500">
          ★
        </span>
      );
    }
    return stars;
  };

  const formatReviewDate = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const diffInTime = today.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInDays / 365);

    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return (
        <>
          Today
          <span className="text-sm font-semibold text-white px-2 py-1">
            NEW
          </span>
        </>
      );
    } else if (
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear()
    ) {
      return (
        <>
          Yesterday
          <span className="text-sm font-semibold text-white px-2 py-1">
            NEW
          </span>
        </>
      );
    } else if (diffInDays < 7) {
      return (
        <>
          {diffInDays} {diffInDays === 1 ? "day" : "days"} ago
          {diffInDays <= 7 && (
            <span className="text-sm font-semibold text-white px-2 py-1">
              NEW
            </span>
          )}
        </>
      );
    } else if (diffInWeeks < 5) {
      return (
        <>
          {diffInWeeks} {diffInWeeks === 1 ? "week" : "weeks"} ago
          {diffInWeeks <= 4 && (
            <span className="text-sm font-semibold text-white px-2 py-1">
              NEW
            </span>
          )}
        </>
      );
    } else if (diffInMonths < 12) {
      return `${diffInMonths} ${diffInMonths === 1 ? "month" : "months"} ago`;
    } else {
      return `${diffInYears} ${diffInYears === 1 ? "year" : "years"} ago`;
    }
  };

  return (
    <section className="container mx-auto flex-col flex gap-4 items-center md:p-12 p-8 lg:px-16 lg:py-24">
      <div className="max-w-md mx-auto mb-6">
        <Image
          src="/TKDMAN1.png"
          alt="kickingMan"
          className="mx-auto mb-6"
          width={400}
          height={200}
        />
        <h2 className="text-2xl font-medium text-center">Testimonials</h2>
      </div>
      <Carousel>
        {mockData.map((review) => (
          <SwiperSlide key={review.id} className="flex justify-center">
            <div className="flex justify-center items-center mx-auto h-96 w-full">
              <div className="border border-black md:p-10 p-8 rounded-3xl gap-8 rounded-br-[75px] flex flex-col items-center w-full m-auto h-2/3">
                <div className="flex md:flex-row flex-col md:gap-4">
                  <div className="flex items-center">
                    {renderStars(review.stars)}
                  </div>
                  <div>{formatReviewDate(review.date)}</div>
                </div>
                <div className="text-center text-lg overflow-auto flex flex-col gap-4">
                  <p>{review.review}</p>
                  <div>-{review.author}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Carousel>
      <Button link="Hi" customStyles="border-black">
        Read More Reviews From Google Reviews
      </Button>
    </section>
  );
};

export default Testimonials;
