
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { 
  ChevronRight, 
  Filter, 
  ArrowDown, 
  ArrowUp, 
  CalendarIcon 
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";

const Transactions = () => {
  const navigate = useNavigate();
  const [dateFilter, setDateFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  
  // Mock data for transactions
  const transactions = [
    {
      id: 1,
      type: "purchase",
      fundName: "HDFC Mid-Cap Opportunities",
      amount: 5000,
      units: 26.489,
      date: "Jun 15, 2023",
      status: "completed",
      transactionType: "SIP",
    },
    {
      id: 2,
      type: "purchase",
      fundName: "Axis Long Term Equity Fund",
      amount: 8000,
      units: 29.407,
      date: "Jun 10, 2023",
      status: "completed",
      transactionType: "SIP",
    },
    {
      id: 3,
      type: "purchase",
      fundName: "Aditya Birla Sun Life Tax Relief 96",
      amount: 25000,
      units: 105.738,
      date: "May 21, 2023",
      status: "completed",
      transactionType: "One-time",
    },
    {
      id: 4,
      type: "redemption",
      fundName: "ICICI Prudential Liquid Fund",
      amount: 10000,
      units: 29.193,
      date: "May 15, 2023",
      status: "completed",
      transactionType: "Withdrawal",
    },
    {
      id: 5,
      type: "purchase",
      fundName: "HDFC Mid-Cap Opportunities",
      amount: 5000,
      units: 26.882,
      date: "May 15, 2023",
      status: "completed",
      transactionType: "SIP",
    },
    {
      id: 6,
      type: "purchase",
      fundName: "Axis Long Term Equity Fund",
      amount: 8000,
      units: 29.925,
      date: "May 10, 2023",
      status: "completed",
      transactionType: "SIP",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
            Completed
          </span>
        );
      case "pending":
        return (
          <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
            Pending
          </span>
        );
      case "failed":
        return (
          <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">
            Failed
          </span>
        );
      default:
        return null;
    }
  };

  const getTypeIcon = (type: string) => {
    if (type === "purchase") {
      return (
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
          <ArrowDown className="w-5 h-5 text-green-600" />
        </div>
      );
    } else {
      return (
        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
          <ArrowUp className="w-5 h-5 text-red-600" />
        </div>
      );
    }
  };
  
  const handleManageSIP = (fundId: number) => {
    navigate(`/portfolio/manage-sip/${fundId}`);
  };
  
  const handleRedeemFund = (fundId: number) => {
    navigate(`/portfolio/redeem/${fundId}`);
  };
  
  const getFilteredTransactions = () => {
    let filtered = [...transactions];
    
    // Filter by type
    if (typeFilter !== "all") {
      filtered = filtered.filter(t => t.type === typeFilter);
    }
    
    // Filter by date
    if (dateFilter === "last30") {
      // Mock implementation - in real app would use actual date comparison
      filtered = filtered.filter(t => t.date.includes("Jun") || t.date.includes("May"));
    } else if (dateFilter === "last90") {
      // Include all for demo
      filtered = filtered;
    }
    
    return filtered;
  };
  
  const getSIPsByFund = () => {
    // Group SIP transactions by fund name
    const sips = transactions.filter(t => t.transactionType === "SIP");
    const fundMap = new Map();
    
    sips.forEach(sip => {
      if (!fundMap.has(sip.fundName)) {
        fundMap.set(sip.fundName, {
          id: sip.id,
          fundName: sip.fundName,
          amount: sip.amount,
          lastDate: sip.date,
          transactions: [sip]
        });
      } else {
        const fund = fundMap.get(sip.fundName);
        fund.transactions.push(sip);
      }
    });
    
    return Array.from(fundMap.values());
  };

  return (
    <div className="pb-20 bg-gray-50">
      <div className="bg-white p-4 sticky top-0 z-10 border-b">
        <h1 className="text-xl font-bold text-gray-800 mb-1">Transactions</h1>
        <p className="text-sm text-gray-500">View and manage your investment activity</p>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1 text-gray-600 border-gray-300"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={14} />
            Filters
          </Button>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-1 text-gray-600 border-gray-300"
              >
                <CalendarIcon size={14} />
                {dateFilter === "all" ? "All Time" : 
                 dateFilter === "last30" ? "Last 30 Days" : "Last 90 Days"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-0">
              <div className="p-2">
                <div className="font-medium text-sm mb-2">Date Range</div>
                <div className="space-y-1">
                  <div 
                    className={`px-2 py-1.5 rounded text-sm cursor-pointer ${dateFilter === "all" ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"}`}
                    onClick={() => setDateFilter("all")}
                  >
                    All Time
                  </div>
                  <div 
                    className={`px-2 py-1.5 rounded text-sm cursor-pointer ${dateFilter === "last30" ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"}`}
                    onClick={() => setDateFilter("last30")}
                  >
                    Last 30 Days
                  </div>
                  <div 
                    className={`px-2 py-1.5 rounded text-sm cursor-pointer ${dateFilter === "last90" ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"}`}
                    onClick={() => setDateFilter("last90")}
                  >
                    Last 90 Days
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        
        {showFilters && (
          <div className="bg-white p-3 rounded-lg shadow-sm mb-4">
            <div className="text-sm font-medium mb-2">Transaction Type</div>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={typeFilter === "all" ? "default" : "outline"} 
                size="sm"
                onClick={() => setTypeFilter("all")}
                className={typeFilter === "all" ? "bg-blue-600" : ""}
              >
                All
              </Button>
              <Button 
                variant={typeFilter === "purchase" ? "default" : "outline"} 
                size="sm"
                onClick={() => setTypeFilter("purchase")}
                className={typeFilter === "purchase" ? "bg-blue-600" : ""}
              >
                Purchases
              </Button>
              <Button 
                variant={typeFilter === "redemption" ? "default" : "outline"} 
                size="sm"
                onClick={() => setTypeFilter("redemption")}
                className={typeFilter === "redemption" ? "bg-blue-600" : ""}
              >
                Redemptions
              </Button>
            </div>
          </div>
        )}
      
        <Tabs defaultValue="transactions" className="mb-6">
          <TabsList className="w-full bg-white rounded-lg p-1 mb-4">
            <TabsTrigger value="transactions" className="flex-1">Transactions</TabsTrigger>
            <TabsTrigger value="sips" className="flex-1">Your SIPs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="transactions">
            <div className="space-y-3">
              {getFilteredTransactions().map((transaction) => (
                <Card key={transaction.id} className="p-4 bg-white shadow-sm border-0">
                  <div className="flex">
                    {getTypeIcon(transaction.type)}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-medium text-gray-800">{transaction.fundName}</h3>
                        <div className="text-right">
                          <p className={`font-medium ${transaction.type === "purchase" ? "text-gray-800" : "text-red-600"}`}>
                            {transaction.type === "purchase" ? "-" : "+"} ₹{transaction.amount.toLocaleString('en-IN')}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-xs text-gray-500">{transaction.date} • {transaction.transactionType}</p>
                        <p className="text-xs text-gray-500">{transaction.units.toFixed(3)} units</p>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>{getStatusBadge(transaction.status)}</div>
                        
                        <div className="flex space-x-2">
                          {transaction.transactionType === "SIP" && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="text-xs text-blue-600 border-blue-200 h-7 px-2"
                              onClick={() => handleManageSIP(transaction.id)}
                            >
                              Manage SIP
                            </Button>
                          )}
                          
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-xs text-green-600 border-green-200 h-7 px-2"
                            onClick={() => handleRedeemFund(transaction.id)}
                          >
                            Redeem
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
              
              {getFilteredTransactions().length === 0 && (
                <div className="bg-white rounded-lg p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <CalendarIcon className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">No transactions found</h3>
                  <p className="text-gray-500 text-sm mb-4">
                    {typeFilter !== "all" 
                      ? `You don't have any ${typeFilter} transactions for the selected period.` 
                      : "You don't have any transactions for the selected period."}
                  </p>
                  <Button 
                    onClick={() => navigate("/explore")} 
                    className="bg-blue-600"
                  >
                    Explore Funds
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="sips">
            <div className="space-y-3">
              {getSIPsByFund().map((sip) => (
                <Card key={sip.id} className="p-4 bg-white shadow-sm border-0">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium text-gray-800">{sip.fundName}</h3>
                    <div className="text-right">
                      <p className="font-medium text-gray-800">₹{sip.amount.toLocaleString('en-IN')}/month</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-xs text-gray-500">Last installment: {sip.lastDate}</p>
                    <p className="text-xs text-gray-500">{sip.transactions.length} installments</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                      Active
                    </span>
                    
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        className="text-xs border-blue-200 text-blue-600 h-8"
                        onClick={() => handleManageSIP(sip.id)}
                      >
                        Manage SIP
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="text-xs border-green-200 text-green-600 h-8"
                        onClick={() => handleRedeemFund(sip.id)}
                      >
                        Redeem
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
              
              {getSIPsByFund().length === 0 && (
                <div className="bg-white rounded-lg p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <CalendarIcon className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">No active SIPs</h3>
                  <p className="text-gray-500 text-sm mb-4">
                    You don't have any active SIP investments at the moment.
                  </p>
                  <Button 
                    onClick={() => navigate("/explore")} 
                    className="bg-blue-600"
                  >
                    Start SIP Investment
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Transactions;
