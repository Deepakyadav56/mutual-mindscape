
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  TrendingDown, 
  PlusCircle, 
  Sliders, 
  Filter, 
  ChevronRight, 
  Eye, 
  EyeOff,
  BarChart3,
  PieChart,
  Search,
  Calendar,
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Portfolio = () => {
  const [timeRange, setTimeRange] = useState("1Y");
  const [showBalance, setShowBalance] = useState(true);
  const [filterCategory, setFilterCategory] = useState("all");
  
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
      logo: "https://groww.in/images/partners/HDFC_Groww.svg"
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
      logo: "https://groww.in/images/partners/Axis_Groww.svg"
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
      logo: "https://groww.in/images/partners/ICICI_Groww.svg"
    },
  ];

  // Calculate totals
  const totalInvested = investments.reduce((sum, item) => sum + item.invested, 0);
  const totalValue = investments.reduce((sum, item) => sum + item.currentValue, 0);
  const totalReturns = totalValue - totalInvested;
  const totalReturnsPercentage = (totalReturns / totalInvested) * 100;

  // Filter investments by category
  const filteredInvestments = filterCategory === "all" 
    ? investments 
    : investments.filter(inv => inv.category.toLowerCase() === filterCategory.toLowerCase());

  // Get active SIPs
  const activeSips = investments.filter(inv => inv.sipActive);
  const totalSipAmount = activeSips.reduce((sum, item) => sum + item.sipAmount, 0);

  // Mock data for graphical representation
  const assetAllocation = [
    { name: "Equity", value: 70, color: "#10b981" },
    { name: "Debt", value: 20, color: "#6366f1" },
    { name: "ELSS", value: 10, color: "#f59e0b" },
  ];

  return (
    <div className="pb-20">
      {/* Portfolio Summary Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-zinc-800">Your Portfolio</h1>
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setShowBalance(!showBalance)}
            className="text-zinc-600"
          >
            {showBalance ? <EyeOff size={16} /> : <Eye size={16} />}
          </Button>
          <Link to="/portfolio/analysis">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <BarChart3 size={16} />
              <span>Analysis</span>
            </Button>
          </Link>
        </div>
      </div>
      
      <Card className="mb-5 bg-gradient-to-r from-emerald-500 to-teal-500 border-0 shadow-md overflow-hidden">
        <CardContent className="py-6">
          <div className="text-white">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-sm font-medium opacity-80">Current Value</p>
                <h2 className="text-2xl md:text-3xl font-bold">
                  {showBalance ? `₹${totalValue.toLocaleString('en-IN')}` : '₹•••••'}
                </h2>
              </div>
              
              <div className="flex bg-white/20 rounded-full p-1">
                {["1M", "3M", "6M", "1Y", "All"].map((range) => (
                  <button
                    key={range}
                    className={`text-xs px-2 py-1 rounded-full ${
                      timeRange === range 
                        ? "bg-white text-emerald-600 font-medium" 
                        : "text-white hover:bg-white/10"
                    }`}
                    onClick={() => setTimeRange(range)}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <div className={`flex items-center text-sm ${totalReturnsPercentage >= 0 ? 'text-green-100' : 'text-red-100'}`}>
                {totalReturnsPercentage >= 0 ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
                {showBalance ? `${totalReturnsPercentage >= 0 ? '+' : ''}${totalReturnsPercentage.toFixed(2)}%` : '•••%'}
              </div>
              
              <div className="h-4 w-px bg-white/30 mx-1"></div>
              
              <div className={`text-sm ${totalReturnsPercentage >= 0 ? 'text-green-100' : 'text-red-100'}`}>
                {showBalance ? `${totalReturnsPercentage >= 0 ? '+' : ''}₹${totalReturns.toLocaleString('en-IN')}` : '₹•••••'}
              </div>
            </div>
            
            <div className="flex justify-between items-center py-3 px-4 bg-white/10 rounded-lg mb-4">
              <div>
                <p className="text-xs opacity-80">Invested</p>
                <p className="text-base font-medium">
                  {showBalance ? `₹${totalInvested.toLocaleString('en-IN')}` : '₹•••••'}
                </p>
              </div>
              
              <div className="h-8 w-px bg-white/20"></div>
              
              <div>
                <p className="text-xs opacity-80">Monthly SIP</p>
                <p className="text-base font-medium">
                  {showBalance ? `₹${totalSipAmount.toLocaleString('en-IN')}` : '₹•••••'}
                </p>
              </div>
              
              <div className="h-8 w-px bg-white/20"></div>
              
              <div>
                <p className="text-xs opacity-80">Next SIP</p>
                <p className="text-base font-medium">15 Jul</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <Button size="sm" variant="outline" className="bg-white/10 border-0 text-white hover:bg-white/20">
                <PieChart size={16} className="mr-1" /> Asset Allocation
              </Button>
              
              <Link to="/explore">
                <Button size="sm" variant="outline" className="bg-white/10 border-0 text-white hover:bg-white/20">
                  <PlusCircle size={16} className="mr-1" /> Invest More
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Quick Links */}
      <div className="grid grid-cols-4 gap-3 mb-5">
        <Link to="/portfolio/manage-sip" className="flex flex-col items-center justify-center p-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition-colors">
          <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-1">
            <Calendar size={16} />
          </div>
          <span className="text-xs text-gray-700 font-medium">SIPs</span>
        </Link>
        
        <Link to="/portfolio/analysis" className="flex flex-col items-center justify-center p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors">
          <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-1">
            <BarChart3 size={16} />
          </div>
          <span className="text-xs text-gray-700 font-medium">Analysis</span>
        </Link>
        
        <Link to="/transactions" className="flex flex-col items-center justify-center p-3 rounded-xl bg-amber-50 hover:bg-amber-100 transition-colors">
          <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-1">
            <Clock size={16} />
          </div>
          <span className="text-xs text-gray-700 font-medium">History</span>
        </Link>
        
        <Link to="/explore/tax-saver-funds" className="flex flex-col items-center justify-center p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-1">
            <Search size={16} />
          </div>
          <span className="text-xs text-gray-700 font-medium">Explore</span>
        </Link>
      </div>
      
      {/* Portfolio Detail Tabs */}
      <Tabs defaultValue="all" className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <TabsList className="bg-gray-100 p-1">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="equity">Equity</TabsTrigger>
            <TabsTrigger value="debt">Debt</TabsTrigger>
            <TabsTrigger value="elss">ELSS</TabsTrigger>
            <TabsTrigger value="sip">SIPs</TabsTrigger>
          </TabsList>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-zinc-600">
              <Filter size={16} />
            </Button>
            <Button variant="ghost" size="sm" className="text-zinc-600">
              <Sliders size={16} />
            </Button>
          </div>
        </div>
        
        <div className="mb-4">
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-full md:w-40 text-sm">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="equity">Equity</SelectItem>
              <SelectItem value="debt">Debt</SelectItem>
              <SelectItem value="elss">ELSS</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <TabsContent value="all">
          <div className="space-y-4">
            {filteredInvestments.map((investment) => (
              <Card key={investment.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start">
                    <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      {investment.logo ? (
                        <img src={investment.logo} alt={investment.name} className="w-6 h-6" />
                      ) : (
                        <PieChart size={20} className="text-gray-500" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-zinc-800 line-clamp-1">{investment.name}</h3>
                        <Badge variant="outline" className={`text-xs ${
                          investment.category === "Equity" ? "text-green-600 bg-green-50" :
                          investment.category === "Debt" ? "text-blue-600 bg-blue-50" :
                          "text-amber-600 bg-amber-50"
                        }`}>
                          {investment.category}
                        </Badge>
                      </div>
                      
                      <div className="flex justify-between mb-3">
                        <div>
                          <p className="text-xs text-zinc-500">Current Value</p>
                          <p className="font-medium text-zinc-800">₹{investment.currentValue.toLocaleString('en-IN')}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-zinc-500">Invested</p>
                          <p className="font-medium text-zinc-800">₹{investment.invested.toLocaleString('en-IN')}</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-end">
                        <div className="flex items-center">
                          <p className="text-xs text-zinc-500 mr-2">Units: {investment.units}</p>
                          <p className="text-xs text-zinc-500">NAV: ₹{investment.nav}</p>
                        </div>
                        <div className="text-right">
                          <p className={`font-medium ${investment.returns >= 0 ? 'text-emerald-600' : 'text-red-600'} flex items-center`}>
                            {investment.returns >= 0 ? (
                              <ArrowUpRight size={14} className="mr-1" />
                            ) : (
                              <ArrowDownRight size={14} className="mr-1" />
                            )}
                            {investment.returns >= 0 ? '+' : ''}{investment.returns}%
                          </p>
                        </div>
                      </div>
                      
                      {investment.sipActive && (
                        <div className="bg-gray-50 -mx-4 -mb-4 mt-3 px-4 py-2 border-t border-gray-100">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                              <p className="text-xs text-zinc-700">SIP Active</p>
                            </div>
                            <div className="flex items-center">
                              <p className="text-xs font-medium text-zinc-800">₹{investment.sipAmount.toLocaleString('en-IN')}/month</p>
                              <ChevronRight size={14} className="ml-1 text-zinc-400" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {filteredInvestments.length === 0 && (
              <div className="text-center py-10">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-700 mb-1">No investments found</h3>
                <p className="text-sm text-gray-500 mb-4 max-w-xs mx-auto">
                  We couldn't find any investments in this category.
                </p>
                <Link to="/explore">
                  <Button>
                    <PlusCircle size={16} className="mr-2" />
                    Start Investing
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="equity">
          <div className="space-y-4">
            {investments
              .filter((investment) => investment.category === "Equity")
              .map((investment) => (
                <Card key={investment.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                        {investment.logo ? (
                          <img src={investment.logo} alt={investment.name} className="w-6 h-6" />
                        ) : (
                          <PieChart size={20} className="text-gray-500" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-zinc-800 line-clamp-1">{investment.name}</h3>
                          <Badge variant="outline" className="text-xs text-green-600 bg-green-50">
                            {investment.category}
                          </Badge>
                        </div>
                        
                        <div className="flex justify-between mb-3">
                          <div>
                            <p className="text-xs text-zinc-500">Current Value</p>
                            <p className="font-medium text-zinc-800">₹{investment.currentValue.toLocaleString('en-IN')}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-zinc-500">Invested</p>
                            <p className="font-medium text-zinc-800">₹{investment.invested.toLocaleString('en-IN')}</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-end">
                          <div className="flex items-center">
                            <p className="text-xs text-zinc-500 mr-2">Units: {investment.units}</p>
                            <p className="text-xs text-zinc-500">NAV: ₹{investment.nav}</p>
                          </div>
                          <div className="text-right">
                            <p className={`font-medium ${investment.returns >= 0 ? 'text-emerald-600' : 'text-red-600'} flex items-center`}>
                              {investment.returns >= 0 ? (
                                <ArrowUpRight size={14} className="mr-1" />
                              ) : (
                                <ArrowDownRight size={14} className="mr-1" />
                              )}
                              {investment.returns >= 0 ? '+' : ''}{investment.returns}%
                            </p>
                          </div>
                        </div>
                        
                        {investment.sipActive && (
                          <div className="bg-gray-50 -mx-4 -mb-4 mt-3 px-4 py-2 border-t border-gray-100">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                                <p className="text-xs text-zinc-700">SIP Active</p>
                              </div>
                              <div className="flex items-center">
                                <p className="text-xs font-medium text-zinc-800">₹{investment.sipAmount.toLocaleString('en-IN')}/month</p>
                                <ChevronRight size={14} className="ml-1 text-zinc-400" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
            {investments.filter(i => i.category === "Equity").length === 0 && (
              <div className="text-center py-10">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-700 mb-1">No equity investments</h3>
                <p className="text-sm text-gray-500 mb-4 max-w-xs mx-auto">
                  Start investing in equity mutual funds to diversify your portfolio.
                </p>
                <Link to="/explore">
                  <Button>
                    <PlusCircle size={16} className="mr-2" />
                    Explore Equity Funds
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="debt">
          <div className="space-y-4">
            {investments
              .filter((investment) => investment.category === "Debt")
              .map((investment) => (
                <Card key={investment.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                        {investment.logo ? (
                          <img src={investment.logo} alt={investment.name} className="w-6 h-6" />
                        ) : (
                          <PieChart size={20} className="text-gray-500" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-zinc-800 line-clamp-1">{investment.name}</h3>
                          <Badge variant="outline" className="text-xs text-blue-600 bg-blue-50">
                            {investment.category}
                          </Badge>
                        </div>
                        
                        <div className="flex justify-between mb-3">
                          <div>
                            <p className="text-xs text-zinc-500">Current Value</p>
                            <p className="font-medium text-zinc-800">₹{investment.currentValue.toLocaleString('en-IN')}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-zinc-500">Invested</p>
                            <p className="font-medium text-zinc-800">₹{investment.invested.toLocaleString('en-IN')}</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-end">
                          <div className="flex items-center">
                            <p className="text-xs text-zinc-500 mr-2">Units: {investment.units}</p>
                            <p className="text-xs text-zinc-500">NAV: ₹{investment.nav}</p>
                          </div>
                          <div className="text-right">
                            <p className={`font-medium ${investment.returns >= 0 ? 'text-emerald-600' : 'text-red-600'} flex items-center`}>
                              {investment.returns >= 0 ? (
                                <ArrowUpRight size={14} className="mr-1" />
                              ) : (
                                <ArrowDownRight size={14} className="mr-1" />
                              )}
                              {investment.returns >= 0 ? '+' : ''}{investment.returns}%
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
            {investments.filter(i => i.category === "Debt").length === 0 && (
              <div className="text-center py-10">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-700 mb-1">No debt investments</h3>
                <p className="text-sm text-gray-500 mb-4 max-w-xs mx-auto">
                  Debt funds can provide stability and regular income to your portfolio.
                </p>
                <Link to="/explore">
                  <Button>
                    <PlusCircle size={16} className="mr-2" />
                    Explore Debt Funds
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="elss">
          <div className="space-y-4">
            {investments
              .filter((investment) => investment.category === "ELSS")
              .map((investment) => (
                <Card key={investment.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                        {investment.logo ? (
                          <img src={investment.logo} alt={investment.name} className="w-6 h-6" />
                        ) : (
                          <PieChart size={20} className="text-gray-500" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-zinc-800 line-clamp-1">{investment.name}</h3>
                          <Badge variant="outline" className="text-xs text-amber-600 bg-amber-50">
                            {investment.category}
                          </Badge>
                        </div>
                        
                        <div className="flex justify-between mb-3">
                          <div>
                            <p className="text-xs text-zinc-500">Current Value</p>
                            <p className="font-medium text-zinc-800">₹{investment.currentValue.toLocaleString('en-IN')}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-zinc-500">Invested</p>
                            <p className="font-medium text-zinc-800">₹{investment.invested.toLocaleString('en-IN')}</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-end">
                          <div className="flex items-center">
                            <p className="text-xs text-zinc-500 mr-2">Units: {investment.units}</p>
                            <p className="text-xs text-zinc-500">NAV: ₹{investment.nav}</p>
                          </div>
                          <div className="text-right">
                            <p className={`font-medium ${investment.returns >= 0 ? 'text-emerald-600' : 'text-red-600'} flex items-center`}>
                              {investment.returns >= 0 ? (
                                <ArrowUpRight size={14} className="mr-1" />
                              ) : (
                                <ArrowDownRight size={14} className="mr-1" />
                              )}
                              {investment.returns >= 0 ? '+' : ''}{investment.returns}%
                            </p>
                          </div>
                        </div>
                        
                        {investment.sipActive && (
                          <div className="bg-gray-50 -mx-4 -mb-4 mt-3 px-4 py-2 border-t border-gray-100">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                                <p className="text-xs text-zinc-700">SIP Active</p>
                              </div>
                              <div className="flex items-center">
                                <p className="text-xs font-medium text-zinc-800">₹{investment.sipAmount.toLocaleString('en-IN')}/month</p>
                                <ChevronRight size={14} className="ml-1 text-zinc-400" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
            {investments.filter(i => i.category === "ELSS").length === 0 && (
              <div className="text-center py-10">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-700 mb-1">No ELSS investments</h3>
                <p className="text-sm text-gray-500 mb-4 max-w-xs mx-auto">
                  ELSS funds can help you save taxes under Section 80C while growing your money.
                </p>
                <Link to="/explore/tax-saver-funds">
                  <Button>
                    <PlusCircle size={16} className="mr-2" />
                    Explore ELSS Funds
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="sip">
          <div className="space-y-4">
            {activeSips.map((investment) => (
              <Card key={investment.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start">
                    <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      {investment.logo ? (
                        <img src={investment.logo} alt={investment.name} className="w-6 h-6" />
                      ) : (
                        <PieChart size={20} className="text-gray-500" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-zinc-800 line-clamp-1">{investment.name}</h3>
                        <Badge variant="outline" className={`text-xs ${
                          investment.category === "Equity" ? "text-green-600 bg-green-50" :
                          investment.category === "Debt" ? "text-blue-600 bg-blue-50" :
                          "text-amber-600 bg-amber-50"
                        }`}>
                          {investment.category}
                        </Badge>
                      </div>
                      
                      <div className="flex justify-between mb-2">
                        <div>
                          <p className="text-xs text-zinc-500">SIP Amount</p>
                          <p className="font-medium text-zinc-800">₹{investment.sipAmount.toLocaleString('en-IN')}/month</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-zinc-500">Next Date</p>
                          <p className="font-medium text-zinc-800">15 Jul, 2023</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between mb-2">
                        <div>
                          <p className="text-xs text-zinc-500">Current Value</p>
                          <p className="font-medium text-zinc-800">₹{investment.currentValue.toLocaleString('en-IN')}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-zinc-500">Total Invested</p>
                          <p className="font-medium text-zinc-800">₹{investment.invested.toLocaleString('en-IN')}</p>
                        </div>
                      </div>
                      
                      <div className="flex mt-3 pt-3 border-t border-gray-100">
                        <Link to={`/portfolio/manage-sip/${investment.id}`} className="mr-2">
                          <Button size="sm" variant="outline">
                            Modify SIP
                          </Button>
                        </Link>
                        <Link to={`/portfolio/redeem/${investment.id}`}>
                          <Button size="sm" variant="ghost" className="text-zinc-600">
                            Redeem
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
              
            {activeSips.length === 0 && (
              <div className="text-center py-10">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar size={24} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-700 mb-1">No active SIPs</h3>
                <p className="text-sm text-gray-500 mb-4 max-w-xs mx-auto">
                  Start a SIP to invest regularly and build wealth over time.
                </p>
                <Link to="/explore">
                  <Button>
                    <PlusCircle size={16} className="mr-2" />
                    Start SIP
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Floating Action Button for mobile */}
      <div className="fixed bottom-20 right-4 md:right-6 lg:hidden">
        <Link to="/explore">
          <Button size="icon" className="h-12 w-12 rounded-full shadow-lg bg-emerald-500 hover:bg-emerald-600">
            <PlusCircle size={20} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
