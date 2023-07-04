import Image from "next/image";

const AboutInfo = () => {
  return (
    <section className="container mx-auto sm:grid xl:grid-cols-2 sm:items-center justify-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex justify-center">
        <div className="flex flex-col vh-50 mx-auto max-w-2xl">
          <h1 className="text-3xl font-medium text-gray-900 md:text-5xl w-full text-center">
            Welcome to Tiger’s Taekwondo Omega!
          </h1>
          <p className="mt-8 text-gray-700">
            At Tiger’s Tae Kwon-Do, we teach our students how to be their best
            self through the practice of this sport.
          </p>
          <p className="mt-3 text-gray-700">
            We offer world class instruction on olympic style sparring and we
            draw from multiple martial arts for the application of self defense.
          </p>
          <p className="mt-3 text-gray-700">
            Above all, we are committed to making sure our students learn to be
            good people.
          </p>
          <p className="mt-3 text-gray-700">
            We emphasize accountability, critical and independent thinking, and
            mindfulness through genuine interaction, not dogmatic preaching.
          </p>
          <p className="mt-3 text-gray-700">
            We cater to a diverse body of students and readily offer our
            knowledge to anyone looking to be stronger, healthier, or more
            enlightened.
          </p>
        </div>
      </div>
      <div className="w-full">
        <Image
          alt=""
          src="/about-info-image.png"
          className="object-contain w-full h-96 xl:block xl:h-full p-4 xl:p-20 hidden"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default AboutInfo;
