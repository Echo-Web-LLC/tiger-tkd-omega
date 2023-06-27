import React from "react";
import Image from "next/image";
import Gallery from "@/components/schedule-components/Gallery";

const Schedule = () => {
  return (
    <section className="flex flex-col items-center gap-20">
      <Image src="/schedule.png" alt="Schedule" width={1200} height={0} />
      <Image
        src="/TKDMAN1.png"
        alt="kickingMan"
        className="mb-10 self-center"
        width={400}
        height={0}
      />
      <div className="text-lg md:text-xl flex flex-col gap-8 items-center">
        <h2>Our Upcoming Events</h2>
        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-700">
            Looking forward to doing something during summer break?
          </p>
          <p className="text-gray-700">Join us for...</p>
        </div>
      </div>
      <h2 className="font-bold text-3xl">SUMMER WORKSHOPS</h2>
      <Gallery />
    </section>
  );
};

export default Schedule;
