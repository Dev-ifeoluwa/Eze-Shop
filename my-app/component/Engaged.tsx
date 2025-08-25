import React from "react";
import Image from "next/image";
import Link from "next/link";

const Engaged = () => {
  return (
    <div className="md:flex flex-col py-1 mx-6 lg:flex flex-row">
      <div className="relative h-[25vh] w-full border-rounded cursor-pointer md:h-[55vh]">
        {/* Background image */}
            <Image
              src="/img5.jpg"
              alt="Background"
              fill
              className="object-cover -z-10 rounded"
              priority
            />
        {/* text */}
        <div className="flex flex-col items-center justify-center gap-2 pt-10 mr-45 md:mt-10">
          <p className="text-md text-gray-400">Need Gift?</p>
          <h1 className="text-xl font-semibold md:text-4xl">Gift Guide</h1>
        </div>
      </div>
      {/* second image */}



      <div className="relative h-[25vh] w-full border-rounded cursor-pointer md:h-[55vh]">
        {/* Background image */}
        <Image
          src="/img6.jpg"
          alt="Background"
          fill
          className="object-cover -z-10 rounded"
          priority
        />
        {/* text */}
        <div className="flex flex-col gap-4 text-center items-center justify-center h-full  md:text-left px-15">
            <p className="text-md text-gray-400">Love Inspires</p>
          <h1 className="text-xl font-semibold  mb-10 md:text-4xl">Engagement Rings</h1>
        </div>
      </div>
    </div>
  );
};

export default Engaged;
