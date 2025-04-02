
import React from "react";
import CategoryTabs from "@/components/home/CategoryTabs";
import PopularFundsList from "@/components/home/PopularFundsList";
import Collections from "@/components/home/Collections";
import ProductsTools from "@/components/home/ProductsTools";
import AllFundsList from "@/components/home/AllFundsList";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, TrendingUp, BarChart3, History, Percent, Target } from "lucide-react";

const Home = () => {
  return (
    <div className="pb-24 px-4">
      <div className="mb-6 mt-2">
        <div className="p-5 bg-gradient-to-r from-app-primary-blue to-app-primary-purple text-white rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold mb-2">Welcome to WealthWise</h1>
          <p className="text-sm opacity-90">Discover and invest in mutual funds that align with your financial goals</p>
          <div className="mt-4 flex items-center">
            <Button asChild className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/20">
              <Link to="/goals">
                <Target className="mr-2 h-4 w-4" />
                Set Investment Goals
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
        </div>
        
        <div className="grid grid-cols-4 gap-3">
          <Link to="/explore" className="flex flex-col items-center p-3 bg-app-light-blue rounded-lg">
            <TrendingUp className="h-6 w-6 text-app-primary-blue mb-2" />
            <span className="text-xs text-gray-800 text-center">Explore</span>
          </Link>
          <Link to="/tools/sip-calculator" className="flex flex-col items-center p-3 bg-app-light-green rounded-lg">
            <BarChart3 className="h-6 w-6 text-app-primary-green mb-2" />
            <span className="text-xs text-gray-800 text-center">Calculate</span>
          </Link>
          <Link to="/transactions" className="flex flex-col items-center p-3 bg-app-light-purple rounded-lg">
            <History className="h-6 w-6 text-app-primary-purple mb-2" />
            <span className="text-xs text-gray-800 text-center">History</span>
          </Link>
          <Link to="/tools/tax-calculator" className="flex flex-col items-center p-3 bg-app-light-amber rounded-lg">
            <Percent className="h-6 w-6 text-app-amber mb-2" />
            <span className="text-xs text-gray-800 text-center">Tax Saver</span>
          </Link>
        </div>
      </div>
      
      <CategoryTabs />
      <PopularFundsList />
      <Collections />
      <ProductsTools />
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">All Funds</h2>
          <Button variant="ghost" size="sm" asChild className="text-app-primary-blue font-medium p-0">
            <Link to="/explore" className="flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
        <AllFundsList />
      </div>
    </div>
  );
};

export default Home;
