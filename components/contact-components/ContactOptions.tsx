"use client";

import React from "react";
import Image from "next/image";

const ContactOptions: React.FC = () => {
  const openMap = (address: string) => {
    window.open(
      `https://maps.google.com/maps?q=${encodeURIComponent(address)}`
    );
  };

  return (
    <div className="flex flex-col gap-8 mx-4">
      <div className="flex flex-col gap-6">
        <div className="flex gap-10 items-center">
          <Image src="/contact-email.png" alt="Email" width={75} height={75} />
          <p className="sm:text-gray-600 text-center">tigerkalen@gmail.com</p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-10 items-center">
          <Image src="/contact-phone.png" alt="Phone" width={75} height={75} />
          <div className="flex flex-col gap-2">
            <p className="sm:text-gray-600">Studio - 732-906-9077</p>
            <p className="sm:text-gray-600">Master Kalen - 732-207-9357</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-10 items-center">
          <Image
            src="/contact-location.png"
            alt="Location"
            width={75}
            height={75}
          />
          <button
            className="sm:text-gray-600 hover:underline text-decoration-dotted text-start"
            onClick={() =>
              openMap("52 Lincoln Highway, Suite 2B, Edison, NJ, 08820")
            }
          >
            52 Lincoln Highway, Suite 2B, Edison, NJ, 08820
          </button>
        </div>
      </div>
      <p className="text-center text-2xl">
        We are located across from Starbucks.
      </p>
    </div>
  );
};

export default ContactOptions;
