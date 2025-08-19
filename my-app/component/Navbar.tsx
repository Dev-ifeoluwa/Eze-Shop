"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white text-black sticky w-full z-20 top-0 left-0 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-xl font-bold md:text-2xl">
          {" "}
          Eze&apos;s <span className="text-orange-400">Concept</span>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Rings
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Watches
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Necklace
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Bracelets
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Jewrelly
            </Link>
          </li>
        </ul>
        {/* ============search============ */}
        <div className="hidden relative max-w-[300px] md:w-[400px] md:block">
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

        <Link href={"/account"}>
          <button
            className="hidden bg-orange-400 text-white p-2 font-semibold rounded-md
                 cursor-pointer hover:shadow-xl transition-shadow duration-300 md:block"
          >
            My Account
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={20} />
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
            <X size={20} />
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-6 font-medium">
          <li>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="hover:text-orange-400 duration-400"
            >
              Rings
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              onClick={() => setOpen(false)}
              className="hover:text-orange-400 duration-400"
            >
              Watches
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="hover:text-orange-400 duration-400"
            >
              Necklace
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="hover:text-orange-400 duration-400"
            >
              Bracelets
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="hover:text-orange-400 duration-400"
            >
              Jewrelly
            </Link>
          </li>
        </ul>
        <div className="relative max-w-[220px] mx-auto">
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
            className="h-[36px] relative pl-10 border-[1px] border-orange-300
                text-sm rounded-[8px] w-full py-2 px-3 focus:outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-20"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}
