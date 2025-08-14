import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='min-h-[70vh] md:min-h-[60vh] lg:min-h-[90vh] flex flex-col
            md:flex-row justify-center gap-10 items-center bg-white px-4 md:px-10 text-black'>
            <div className='max-w-2xl relative'>
                <h1 className='text-5xl pt-6 md:pt-0 md:text-7xl leading-tight
                font-semibold'>Luxury Necklace <span className='text-orange-400'>Collections</span></h1>
                <p className='text-gray-500 mt-4 text-xl'>Discover our exquisite range of handcrafted 
                    necklaces, each piece telling its own 
                    unique story of elegance and sophistication.
                </p>
                <button className='mt-8 bg-orange-400 text-white px-3 py-2 rounded-md cursor-pointer'>Explore all collection</button>
                <Link href={"/"} className="absolute top-0 left-[20px] bg-[linear-gradient(130deg,gray,orange)] text-white animate-bounce text-center px-5 py-2 cursor-pointer">watches collection</Link>
                <Link href={"/"} className="absolute right-[180px] top-[100px] bg-gray-400 text-white animate-pulse rotate-[20deg] text-center px-5 py-2 cursor-pointer">Jewrellry collection</Link>
            </div>
            <div className='flex gap-4 mt-7'>
                <Image src="/imghero.png" alt='img' width={450} height={450}/>
            </div>
        </div>
  )
}

export default Hero
