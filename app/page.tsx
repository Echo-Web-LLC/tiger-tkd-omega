import LandingInfo from "@/components/landing-components/LandingInfo";
import LandingVideo from "@/components/landing-components/LandingVideo";
import Testimonials from "@/components/landing-components/Testimonials";

export default function Home() {
  return (
    <>
      <LandingVideo />
      <LandingInfo />
      <Testimonials />
    </>
  );
}
