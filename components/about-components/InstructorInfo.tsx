import React from "react";
import Image from "next/image";

function InstructorInfo() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl w-full md:text-4xl font-medium mb-8 text-center">
          Master Kalen
        </h2>
        <div className="gap-12 flex justify-center">
          <div className="h-96 w-72 relative bg-[#B9B9B9] rounded-xl">
            <Image
              alt="Master Kalen"
              src="/master-kalen.png"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default InstructorInfo;
