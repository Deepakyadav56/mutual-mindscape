
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  PlusCircle, 
  ArrowRight, 
  Calendar, 
  ArrowUpRight, 
  ChevronRight,
  Bell,
  CircleDollarSign,
  Wallet,
  PieChart,
  BarChart3
} from "lucide-react";
import { PortfolioChart } from "@/components/dashboard/PortfolioChart";
import { AssetAllocation } from "@/components/dashboard/AssetAllocation";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { MarketInsights } from "@/components/dashboard/MarketInsights";
import { UpcomingSips } from "@/components/dashboard/UpcomingSips";

const Home = () => {
  const [timeRange, setTimeRange] = useState("1Y");
  
  // Mock data for portfolio value
  const portfolioValue = 125750.75;
  const returnPercentage = 12.4;
  const isPositiveReturn = returnPercentage > 0;
  const todayChange = 1250.50;
  const isTodayPositive = true;
  
  // Total invested amount
  const totalInvested = 105000;
  
  // SIP information
  const monthlySIP = 13000;
  const nextSIPDate = "15 Jul, 2023";
  
  // Asset allocation data
  const assetAllocation = [
    { type: "Equity", percentage: 62, value: 77965.47 },
    { type: "Debt", percentage: 30, value: 37725.22 },
    { type: "Gold", percentage: 8, value: 10060.06 },
  ];
  
  // Mock data for recommended funds
  const recommendedFunds = [
    {
      id: 1,
      name: "HDFC Mid-Cap Opportunities",
      category: "Equity",
      returnPercentage: 15.8,
      rating: 5,
      aum: "₹26,293 Cr",
    },
    {
      id: 2,
      name: "SBI Blue Chip Fund",
      category: "Equity",
      returnPercentage: 12.3,
      rating: 4,
      aum: "₹30,123 Cr",
    },
    {
      id: 3,
      name: "Axis Long Term Equity Fund",
      category: "ELSS",
      returnPercentage: 14.5,
      rating: 5,
      aum: "₹29,675 Cr",
    },
  ];

  // Mock data for market insights
  const marketInsights = [
    {
      id: 1,
      title: "Nifty 50",
      value: "22,402.40",
      change: "+0.82%",
      isPositive: true,
    },
    {
      id: 2,
      title: "Sensex",
      value: "73,648.62",
      change: "+0.74%",
      isPositive: true,
    },
    {
      id: 3,
      title: "Bank Nifty",
      value: "48,150.65",
      change: "-0.21%",
      isPositive: false,
    },
  ];

  // Upcoming SIPs
  const upcomingSips = [
    {
      id: 1,
      name: "HDFC Mid-Cap Opportunities",
      date: "15 Jul, 2023",
      amount: 5000,
    },
    {
      id: 2,
      name: "Axis Long Term Equity Fund",
      date: "15 Jul, 2023",
      amount: 8000,
    },
  ];

  return (
    <div className="pb-20">
      {/* Header with User Info and Notifications */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Hello, Rahul</h1>
          <p className="text-gray-600">Welcome back!</p>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/notifications" className="relative">
            <Bell className="h-6 w-6 text-gray-700" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </Link>
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white flex items-center justify-center">
              <span className="font-medium">R</span>
            </div>
            <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
          </div>
        </div>
      </div>

      {/* Portfolio Summary Card */}
      <Card className="mb-6 bg-gradient-to-r from-emerald-500 to-teal-500 border-0 shadow-lg overflow-hidden">
        <CardContent className="py-6">
          <div className="text-white">
            <div className="flex justify-between items-start mb-2">
              <p className="text-sm font-medium opacity-80">Portfolio Value</p>
              <div className="bg-white/20 rounded-full px-3 py-1 text-xs font-semibold">
                {timeRange}
              </div>
            </div>
            
            <div className="flex items-end gap-3 mb-3">
              <h2 className="text-3xl font-bold">₹{portfolioValue.toLocaleString('en-IN')}</h2>
              <div className={`flex items-center text-sm ${isPositiveReturn ? 'text-green-200' : 'text-red-200'}`}>
                {isPositiveReturn ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                {isPositiveReturn ? '+' : ''}{returnPercentage}%
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-xs opacity-80">Today's Change</p>
                <p className={`text-sm font-medium ${isTodayPositive ? 'text-green-200' : 'text-red-200'}`}>
                  {isTodayPositive ? '+' : '-'}₹{todayChange.toLocaleString('en-IN')}
                </p>
              </div>
              <div>
                <p className="text-xs opacity-80">Total Invested</p>
                <p className="text-sm font-medium">₹{totalInvested.toLocaleString('en-IN')}</p>
              </div>
              <div>
                <p className="text-xs opacity-80">Monthly SIP</p>
                <p className="text-sm font-medium">₹{monthlySIP.toLocaleString('en-IN')}</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1 opacity-80" />
                <span className="text-xs">Next SIP: {nextSIPDate}</span>
              </div>
              
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="bg-white/10 border-0 text-white hover:bg-white/20">
                  History
                </Button>
                <Button size="sm" variant="outline" className="bg-white/10 border-0 text-white hover:bg-white/20">
                  Analysis
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Portfolio Chart */}
      <Card className="mb-6">
        <CardContent className="py-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-900">Portfolio Performance</h3>
            <div className="flex bg-gray-100 rounded-full p-1">
              {["1M", "3M", "6M", "1Y", "All"].map((range) => (
                <button
                  key={range}
                  className={`text-xs px-3 py-1 rounded-full ${
                    timeRange === range 
                      ? "bg-finance-primary text-white" 
                      : "text-gray-600 hover:bg-gray-200"
                  }`}
                  onClick={() => setTimeRange(range)}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
          
          <PortfolioChart timeRange={timeRange} />
        </CardContent>
      </Card>
      
      {/* Quick Actions */}
      <QuickActions />
      
      {/* Asset Allocation & Market Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <AssetAllocation data={assetAllocation} />
        <MarketInsights data={marketInsights} />
      </div>
      
      {/* Tabs for different sections */}
      <Tabs defaultValue="recommended" className="mb-6">
        <TabsList className="w-full mb-4 bg-gray-100 p-1 rounded-lg">
          <TabsTrigger value="recommended" className="rounded-md">Recommended</TabsTrigger>
          <TabsTrigger value="trending" className="rounded-md">Trending</TabsTrigger>
          <TabsTrigger value="new" className="rounded-md">New Launches</TabsTrigger>
        </TabsList>
        
        <TabsContent value="recommended">
          <div className="space-y-3">
            {recommendedFunds.map((fund) => (
              <Link to={`/funds/${fund.id}`} key={fund.id}>
                <Card className="hover:shadow-md transition-all duration-200">
                  <CardContent className="py-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-gray-900">{fund.name}</h3>
                        <div className="flex items-center">
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded mr-2">
                            {fund.category}
                          </span>
                          <span className="text-xs text-gray-500">{fund.aum}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-emerald-600 font-semibold">{fund.returnPercentage}%</p>
                        <p className="text-xs text-gray-500">1Y Returns</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`h-1.5 w-5 rounded-sm mr-0.5 ${
                                i < fund.rating ? 'bg-amber-400' : 'bg-gray-200'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
            
            <Button variant="outline" className="w-full border-dashed border-gray-300 hover:border-gray-400">
              <PlusCircle className="h-4 w-4 mr-2" />
              Explore More Funds
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="trending">
          <Card className="p-4 border-dashed border-2 border-gray-200 bg-gray-50">
            <div className="text-center py-6">
              <BarChart3 className="h-10 w-10 text-gray-400 mx-auto mb-2" />
              <h3 className="text-lg font-medium text-gray-700 mb-1">Trending Funds</h3>
              <p className="text-sm text-gray-500 mb-4">
                Discover what other investors are adding to their portfolio
              </p>
              <Button className="bg-finance-primary hover:bg-finance-primary/90">
                View Trending Funds
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="new">
          <Card className="p-4 border-dashed border-2 border-gray-200 bg-gray-50">
            <div className="text-center py-6">
              <PlusCircle className="h-10 w-10 text-gray-400 mx-auto mb-2" />
              <h3 className="text-lg font-medium text-gray-700 mb-1">New Fund Launches</h3>
              <p className="text-sm text-gray-500 mb-4">
                Stay updated with the latest mutual fund offerings
              </p>
              <Button className="bg-finance-primary hover:bg-finance-primary/90">
                Explore New Funds
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Upcoming SIPs & Recent Transactions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <UpcomingSips data={upcomingSips} />
        <RecentTransactions />
      </div>
      
      {/* Investment Goals Card */}
      <Card className="p-4 mb-6 border-dashed border-2 border-gray-300 bg-gray-50/80">
        <div className="text-center py-4">
          <div className="bg-emerald-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <CircleDollarSign className="h-6 w-6 text-emerald-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">Create Investment Goal</h3>
          <p className="text-sm text-gray-600 mb-4 max-w-md mx-auto">
            Set financial goals like retirement, education, or home purchase and track your progress
          </p>
          <Button className="bg-finance-primary hover:bg-finance-primary/90">
            <PlusCircle className="h-4 w-4 mr-2" />
            Create Goal
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Home;
