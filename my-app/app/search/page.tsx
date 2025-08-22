"use client"

import axios from 'axios';
import Link from "next/link";
import { useSearchParams } from 'next/navigation'
import Image from "next/image";
import React, { useEffect, useState } from 'react'



interface product{
  _id: string;
  image: string;
  name: string;
  price: number;
}


const searchProduct = () => {

  const [products, setProducts] = useState([]);

  const searchParams = useSearchParams();

  useEffect(() => {
      const searchProductFromUrl = searchParams.get("searchProduct");
      if(searchProductFromUrl) {
        axios
        .get(`/api/search?searchProduct=${searchProductFromUrl}`)
        .then((response) => setProducts(response.data.products))
        .catch((error) => console.log("Error fetching search result", error))
      }
  }, [searchParams]);

  return (
    <div
      id="product"
      className="px-4 md:px-12 py-5 md:py-10 flex justify-center"
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
    </div>
  )
}

export default searchProduct
