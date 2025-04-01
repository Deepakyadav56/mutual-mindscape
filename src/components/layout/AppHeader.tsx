
import React from "react";
import { Bell, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const AppHeader: React.FC = () => {
  return (
    <header className="bg-white py-3 sticky top-0 z-10 border-b border-gray-100 shadow-sm">
      <div className="max-w-lg mx-auto px-4 flex justify-between items-center">
        <Link to="/dashboard" className="flex items-center">
          <svg className="w-8 h-8 text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 8L13.5 15.5L10.5 11.5L8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="ml-2 text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-500 text-transparent bg-clip-text">WealthWise</span>
        </Link>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/search">
              <Search className="h-5 w-5 text-gray-700" />
            </Link>
          </Button>
          
          <Button variant="ghost" size="icon" asChild>
            <Link to="/notifications">
              <div className="relative">
                <Bell className="h-5 w-5 text-gray-700" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
