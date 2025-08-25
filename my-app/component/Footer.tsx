// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {

  return (
    <footer className="text-black mx-auto relative h-full w-full md:h-full">
      <Image
          src="/bg3.jpg"
          alt="Background"
          fill
          className="object-cover -z-10"
          priority
        />
      <div className="mx-auto max-w-7xl-rounded px-6 py-10 flex flex-col gap-10 md:flex md:flex-row justify-between">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold md:text-2xl">Eze&apos;s Concept</h2>
          <p className="mt-2 text-sm text-gray-500 max-w-[700px] md:text-[16px] md:max-w-[500px]">
          we believe style should be simple, affordable, and timeless.
           Our store is dedicated to providing high-quality
            products that blend creativity with everyday comfort. Whether
           you’re shopping for fashion, lifestyle, or unique essentials, 
           we are committed to delivering value and excellence with every purchase.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-orange-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="Shop" className="hover:text-orange-400 transition">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-400 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/add-product" className="hover:text-orange-400 transition">  
                Add product
              </Link>
            </li>
          </ul>
          {/* /add-product route for add product */}
        </div>
        {/* link 2 */}
        <div className="md:block">
          <h3 className="text-lg font-semibold mb-3">Store Locations</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-orange-400 transition">
                Lagos
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-orange-400 transition">
                Ikole Ekiti
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-orange-400 transition">
                Oye Ekiti
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-400 transition">
              Ibadan
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact / Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="flex items-center gap-2">
              <Mail size={15} /> support@ezeconcept.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} /> +234 800 000 0000
            </li>
          </ul>

          <div className="flex gap-4 mt-4">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="hover:text-orange-400 transition" width={25}/>
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="hover:text-orange-400 transition" width={25}/>
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="hover:text-orange-400 transition" width={25}/>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-400 mt-6 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Eze&apos;s concept. All rights reserved <span className="text-black font-semibold whitespace-nowrap">Designed and developed by Ifeoluwa Fowobaje.</span>.
      </div>
    </footer>
  );
}





