import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const DisplayProduct = () => {
  return (
    <div className=' 
    px-4 md:px-12 py-5 md:py-10 flex justify-center relative
    grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 '>
      <div className='relative border border-orange-300 hover:border-2 hover:border-gray-300'>
        <Link href={"/"}>
            <Image src={"/rings.jpg"} alt='img' width={300} height={300} className='cursor-pointer'/>
            <h1 className='text-3xl font-semibold absolute bottom-[40px] right-[30px] cursor-pointer'>Rings</h1>
        </Link>
      </div>
      <div className='relative border border-orange-300 hover:border-2 hover:border-gray-300'>
        <Link href={"/"}>
            <Image src={"/necklace.jpg"} alt='img' width={300} height={300} className='cursor-pointer'/>
            <h1 className='text-3xl font-semibold absolute bottom-[40px] right-[30px] cursor-pointer'>Necklace</h1>
        </Link>
      </div >
      <div className='relative border border-orange-300 hover:border-2 hover:border-gray-300'>
        <Link href={"/"}>
            <Image src={"/earrings.jpg"} alt='img' width={300} height={300} className='cursor-pointer'/>
            <h1 className='text-3xl font-semibold absolute bottom-[40px] right-[30px] cursor-pointer'>Earrings</h1>
        </Link>
      </div>
      <div className='relative border border-orange-300 hover:border-2 hover:border-gray-300'>
        <Link href={"/"}>
            <Image src={"/Bracelets.jpg"} alt='img' width={300} height={300} className='cursor-pointer'/>
            <h1 className='text-3xl font-semibold absolute bottom-[40px] right-[30px] cursor-pointer'>Bracelets</h1>
        </Link>
      </div>
    </div>
  )
}

export default DisplayProduct
