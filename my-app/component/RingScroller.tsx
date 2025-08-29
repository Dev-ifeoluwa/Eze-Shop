"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";

interface Product {
  _id: string;
  image: string;
  name: string;
  price: number;
  description: string;
}

const RingScroller = () => {
  const [rings, setRings] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("/api/fetch-products?limit=50")
      .then((response) => {
        const filtered = response.data.products.filter((p: Product) =>
          p.name.toLowerCase().includes("ring")
        );
        setRings(filtered);
      });
  }, []);

  const handleClick = () => {
    router.push("/category/rings");
  };

  return (
    <div className="overflow-x-hidden w-full py-6 cursor-pointer" onClick={handleClick}>
      <div className="flex animate-scroll-x whitespace-nowrap gap-6">
        {[...rings, ...rings].map((ring, idx) => (
          <div key={ring._id + '-' + idx} className="inline-block">
            <Image
              src={ring.image}
              alt={ring.name}
              width={280}
              height={280}
              className="rounded-lg object-cover border border-gray-200 shadow-md"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll-x {
          0% { transform: translateX(50%); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-x {
          animation: scroll-x 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default RingScroller;
