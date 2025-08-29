"use client";

import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  //------------------- this is for the search functionality--------------
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchProduct", e.target.value);

    const searchQuery = urlParams.toString();

    router.push(`/search?${searchQuery}`);
  };
  // ----------------this search functionality ends here--------------------

  return (
    <nav className="bg-white text-black sticky w-full z-20 top-0 left-0 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/*--------------- Brand------------- */}
        <Link href="/" className="text-xl md:text-2xl">
          {" "}
          Eze&apos;s <span className="text-orange-500">Concept</span>
        </Link>

        {/* -----------Desktop Links-------------- */}
        <ul className="hidden md:flex gap-6 font-medium md:hidden lg:flex">
          <li>
            <Link
              href="/category/rings"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Rings
            </Link>
          </li>
          <li>
            <Link
              href="/category/watches"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Watches
            </Link>
          </li>
          <li>
            <Link
              href="/category/necklace"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Necklace
            </Link>
          </li>
          <li>
            <Link
              href="/category/bracelets"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Bracelets
            </Link>
          </li>
          <li>
            <Link
              href="/category/jewrelly"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Jewrelly
            </Link>
          </li>
        </ul>
        {/* ------------------search for desktop view-------------------*/}
        <div className="hidden relative w-full md:w-[400px] md:block">
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
            onChange={handleChange}
            className="h-[36px] relative pl-10 border-[1px] border-gray-300
                text-sm rounded-[8px] w-full py-2 px-3 focus:outline-none bg-transparent"
          />
        </div>
        {/* ----------------Shop call to action button------------------- */}
        <Link href={"/Shop"}>
          <button
            className="hidden bg-orange-400 text-white p-2 font-semibold rounded-md
                 cursor-pointer hover:shadow-xl transition-shadow duration-300 md:hidden lg:block"
          >
            Shop Now
          </button>
        </Link>

        {/* ----------------------Mobile Menu Button---------------- */}
        <button
          className="block md:block lg:hidden focus:outline-none"
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={25} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-500 text-white transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-30`}
      >
        <div className="flex justify-between items-center p-4 border-b border-orange-400">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setOpen(false)} aria-label="Close Menu">
            <X size={25} />
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-6 font-medium">
          <li>
            <Link
              href="/category/rings"
              onClick={() => setOpen(false)}
              className="hover:text-orange-400 duration-400"
            >
              Rings
            </Link>
          </li>
          <li>
            <Link
              href="/category/watches"
              onClick={() => setOpen(false)}
              className="hover:text-orange-400 duration-400"
            >
              Watches
            </Link>
          </li>
          <li>
            <Link
              href="/category/necklace"
              onClick={() => setOpen(false)}
              className="hover:text-orange-400 duration-400"
            >
              Necklace
            </Link>
          </li>
          <li>
            <Link
              href="/category/bracelets"
              onClick={() => setOpen(false)}
              className="hover:text-orange-400 duration-400"
            >
              Bracelets
            </Link>
          </li>
          <li>
            <Link
              href="/category/jewrelly"
              onClick={() => setOpen(false)}
              className="hover:text-orange-400 duration-400"
            >
              Jewrelly
            </Link>
          </li>
        </ul>
      </div>
      <div className="relative max-w-[500px] mx-3 md:hidden">
        <div
          className="absolute inset-y-0 start-0 flex items-center ps-3
                pointer-events-none mb-3"
        >
          {/* for search */}
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          placeholder="Search Products"
          onChange={handleChange}
          className="h-[36px] relative pl-10 border-[1px] mb-3
                text-sm rounded-[20px] w-full py-2 px-3 focus:outline-none bg-transparent"
        />
      </div>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-20 "
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}
