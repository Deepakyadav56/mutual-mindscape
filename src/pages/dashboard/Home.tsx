
import React from "react";
import Collections from "@/components/home/Collections";
import AllFundsList from "@/components/home/AllFundsList";
import PopularFundsList from "@/components/home/PopularFundsList";
import ProductsTools from "@/components/home/ProductsTools";
import SectionHeader from "@/components/home/SectionHeader";
import { QuickActions } from "@/components/dashboard/QuickActions";
import CategoryTabs from "@/components/home/CategoryTabs";

const Home = () => {
  return (
    <div className="pb-24 px-4 bg-app-white">
      <div className="mb-6">
        <CategoryTabs />
      </div>
      
      <div className="mb-6">
        <QuickActions />
      </div>
      
      <div className="mb-8">
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
