import Image from "next/image";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="min-h-[30vh] md:min-h-[40vh] lg:min-h-[90vh] flex flex-col mt-24
            md:flex-row justify-center gap-10 items-center bg-white px-4 md:px-10 text-black"
    >
      <div className="max-w-2xl relative">
        <h1
          className="text-4xl md:md:text-5xl leading-tight
                font-semibold lg:text-7xl"
        >
          Luxury Necklace <span className="text-orange-400">Collections</span>
        </h1>
        <p className="text-gray-400 mt-3 text-lg md:text-xl">
          Discover our exquisite range of handcrafted necklaces, each piece
          telling its own unique story of elegance and sophistication.
        </p>
        <Link  href={"/Shop"} className="mt-5 inline-block bg-orange-400 text-white
        hover:animate-bounce hover:bg-gray-400 px-4 py-2 rounded">
          Explore all collection
        </Link>
        <Link
          href={"/"}
          className="absolute top-[-10px] left-[20px] bg-red-400 text-sm text-white animate-pulse text-center px-1 py-0 cursor-pointer md:px-5 py-1 md:top-0"
        >
          watches collection
        </Link>
        <Link
          href={"/https://wa.me/message/GMOSQ7JX7A75N1"}
          className="absolute bottom-0 left-[200px] bg-black text-white animate-bounce text-center px-5 py-2  rounded cursor-pointer"
        >
          Buy Now
        </Link>
        <Link
          href={"/"}
          className="absolute right-[200px] top-[80px] bg-green-400 text-white animate-pulse text-sm text-center px-1 py-0 cursor-pointer md:right-[280px] md:top-[100px] md:px-5 py-1"
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
