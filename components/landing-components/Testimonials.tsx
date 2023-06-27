"use client";
import React from "react";
import Carousel from "../ui/carousel";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

const Testimonials = () => {
  const mockData = [
    {
      id: 1,
      stars: 5,
      date: new Date(2022, 2, 2),
      author: "Person Person",
      review: "It was cool, yes it was so cool",
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
    <section
      className="bg-gray-

200 flex flex-col items-center py-10 px-4 md:p-20 gap-8 text-center"
    >
      <div className="max-w-md">
        <Image
          src="/TKDMAN1.png"
          alt="kickingMan"
          className="mx-auto mb-6"
          width={400}
          height={200}
        />
        <h2 className="text-2xl font-medium">Testimonials</h2>
      </div>
      <Carousel>
        {mockData.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="flex justify-center items-center h-full">
              <div className="bg-[#01519B] text-white p-6 rounded-3xl gap-8 rounded-br-[75px] flex flex-col items-center md:w-1/2 w-full m-auto h-2/3">
                <div className="flex gap-4">
                  <div className="flex items-center mb-4">
                    {renderStars(review.stars)}
                  </div>
                  <div className="mb-4">{formatReviewDate(review.date)}</div>
                </div>
                <div className="text-center">
                  <p className="text-xl">{review.review}</p>
                  <div className="text-xl">-{review.author}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Carousel>
    </section>
  );
};

export default Testimonials;
