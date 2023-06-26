import React from "react";

const LandingVideo = () => {
  return (
    <div className="relative w-full">
      <div className="video-overlay absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-white text-2xl font-bold mb-4 z-10">
            Custom Video Title
          </h2>
        </div>
      </div>
      <video className="w-full h-auto" controls>
        <source
          src="https://off-the-dock.s3.amazonaws.com/Off+the+Dock+promo+video.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default LandingVideo;
