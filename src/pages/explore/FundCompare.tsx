
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  X, 
  Search, 
  ChevronRight, 
  AlertCircle, 
  TrendingUp, 
  TrendingDown,
  Plus
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FundCompare = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("returns");
  const [funds, setFunds] = useState([
    {
      id: "1",
      name: "HDFC Mid-Cap Opportunities Fund",
      category: "Equity - Mid Cap",
      returns: {
        "1Y": 18.45,
        "3Y": 12.34,
        "5Y": 15.67
      },
      nav: 98.75,
      navDate: "30 Aug 2023",
      riskLevel: "High",
      expenseRatio: "0.75%",
      aum: "₹32,540 Cr",
      rating: 4.5,
    },
    {
      id: "2",
      name: "Axis Small Cap Fund Direct Growth",
      category: "Equity - Small Cap",
      returns: {
        "1Y": 22.67,
        "3Y": 16.89,
        "5Y": 19.32
      },
      nav: 76.12,
      navDate: "30 Aug 2023",
      riskLevel: "Very High",
      expenseRatio: "0.68%",
      aum: "₹12,780 Cr",
      rating: 4.8,
    }
  ]);
  
  const handleRemoveFund = (fundId: string) => {
    setFunds(funds.filter(fund => fund.id !== fundId));
  };
  
  const addAnotherFund = () => {
    // In a real app, this would open a search/selection modal
    navigate("/explore/fund-selector?compare=true");
  };
  
  return (
    <div className="pb-20">
      <div className="sticky top-0 bg-white z-10 shadow-sm">
        <div className="flex items-center p-4 border-b">
          <button onClick={() => navigate(-1)} className="text-app-gray-900">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold text-app-gray-900 ml-4">
            Compare Funds
          </h1>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-4 grid grid-cols-2 gap-3">
          {funds.map((fund) => (
            <Card key={fund.id} className="border border-gray-200 relative">
              <button 
                className="absolute top-2 right-2 p-1 bg-gray-100 rounded-full"
                onClick={() => handleRemoveFund(fund.id)}
              >
                <X className="h-4 w-4 text-gray-500" />
              </button>
              <CardContent className="p-3">
                <h3 className="text-sm font-medium line-clamp-2 h-10 mb-1">{fund.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{fund.category}</p>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-600">1Y Return</span>
                  <span className="font-medium text-green-600">
                    {fund.returns["1Y"].toFixed(2)}%
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {funds.length < 3 && (
            <button 
              onClick={addAnotherFund}
              className="border border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center p-4 h-32"
            >
              <Plus className="h-8 w-8 text-gray-400 mb-2" />
              <span className="text-sm text-gray-600">Add Fund</span>
            </button>
          )}
        </div>
        
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-6">
          <TabsList className="w-full bg-gray-100 p-1 rounded-lg">
            <TabsTrigger value="returns" className="rounded-md flex-1 text-sm">Returns</TabsTrigger>
            <TabsTrigger value="details" className="rounded-md flex-1 text-sm">Fund Details</TabsTrigger>
            <TabsTrigger value="riskRatios" className="rounded-md flex-1 text-sm">Risk Ratios</TabsTrigger>
          </TabsList>
          
          <TabsContent value="returns" className="mt-4">
            <Card className="border-0 shadow-sm mb-4">
              <CardContent className="p-4">
                <h3 className="text-sm font-medium text-app-gray-900 mb-3">Returns Comparison</h3>
                
                {["1Y", "3Y", "5Y"].map((period) => (
                  <div key={period} className="mb-4">
                    <h4 className="text-xs font-medium mb-2">{period} Returns</h4>
                    <div className="space-y-3">
                      {funds.map((fund) => (
                        <div key={fund.id} className="flex items-center">
                          <div className="w-32 text-xs truncate">{fund.name.split(" ").slice(0, 2).join(" ")}</div>
                          <div className="flex-1 bg-gray-100 h-4 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${fund.returns[period as keyof typeof fund.returns] >= 0 ? 'bg-green-500' : 'bg-red-500'}`}
                              style={{ width: `${Math.min(Math.abs(fund.returns[period as keyof typeof fund.returns]), 50)}%` }}
                            ></div>
                          </div>
                          <div className={`w-16 text-right text-xs font-medium ${fund.returns[period as keyof typeof fund.returns] >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {fund.returns[period as keyof typeof fund.returns].toFixed(2)}%
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="details" className="mt-4">
            <Card className="border-0 shadow-sm mb-4">
              <CardContent className="p-4">
                <h3 className="text-sm font-medium text-app-gray-900 mb-3">Fund Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-medium mb-2">NAV</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {funds.map((fund) => (
                        <div key={fund.id} className="text-xs border rounded p-2">
                          <p className="truncate mb-1 text-gray-600">{fund.name.split(" ").slice(0, 2).join(" ")}</p>
                          <p className="font-medium">₹{fund.nav}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-medium mb-2">Category</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {funds.map((fund) => (
                        <div key={fund.id} className="text-xs border rounded p-2">
                          <p className="truncate mb-1 text-gray-600">{fund.name.split(" ").slice(0, 2).join(" ")}</p>
                          <p className="font-medium">{fund.category}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-medium mb-2">Risk Level</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {funds.map((fund) => (
                        <div key={fund.id} className="text-xs border rounded p-2">
                          <p className="truncate mb-1 text-gray-600">{fund.name.split(" ").slice(0, 2).join(" ")}</p>
                          <p className="font-medium">{fund.riskLevel}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-medium mb-2">Expense Ratio</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {funds.map((fund) => (
                        <div key={fund.id} className="text-xs border rounded p-2">
                          <p className="truncate mb-1 text-gray-600">{fund.name.split(" ").slice(0, 2).join(" ")}</p>
                          <p className="font-medium">{fund.expenseRatio}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-medium mb-2">AUM</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {funds.map((fund) => (
                        <div key={fund.id} className="text-xs border rounded p-2">
                          <p className="truncate mb-1 text-gray-600">{fund.name.split(" ").slice(0, 2).join(" ")}</p>
                          <p className="font-medium">{fund.aum}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="riskRatios" className="mt-4">
            <Card className="border-0 shadow-sm mb-4">
              <CardContent className="p-4 flex items-center justify-center text-center min-h-40">
                <div>
                  <AlertCircle className="h-10 w-10 text-gray-300 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Risk ratio details will be available soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 shadow-md max-w-lg mx-auto">
        <Button onClick={() => navigate(-1)} className="w-full bg-app-primary-green text-white">
          Done
        </Button>
      </div>
    </div>
  );
};

export default FundCompare;
