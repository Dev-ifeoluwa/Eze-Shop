import Hero from "@/component/Hero";
import ProductList from "@/component/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100" >
      <Hero />
      <h1 className="text-center text-[2rem] font-semibold w-full
       md:text-4xl py-6">All <span className="text-orange-400">Product</span>
      </h1>
      <ProductList />
    </div>
  );
}
