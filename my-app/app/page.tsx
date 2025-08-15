import Collections from "@/component/Collections";
import CustomProduct from "@/component/CustomProduct";
import DisplayProduct from "@/component/DisplayProduct";
import Engaged from "@/component/Engaged";
import Hero from "@/component/Hero";
import ProductList from "@/component/ProductList";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-gray-100">
        <h1
          className="text-center text-[2rem] font-semibold w-full
          md:text-4xl pt-15 mt-10"
        >
          <span className="text-orange-400">All</span> for you
        </h1>
        <DisplayProduct />
      </div>
      <div>
        <h1
          className="text-center text-[2rem] font-semibold w-full
          md:text-4xl pt-15 mt-10"
        >
          Our <span className="text-orange-400">Products</span>
        </h1>
        <ProductList />
      </div>
      <div className="mt-20">
        <Collections />
      </div>
      <div className="mt-10">
        <CustomProduct />
      </div>
      <div>
        <Engaged />
      </div>
    </div>
  );
}
