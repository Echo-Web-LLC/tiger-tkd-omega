import React from "react";
import Image from "next/image";
import ContactOptions from "@/components/contact-components/ContactOptions";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-center text-4xl font-bold mb-8">
        Contact Us and Come Visit Us!
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-12 mt-14">
        <div className="lg:w-1/2">
          <Image
            src="/contact-map.png"
            alt="Map Location"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>
        <div className="lg:w-1/2">
          <ContactOptions />
        </div>
      </div>
    </div>
  );
};

export default Contact;
