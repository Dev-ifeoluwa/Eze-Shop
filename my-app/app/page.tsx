import Collections from "@/component/Collections";
import CustomProduct from "@/component/CustomProduct";
import DisplayProduct from "@/component/DisplayProduct";
import Engaged from "@/component/Engaged";
import Hero from "@/component/Hero";
import ProductList from "@/component/ProductList";


export default function Home() {
  return (
    <div>
      {/* this goes after the navbar component  No 1 on the children page */}
      <Hero />
      {/* DisplayProduct is after hero No 2 on the children page */}
      <div>
        <h1
          className="text-center text-[23px] font-semibold w-full
          md:text-4xl pt-10"
        >
          <span className="text-orange-400">All</span> for you
        </h1>
        <DisplayProduct />
      </div>
      {/* <div>
        <RingScroller />
      </div> */}
      {/* ProductList this is also after the displayproduct page  No 3 on the children page */}
      <div>
        <h1
          className="text-center text-[23px] font-semibold w-full
          md:text-4xl pt-15"
        >
          Our <span className="text-orange-400">Products</span>
        </h1>
        <ProductList />
      </div>
      {/*---------------------Collections section No 4 on the children page----------------------------- */}
      <div className="mt-6">
        <Collections />
      </div>
      {/*---------------------------CustomProduct section No 5 on the children page----------------------- */}
      <div className="mt-3">
        <CustomProduct />
      </div>
      {/*-----------------------------Engaged section No 6 on the children page--------------------- */}
      <div>
        <Engaged />
      </div>
    </div>
  );
};
