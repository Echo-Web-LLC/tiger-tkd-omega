import AboutInfo from "@/components/about-components/AboutInfo";
import BackgroundInfo from "@/components/about-components/BackgroundInfo";
import InstructorInfo from "@/components/about-components/InstructorInfo";
import PhotoGallery from "@/components/about-components/PhotoGallery";
import React from "react";

const About = () => {
  return (
    <>
      <AboutInfo />
      <BackgroundInfo />
      <InstructorInfo />
      <PhotoGallery />
    </>
  );
};

export default About;
