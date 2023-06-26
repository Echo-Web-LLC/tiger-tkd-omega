import Image from "next/image";
import Button from "../ui/button";

const AboutInfo = () => {
  return (
    <section className="vh-100 sm:grid xl:grid-cols-2 sm:items-center justify-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="vh-50 mx-auto max-w-2xl">
          <h1 className="text-3xl font-medium text-gray-900 md:text-5xl w-full text-center">
            Welcome to Tiger’s Taekwondo Omega!
          </h1>
          <p className="mt-8 text-gray-700">
            At Tiger’s Tae Kwon-Do, we teach our students how to be their best
            self through the practice of this sport.
          </p>

          <p className="mt-3 text-gray-700">
            We offer world-class instruction on Olympic-style sparring and draw
            from multiple martial arts for self-defense.
          </p>
        </div>
      </div>
      <div className="w-full">
        <Image
          alt=""
          src="/landing-info-image.png"
          className="bg-gray-400 object-cover mt-16 xl:mt-0 self-end rounded-tl-[150px] rounded-br-[150px] m-auto"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default AboutInfo;
