import React from "react";
import Image from "next/image";
import Button from "@/components/ui/button";

const Pricing = () => {
  return (
    <section className="flex flex-col items-center gap-10 mx-8">
      <Image src="/TKDMAN1.png" alt="kickingMan" width={400} height={200} />

      <div className="flex flex-col gap-8 text-center">
        <h2 className="text-xl font-semibold">Our Payment Structure</h2>
        <div className="flex gap-8">
          <span className="text-lg">$165 / Month</span>
          <span className="text-lg">No contracts</span>
        </div>
      </div>

      <div className="flex flex-col gap-8 text-xl">
        <p className="text-lg">
          The first <span className="underline">Class</span> with us is Free of
          Charge, the First <span className="underline">Month</span> is $50,
          uniform included.
        </p>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 ml-4">
            <p className="font-semibold">Sibling Discounts:</p>
            <div>
              <p>
                -$10 for every month purchased for 2 concurrent members of the
                same family.
              </p>
              <p>
                -$15 for every month purchased for 3 or more concurrent members
                of the same family.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 ml-4">
            <p className="font-semibold">Weekly Attendance:</p>
            <div>
              <p>
                -Active Tuition Entitles student access to as many as 5 classes
                a week.
              </p>
              <p>
                -Access to additional sparring classes will be granted upon
                reaching Green Belt at no extra cost.
              </p>
              <p>
                -Access to weapon classes is granted upon first acquisition of a
                weapon, WITH PARENT/GUARDIAN’S permission.
              </p>
            </div>
          </div>
        </div>

        <p>
          Belt test may be taken after 3 months of attendance in current belt
          level, a $50 belt test fee is rendered every time a student graduates
          to the next belt.
        </p>

        <div>
          <p>*Billed at the middle of every month.</p>
          <p>
            **To receive extensions to your tuition for Vacations, Breaks, Etc.
            requests for extensions must be made{" "}
            <span className="italic font-bold">before </span>
            time of inactivity.
          </p>
        </div>
      </div>

      <Button link="/contact">Contact Us To Get Started</Button>
    </section>
  );
};

export default Pricing;
