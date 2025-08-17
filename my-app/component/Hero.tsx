import Image from "next/image";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="min-h-[50vh] md:min-h-[40vh] lg:min-h-[90vh] flex flex-col
            md:flex-row justify-center gap-10 items-center bg-white px-4 md:px-10 text-black"
    >
      <div className="max-w-2xl relative">
        <h1
          className="text-4xl mt-6 pt-6 md:pt-0 md:text-5xl leading-tight
                font-semibold lg:text-7xl"
        >
          Luxury Necklace <span className="text-orange-400">Collections</span>
        </h1>
        <p className="text-gray-400 mt-4 text-lg md:text-xl">
          Discover our exquisite range of handcrafted necklaces, each piece
          telling its own unique story of elegance and sophistication.
        </p>
        <button className="mt-8 bg-orange-400 text-white px-3 py-2 rounded-md cursor-pointer
        hover:animate-bounce hover:bg-gray-400 px-4 py-2 rounded">
          Explore all collection
        </button>
        <Link
          href={"/"}
          className="absolute top-[45px] left-[20px] bg-red-400 text-sm text-white animate-bounce text-center px-2 py-1 cursor-pointer"
        >
          watches collection
        </Link>
        <Link
          href={"/"}
          className="absolute bottom-0 left-[200px] bg-black text-white animate-pulse text-center px-5 py-2  rounded cursor-pointer"
        >
          Contact to buy Now
        </Link>
        <Link
          href={"/"}
          className="absolute right-[170px] top-[100px] bg-green-400 text-white animate-pulse text-sm text-center px-2 py-1 cursor-pointer md:right-[300px] md:top-[120px]"
        >
          Rings collection
        </Link>
      </div>
      <div>
        <Image src="/imghero.png" alt="img" width={500} height={500} />
      </div>
    </div>
  );
};

export default Hero;
