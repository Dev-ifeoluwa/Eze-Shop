import React from "react";
import Image from "next/image";
import Link from "next/link";

const CustomProduct = () => {
  return (
    <div className="relative h-[40vh] w-full border-rounded">
      {/* Background image */}
      <Image
        src="/img7.jpg"
        alt="Background"
        fill
        className="object-cover -z-10 p-3 rounded"
        priority
      />

      <div className="flex flex-col items-center h-full justify-center md:flex md:flex-row md:justify-between mx-20">
        <div className="flex flex-col items-center text-center justify-center py-7 md:flex md:flex-row gap-0 md:text-left">
          <div>
                <Image src="/icon1.png" alt="img" width={50} height={50}/>
          </div>
          <div>
            <p>All is your's</p>
            <h1 className="text-gray-700 text-2xl md:text-5xl font-bold">
              Custom Diamond Jewelry
            </h1>
          </div>
        </div>
        <div className="mb-5">
          <Link href={"/"} className="text-[15px] mb-4 md:text-[19px] text-black bg-white px-3 py-2 hover:rounded-full md:px-8 py-4">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomProduct;
