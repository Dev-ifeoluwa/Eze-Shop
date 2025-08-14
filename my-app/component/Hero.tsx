import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='min-h-[70vh] md:min-h-[60vh] lg:min-h-[90vh] flex flex-col
            md:flex-row justify-center gap-10 items-center bg-white px-4 md:px-12 text-black'>
            <div className='max-w-2xl relative'>
                <h1 className='text-5xl pt-6 md:pt-0 md:text-7xl leading-tight
                font-semibold'>Luxury Necklace <span className='text-orange-400'>Collections</span></h1>
                <p className='text-gray-500 mt-4 text-xl'>Discover our exquisite range of handcrafted 
                    necklaces, each piece telling its own 
                    unique story of elegance and sophistication.
                </p>
                <button className='mt-8 bg-orange-400 text-white px-3 py-2 rounded-md cursor-pointer'>Show our collection</button>
                <div className='absolute p-9 w-[30px] h-[30px] bg-orange-400 rounded-[60px]'>
                        <div className='top-0'></div>
                        <div className='right-0'></div>
                        <div className='bottom-0'></div>
                </div>
            </div>
            <div className='flex gap-4 mt-7'>
                <Image src="/imghero.png" alt='img' width={450} height={450}/>
            </div>
        </div>
  )
}

export default Hero
