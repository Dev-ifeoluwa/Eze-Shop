import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MailCheck } from "lucide-react";

const Footer = () => {
  return (
    <div className="">
      <div className="relative h-[55vh] w-full ">
        {/* Background image */}
        <Image
          src="/bgf.jpg"
          alt="Background"
          fill
          className="object-cover -z-10"
          priority
        />
        {/* text */}
        <div className="flex flex-col gap-2 text-center">
          <div className="flex gap-5 py-7 px-4 justify-center">
            <Link
              href={"/"}
              className="px-3 py-1 font-semibold hover:text-orange-400  hidden"
            >
              About Us
            </Link>
            <Link
              href={"/"}
              className="px-3 py-1 font-semibold hover:text-orange-400 "
            >
              Blog
            </Link>
            <Link
              href={"/"}
              className="px-3 py-1 font-semibold hover:text-orange-400 "
            >
              Location
            </Link>
            <Link
              href={"/"}
              className="px-3 py-1 font-semibold hover:text-orange-400 "
            >
              Contact
            </Link>
            <Link
              href={"/"}
              className="px-3 py-1 font-semibold hover:text-orange-400 "
            >
              Order & pay on deliver
            </Link>
          </div>
          <hr className="w-full text-gray-400" />
          {/* bottom start */}
          <div className="flex justify-between py-8">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold mb-[30px] md:text-2xl">About Us</h2>
              <Link href={"/"} className="text-lg">About Us</Link>
              <Link href={"/"} className="text-lg">Our History</Link>
              <Link href={"/"} className="text-lg">Our Showrooms</Link>
              <Link href={"/"} className="text-lg">Contact Us</Link>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold mb-[30px] md:text-2xl">Contact Us</h2>
              <Link href={"/"} className="text-lg">+1 800 123456</Link>
              <Link href={"/"} className="text-lg">Contact Us</Link>
              <Link href={"/"} className="text-lg">Live Chat</Link>
              <Link href={"/"} className="text-lg">Email Us</Link>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold mb-[30px] md:text-2xl">
                Sign up for email
              </h2>
              <p>Join Our Email List & Receive a Special Offer</p>
              <div className="relative max-w-[300px] md:w-[400px]">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="h-[50px] relative pl-10 border-[2px] border-gray-400
                text-sm rounded-[8px] w-full py-2 px-3 focus:outline-none bg-transparent"
                />
                <div
                  className="absolute right-[20px] top-[16px] flex items-center ps-3
                pointer-pointer"
                >
                  <MailCheck className="w-5 h-5 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          {/* bottom end */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
