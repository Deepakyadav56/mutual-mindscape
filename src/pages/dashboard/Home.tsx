
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
        <div className="p-5 bg-gradient-to-r from-app-button-green to-teal-600 text-white rounded-xl shadow-lg">
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
          <h2 className="text-lg font-semibold text-app-black">Quick Actions</h2>
        </div>
        
        <div className="grid grid-cols-4 gap-3">
          <Link to="/explore" className="flex flex-col items-center p-3 bg-blue-100 rounded-lg border border-app-mint/50">
            <div className="h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center mb-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
            </div>
            <span className="text-xs text-app-black text-center">Explore</span>
          </Link>
          
          <Link to="/tools/sip-calculator" className="flex flex-col items-center p-3 bg-green-100 rounded-lg border border-app-mint/50">
            <div className="h-10 w-10 rounded-full bg-green-200 flex items-center justify-center mb-2">
              <BarChart3 className="h-5 w-5 text-green-600" />
            </div>
            <span className="text-xs text-app-black text-center">Calculate</span>
          </Link>
          
          <Link to="/transactions" className="flex flex-col items-center p-3 bg-purple-100 rounded-lg border border-app-mint/50">
            <div className="h-10 w-10 rounded-full bg-purple-200 flex items-center justify-center mb-2">
              <History className="h-5 w-5 text-purple-600" />
            </div>
            <span className="text-xs text-app-black text-center">History</span>
          </Link>
          
          <Link to="/tools/tax-calculator" className="flex flex-col items-center p-3 bg-amber-100 rounded-lg border border-app-mint/50">
            <div className="h-10 w-10 rounded-full bg-amber-200 flex items-center justify-center mb-2">
              <Percent className="h-5 w-5 text-amber-600" />
            </div>
            <span className="text-xs text-app-black text-center">Tax Saver</span>
          </Link>
        </div>
      </div>
      
      <CategoryTabs />
      <PopularFundsList />
      <Collections />
      <ProductsTools />
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-app-black">All Funds</h2>
          <Button variant="ghost" size="sm" asChild className="text-app-button-green font-medium p-0">
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
