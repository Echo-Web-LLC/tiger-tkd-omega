import React from "react";
import Button from "../ui/button";

const SummerWorkshops = () => {
  return (
    <section className="bg-[#D9D9D9] flex flex-col items-center p-20 gap-12 text-center">
      <div className="flex flex-col items-center gap-8 text-lg md: text-xl">
        <p>Looking forward to do something during summer break?</p>
        <p>Join us for...</p>
      </div>
      <h2 className="font-semibold text-4xl">SUMMER WORKSHOPS</h2>
      <Button link="/contact">Learn More</Button>
    </section>
  );
};

export default SummerWorkshops;
