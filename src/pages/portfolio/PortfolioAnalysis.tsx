
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, PieChart, TrendingUp, BarChart3, Info, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PortfolioAnalysis = () => {
  const navigate = useNavigate();
  const [timeframe, setTimeframe] = useState("1Y");
  
  // Mock data for portfolio analysis
  const portfolioData = {
    totalValue: 125750.75,
    totalInvestment: 100000,
    returns: {
      absolute: 25.75,
      annualized: 12.4,
    },
    allocationData: [
      { name: "Large Cap", value: 45, color: "#2C5CF6" },
      { name: "Mid Cap", value: 25, color: "#00D09C" },
      { name: "Small Cap", value: 15, color: "#8250DF" },
      { name: "Debt", value: 10, color: "#FFB547" },
      { name: "Gold", value: 5, color: "#FF6B6B" },
    ],
    sectorData: [
      { name: "Financial Services", value: 28, color: "#2C5CF6" },
      { name: "IT", value: 18, color: "#00D09C" },
      { name: "Consumer Goods", value: 15, color: "#8250DF" },
      { name: "Healthcare", value: 12, color: "#FFB547" },
      { name: "Automobile", value: 10, color: "#FF6B6B" },
      { name: "Others", value: 17, color: "#C8ADFF" },
    ],
    performanceData: [
      { month: "Jan", returns: 1.2 },
      { month: "Feb", returns: -0.8 },
      { month: "Mar", returns: 2.5 },
      { month: "Apr", returns: 1.8 },
      { month: "May", returns: -1.2 },
      { month: "Jun", returns: 3.2 },
      { month: "Jul", returns: 0.9 },
      { month: "Aug", returns: 1.5 },
      { month: "Sep", returns: 2.1 },
      { month: "Oct", returns: -0.5 },
      { month: "Nov", returns: 1.7 },
      { month: "Dec", returns: 2.2 },
    ],
  };

  const getBarColor = (returns: number) => {
    return returns >= 0 ? "#00D09C" : "#FF6B6B";
  };

  const CustomBarTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 rounded shadow-md">
          <p className="font-medium">{`${payload[0].payload.month}`}</p>
          <p className={`text-sm ${payload[0].value >= 0 ? "text-app-primary-green" : "text-red-500"}`}>
            {`${payload[0].value}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomPieTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 rounded shadow-md">
          <p className="font-medium">{`${payload[0].name}`}</p>
          <p className="text-sm">{`${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-app-gray-50 pb-20">
      <div className="sticky top-0 bg-white z-10 shadow-sm">
        <div className="flex items-center p-4">
          <button onClick={() => navigate("/portfolio")} className="mr-3">
            <ArrowLeft className="h-5 w-5 text-app-gray-900" />
          </button>
          <h1 className="text-xl font-semibold text-app-gray-900">Portfolio Analysis</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-app-gray-900/70">Portfolio Value</p>
                <h2 className="text-2xl font-bold">₹{portfolioData.totalValue.toLocaleString()}</h2>
              </div>
              <div className="text-right">
                <p className="text-sm text-app-gray-900/70">Total Investment</p>
                <p className="text-lg font-medium">₹{portfolioData.totalInvestment.toLocaleString()}</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center py-2 px-4 bg-app-light-green rounded-lg">
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-app-primary-green mr-2" />
                <span className="font-medium">Returns</span>
              </div>
              <div className="text-right">
                <p className="font-bold text-app-primary-green">
                  {portfolioData.returns.absolute}%
                </p>
                <p className="text-xs text-app-gray-900/70">
                  ({portfolioData.returns.annualized}% XIRR)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end mb-2">
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1M">1M</SelectItem>
              <SelectItem value="3M">3M</SelectItem>
              <SelectItem value="6M">6M</SelectItem>
              <SelectItem value="1Y">1Y</SelectItem>
              <SelectItem value="3Y">3Y</SelectItem>
              <SelectItem value="5Y">5Y</SelectItem>
              <SelectItem value="All">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Tabs defaultValue="allocation" className="w-full">
          <TabsList className="w-full grid grid-cols-3 bg-app-gray-100 p-1">
            <TabsTrigger value="allocation" className="rounded-md">
              <PieChart className="h-4 w-4 mr-1" />
              Allocation
            </TabsTrigger>
            <TabsTrigger value="sectors" className="rounded-md">
              <BarChart3 className="h-4 w-4 mr-1" />
              Sectors
            </TabsTrigger>
            <TabsTrigger value="performance" className="rounded-md">
              <TrendingUp className="h-4 w-4 mr-1" />
              Performance
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="allocation" className="mt-4">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium">Asset Allocation</h3>
                  <Info className="h-4 w-4 text-app-gray-900/50" />
                </div>
                
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={portfolioData.allocationData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {portfolioData.allocationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <RechartsTooltip content={<CustomPieTooltip />} />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {portfolioData.allocationData.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm">{item.name} ({item.value}%)</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="sectors" className="mt-4">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium">Sector Breakdown</h3>
                  <Info className="h-4 w-4 text-app-gray-900/50" />
                </div>
                
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={portfolioData.sectorData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {portfolioData.sectorData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <RechartsTooltip content={<CustomPieTooltip />} />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {portfolioData.sectorData.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm">{item.name} ({item.value}%)</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="performance" className="mt-4">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium">Monthly Performance</h3>
                  <Info className="h-4 w-4 text-app-gray-900/50" />
                </div>
                
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={portfolioData.performanceData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                      <YAxis 
                        tick={{ fontSize: 12 }} 
                        tickFormatter={(value) => `${value}%`}
                        domain={[-4, 4]}
                      />
                      <Tooltip content={<CustomBarTooltip />} />
                      <Bar 
                        dataKey="returns" 
                        radius={[4, 4, 0, 0]}
                        barSize={20}
                      >
                        {portfolioData.performanceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={getBarColor(entry.returns)} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="flex items-center justify-center mt-4 p-3 bg-app-light-blue rounded-lg">
                  <AlertCircle className="h-4 w-4 text-app-primary-blue mr-2" />
                  <span className="text-sm text-app-gray-900">
                    Past performance is not indicative of future results
                  </span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PortfolioAnalysis;
