import React from "react";
import Image from "next/image";
import ContactOptions from "@/components/contact-components/ContactOptions";

const Contact = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold">
        Contact Us and Come Visit Us!
      </h1>
      <div className="flex lg:flex-row flex-col-reverse items-center justify-center gap-12 mt-14">
        <Image
          src="/contact-map.png"
          alt="Map Location"
          width={600}
          height={600}
          className="object-contain"
        />
        <ContactOptions />
      </div>
    </>
  );
};

export default Contact;
