import React from "react";
import Link from "next/link";
import Image from "next/image";

const DisplayProduct = () => {
  return (
    <div
      className=" 
          px-4 md:px-12 py-5 md:py-10 flex justify-center relative
          grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 "
    >
      <div className="relative h-[30vh] w-full border-rounded cursor-pointer md:h-[45vh]">
        {/* Background image */}
        <Image
          src="/rings.jpg"
          alt="Background"
          fill
          className="object-cover -z-10 p-2 rounded-[20px]"
          priority
        />
        {/* text */}
        <div className="flex flex-col gap-4 text-center items-left justify-center h-full  md:text-left px-15">
          <h1 className="text-xl mt-30 md:mt-40 mx-auto font-semibold md:text-3xl">Rings</h1>
        </div>
      </div>
      <div className="relative h-[30vh] w-full border-rounded cursor-pointer md:h-[45vh]">
        {/* Background image */}
        <Image
          src="/Bracelets.jpg"
          alt="Background"
          fill
          className="object-cover -z-10 p-2 rounded-[20px]"
          priority
        />
        {/* text */}
        <div className="flex flex-col gap-4 text-center items-left justify-center h-full  md:text-left px-15">
          <h1 className="text-xl mt-30 md:mt-40 mx-auto font-semibold md:text-3xl">Bracelets</h1>
        </div>
      </div>
      <div className="relative h-[30vh] w-full border-rounded cursor-pointer md:h-[45vh]">
        {/* Background image */}
        <Image
          src="/earrings.jpg"
          alt="Background"
          fill
          className="object-cover -z-10 p-2 rounded-[20px]"
          priority
        />
        {/* text */}
        <div className="flex flex-col gap-4 text-center items-left justify-center h-full  md:text-left px-15">
          <h1 className="text-xl mt-30 md:mt-40 mx-auto font-semibold md:text-3xl">Earrings</h1>
        </div>
      </div>
      <div className="relative h-[30vh] w-full border-rounded cursor-pointer md:h-[45vh]">
        {/* Background image */}
        <Image
          src="/img5.jpg"
          alt="Background"
          fill
          className="object-cover -z-10 p-2 rounded-[20px]"
          priority
        />
        {/* text */}
        <div className="flex flex-col gap-4 text-center items-left justify-center h-full  md:text-left px-15">
          <h1 className="text-xl md:mr-50 mx-auto font-semibold md:text-3xl">Rings</h1>
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
