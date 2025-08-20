import Link from "next/link";
import React from "react";
import Image from "next/image";

const productList = () => {
  const products = ["", "", "", "", "", "", "", ""];

  return (
    <div
      id="product"
      className="px-4 md:px-12 py-5 md:py-10 flex justify-center"
    >
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 relative">
        {products.map((product, index) => (
          <Link href="/" key={index}>
            <Image
              src="/earrings.jpg"
              alt="img"
              width={300}
              height={300}
              className="object-cover object-center rounded-lg"
            />
            <div className="mt-4">
              <div className="text-center bg-orange-400">
                <h2 className="font-semibold text-[17px] text-white py-2">Diamond Rings</h2>
                <p className="font-medium text-[17px] absolute top-0 px-2 py-1
                bg-gray-400 rounded text-white font-semibold">$300</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default productList;
