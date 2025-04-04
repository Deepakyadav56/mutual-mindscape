
import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  TrendingUp, 
  TrendingDown, 
  BarChart2, 
  CalendarRange, 
  Share2, 
  Clock, 
  Wallet, 
  LineChart, 
  ChevronRight, 
  Info 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FundDetail = () => {
  const { fundId } = useParams();
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = useState("1Y");
  
  // Mock data for the fund details (would be fetched from API based on fundId)
  const fundDetails = {
    id: fundId,
    name: "Nippon India Large Cap Fund Direct Growth",
    category: "Equity - Large Cap",
    riskLevel: "Moderate",
    nav: 85.72,
    navDate: "29 Dec 2024",
    currentValue: 4899,
    investedAmount: 5000,
    returns: {
      absolute: -101,
      percentage: -2.02,
      cagr: -4.5,
    },
    sipDetails: {
      amount: 5000,
      startDate: "10 Jan 2023",
      nextDate: "10 Jan 2025",
      status: "Active"
    },
    fundManager: "John Smith",
    aum: "₹10,540 Cr",
    expenseRatio: "0.59%",
    exitLoad: "1% for redemption within 365 days",
    benchmark: "NIFTY 100 TRI",
    fundStartDate: "08 Mar 2005",
    minAmount: {
      lumpsum: 1000,
      sip: 500
    },
    performances: [
      { period: "1M", returns: -0.85, benchmarkReturns: -0.34 },
      { period: "3M", returns: 2.56, benchmarkReturns: 2.78 },
      { period: "6M", returns: 8.92, benchmarkReturns: 9.45 },
      { period: "1Y", returns: 16.78, benchmarkReturns: 18.23 },
      { period: "3Y", returns: 12.45, benchmarkReturns: 13.67 },
      { period: "5Y", returns: 15.67, benchmarkReturns: 16.21 },
    ]
  };
  
  return (
    <div className="pb-20">
      <div className="sticky top-0 bg-white z-10 shadow-sm">
        <div className="flex items-center p-4 border-b">
          <button onClick={() => navigate(-1)} className="text-app-gray-900">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-medium text-app-gray-900 ml-4 truncate pr-4">
            Fund Details
          </h1>
          <div className="ml-auto flex space-x-4">
            <button>
              <Share2 className="h-5 w-5 text-app-gray-900" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <Card className="border-0 shadow-sm mb-4">
          <CardContent className="p-4">
            <h2 className="text-lg font-bold text-app-gray-900 mb-1">{fundDetails.name}</h2>
            <div className="flex items-center text-sm text-app-gray-900 opacity-80 mb-4">
              <span>{fundDetails.category}</span>
              <span className="mx-2">•</span>
              <span>{fundDetails.riskLevel} Risk</span>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-xs text-gray-500">Current Value</p>
                <p className="text-xl font-bold">₹{fundDetails.currentValue.toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">Total Returns</p>
                <p className={`flex items-center font-medium ${fundDetails.returns.absolute < 0 ? 'text-red-500' : 'text-green-500'}`}>
                  {fundDetails.returns.absolute < 0 ? (
                    <TrendingDown className="w-4 h-4 mr-1" />
                  ) : (
                    <TrendingUp className="w-4 h-4 mr-1" />
                  )}
                  ₹{Math.abs(fundDetails.returns.absolute)} ({Math.abs(fundDetails.returns.percentage).toFixed(2)}%)
                </p>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500">Invested</p>
                <p className="font-medium">₹{fundDetails.investedAmount.toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">CAGR</p>
                <p className={`flex items-center justify-end ${fundDetails.returns.cagr < 0 ? 'text-red-500' : 'text-green-500'}`}>
                  {fundDetails.returns.cagr < 0 ? (
                    <TrendingDown className="w-3 h-3 mr-1" />
                  ) : (
                    <TrendingUp className="w-3 h-3 mr-1" />
                  )}
                  {Math.abs(fundDetails.returns.cagr).toFixed(2)}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm mb-4">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-app-gray-900">Performance</h3>
              <div className="flex bg-gray-100 rounded-full p-1 text-xs">
                {["1M", "3M", "6M", "1Y", "3Y", "5Y"].map((period) => (
                  <button
                    key={period}
                    className={`px-3 py-1 rounded-full ${
                      timeRange === period 
                        ? "bg-app-primary-green text-white" 
                        : "text-gray-600"
                    }`}
                    onClick={() => setTimeRange(period)}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="h-48 flex items-center justify-center bg-gray-50 rounded-lg mb-4">
              <LineChart className="h-24 w-24 text-gray-300" />
              <span className="text-sm text-gray-500 ml-2">Chart Placeholder</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">NAV</span>
                <span className="font-medium">₹{fundDetails.nav}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">NAV Date</span>
                <span className="font-medium">{fundDetails.navDate}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="performance" className="mb-4">
          <TabsList className="w-full bg-gray-100 p-1 rounded-lg">
            <TabsTrigger value="performance" className="rounded-md flex-1">Performance</TabsTrigger>
            <TabsTrigger value="overview" className="rounded-md flex-1">Overview</TabsTrigger>
            <TabsTrigger value="portfolio" className="rounded-md flex-1">Portfolio</TabsTrigger>
          </TabsList>
          
          <TabsContent value="performance" className="mt-4">
            <Card className="border-0 shadow-sm mb-4">
              <CardContent className="p-4">
                <h3 className="font-medium text-app-gray-900 mb-4">Returns Comparison</h3>
                
                <div className="space-y-4">
                  {fundDetails.performances.map((item) => (
                    <div key={item.period} className="flex items-center">
                      <div className="w-12 text-sm font-medium">{item.period}</div>
                      <div className="flex-1 px-3">
                        <div className="flex items-center mb-1">
                          <div className="w-24 text-xs text-gray-500">Fund</div>
                          <div className="flex-1 bg-gray-100 h-4 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${item.returns >= 0 ? 'bg-green-500' : 'bg-red-500'}`}
                              style={{ width: `${Math.min(Math.abs(item.returns) * 3, 100)}%` }}
                            ></div>
                          </div>
                          <div className={`w-20 text-right text-xs font-medium ${item.returns >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {item.returns.toFixed(2)}%
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-24 text-xs text-gray-500">Benchmark</div>
                          <div className="flex-1 bg-gray-100 h-4 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${item.benchmarkReturns >= 0 ? 'bg-blue-500' : 'bg-red-500'}`}
                              style={{ width: `${Math.min(Math.abs(item.benchmarkReturns) * 3, 100)}%` }}
                            ></div>
                          </div>
                          <div className={`w-20 text-right text-xs font-medium ${item.benchmarkReturns >= 0 ? 'text-blue-500' : 'text-red-500'}`}>
                            {item.benchmarkReturns.toFixed(2)}%
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="overview" className="mt-4">
            <Card className="border-0 shadow-sm mb-4">
              <CardContent className="p-4">
                <h3 className="font-medium text-app-gray-900 mb-4">Fund Overview</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Fund Category</span>
                    <span className="font-medium">{fundDetails.category}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Fund Manager</span>
                    <span className="font-medium">{fundDetails.fundManager}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Fund Size (AUM)</span>
                    <span className="font-medium">{fundDetails.aum}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Expense Ratio</span>
                    <span className="font-medium">{fundDetails.expenseRatio}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Exit Load</span>
                    <span className="font-medium">{fundDetails.exitLoad}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Benchmark</span>
                    <span className="font-medium">{fundDetails.benchmark}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Fund Start Date</span>
                    <span className="font-medium">{fundDetails.fundStartDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="portfolio" className="mt-4">
            <Card className="border-0 shadow-sm mb-4">
              <CardContent className="p-4">
                <h3 className="font-medium text-app-gray-900 mb-4">Fund Portfolio</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Top Holdings</h4>
                    <div className="space-y-2">
                      {["HDFC Bank", "ICICI Bank", "Reliance Industries", "Infosys", "TCS"].map((stock, index) => (
                        <div key={stock} className="flex justify-between items-center text-sm">
                          <span className="text-gray-700">{stock}</span>
                          <span className="font-medium">{(10 - index * 0.9).toFixed(2)}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Sector Allocation</h4>
                    <div className="space-y-2">
                      {["Financial Services", "IT", "Oil & Gas", "Consumer Goods", "Automobile"].map((sector, index) => (
                        <div key={sector} className="flex justify-between items-center text-sm">
                          <span className="text-gray-700">{sector}</span>
                          <span className="font-medium">{(25 - index * 3).toFixed(2)}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <Card className="border-0 shadow-sm mb-4">
          <CardContent className="p-4">
            <h3 className="font-medium text-app-gray-900 mb-4">SIP Details</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">SIP Amount</span>
                <span className="font-medium">₹{fundDetails.sipDetails.amount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Start Date</span>
                <span className="font-medium">{fundDetails.sipDetails.startDate}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Next SIP Date</span>
                <span className="font-medium">{fundDetails.sipDetails.nextDate}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Status</span>
                <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                  {fundDetails.sipDetails.status}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 shadow-md max-w-lg mx-auto flex space-x-3">
        <Button 
          onClick={() => navigate(`/portfolio/redeem/${fundId}`)}
          variant="outline"
          className="flex-1 border-app-primary-green text-app-primary-green"
        >
          Redeem
        </Button>
        <Button 
          onClick={() => navigate(`/portfolio/manage-sip/${fundId}`)}
          className="flex-1 bg-app-primary-green text-white"
        >
          Manage SIP
        </Button>
      </div>
    </div>
  );
};

export default FundDetail;
