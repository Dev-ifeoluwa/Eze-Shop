"use client";

import React from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-4 md:px-12 py-4 md:py-6 bg-white text-black ">
      <div className="flex justify-between items-center">
        <Link
          href={"/"}
          className="text-[22px] md:inline-block md:text-3xl font-semibold"
        >
          Eze's <span className="text-orange-400">Concept</span>
        </Link>
        <div className="relative max-w-[300px] md:w-[400px]">
          <div
            className="absolute inset-y-0 start-0 flex items-center ps-3
                pointer-events-none"
          >
            {/* for search */}
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search Products"
            className="h-[36px] relative pl-10 border-[1px] border-gray-300
                text-sm rounded-[8px] w-full py-2 px-3 focus:outline-none bg-transparent"
          />
        </div>
        <Link href={"/account"} className="underline">
          <button
            className="hidden bg-orange-400 text-white p-2 font-semibold rounded-md
                cursor-pointer hover:shadow-xl transition-shadow duration-300 md:block"
          >
            My Account
          </button>
        </Link>
      </div>
      {/* -----------------------for product -----------*/}
      <div className="flex items-center justify-between my-3 ">
        <div className="flex gap-3">
          <Link href={"/"} className="hidden hover:text-orange-500 transition-colors duration-300 md:block">Rings</Link>
          <Link href={"/"} className="hidden hover:text-orange-500 transition-colors duration-300 md:block">Watches</Link>
          <Link href={"/"} className="hidden hover:text-orange-500 transition-colors duration-300 md:block">Necklace</Link>
          <Link href={"/"} className="hidden hover:text-orange-500 transition-colors duration-300 md:block">Bracelets</Link>
          <Link href={"/"} className="hidden hover:text-orange-500 transition-colors duration-300 md:block">Jewrelly</Link>
        </div>
        <div>
          <Link href={"/"} className="hidden hover:text-orange-500 transition-colors duration-300 md:block">Locations</Link>
        </div>
        {/*============================= button start=============================================== */}
          <button
            className="md:hidden mt-[-60px]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          {/* ================================button stop======================================= */}
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-300 px-6 py-4 space-y-4 text-center h-full text-white font-semibold">
          <Link
            href="/"
            className="block hover:text-orange-400 duration-700"
            onClick={() => setIsOpen(false)}
          >
            Rings
          </Link>
          <Link
            href="/shop"
            className="block hover:text-orange-400 duration-700"
            onClick={() => setIsOpen(false)}
          >
            Watches
          </Link>
          <Link
            href="/about"
            className="block hover:text-orange-400 duration-700"
            onClick={() => setIsOpen(false)}
          >
            Necklace
          </Link>
          <Link
            href="/contact"
            className="block hover:text-orange-400 duration-700"
            onClick={() => setIsOpen(false)}
          >
            Bracelets
          </Link>
          <Link
            href="/contact"
            className="block hover:text-orange-400 duration-700"
            onClick={() => setIsOpen(false)}
          >
            Jewrelly
          </Link>
          <Link
            href="/contact"
            className="block hover:text-orange-400 duration-700"
            onClick={() => setIsOpen(false)}
          >
            Our Store Location
          </Link>
        </div>
         )}
    </nav>
  );
};

export default Navbar;








// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="bg-orange-500 text-white fixed w-full z-20 top-0 left-0 shadow-md">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Brand */}
//         <h1 className="text-xl font-bold">eze&apos;s concept</h1>

//         {/* Desktop Links */}
//         <ul className="hidden md:flex gap-6 font-medium">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/shop">Shop</Link></li>
//           <li><Link href="/about">About</Link></li>
//           <li><Link href="/contact">Contact</Link></li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden"
//           onClick={() => setOpen(true)}
//           aria-label="Open Menu"
//         >
//           <Menu size={28} />
//         </button>
//       </div>

//       {/* Mobile Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-orange-600 text-white transform ${
//           open ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out z-30`}
//       >
//         <div className="flex justify-between items-center p-4 border-b border-orange-400">
//           <h2 className="text-lg font-bold">Menu</h2>
//           <button onClick={() => setOpen(false)} aria-label="Close Menu">
//             <X size={26} />
//           </button>
//         </div>

//         <ul className="flex flex-col gap-4 p-6 font-medium">
//           <li>
//             <Link href="/" onClick={() => setOpen(false)}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="/shop" onClick={() => setOpen(false)}>
//               Shop
//             </Link>
//           </li>
//           <li>
//             <Link href="/about" onClick={() => setOpen(false)}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link href="/contact" onClick={() => setOpen(false)}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Overlay */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/40 z-20"
//           onClick={() => setOpen(false)}
//         />
//       )}
//     </nav>
//   );
// }
