"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

interface product {
  _id: string;
  image: string;
  name: string;
  price: number;
}

const PRODUCTS_PER_PAGE = 12;

const ShopList = () => {
  const [products, setProducts] = useState<product[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async (currentPage: number) => {
    try {
      const response = await axios.get(`/api/fetch-products?page=${currentPage}&limit=${PRODUCTS_PER_PAGE}`);
      const fetchedProducts = response.data.products;
      
      setProducts(fetchedProducts);
      setHasMore(fetchedProducts.length === PRODUCTS_PER_PAGE);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const handleNext = () => {
    if (hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };


  return (
    <div className="flex flex-col items-center px-4 md:px-12 py-5 md:py-10">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 relative">
        {products.map((product: product) => (
          <Link href={`/product/${product._id}`} key={product._id}>
            <Image
              src={product.image}
              alt="img"
              width={300}
              height={300}
              className="object-cover object-center rounded-lg"
            />
            <div className="mt-4 text-center">
              <h2 className="text-[14px] text-black py-2 md:text-[16px]">{product.name}</h2>
              <p className="font-medium text-[14px] px-2 py-1 bg-gray-400 rounded text-white md:text-[16px]">
                ₦{product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 text-black rounded disabled:opacity-50 cursor-pointer"
        >
          Previous
        </button>
        <span className="px-4 py-2 font-semibold">Page {page}</span>
        <button
          onClick={handleNext}
          disabled={!hasMore}
          className="px-4 py-2 bg-orange-400 text-white rounded disabled:opacity-50 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ShopList;
