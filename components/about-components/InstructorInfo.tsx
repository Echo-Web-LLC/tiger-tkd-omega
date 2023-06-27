import React from "react";

function InstructorInfo() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="w-full md:w-1/2">
            <img
              alt="Les Paul"
              src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="object-cover w-full h-auto rounded-xl"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-medium mb-8">
              Our Instructor
            </h2>
            <div className="flex flex-col gap-8">
              <p className="text-xl font-medium">Name</p>
              <p className="text-xl">Master</p>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur. Vitae ut sit tellus
                integer purus porta accumsan eu. Commodo tincidunt quis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InstructorInfo;
