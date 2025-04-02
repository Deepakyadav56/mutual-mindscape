
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const CategoryTabs = () => {
  return (
    <div className="mb-6 overflow-x-auto no-scrollbar">
      <Tabs defaultValue="popular" className="w-full">
        <TabsList className="bg-transparent flex space-x-2 w-full justify-start px-1 py-2">
          <TabsTrigger 
            value="popular" 
            className="data-[state=active]:bg-app-green data-[state=active]:text-white rounded-full px-4 py-1.5 text-sm whitespace-nowrap"
          >
            Popular Funds
          </TabsTrigger>
          <TabsTrigger 
            value="collections" 
            className="data-[state=active]:bg-app-green data-[state=active]:text-white rounded-full px-4 py-1.5 text-sm whitespace-nowrap"
          >
            Collections
          </TabsTrigger>
          <TabsTrigger 
            value="all" 
            className="data-[state=active]:bg-app-green data-[state=active]:text-white rounded-full px-4 py-1.5 text-sm whitespace-nowrap"
          >
            All Mutual Funds
          </TabsTrigger>
          <TabsTrigger 
            value="sip" 
            className="data-[state=active]:bg-app-green data-[state=active]:text-white rounded-full px-4 py-1.5 text-sm whitespace-nowrap"
          >
            SIP
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default CategoryTabs;
