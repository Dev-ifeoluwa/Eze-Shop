import React from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'


const Navbar = () => {
  return (
    <nav className='px-4 md:px-12 py-4 md:py-6 bg-white text-black '>
        <div className='flex justify-between items-center'>
             <Link href={"/"} className='hidden md:inline-block text-3xl font-semibold'>Eze's <span className='text-orange-400'>Concept</span></Link>
            <div className='relative max-w-[300px] md:w-[400px]'>
                <div className='absolute inset-y-0 start-0 flex items-center ps-3
                pointer-events-none'>
                    {/* for search */}
                    <Search className='w-4 h-4'/>
                </div>
                <input type="text" placeholder='Search Products'
                className='h-[36px] relative pl-10 border-[1px] border-gray-300
                text-sm rounded-[8px] w-full py-2 px-3 focus:outline-none bg-transparent'/>
            </div>
            <Link href={"/"} className='underline'>
                <button className='bg-orange-400 text-white p-2 font-semibold rounded-md
                cursor-pointer'>Add Product</button>
            </Link>
        </div>
        {/* -----------------------for product -----------*/}
        <div className='flex items-center justify-between my-3 '>
            <div className='flex gap-3'>
                <Link href={"/"}>Rings</Link>
                <Link href={"/"}>Watches</Link>
                <Link href={"/"}>Necklace</Link>
                <Link href={"/"}>Bracelets</Link>
                <Link href={"/"}>Jewrelly</Link>
            </div>
            <div>
                <Link href={"/"}>My Account</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
