
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart2, PieChart, Calculator, Heart, Zap, TrendingUp } from "lucide-react";

const CategoryTabs = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <div className="mb-8 mt-2">
      <motion.div 
        className="flex overflow-x-auto no-scrollbar pb-4 gap-3 px-1"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <Link to="/explore" className="flex-shrink-0">
            <motion.div 
              className="py-2.5 px-4 bg-teal-600 text-white rounded-xl font-medium flex items-center gap-2 shadow-md"
              whileTap={{ scale: 0.97 }}
            >
              <BarChart2 className="w-4 h-4" />
              <span>Explore</span>
            </motion.div>
          </Link>
        </motion.div>
        
        <motion.div variants={item}>
          <Link to="/dashboard" className="flex-shrink-0">
            <motion.div 
              className="py-2.5 px-4 bg-white dark:bg-teal-800/50 text-teal-800 dark:text-white rounded-xl font-medium flex items-center gap-2 border-2 border-teal-100 dark:border-teal-700/50 shadow-sm"
              whileTap={{ scale: 0.97 }}
            >
              <PieChart className="w-4 h-4" /> Dashboard
            </motion.div>
          </Link>
        </motion.div>
        
        <motion.div variants={item}>
          <Link to="/portfolio/SipTracker" className="flex-shrink-0">
            <motion.div 
              className="py-2.5 px-4 bg-white dark:bg-teal-800/50 text-teal-800 dark:text-white rounded-xl font-medium flex items-center gap-2 border-2 border-teal-100 dark:border-teal-700/50 shadow-sm"
              whileTap={{ scale: 0.97 }}
            >
              <Calculator className="w-4 h-4" /> SIPs
            </motion.div>
          </Link>
        </motion.div>
        
        <motion.div variants={item}>
          <Link to="/watchlist" className="flex-shrink-0">
            <motion.div 
              className="py-2.5 px-4 bg-white dark:bg-teal-800/50 text-teal-800 dark:text-white rounded-xl font-medium flex items-center gap-2 border-2 border-teal-100 dark:border-teal-700/50 shadow-sm"
              whileTap={{ scale: 0.97 }}
            >
              <Heart className="w-4 h-4" /> Watchlist
            </motion.div>
          </Link>
        </motion.div>
        
        <motion.div variants={item}>
          <Link to="/explore/top-performers" className="flex-shrink-0">
            <motion.div 
              className="py-2.5 px-4 bg-white dark:bg-teal-800/50 text-teal-800 dark:text-white rounded-xl font-medium flex items-center gap-2 border-2 border-teal-100 dark:border-teal-700/50 shadow-sm"
              whileTap={{ scale: 0.97 }}
            >
              <TrendingUp className="w-4 h-4" /> Top Funds
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-4 gap-4 my-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <Link to="/tools/import-funds" className="flex-1">
            <motion.div
              className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-800/50 dark:to-teal-700/50 p-3 rounded-xl flex flex-col items-center justify-center text-center transition-all border border-teal-100/80 dark:border-teal-700/50 shadow-sm"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500/20 to-teal-600/20 dark:from-teal-400/30 dark:to-teal-500/30 rounded-full flex items-center justify-center mb-2">
                <BarChart2 className="w-5 h-5 text-teal-600 dark:text-teal-300" />
              </div>
              <span className="text-xs font-medium text-teal-800 dark:text-teal-200">Import Funds</span>
            </motion.div>
          </Link>
        </motion.div>
        
        <motion.div variants={item}>
          <Link to="/explore?filter=nfo" className="flex-1">
            <motion.div
              className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-800/50 dark:to-teal-700/50 p-3 rounded-xl flex flex-col items-center justify-center text-center transition-all border border-teal-100/80 dark:border-teal-700/50 shadow-sm"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-blue-600/20 dark:from-blue-400/30 dark:to-blue-500/30 rounded-full flex items-center justify-center mb-2">
                <Zap className="w-5 h-5 text-blue-600 dark:text-blue-300" />
              </div>
              <span className="text-xs font-medium text-teal-800 dark:text-teal-200">NFOs</span>
            </motion.div>
          </Link>
        </motion.div>
        
        <motion.div variants={item}>
          <Link to="/tools/sip-calculator" className="flex-1">
            <motion.div
              className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-800/50 dark:to-teal-700/50 p-3 rounded-xl flex flex-col items-center justify-center text-center transition-all border border-teal-100/80 dark:border-teal-700/50 shadow-sm"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-purple-600/20 dark:from-purple-400/30 dark:to-purple-500/30 rounded-full flex items-center justify-center mb-2">
                <Calculator className="w-5 h-5 text-purple-600 dark:text-purple-300" />
              </div>
              <span className="text-xs font-medium text-teal-800 dark:text-teal-200">SIP Calculator</span>
            </motion.div>
          </Link>
        </motion.div>
        
        <motion.div variants={item}>
          <Link to="/tools/compare-funds" className="flex-1">
            <motion.div
              className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-800/50 dark:to-teal-700/50 p-3 rounded-xl flex flex-col items-center justify-center text-center transition-all border border-teal-100/80 dark:border-teal-700/50 shadow-sm"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-amber-600/20 dark:from-amber-400/30 dark:to-amber-500/30 rounded-full flex items-center justify-center mb-2">
                <TrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-300" />
              </div>
              <span className="text-xs font-medium text-teal-800 dark:text-teal-200">Compare</span>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CategoryTabs;
