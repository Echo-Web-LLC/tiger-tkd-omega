import React from "react";
import Link from "next/link";
// import Image from "next/image";

const LandingVideo = () => {
  return (
    <div className="bg-cta bg-gray-400">
      <div className="mx-auto max-w-screen-xl px-4 py-20 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl py-10 rounded-md text-center">
          <div className="rounded-lg bg-opacity-60 md:bg-opacity-40">
            <h1 className="text-4xl pt-10 px-4 text-gray-50 mt-40 sm:mt-20 font-extrabold sm:text-5xl">
              Lorem. Ipsum. Dolor.
            </h1>
            <div className="w-full aspect-w-4 aspect-h-3">
              {/* <Image
                src="/landing-image.png"
                alt="Logo"
                width={1200}
                height={800}
              /> */}
            </div>
            <p className="mt-4 text-gray-50 px-8 font-medium text-lg sm:text-2xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo
            </p>

            <div className="mt-8 pb-10 px-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/Schedule"
                className="block w-full font-bold rounded border-gray-50 border-2 px-12 py-3 text-md text-gray-50 hover:text-opacity-90 focus:outline-none focus:ring hover:text-gray-100 active:bg-gray-50 sm:w-auto"
              >
                View Schedule
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingVideo;
