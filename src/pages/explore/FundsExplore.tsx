
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Search, TrendingUp, Filter, ArrowUpRight, Star, BarChart2, PieChart, TrendingDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FundsExplore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Top Rated");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Mock data for funds with extended information
  const allFunds = [
    {
      id: 1,
      name: "HDFC Mid-Cap Opportunities",
      category: "Equity",
      riskLevel: "Moderate",
      returnPercentage: 15.8,
      returns: {
        "1Y": 15.8,
        "3Y": 22.4,
        "5Y": 18.6,
      },
      rating: 5,
      aum: "₹26,293 Cr",
      minInvestment: 500,
      expenseRatio: 1.75,
      fundManager: "Chirag Setalvad",
      established: "Jun 2007",
      isTopRated: true,
      tags: ["Top Performer", "Popular"],
    },
    {
      id: 2,
      name: "SBI Blue Chip Fund",
      category: "Equity",
      riskLevel: "Moderate",
      returnPercentage: 12.3,
      returns: {
        "1Y": 12.3,
        "3Y": 16.8,
        "5Y": 14.2,
      },
      rating: 4,
      aum: "₹30,123 Cr",
      minInvestment: 500,
      expenseRatio: 1.82,
      fundManager: "Sohini Andani",
      established: "Feb 2006",
      isPopular: true,
      tags: ["Popular", "Low Risk"],
    },
    {
      id: 3,
      name: "Axis Long Term Equity Fund",
      category: "ELSS",
      riskLevel: "Moderate to High",
      returnPercentage: 14.5,
      returns: {
        "1Y": 14.5,
        "3Y": 18.9,
        "5Y": 16.1,
      },
      rating: 4,
      aum: "₹29,675 Cr",
      minInvestment: 500,
      expenseRatio: 1.68,
      fundManager: "Jinesh Gopani",
      established: "Dec 2009",
      isTaxSaver: true,
      tags: ["Tax Saver", "Popular"],
    },
    {
      id: 4,
      name: "Kotak Emerging Equity Fund",
      category: "Equity",
      riskLevel: "High",
      returnPercentage: 16.2,
      returns: {
        "1Y": 16.2,
        "3Y": 24.1,
        "5Y": 19.5,
      },
      rating: 4,
      aum: "₹22,145 Cr",
      minInvestment: 1000,
      expenseRatio: 1.71,
      fundManager: "Pankaj Tibrewal",
      established: "Mar 2010",
      isHighReturns: true,
      tags: ["High Returns", "Trending"],
    },
    {
      id: 5,
      name: "ICICI Prudential Liquid Fund",
      category: "Debt",
      riskLevel: "Low",
      returnPercentage: 6.5,
      returns: {
        "1Y": 6.5,
        "3Y": 6.2,
        "5Y": 6.7,
      },
      rating: 5,
      aum: "₹41,368 Cr",
      minInvestment: 5000,
      expenseRatio: 0.55,
      fundManager: "Rahul Goswami",
      established: "Jan 1998",
      isLowRisk: true,
      tags: ["Low Risk", "High Safety"],
    },
    {
      id: 6,
      name: "Aditya Birla Sun Life Tax Relief 96",
      category: "ELSS",
      riskLevel: "Moderate to High",
      returnPercentage: 13.8,
      returns: {
        "1Y": 13.8,
        "3Y": 17.6,
        "5Y": 15.3,
      },
      rating: 4,
      aum: "₹14,987 Cr",
      minInvestment: 500,
      expenseRatio: 1.88,
      fundManager: "Satyabrata Mohanty",
      established: "Mar 1996",
      isTaxSaver: true,
      tags: ["Tax Saver"],
    },
    {
      id: 7,
      name: "Mirae Asset Large Cap Fund",
      category: "Equity",
      riskLevel: "Moderate",
      returnPercentage: 14.2,
      returns: {
        "1Y": 14.2,
        "3Y": 19.3,
        "5Y": 16.8,
      },
      rating: 5,
      aum: "₹28,754 Cr",
      minInvestment: 500,
      expenseRatio: 1.65,
      fundManager: "Neelesh Surana",
      established: "Apr 2008",
      isTopRated: true,
      tags: ["Top Performer", "Popular"],
    },
    {
      id: 8,
      name: "Parag Parikh Flexi Cap Fund",
      category: "Equity",
      riskLevel: "Moderate to High",
      returnPercentage: 19.5,
      returns: {
        "1Y": 19.5,
        "3Y": 26.2,
        "5Y": 21.4,
      },
      rating: 5,
      aum: "₹18,693 Cr",
      minInvestment: 1000,
      expenseRatio: 1.40,
      fundManager: "Rajeev Thakkar",
      established: "May 2013",
      isHighReturns: true,
      tags: ["High Returns", "Top Performer"],
    },
  ];

  // Filter based on search and selected category
  const filteredFunds = allFunds.filter((fund) =>
    fund.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    fund.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Categories for tabs
  const categories = [
    { id: "all", name: "All" },
    { id: "equity", name: "Equity" },
    { id: "debt", name: "Debt" },
    { id: "elss", name: "ELSS" },
    { id: "hybrid", name: "Hybrid" },
  ];

  // Filter options
  const filterOptions = [
    { id: "topRated", name: "Top Rated", icon: <Star className="w-4 h-4" /> },
    { id: "highReturns", name: "High Returns", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "lowRisk", name: "Low Risk", icon: <TrendingDown className="w-4 h-4" /> },
    { id: "popular", name: "Popular", icon: <BarChart2 className="w-4 h-4" /> },
  ];

  const renderRatingStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={i < rating ? "#FFB74D" : "none"}
            stroke={i < rating ? "#FFB74D" : "currentColor"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3 h-3 mr-0.5"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
    );
  };

  const handleFundClick = (fundId: number) => {
    navigate(`/funds/${fundId}`);
  };
  
  const handleInvest = (e: React.MouseEvent, fundId: number) => {
    e.stopPropagation();
    toast({
      title: "Investment Started",
      description: "Preparing your investment details",
      variant: "default"
    });
    navigate(`/invest/${fundId}`);
  };

  const renderFundCard = (fund: any) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        key={fund.id}
      >
        <Card 
          key={fund.id} 
          className="card-modern border-0 hover:border-app-primary-blue/20 transition-all duration-200 cursor-pointer overflow-hidden"
          onClick={() => handleFundClick(fund.id)}
        >
          <CardContent className="p-5">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-app-gray-900">{fund.name}</h3>
                <p className="text-sm text-app-gray-900/70">{fund.category}</p>
              </div>
              <Badge variant={
                fund.riskLevel === "Low" ? "success" :
                fund.riskLevel === "Moderate" ? "outline" :
                "secondary"
              }
              className={
                fund.riskLevel === "Low" ? "bg-green-100 text-green-800 hover:bg-green-200" :
                fund.riskLevel === "Moderate" ? "bg-blue-100 text-blue-800 hover:bg-blue-200" :
                "bg-orange-100 text-orange-800 hover:bg-orange-200"
              }
              >
                {fund.riskLevel}
              </Badge>
            </div>
            
            <div className="flex justify-between items-center text-sm mb-3 mt-4">
              <div className="flex flex-col">
                <span className="text-xs text-app-gray-900/60">AUM</span>
                <span className="font-medium">{fund.aum}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-app-gray-900/60">Expense Ratio</span>
                <span className="font-medium">{fund.expenseRatio}%</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs text-app-gray-900/60">Min. Investment</span>
                <span className="font-medium">₹{fund.minInvestment}</span>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-3 mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-app-gray-900/60 mb-1">1Y Returns</p>
                  <p className="text-green-600 font-semibold text-lg">{fund.returnPercentage}%</p>
                </div>
                <div>
                  <p className="text-xs text-app-gray-900/60 mb-1">3Y Returns</p>
                  <p className="text-green-600 font-semibold text-lg">{fund.returns["3Y"]}%</p>
                </div>
                <div>
                  <p className="text-xs text-app-gray-900/60 mb-1">Rating</p>
                  {renderRatingStars(fund.rating)}
                </div>
              </div>
            </div>
            
            <div className="flex gap-2 mt-3">
              {fund.tags.map((tag: string, index: number) => (
                <Badge key={index} variant="outline" className="bg-app-light-blue text-app-primary-blue border-0">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="flex space-x-3 mt-4">
              <Button 
                className="bg-app-primary-blue hover:bg-app-primary-blue/90 text-white flex-1 shadow-sm rounded-xl"
                onClick={(e) => handleInvest(e, fund.id)}
              >
                Invest Now
              </Button>
              <Button 
                className="bg-transparent border border-app-primary-blue text-app-primary-blue hover:bg-app-primary-blue/5 flex-1 rounded-xl"
                onClick={(e) => {
                  e.stopPropagation();
                  handleFundClick(fund.id);
                }}
              >
                Details <ArrowUpRight className="ml-1 w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="pb-24">
      {/* Header with search */}
      <div className="sticky top-0 bg-white z-10 pt-2 pb-3 px-1">
        <h1 className="text-2xl font-bold text-app-gray-900 mb-4">Explore Funds</h1>
        
        <div className="mb-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search by fund name or category"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10 input-modern pl-10 py-3 font-medium"
            />
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
      
      {/* Category tabs */}
      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="w-full flex overflow-x-auto space-x-2 pb-2 no-scrollbar bg-transparent">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="px-4 py-2 rounded-full flex-shrink-0 data-[state=active]:bg-app-primary-blue data-[state=active]:text-white"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {/* Filters */}
        <div className="mb-6 mt-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
            {filterOptions.map((filter) => (
              <Button
                key={filter.id}
                variant="outline"
                className={`rounded-full flex items-center gap-2 flex-shrink-0 border ${
                  selectedFilter === filter.name 
                    ? "bg-app-primary-blue text-white border-app-primary-blue" 
                    : "bg-app-light-blue text-app-primary-blue border-0"
                }`}
                onClick={() => setSelectedFilter(filter.name)}
              >
                {filter.icon}
                {filter.name}
              </Button>
            ))}
            <Button 
              variant="outline" 
              className="rounded-full flex items-center gap-2 flex-shrink-0 bg-app-light-blue text-app-primary-blue border-0"
            >
              <Filter className="w-4 h-4" /> More
            </Button>
          </div>
        </div>
        
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-2">
            {isLoading ? (
              // Skeleton loading state
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="border-0 shadow-sm">
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-2/3">
                          <div className="h-5 bg-gray-200 rounded-md animate-pulse mb-2 w-full"></div>
                          <div className="h-4 bg-gray-200 rounded-md animate-pulse w-1/2"></div>
                        </div>
                        <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
                      </div>
                      
                      <div className="flex justify-between items-center mb-4">
                        <div className="h-10 w-20 bg-gray-200 rounded-md animate-pulse"></div>
                        <div className="h-10 w-20 bg-gray-200 rounded-md animate-pulse"></div>
                        <div className="h-10 w-20 bg-gray-200 rounded-md animate-pulse"></div>
                      </div>
                      
                      <div className="flex gap-3 mt-6">
                        <div className="h-10 bg-gray-200 rounded-xl animate-pulse w-1/2"></div>
                        <div className="h-10 bg-gray-200 rounded-xl animate-pulse w-1/2"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              category.id === "all" ? (
                filteredFunds.length > 0 ? (
                  <motion.div 
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {filteredFunds.map((fund) => (
                      <motion.div key={fund.id} variants={itemVariants}>
                        {renderFundCard(fund)}
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-xl shadow-sm">
                    <Search className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                    <p className="text-app-gray-900 font-medium mb-2">No funds found</p>
                    <p className="text-app-gray-900/70 text-sm">Try adjusting your search or filters</p>
                  </div>
                )
              ) : (
                <div className="text-center py-12 bg-white rounded-xl shadow-sm">
                  <PieChart className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                  <p className="text-app-gray-900 font-medium mb-2">{category.name} funds</p>
                  <p className="text-app-gray-900/70 text-sm">Coming soon...</p>
                </div>
              )
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default FundsExplore;
