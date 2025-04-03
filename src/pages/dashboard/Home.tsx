
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import CategoryCard from "@/components/home/CategoryCard";
import Collections from "@/components/home/Collections";
import ToolCard from "@/components/home/ToolCard";
import AllFundsList from "@/components/home/AllFundsList";
import PopularFundsList from "@/components/home/PopularFundsList";
import ProductsTools from "@/components/home/ProductsTools";

const Home = () => {
  return (
    <div className="pb-24 px-4">
      <Collections />
      
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-900">Products & Tools</h2>
          <Link to="/tools" className="view-all-link">
            View All <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {/* ProductsTools component will render here */}
          <ProductsTools />
        </div>
      </div>
      
      <div className="mb-6">
        <PopularFundsList />
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900">All Funds</h2>
          <Link to="/explore" className="view-all-link">
            View All <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <AllFundsList />
      </div>
    </div>
  );
};

export default Home;
