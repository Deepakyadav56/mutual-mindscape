
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff, Filter, PieChart, Search, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toggle } from "@/components/ui/toggle";
import FundCard from "@/components/home/FundCard";

const Holdings = () => {
  const navigate = useNavigate();
  const [hideValues, setHideValues] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  
  // Mock portfolio data
  const portfolioData = {
    totalValue: 125750.75,
    totalInvestment: 100000,
    totalGain: 25750.75,
    todayGain: 1250.25,
    todayPercentage: 1.2,
    returns: {
      absolute: 25.75,
      xirr: 12.4,
    },
    holdings: [
      {
        id: 1,
        name: "HDFC Mid-Cap Opportunities Fund",
        category: "Equity - Mid Cap",
        amc: "HDFC Mutual Fund",
        value: 45000,
        invested: 40000,
        units: 1250.45,
        returns: {
          "1D": 0.8,
          "1W": 1.5,
          "1M": 3.2,
          "1Y": 18.5,
          "3Y": 15.2,
          "5Y": 14.8
        },
        xirr: 12.5,
        rating: 5,
        sipActive: true
      },
      {
        id: 2,
        name: "Axis Bluechip Fund",
        category: "Equity - Large Cap",
        amc: "Axis Mutual Fund",
        value: 30750.75,
        invested: 25000,
        units: 850.22,
        returns: {
          "1D": -0.5,
          "1W": 0.8,
          "1M": 1.2,
          "1Y": 12.8,
          "3Y": 11.5,
          "5Y": 10.9
        },
        xirr: 9.8,
        rating: 4,
        sipActive: true
      },
      {
        id: 3,
        name: "Parag Parikh Flexi Cap Fund",
        category: "Equity - Flexi Cap",
        amc: "PPFAS Mutual Fund",
        value: 50000,
        invested: 35000,
        units: 1100.85,
        returns: {
          "1D": 1.2,
          "1W": 2.5,
          "1M": 4.8,
          "1Y": 22.5,
          "3Y": 18.2,
          "5Y": 16.8
        },
        xirr: 15.8,
        rating: 5,
        sipActive: false
      }
    ]
  };

  // Sort holdings based on selected criteria
  const sortedHoldings = [...portfolioData.holdings].sort((a, b) => {
    switch (sortBy) {
      case "value":
        return b.value - a.value;
      case "returns":
        return b.xirr - a.xirr;
      case "gains":
        return (b.value - b.invested) - (a.value - a.invested);
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="pb-20">
      <div className="sticky top-0 bg-white z-10 shadow-sm">
        <div className="flex items-center p-4 border-b">
          <button onClick={() => navigate("/portfolio")} className="text-app-gray-900">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold text-app-gray-900 ml-4">
            Holdings
          </h1>
        </div>
      </div>

      <div className="p-4">
        <Card className="border-0 shadow-sm mb-5">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <div className="flex items-center">
                  <h2 className="text-xl font-bold">
                    {hideValues ? "••••••" : `₹${portfolioData.totalValue.toLocaleString()}`}
                  </h2>
                  <Toggle 
                    className="h-8 w-8 p-0 ml-1 data-[state=on]:bg-transparent" 
                    onClick={() => setHideValues(!hideValues)}
                    aria-label="Toggle values visibility"
                  >
                    {hideValues ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Toggle>
                </div>
                <p className="text-sm text-app-gray-500">Current Value</p>
              </div>
              
              <div className="text-right">
                <p className="text-sm text-app-gray-500">Invested</p>
                <p className="font-semibold">
                  {hideValues ? "••••••" : `₹${portfolioData.totalInvestment.toLocaleString()}`}
                </p>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className={`font-semibold ${portfolioData.todayPercentage >= 0 ? "text-app-button-green" : "text-red-500"}`}>
                    {portfolioData.todayPercentage >= 0 ? "+" : ""}
                    {hideValues ? "•••" : `${portfolioData.todayPercentage}%`}
                  </span>
                  {portfolioData.todayPercentage >= 0 ? 
                    <TrendingUp className="w-4 h-4 ml-1 text-app-button-green" /> : 
                    <TrendingDown className="w-4 h-4 ml-1 text-red-500" />}
                </div>
                <span className="text-xs text-app-gray-500">Today's Change</span>
              </div>
              
              <div className="flex flex-col items-center">
                <span className={`font-semibold ${portfolioData.returns.absolute >= 0 ? "text-app-button-green" : "text-red-500"}`}>
                  {hideValues ? "•••" : `${portfolioData.returns.absolute}%`}
                </span>
                <span className="text-xs text-app-gray-500">Total Returns</span>
              </div>
              
              <div className="flex flex-col items-end">
                <span className={`font-semibold ${portfolioData.returns.xirr >= 0 ? "text-app-button-green" : "text-red-500"}`}>
                  {hideValues ? "•••" : `${portfolioData.returns.xirr}%`}
                </span>
                <span className="text-xs text-app-gray-500">XIRR</span>
              </div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-app-gray-100 flex justify-between">
              <button 
                className="text-sm text-app-button-green font-medium flex items-center"
                onClick={() => navigate("/portfolio/analysis")}
              >
                <PieChart className="h-4 w-4 mr-1" />
                Portfolio Analysis
              </button>
              
              <button 
                className="text-sm text-app-button-green font-medium flex items-center"
                onClick={() => navigate("/portfolio/sip-tracker")}
              >
                <TrendingUp className="h-4 w-4 mr-1" />
                SIP Tracker
              </button>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Your Mutual Funds</h3>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full bg-app-gray-100">
              <Search className="h-4 w-4 text-app-gray-900" />
            </button>
            <button className="p-2 rounded-full bg-app-gray-100">
              <Filter className="h-4 w-4 text-app-gray-900" />
            </button>
          </div>
        </div>

        <div className="mb-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full grid grid-cols-4 bg-app-gray-100 p-1 rounded-lg">
              <TabsTrigger value="all" className="rounded-md">All</TabsTrigger>
              <TabsTrigger value="equity" className="rounded-md">Equity</TabsTrigger>
              <TabsTrigger value="debt" className="rounded-md">Debt</TabsTrigger>
              <TabsTrigger value="others" className="rounded-md">Others</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="mb-4">
          <select 
            className="w-full p-2 border border-app-gray-200 rounded-lg bg-white"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Sort by Name</option>
            <option value="value">Sort by Value</option>
            <option value="returns">Sort by Returns (XIRR)</option>
            <option value="gains">Sort by Gains</option>
          </select>
        </div>

        <div className="space-y-3">
          {sortedHoldings.map((fund) => (
            <FundCard key={fund.id} fund={fund} isPortfolioCard={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Holdings;
