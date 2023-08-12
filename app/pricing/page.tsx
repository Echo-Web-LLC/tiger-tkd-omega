import React from "react";
import Image from "next/image";
import Button from "@/components/ui/button";

const Pricing = () => {
  return (
    <section className="flex flex-col items-center gap-10 mx-8">
      <div>
        <Image src="/TKDMAN1.png" alt="kickingMan" width={400} height={200} />
      </div>

      <div className="text-center">
        <h2 className="text-4xl font-semibold mb-4">Our Payment Structure</h2>
        <div className="flex justify-center gap-8 text-2xl font-semibold">
          <span>$165 / Month</span>
          <span>No contracts</span>
        </div>
      </div>

      <div className="text-xl text-left">
        <p className="text-2xl mb-6 font-semibold">
          The first <span className="underline">Class</span> with us is Free of
          Charge, the First <span className="underline">Month</span> is $50,
          uniform included.
        </p>

        <div className="flex flex-col gap-4">
          <div>
            <p className="font-semibold mb-2">Sibling Discounts:</p>
            <ul>
              <li>
                -$10 for every month purchased for 2 concurrent members of the
                same family.
              </li>
              <li>
                -$15 for every month purchased for 3 or more concurrent members
                of the same family.
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Weekly Attendance:</p>
            <ul>
              <li>
                -Active Tuition Entitles student access to as many as 5 classes
                a week.
              </li>
              <li>
                -Access to additional sparring classes will be granted upon
                reaching Green Belt at no extra cost.
              </li>
              <li>
                -Access to weapon classes is granted upon first acquisition of a
                weapon, WITH PARENT/GUARDIAN’S permission.
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-6">
          Belt test may be taken after 3 months of attendance in current belt
          level, a $50 belt test fee is rendered every time a student graduates
          to the next belt.
        </p>

        <div className="mt-6 text-sm">
          <p>*Billed at the middle of every month.</p>
          <p>
            **To receive extensions to your tuition for Vacations, Breaks, Etc.
            requests for extensions must be made{" "}
            <span className="italic font-bold">before</span> time of inactivity.
          </p>
        </div>
      </div>

      <Button link="/contact" customStyles="border-black text-black">
        Contact Us To Get Started
      </Button>
    </section>
  );
};

export default Pricing;
