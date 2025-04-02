
import React, { useState } from "react";
import { Bell, Filter, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const AppHeader: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  
  return (
    <header className="bg-app-dark-blue text-white py-3 sticky top-0 z-10 border-b border-gray-800">
      <div className="max-w-lg mx-auto px-4">
        {showSearch ? (
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white" 
              onClick={() => setShowSearch(false)}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Search mutual funds..."
                className="pl-10 py-2 bg-app-navy border-none text-white rounded-full focus:border-app-green focus:ring-app-green"
                autoFocus
              />
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <Link to="/dashboard" className="flex items-center">
              <svg className="w-8 h-8 text-app-green" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 8L13.5 15.5L10.5 11.5L8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="ml-2 text-lg font-bold text-white">
                <span className="text-app-green">W</span>ealthWise
              </span>
            </Link>
            
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white"
                onClick={() => setShowSearch(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="icon" className="text-white" asChild>
                <Link to="/notifications">
                  <div className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-app-green rounded-full"></span>
                  </div>
                </Link>
              </Button>
              
              <Button variant="ghost" size="icon" className="text-white" asChild>
                <Link to="/explore">
                  <Filter className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
