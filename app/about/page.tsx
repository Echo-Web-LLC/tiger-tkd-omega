import AboutInfo from "@/components/about-components/AboutInfo";
import InstructorInfo from "@/components/about-components/InstructorInfo";
import PhotoGallery from "@/components/about-components/PhotoGallery";
import React from "react";

const About = () => {
  return (
    <>
      <AboutInfo />
      <InstructorInfo />
      <PhotoGallery />
    </>
  );
};

export default About;
