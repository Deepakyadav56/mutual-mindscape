
import React from "react";
import Collections from "@/components/home/Collections";
import AllFundsList from "@/components/home/AllFundsList";
import PopularFundsList from "@/components/home/PopularFundsList";
import ProductsTools from "@/components/home/ProductsTools";
import SectionHeader from "@/components/home/SectionHeader";
import { QuickActions } from "@/components/dashboard/QuickActions";
import CategoryTabs from "@/components/home/CategoryTabs";
import { motion } from "framer-motion";
import { Search, BellRing, ScanLine } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <motion.div 
      className="pb-24 px-4 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="sticky top-0 z-10 bg-white pt-3 pb-2">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-app-primary-green to-blue-500 rounded-full mr-2"></div>
            <h1 className="text-xl font-bold">Mutual Funds</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="w-5 h-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <ScanLine className="w-5 h-5 text-gray-600" />
            </Button>
            <Avatar className="h-9 w-9">
              <img src="https://github.com/shadcn.png" alt="User avatar" />
            </Avatar>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <CategoryTabs />
      </div>
      
      <div className="mb-6">
        <QuickActions />
      </div>
      
      <div className="mb-8">
        <SectionHeader title="Popular Funds" viewMoreLink="/explore" />
        <PopularFundsList />
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
      
      <div className="mb-6">
        <SectionHeader title="All Funds" viewMoreLink="/explore" viewAllText="All Mutual Funds" />
        <AllFundsList />
      </div>
    </motion.div>
  );
};

export default Home;
