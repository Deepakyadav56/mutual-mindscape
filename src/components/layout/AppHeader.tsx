
import React, { useState } from "react";
import { Bell, Filter, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export const AppHeader: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  
  return (
    <header className="bg-white/80 backdrop-blur-lg dark:bg-teal-900/90 dark:backdrop-blur-lg text-gray-900 dark:text-white py-3 sticky top-0 z-50 border-b border-gray-100/50 dark:border-teal-800/50 shadow-sm transition-colors duration-300">
      <div className="max-w-lg mx-auto px-4">
        {showSearch ? (
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-700 dark:text-gray-200" 
              onClick={() => setShowSearch(false)}
            >
              <X className="w-5 h-5" />
            </Button>
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Search mutual funds..."
                className="pl-10 py-2 border-gray-200/70 dark:border-teal-700/80 text-gray-900 dark:text-white rounded-full focus:border-teal-500 focus:ring-teal-500"
                autoFocus
              />
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
            </div>
          </motion.div>
        ) : (
          <motion.div 
            className="flex justify-between items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/dashboard" className="flex items-center">
              <div className="bg-gradient-to-br from-teal-500 to-teal-700 dark:from-teal-400 dark:to-teal-600 w-10 h-10 rounded-xl flex items-center justify-center shadow-sm mr-3">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 8L13.5 15.5L10.5 11.5L8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                <span className="text-teal-600 dark:text-teal-400">Wealth</span>Wise
              </span>
            </Link>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-700 dark:text-gray-200 hover:bg-gray-100/70 dark:hover:bg-teal-800/60 rounded-full"
                onClick={() => setShowSearch(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-700 dark:text-gray-200 hover:bg-gray-100/70 dark:hover:bg-teal-800/60 rounded-full" 
                asChild
              >
                <Link to="/notifications">
                  <div className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-teal-500 dark:bg-teal-400 rounded-full border-2 border-white dark:border-teal-900"></span>
                  </div>
                </Link>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-700 dark:text-gray-200 hover:bg-gray-100/70 dark:hover:bg-teal-800/60 rounded-full" 
                asChild
              >
                <Link to="/explore">
                  <Filter className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};
