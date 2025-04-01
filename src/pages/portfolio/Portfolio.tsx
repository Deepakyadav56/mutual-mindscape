
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  // Mock data for portfolio investments
  const investments = [
    {
      id: 1,
      name: "HDFC Mid-Cap Opportunities",
      category: "Equity",
      invested: 25000,
      currentValue: 28750,
      units: 152.31,
      returns: 15.0,
      nav: 188.76,
      sipActive: true,
      sipAmount: 5000,
    },
    {
      id: 2,
      name: "Axis Long Term Equity Fund",
      category: "ELSS",
      invested: 50000,
      currentValue: 57250,
      units: 210.45,
      returns: 14.5,
      nav: 272.04,
      sipActive: true,
      sipAmount: 8000,
    },
    {
      id: 3,
      name: "ICICI Prudential Liquid Fund",
      category: "Debt",
      invested: 30000,
      currentValue: 31950,
      units: 93.27,
      returns: 6.5,
      nav: 342.55,
      sipActive: false,
      sipAmount: 0,
    },
  ];

  // Calculate totals
  const totalInvested = investments.reduce((sum, item) => sum + item.invested, 0);
  const totalValue = investments.reduce((sum, item) => sum + item.currentValue, 0);
  const totalReturns = totalValue - totalInvested;
  const totalReturnsPercentage = (totalReturns / totalInvested) * 100;

  return (
    <div className="pb-20">
      <h1 className="text-2xl font-bold text-finance-primary mb-6">Your Portfolio</h1>
      
      <Card className="mb-6 bg-gradient-to-r from-finance-primary to-finance-dark border-0">
        <CardContent className="py-6">
          <div className="text-white">
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-sm font-medium opacity-80">Current Value</p>
                <h2 className="text-2xl font-bold">₹{totalValue.toLocaleString('en-IN')}</h2>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium opacity-80">Total Invested</p>
                <h2 className="text-2xl font-bold">₹{totalInvested.toLocaleString('en-IN')}</h2>
              </div>
            </div>
            
            <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
              <div>
                <p className="text-xs opacity-80">Returns</p>
                <p className="text-lg font-medium">₹{totalReturns.toLocaleString('en-IN')}</p>
              </div>
              <div className="text-right">
                <p className="text-xs opacity-80">Returns %</p>
                <p className={`text-lg font-medium ${totalReturnsPercentage >= 0 ? 'text-green-300' : 'text-red-300'}`}>
                  {totalReturnsPercentage >= 0 ? '+' : ''}{totalReturnsPercentage.toFixed(2)}%
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="w-full mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="equity">Equity</TabsTrigger>
          <TabsTrigger value="debt">Debt</TabsTrigger>
          <TabsTrigger value="elss">ELSS</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="space-y-4">
            {investments.map((investment) => (
              <Card key={investment.id} className="finance-card overflow-hidden">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-finance-primary">{investment.name}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
                    {investment.category}
                  </span>
                </div>
                
                <div className="flex justify-between mb-3">
                  <div>
                    <p className="text-xs text-finance-muted">Current Value</p>
                    <p className="font-medium">₹{investment.currentValue.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-finance-muted">Invested</p>
                    <p className="font-medium">₹{investment.invested.toLocaleString('en-IN')}</p>
                  </div>
                </div>
                
                <div className="flex justify-between mb-2">
                  <div>
                    <p className="text-xs text-finance-muted">Units</p>
                    <p className="font-medium">{investment.units}</p>
                  </div>
                  <div>
                    <p className="text-xs text-finance-muted">NAV</p>
                    <p className="font-medium">₹{investment.nav}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-finance-muted">Returns</p>
                    <p className={`font-medium ${investment.returns >= 0 ? 'text-finance-success' : 'text-finance-danger'}`}>
                      {investment.returns >= 0 ? '+' : ''}{investment.returns}%
                    </p>
                  </div>
                </div>
                
                {investment.sipActive && (
                  <div className="bg-gray-50 -mx-4 -mb-4 mt-3 px-4 py-2 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-finance-success rounded-full mr-2"></div>
                        <p className="text-xs">SIP Active</p>
                      </div>
                      <p className="text-xs font-medium">₹{investment.sipAmount.toLocaleString('en-IN')}/month</p>
                    </div>
                  </div>
                )}
                
                <div className={`absolute top-0 left-0 w-1 h-full ${
                  investment.category === "Equity" ? "bg-finance-accent" :
                  investment.category === "Debt" ? "bg-finance-success" :
                  "bg-finance-warning"
                }`}></div>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="equity">
          <div className="space-y-4">
            {investments
              .filter((investment) => investment.category === "Equity")
              .map((investment) => (
                <Card key={investment.id} className="finance-card overflow-hidden">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-finance-primary">{investment.name}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
                      {investment.category}
                    </span>
                  </div>
                  
                  <div className="flex justify-between mb-3">
                    <div>
                      <p className="text-xs text-finance-muted">Current Value</p>
                      <p className="font-medium">₹{investment.currentValue.toLocaleString('en-IN')}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-finance-muted">Invested</p>
                      <p className="font-medium">₹{investment.invested.toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <div>
                      <p className="text-xs text-finance-muted">Returns</p>
                      <p className={`font-medium ${investment.returns >= 0 ? 'text-finance-success' : 'text-finance-danger'}`}>
                        {investment.returns >= 0 ? '+' : ''}{investment.returns}%
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 left-0 w-1 h-full bg-finance-accent"></div>
                </Card>
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="debt">
          <div className="space-y-4">
            {investments
              .filter((investment) => investment.category === "Debt")
              .map((investment) => (
                <Card key={investment.id} className="finance-card overflow-hidden">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-finance-primary">{investment.name}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
                      {investment.category}
                    </span>
                  </div>
                  
                  <div className="flex justify-between mb-3">
                    <div>
                      <p className="text-xs text-finance-muted">Current Value</p>
                      <p className="font-medium">₹{investment.currentValue.toLocaleString('en-IN')}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-finance-muted">Invested</p>
                      <p className="font-medium">₹{investment.invested.toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <div>
                      <p className="text-xs text-finance-muted">Returns</p>
                      <p className={`font-medium ${investment.returns >= 0 ? 'text-finance-success' : 'text-finance-danger'}`}>
                        {investment.returns >= 0 ? '+' : ''}{investment.returns}%
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 left-0 w-1 h-full bg-finance-success"></div>
                </Card>
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="elss">
          <div className="space-y-4">
            {investments
              .filter((investment) => investment.category === "ELSS")
              .map((investment) => (
                <Card key={investment.id} className="finance-card overflow-hidden">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-finance-primary">{investment.name}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
                      {investment.category}
                    </span>
                  </div>
                  
                  <div className="flex justify-between mb-3">
                    <div>
                      <p className="text-xs text-finance-muted">Current Value</p>
                      <p className="font-medium">₹{investment.currentValue.toLocaleString('en-IN')}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-finance-muted">Invested</p>
                      <p className="font-medium">₹{investment.invested.toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <div>
                      <p className="text-xs text-finance-muted">Returns</p>
                      <p className={`font-medium ${investment.returns >= 0 ? 'text-finance-success' : 'text-finance-danger'}`}>
                        {investment.returns >= 0 ? '+' : ''}{investment.returns}%
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 left-0 w-1 h-full bg-finance-warning"></div>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Portfolio;
