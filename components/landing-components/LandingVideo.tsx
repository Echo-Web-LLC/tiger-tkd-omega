import React from "react";
import Button from "../ui/button"
import Image from "next/image";

const LandingVideo = () => {
  return (
    <div className="relative w-screen object-cover">
      <div className="bg-cover bg-center absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10 bg-[url('/landing-image.png')]">
        <div className="text-center flex flex-col items-center md:gap-8 gap-2 lg:pb-40">
          <h2 className="text-white text-shadow-sm shadow-black lg:text-6xl md:text-5xl text-2xl font-bold">
            CHARACTER. HONOR. RESPECT
          </h2>
          <Button link="/contact" customStyles="border-white text-white">
            Contact Us
          </Button>
          {/* <button className="flex md:gap-8 gap-4 justify-center items-center">
            <div className="h-10 w-10 md:h-16 md:w-16 relative">
              <Image src="/play-button.png" alt="Play Button" fill />
            </div>
            <p className="text-white md:text-3xl text-lg text-shadow-sm shadow-black">
              Watch Video
            </p>
          </button> */}
        </div>
      </div>
      <video className="w-full h-auto relative" controls={false}>
        <source
          src=""
          type="image/jpeg"
        />
      </video>
    </div>
  );
};

export default LandingVideo;
