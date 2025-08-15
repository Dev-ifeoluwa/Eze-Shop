import React from "react";
import Image from "next/image";
import Link from "next/link";

const Collections = () => {
  return (
    <div className="relative h-[80vh] w-full">
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
        <h1 className="text-gray-400 text-5xl md:text-7xl font-bold">
          Gemstones
        </h1>
        <p className="text-black text-xl md:text-3xl">Collection of</p>
        <h1 className="text-gray-400 text-5xl md:text-7xl font-bold">2019</h1>
        <Link
          href={"/"}
          className="px-3 py-2 text-white font-semibold bg-orange-400 text-[18px] hover:rounded-full hover:bg-gray-400 md:max-w-[160px]"
        >
          View Collection
        </Link>
      </div>
    </div>
  );
};

export default Collections;
