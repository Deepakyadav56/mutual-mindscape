
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  Plus, 
  ArrowRight, 
  Download, 
  FileText, 
  Calculator, 
  GitCompare,
  ShoppingCart,
  ChevronRight,
  Filter,
  ToggleRight
} from "lucide-react";
import FundLogo from "@/components/funds/FundLogo";
import StarRating from "@/components/funds/StarRating";

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("explore");
  
  // Mock data for popular funds
  const popularFunds = [
    {
      id: 1,
      name: "Motilal Oswal Midcap Fund",
      category: "Equity Mid Cap",
      returnPercentage: 28.13,
      period: "3Y",
      rating: 5,
    },
    {
      id: 2,
      name: "Parag Parikh Flexi Cap Fund",
      category: "Equity Flexi Cap",
      returnPercentage: 17.76,
      period: "3Y",
      rating: 5,
    },
  ];
  
  // Mock data for Groww funds
  const growwFunds = [
    {
      id: 101,
      name: "Groww Value Fund",
      returnPercentage: 14.22,
      period: "3Y",
    },
    {
      id: 102,
      name: "Groww Large Cap Fund",
      returnPercentage: 12.09,
      period: "3Y",
    },
  ];
  
  // Mock data for all mutual funds
  const allMutualFunds = [
    {
      id: 1,
      name: "Motilal Oswal Midcap Fund",
      category: "Equity Mid Cap",
      returnPercentage: 28.13,
      period: "3Y",
      rating: 5,
    },
    {
      id: 3,
      name: "SBI PSU Fund",
      category: "Equity Thematic",
      returnPercentage: 31.37,
      period: "3Y",
      rating: 4,
    },
    {
      id: 2,
      name: "Parag Parikh Flexi Cap Fund",
      category: "Equity Flexi Cap",
      returnPercentage: 17.76,
      period: "3Y",
      rating: 5,
    },
    {
      id: 4,
      name: "HDFC Flexi Cap Fund",
      category: "Equity Flexi Cap",
      returnPercentage: 21.81,
      period: "3Y",
      rating: 5,
    },
    {
      id: 5,
      name: "Quant Small Cap Fund",
      category: "Equity Small Cap",
      returnPercentage: 20.67,
      period: "3Y",
      rating: 5,
    },
  ];
  
  // Collection categories
  const collections = [
    {
      id: 1,
      name: "High return",
      icon: <TrendingUp className="h-6 w-6 text-app-groww-green" />,
    },
    {
      id: 2,
      name: "SIP with ₹500",
      icon: <Plus className="h-6 w-6 text-app-groww-green" />,
    },
    {
      id: 3,
      name: "Tax Saving",
      icon: <FileText className="h-6 w-6 text-app-groww-green" />,
    },
    {
      id: 4,
      name: "Large Cap",
      icon: <TrendingUp className="h-6 w-6 text-app-groww-green" />,
    },
    {
      id: 5,
      name: "Mid Cap",
      icon: <TrendingUp className="h-6 w-6 text-app-groww-green" />,
    },
    {
      id: 6,
      name: "Small Cap",
      icon: <TrendingUp className="h-6 w-6 text-app-groww-green" />,
    },
  ];
  
  // Products & tools
  const tools = [
    {
      id: 1,
      name: "Import",
      icon: <Download className="h-6 w-6 text-app-groww-green" />,
      path: "/import-funds",
    },
    {
      id: 2,
      name: "NFOs",
      icon: <FileText className="h-6 w-6 text-app-groww-green" />,
      path: "/nfos",
      badgeCount: 3,
    },
    {
      id: 3,
      name: "SIP calculator",
      icon: <Calculator className="h-6 w-6 text-app-groww-green" />,
      path: "/tools/sip-calculator",
    },
    {
      id: 4,
      name: "Compare funds",
      icon: <GitCompare className="h-6 w-6 text-app-groww-green" />,
      path: "/compare-funds",
    },
  ];

  return (
    <div className="pb-20">
      {/* Top Navigation Tabs */}
      <div className="flex justify-between items-center p-4 space-x-2">
        {["explore", "dashboard", "sips", "watchlist"].map((tab) => (
          <button
            key={tab}
            className={`groww-tab ${
              activeTab === tab ? "groww-tab-active" : "groww-tab-inactive"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="p-4">
        {/* Popular Funds Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="groww-section-title">Popular Funds</h2>
            <Link to="/explore" className="groww-view-all">All Mutual Funds</Link>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {popularFunds.map((fund) => (
              <Link key={fund.id} to={`/funds/${fund.id}`}>
                <div className="groww-card h-full">
                  <div className="flex items-center mb-2">
                    <FundLogo fundName={fund.name} className="mr-2" />
                    <div>
                      <p className="text-sm font-medium text-app-groww-text-primary line-clamp-1">
                        {fund.name.split(' ').slice(0, 2).join(' ')}
                      </p>
                      <p className="text-xs text-app-groww-text-secondary mt-1">
                        {fund.category}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <StarRating rating={fund.rating} />
                    <div className="text-right">
                      <p className="text-app-groww-positive font-medium text-sm">
                        {fund.returnPercentage}%
                      </p>
                      <p className="text-xs text-app-groww-text-secondary">
                        {fund.period}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Collections Section */}
        <div className="mb-6">
          <h2 className="groww-section-title">Collections</h2>
          <div className="grid grid-cols-3 gap-4">
            {collections.map((collection) => (
              <Link key={collection.id} to={`/collections/${collection.id}`}>
                <div className="groww-icon-container h-full">
                  <div className="bg-app-groww-card-dark p-2 rounded-lg mb-2">
                    {collection.icon}
                  </div>
                  <p className="text-xs text-app-groww-text-secondary text-center">
                    {collection.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Funds by Groww */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="groww-section-title">Funds by Groww</h2>
            <Link to="/groww-funds" className="groww-view-all">View all</Link>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {growwFunds.map((fund) => (
              <Link key={fund.id} to={`/funds/${fund.id}`}>
                <div className="groww-card h-full">
                  <div className="flex items-center mb-3">
                    <div className="fund-logo w-10 h-10 bg-app-groww-blue rounded-full mr-2">
                      <div className="w-full h-full rounded-full bg-gradient-to-r from-app-groww-blue to-app-groww-green"></div>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-app-groww-text-primary mb-1">
                    {fund.name}
                  </p>
                  <div className="flex">
                    <p className="text-app-groww-positive font-medium text-sm">
                      {fund.returnPercentage}%
                    </p>
                    <p className="text-xs text-app-groww-text-secondary ml-1 mt-0.5">
                      {fund.period}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Products & Tools */}
        <div className="mb-6">
          <h2 className="groww-section-title">Products & tools</h2>
          <div className="grid grid-cols-4 gap-3">
            {tools.map((tool) => (
              <Link key={tool.id} to={tool.path}>
                <div className="groww-icon-container h-full relative">
                  {tool.badgeCount && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-app-groww-negative rounded-full text-white text-xs flex items-center justify-center">
                      {tool.badgeCount}
                    </span>
                  )}
                  <div className="bg-app-groww-card-dark p-2 rounded-lg mb-1">
                    {tool.icon}
                  </div>
                  <p className="text-[10px] text-app-groww-text-secondary text-center">
                    {tool.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Cart */}
        <Link to="/cart" className="groww-card flex justify-between items-center p-3 mb-6">
          <div className="flex items-center">
            <ShoppingCart className="h-5 w-5 text-app-groww-green mr-2" />
            <p className="text-sm text-app-groww-text-primary">Cart</p>
          </div>
          <div className="flex items-center">
            <span className="text-xs text-app-groww-text-secondary mr-2">1</span>
            <ChevronRight className="h-4 w-4 text-app-groww-text-secondary" />
          </div>
        </Link>
        
        {/* All Mutual Funds */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="groww-section-title">All Mutual Funds</h2>
          </div>
          
          {/* Filters row */}
          <div className="flex items-center space-x-3 mb-4 overflow-x-auto scrollbar-none pb-2">
            <div className="p-1.5 border border-app-groww-border-dark rounded-md">
              <Filter className="h-4 w-4 text-app-groww-text-secondary" />
            </div>
            
            <div className="flex items-center border border-app-groww-border-dark rounded-md px-2 py-1.5">
              <span className="text-xs text-app-groww-text-secondary mr-1">Sort By</span>
              <ChevronRight className="h-4 w-4 text-app-groww-text-secondary rotate-90" />
            </div>
            
            <div className="flex items-center border border-app-groww-border-dark rounded-md px-2 py-1.5">
              <span className="text-xs text-app-groww-text-secondary mr-1">Index only</span>
              <ToggleRight className="h-4 w-4 text-app-groww-text-secondary" />
            </div>
            
            <div className="flex items-center border border-app-groww-border-dark rounded-md px-2 py-1.5">
              <span className="text-xs text-app-groww-text-primary">Flexi Cap</span>
            </div>
            
            <div className="flex items-center border border-app-groww-border-dark rounded-md px-2 py-1.5">
              <span className="text-xs text-app-groww-text-primary">Sector</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-xs text-app-groww-text-secondary mb-2">
            <span>1,482 funds</span>
            <div className="flex items-center">
              <span className="mr-1">3Y Returns</span>
              <ChevronRight className="h-3 w-3 rotate-90" />
            </div>
          </div>
          
          {/* Fund list */}
          <div className="space-y-3">
            {allMutualFunds.map((fund) => (
              <Link key={fund.id} to={`/funds/${fund.id}`}>
                <div className="groww-fund-card">
                  <div className="flex items-start space-x-2">
                    <FundLogo fundName={fund.name} />
                    <div>
                      <p className="text-sm font-medium text-app-groww-text-primary mb-1">
                        {fund.name}
                      </p>
                      <div className="flex items-center">
                        <p className="text-xs text-app-groww-text-secondary">
                          {fund.category}
                        </p>
                        <div className="mx-1 text-app-groww-text-secondary">•</div>
                        <StarRating rating={fund.rating} />
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-app-groww-positive font-medium">
                      {fund.returnPercentage}%
                    </p>
                    <p className="text-xs text-app-groww-text-secondary mt-1">
                      {fund.period}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
            
            <Link to="/explore" className="flex items-center justify-between p-3">
              <span className="text-sm text-app-groww-text-primary">View all</span>
              <ChevronRight className="h-4 w-4 text-app-groww-text-secondary" />
            </Link>
          </div>
          
          {/* Footer */}
          <div className="mt-6 mb-6 text-center">
            <p className="text-xs text-app-groww-text-secondary">Groww Invest Tech Pvt. Ltd.</p>
            <p className="text-xs text-app-groww-text-secondary mt-1">(Formerly known as Nextbillion Technology Pvt. Ltd.)</p>
            <p className="text-xs text-app-groww-text-secondary mt-1">SEBI Stock Broker • INZ000301838</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
