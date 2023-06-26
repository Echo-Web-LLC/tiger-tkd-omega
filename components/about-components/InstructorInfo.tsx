import React from "react";

function InstructorInfo() {
  return (
    <section>
      <div className="p-12 flex flex-col items-center text-2xl gap-24">
        <h2 className="font-medium">Our Instructor</h2>
        <div className="flex md:flex-row flex-col gap-12 items-center md:items-start">
          <img
            alt="Les Paul"
            src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="aspect-square rounded-xl object-cover w-96 h-full"
          />

          <div className="flex flex-col gap-8">
            <p className="font-medium">Name</p>
            <p className="text-xl">Master</p>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur. Vitae ut sit tellus
              integer purus porta accumsan eu. Commodo tincidunt quis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InstructorInfo;
