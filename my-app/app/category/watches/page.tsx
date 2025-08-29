"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

interface Product {
  _id: string;
  image: string;
  name: string;
  price: number;
  description: string;
}

const WatchesCategoryPage = () => {
  const [watches, setWatches] = useState<Product[]>([]);

  // if (!watches) {
  //       return <p>Loading...</p>
  // }

  useEffect(() => {
    axios
      .get("/api/fetch-products?limit=100")
      .then((response) => {
        const filtered = response.data.products.filter((p: Product) =>
          p.name.toLowerCase().includes("watch") || 
          p.name.toLowerCase().includes("watches") || 
          p.name.toLowerCase().includes("watche")
        );
        setWatches(filtered);
      });
  }, []);

  return (
    <div className="w-full min-h-screen py-10 px-4 md:px-12">
      <h1 className="text-2xl font-bold mb-8 text-center">watches Collection</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {watches.map((watches) => (
          <Link href={`/product/${watches._id}`} 
                key={watches._id} 
                className="flex flex-col items-center">
            <Image
              src={watches.image}
              alt={watches.name}
              width={300}
              height={300}
              className="rounded-lg object-cover border border-gray-200 shadow-md"
                />
            <div className="mt-2 text-center">
              <h2 className="text-[14px] text-black py-2 md:text-[16px]">{watches.name}</h2>
              <p className="
                font-medium text-[14px] px-2 py-1
                bg-gray-400 rounded text-white md:text-[16px]
              ">₦{watches.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchesCategoryPage;
