
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Eye, EyeOff, TrendingUp, TrendingDown, BarChart2, ChevronLeft, RefreshCw, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import SectionHeader from "./SectionHeader";

const PortfolioPreview = () => {
  const [hideValue, setHideValue] = useState(false);
  const [sortOption, setSortOption] = useState("current");
  
  const handleSortToggle = () => {
    setSortOption(sortOption === "current" ? "returns" : "current");
  };
  
  return (
    <motion.div 
      className="mb-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SectionHeader title="Investments (3)" viewMoreLink="/portfolio" viewAllText="Portfolio" />
      
      <Card className="border rounded-xl overflow-hidden mb-4 shadow-sm">
        <CardContent className="p-0">
          <div className="p-4 border-b border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Current</span>
                <Toggle 
                  className="h-5 w-5 p-0 data-[state=on]:bg-transparent" 
                  onClick={() => setHideValue(!hideValue)}
                  aria-label="Toggle visibility"
                >
                  {hideValue ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                </Toggle>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500">Total returns</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold">
                {hideValue ? "₹••,•••" : "₹14,108"}
              </span>
              <span className="text-red-500 font-medium flex items-center">
                <TrendingDown className="w-4 h-4 mr-1" /> ₹891 (5.94%)
              </span>
            </div>
            
            <div className="flex justify-between items-center mt-3">
              <div>
                <span className="text-sm text-gray-500">Invested</span>
                <div className="font-medium">
                  {hideValue ? "₹••,•••" : "₹14,999"}
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500">1D returns</span>
                <div className="text-red-500 flex items-center justify-end">
                  <TrendingDown className="w-3 h-3 mr-1" /> ₹48.61 (0.34%)
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 flex justify-between items-center bg-gray-50">
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2">XIRR</span>
              <span className="text-red-500 font-medium flex items-center">
                <TrendingDown className="w-3 h-3 mr-1" /> 22.3%
              </span>
              <button className="ml-1">
                <Info className="w-3 h-3 text-gray-400" />
              </button>
            </div>
            <Link to="/portfolio/analysis" className="text-app-primary-green flex items-center text-sm font-medium">
              <BarChart2 className="w-4 h-4 mr-1" />
              Portfolio analysis
            </Link>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">Sort</span>
        <button onClick={handleSortToggle} className="flex items-center text-sm text-app-primary-green font-medium">
          <ChevronLeft className="w-4 h-4" />
          <span>{sortOption === "current" ? "Current (Invested)" : "Returns (%)"}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-0">
        <Link to="/portfolio/fund/1" className="block">
          <div className="border-b border-gray-100 py-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium mb-1">Nippon India Large Cap Fund Direct Growth</h3>
                <div className="text-sm text-gray-500">SIP</div>
              </div>
              <div className="text-right">
                <div className="font-bold">{hideValue ? "₹•,•••" : "₹4,899"}</div>
                <div className="text-sm text-gray-500">(₹5,000)</div>
              </div>
            </div>
          </div>
        </Link>
        
        <Link to="/portfolio/fund/2" className="block">
          <div className="border-b border-gray-100 py-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium mb-1">Bandhan Small Cap Fund Direct Growth</h3>
                <div className="text-sm text-gray-500">SIP</div>
              </div>
              <div className="text-right">
                <div className="font-bold">{hideValue ? "₹•,•••" : "₹4,701"}</div>
                <div className="text-sm text-gray-500">(₹5,000)</div>
              </div>
            </div>
          </div>
        </Link>
        
        <Link to="/portfolio/fund/3" className="block">
          <div className="border-b border-gray-100 py-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium mb-1">Motilal Oswal Midcap Fund Direct Growth</h3>
                <div className="text-sm text-gray-500">SIP</div>
              </div>
              <div className="text-right">
                <div className="font-bold">{hideValue ? "₹•,•••" : "₹4,508"}</div>
                <div className="text-sm text-gray-500">(₹5,000)</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      
      <div className="mt-4 text-center">
        <Button variant="outline" className="rounded-full border-gray-200 text-gray-700">
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh External Funds
        </Button>
        <div className="text-xs text-gray-500 mt-2">
          Updated on 29 Dec '24
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPreview;
