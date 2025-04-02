
import React from "react";
import CategoryTabs from "@/components/home/CategoryTabs";
import PopularFundsList from "@/components/home/PopularFundsList";
import Collections from "@/components/home/Collections";
import ProductsTools from "@/components/home/ProductsTools";
import AllFundsList from "@/components/home/AllFundsList";

const Home = () => {
  return (
    <div className="pb-24 px-4">
      <div className="mb-6 mt-2">
        <div className="p-5 bg-gradient-to-r from-app-green/90 to-emerald-600 rounded-xl text-white shadow-lg">
          <h1 className="text-2xl font-bold mb-2">Welcome to WealthWise</h1>
          <p className="text-sm opacity-90">Discover and invest in mutual funds that align with your financial goals</p>
        </div>
      </div>
      
      <CategoryTabs />
      <PopularFundsList />
      <Collections />
      <ProductsTools />
      <AllFundsList />
    </div>
  );
};

export default Home;
