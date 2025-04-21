
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BarChart2, PieChart, Calculator, Heart } from "lucide-react";

const CategoryTabs = () => {
  return (
    <div className="mb-6">
      <div className="flex overflow-x-auto no-scrollbar pb-2 gap-2">
        <Link to="/explore" className="flex-shrink-0">
          <motion.div 
            className="py-2 px-4 bg-gray-100 text-gray-900 rounded-full text-sm font-medium flex items-center gap-1 border border-gray-200"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.97 }}
          >
            <BarChart2 className="w-4 h-4" /> Explore
          </motion.div>
        </Link>
        
        <Link to="/dashboard" className="flex-shrink-0">
          <motion.div 
            className="py-2 px-4 bg-white text-gray-900 rounded-full text-sm font-medium flex items-center gap-1 border border-gray-200"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.97 }}
          >
            <PieChart className="w-4 h-4" /> Dashboard
          </motion.div>
        </Link>
        
        <Link to="/portfolio/SipTracker" className="flex-shrink-0">
          <motion.div 
            className="py-2 px-4 bg-white text-gray-900 rounded-full text-sm font-medium flex items-center gap-1 border border-gray-200"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.97 }}
          >
            <Calculator className="w-4 h-4" /> SIPs
          </motion.div>
        </Link>
        
        <Link to="/watchlist" className="flex-shrink-0">
          <motion.div 
            className="py-2 px-4 bg-white text-gray-900 rounded-full text-sm font-medium flex items-center gap-1 border border-gray-200"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.97 }}
          >
            <Heart className="w-4 h-4" /> Watchlist
          </motion.div>
        </Link>
      </div>
      
      <div className="grid grid-cols-4 gap-3 my-4">
        <Link to="/tools/import-funds" className="flex-1">
          <motion.div
            className="bg-gray-50 p-2 rounded-xl flex flex-col items-center justify-center text-center hover:bg-gray-100 transition-colors"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <div className="w-10 h-10 bg-app-primary-green/10 rounded-full flex items-center justify-center mb-1">
              <BarChart2 className="w-5 h-5 text-app-primary-green" />
            </div>
            <span className="text-xs font-medium">Import funds</span>
          </motion.div>
        </Link>
        
        <Link to="/explore?filter=nfo" className="flex-1">
          <motion.div
            className="bg-gray-50 p-2 rounded-xl flex flex-col items-center justify-center text-center hover:bg-gray-100 transition-colors"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center mb-1">
              <PieChart className="w-5 h-5 text-blue-500" />
            </div>
            <span className="text-xs font-medium">NFOs</span>
          </motion.div>
        </Link>
        
        <Link to="/tools/sip-calculator" className="flex-1">
          <motion.div
            className="bg-gray-50 p-2 rounded-xl flex flex-col items-center justify-center text-center hover:bg-gray-100 transition-colors"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center mb-1">
              <Calculator className="w-5 h-5 text-purple-500" />
            </div>
            <span className="text-xs font-medium">SIP Calculator</span>
          </motion.div>
        </Link>
        
        <Link to="/tools/compare-funds" className="flex-1">
          <motion.div
            className="bg-gray-50 p-2 rounded-xl flex flex-col items-center justify-center text-center hover:bg-gray-100 transition-colors"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center mb-1">
              <BarChart2 className="w-5 h-5 text-amber-500" />
            </div>
            <span className="text-xs font-medium">Compare funds</span>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryTabs;
