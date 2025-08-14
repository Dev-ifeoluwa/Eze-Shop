import Link from 'next/link'
import React from 'react'
import Image from "next/image";

const productList = () => {
  const products = ["", "", "", "", "", "", "", ""];

  return (
    <div id="product" className='px-4 md:px-12 py-5 md:py-10 flex justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {products.map((product, index) => (
              <Link href='/' key={index}>
                <Image src="/one more.jpg" alt='img' width={300} height={200} 
                className='max-w-[20rem] h-60 object-cover object-center rounded-lg' />
                <div className='mt-4'>
                  <div className='text-center bg-gray-400'>
                    <h2 className='font-semibold text-lg'>Pretty Rings</h2>  
                    <p className='font-medium text-sm mt-1'>$300</p>
                  </div>
                </div>    
              </Link>
            ))}
        </div>
    </div>
  )
}

export default productList
