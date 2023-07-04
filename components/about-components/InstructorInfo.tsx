import React from "react";
import Image from "next/image";

function InstructorInfo() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-medium mb-8 text-center">
          Master Kalen
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="h-96 w-72 relative bg-[#B9B9B9] rounded-xl">
            <Image
              alt="Master Kalen"
              src="/master-kalen.png"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-8">
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur. Vitae ut sit tellus
                integer purus porta accumsan eu. Commodo tincidunt quis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InstructorInfo;
