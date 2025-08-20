import React from "react";
import Image from "next/image";
import Link from "next/link";

const Collections = () => {
  return (
    <div className="relative h-[57vh] w-full md:h-[80vh]">
      {/* Background image */}
      <Image
        src="/bg2.jpg"
        alt="Background"
        fill
        className="object-cover -z-10"
        priority
      />

      {/* Text content */}
      <div className="flex flex-col gap-4 text-center justify-center h-full md:text-left mx-15">
        <h1 className="text-gray-500 text-4xl md:text-7xl font-bold">
          Gemstones
        </h1>
        <p className="text-black text-xl md:text-3xl">Collection of</p>
        <h1 className="text-gray-500 text-4xl md:text-7xl font-bold">2019</h1>
        <Link
          href={"/"}
          className="px-3 py-2 text-black bg-white text-[15px] md:text-[19px] hover:rounded-full hover:rounded-full md:max-w-[160px]"
        >
          View Collection
        </Link>
      </div>
    </div>
  );
};

export default Collections;
