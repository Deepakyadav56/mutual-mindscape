
import React from "react";
import CategoryCard from "@/components/home/CategoryCard";
import Collections from "@/components/home/Collections";
import ToolCard from "@/components/home/ToolCard";
import AllFundsList from "@/components/home/AllFundsList";
import PopularFundsList from "@/components/home/PopularFundsList";
import ProductsTools from "@/components/home/ProductsTools";
import SectionHeader from "@/components/home/SectionHeader";

const Home = () => {
  return (
    <div className="pb-24 px-4 bg-app-white">
      <div className="mb-6">
        <Collections />
      </div>
      
      <div className="mb-8">
        <SectionHeader title="Products & Tools" viewMoreLink="/tools" />
        <div className="grid grid-cols-2 gap-3">
          <ProductsTools />
        </div>
      </div>
      
      <div className="mb-8">
        <PopularFundsList />
      </div>
      
      <div className="mb-6">
        <SectionHeader title="All Funds" viewMoreLink="/explore" />
        <AllFundsList />
      </div>
    </div>
  );
};

export default Home;
