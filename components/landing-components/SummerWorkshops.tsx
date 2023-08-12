import React from "react";
import Button from "../ui/button";
import Image from "next/image";

const SummerWorkshops = () => {
  return (
    <section className="flex-col flex items-center">
      <div className="mx-auto md:p-12 p-8 lg:px-16 lg:py-24">
        <Image
          src="/TKDMAN1.png"
          alt="kickingMan"
          className="mx-auto mb-6"
          width={400}
          height={400}
        />
        <h2 className="text-2xl font-medium text-center">
          Our Upcoming Events
        </h2>
      </div>
      <div className="bg-[#01519B] flex flex-col items-center py-16 px-8 gap-8 text-center w-full text-white">
        <div className="text-lg md:text-xl flex flex-col gap-4">
          <p>Looking forward to doing something during summer break?</p>
          <p>Join us for...</p>
        </div>
        <h2 className="font-semibold text-4xl">SUMMER WORKSHOPS</h2>
        <Button link="/contact" customStyles="border-white text-white">
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default SummerWorkshops;
