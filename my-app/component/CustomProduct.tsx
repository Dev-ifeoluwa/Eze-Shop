import React from "react";
import Image from "next/image";
import Link from "next/link";

const CustomProduct = () => {
  return (
    <div className="relative h-[60vh] w-full border-rounded">
      {/* Background image */}
      <Image
        src="/img7.jpg"
        alt="Background"
        fill
        className="object-cover -z-10 p-10 rounded-[50px]"
        priority
      />

      <div className="flex gap-4 text-center items-center justify-between h-full md:text-left px-15">
        <div className="flex flex-col items-center text-left gap-2 mt-[60px] ml-[20px] md:text-left xl:flex flex-row">
            <Image src="/icon1.png" alt="img" width={50} height={50}/>
          <div>
            <p>All is your's</p>
            <h1 className="text-gray-400 text-2xl md:text-5xl font-bold">
              Custom Diamond Jewelry
            </h1>
          </div>
        </div>
        <div className="mt-[60px]">
          <Link href={"/"} className="text-lg text-black bg-white px-3 py-2 hover:rounded-full md:px-8 py-4 font-semibold">
            Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomProduct;
