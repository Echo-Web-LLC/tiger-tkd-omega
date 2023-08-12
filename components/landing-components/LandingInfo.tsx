import Image from "next/image";
import Button from "../ui/button";

const LandingInfo = () => {
  return (
    <section className="container mx-auto sm:grid xl:grid-cols-2 sm:items-center justify-center">
      <div className="md:p-12 p-8 lg:px-16 lg:py-24 flex justify-center">
        <div className="flex flex-col vh-50 mx-auto max-w-2xl">
          <Image
            src="/TKDMAN1.png"
            alt="kickingMan"
            className="mb-10 ml-2"
            width={400}
            height={200}
          />
          <h1 className="text-3xl font-medium text-gray-900 md:text-5xl w-full">
            Welcome to Tiger&quot;s Taekwondo Omega!
          </h1>
          <p className="mt-8 text-gray-700">
            At Tiger&quot;s Tae Kwon-Do, we teach our students how to be their best
            self through the practice of this sport.
          </p>

          <p className="mt-3 text-gray-700">
            We offer world-class instruction on Olympic-style sparring and draw
            from multiple martial arts for self-defense.
          </p>

          <div className="mt-8 flex justify-start">
            <Button link="/contact" customStyles="border-black text-black">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Image
          alt=""
          src="/ANMP1823.png"
          className="object-contain w-full p-4 xl:p-20"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default LandingInfo;
