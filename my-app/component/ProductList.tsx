"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";



interface product{
    _id: string;
    image: string;
    name: string;
    price: number;
}


const productList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/fetch-products").then((response) => setProducts(response.data.products))
  }, [])

  return (
    <div
      id="product"
      className="flex flex-col items-center px-4 md:px-12 py-5 md:py-10 flex justify-center"
    >
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 relative">
        {products.map((product: product, index) => (
          <Link href={`/product/${product._id}`} key={index}>
            <Image
              src={product.image}
              alt="img"
              width={300}
              height={300}
              className="object-cover object-center rounded-lg"
            />
            <div className="mt-4">
              <div className="text-center">
                <h2 className="text-[14px] text-black py-2 md:text-[16px]">{product.name}</h2>
                <p className="font-medium text-[14px] px-2 py-1
                bg-gray-400 rounded text-white md:text-[16px]">₦{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link 
          href="/store"
          className="px-4 mt-6 rounded-lg py-2 bg-orange-400 text-center text-white font-semibold items-center justify-center max-w-[200px]"
          >View Store
      </Link>
    </div>
  );
};

export default productList;
