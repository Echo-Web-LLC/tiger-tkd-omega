import React from "react";
import Button from "../ui/button";

const SummerWorkshops = () => {
  return (
    <section className="bg-gray-200 flex flex-col items-center py-16 px-8 gap-8 text-center">
      <div className="text-lg md:text-xl flex flex-col gap-4">
        <p className="text-gray-700">
          Looking forward to doing something during summer break?
        </p>
        <p className="text-gray-700">Join us for...</p>
      </div>
      <h2 className="font-semibold text-4xl">SUMMER WORKSHOPS</h2>
      <Button link="/contact">Learn More</Button>
    </section>
  );
};

export default SummerWorkshops;
