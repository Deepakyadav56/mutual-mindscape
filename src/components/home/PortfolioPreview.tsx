
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Eye, EyeOff, TrendingUp, TrendingDown, BarChart2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";

const PortfolioPreview = () => {
  const [hideValue, setHideValue] = useState(false);
  
  return (
    <motion.div 
      className="mb-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-1 h-5 bg-app-primary-green rounded-full mr-2"></div>
          <h2 className="text-lg font-bold text-app-black">Investments (3)</h2>
        </div>
        <Link to="/portfolio" className="text-app-primary-green flex items-center text-sm font-medium transition-all hover:opacity-80">
          Portfolio <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
      
      <Card className="border rounded-xl overflow-hidden mb-4">
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
              <span className="text-red-500 font-medium">
                - ₹891 (5.94%)
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
                <div className="text-red-500">
                  - ₹48.61 (0.34%)
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 flex justify-between items-center bg-gray-50">
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2">XIRR</span>
              <span className="text-red-500 font-medium">-22.3%</span>
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
        <div className="flex items-center text-sm text-app-primary-green font-medium">
          <ChevronLeft className="w-4 h-4" />
          <span>Current (Invested)</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
      
      <div className="space-y-0">
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
      </div>
      
      <div className="mt-4 text-center">
        <Button variant="outline" className="rounded-full border-gray-200 text-gray-700">
          <TrendingDown className="w-4 h-4 mr-2" />
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
