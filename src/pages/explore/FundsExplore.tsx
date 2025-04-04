import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Search,
  TrendingUp,
  Filter,
  ArrowUpRight,
  Star,
  BarChart2,
  PieChart,
  TrendingDown,
  ChevronDown,
  X,
  ChevronUp,
  ChevronLeft,
  SlidersHorizontal,
  Check,
  ChevronRight
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";

const FundsExplore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [showFilterSheet, setShowFilterSheet] = useState(false);
  const [sortBy, setSortBy] = useState("popular");
  const [filters, setFilters] = useState({
    categories: [],
    riskLevels: [],
    ratings: [],
    fundHouses: []
  });
  const [activeFilterTab, setActiveFilterTab] = useState("categories");
  const [indexOnly, setIndexOnly] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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
      fundHouse: "HDFC Mutual Fund",
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
      fundHouse: "SBI Mutual Fund",
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
      fundHouse: "Axis Mutual Fund",
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
      fundHouse: "Kotak Mutual Fund",
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
      fundHouse: "ICICI Prudential",
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
      rating: 3,
      aum: "₹14,987 Cr",
      minInvestment: 500,
      expenseRatio: 1.88,
      fundManager: "Satyabrata Mohanty",
      fundHouse: "Aditya Birla Sun Life",
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
      fundHouse: "Mirae Asset",
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
      fundHouse: "PPFAS",
      established: "May 2013",
      isHighReturns: true,
      tags: ["High Returns", "Top Performer"],
    },
  ];

  const categoryOptions = [...new Set(allFunds.map(fund => fund.category))];
  const riskLevelOptions = [...new Set(allFunds.map(fund => fund.riskLevel))];
  const fundHouseOptions = [...new Set(allFunds.map(fund => fund.fundHouse))];
  const ratingOptions = [5, 4, 3, 2, 1];

  const applyFilters = (fund) => {
    const categoriesFilter = filters.categories.length === 0 || filters.categories.includes(fund.category);
    const riskLevelsFilter = filters.riskLevels.length === 0 || filters.riskLevels.includes(fund.riskLevel);
    const ratingsFilter = filters.ratings.length === 0 || filters.ratings.includes(fund.rating);
    const fundHousesFilter = filters.fundHouses.length === 0 || filters.fundHouses.includes(fund.fundHouse);
    
    return categoriesFilter && riskLevelsFilter && ratingsFilter && fundHousesFilter;
  };

  const applySearch = (fund) => {
    return (
      fund.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fund.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fund.fundHouse.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  
  const applySorting = (a, b) => {
    switch (sortBy) {
      case "highReturns":
        return b.returnPercentage - a.returnPercentage;
      case "lowRisk":
        return (
          (a.riskLevel === "Low" ? 0 : a.riskLevel === "Moderate" ? 1 : 2) -
          (b.riskLevel === "Low" ? 0 : b.riskLevel === "Moderate" ? 1 : 2)
        );
      case "topRated":
        return b.rating - a.rating;
      case "popular":
      default:
        return 0; // Keep original order for popular
    }
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

  const filteredFunds = allFunds
    .filter(fund => applySearch(fund) && applyFilters(fund))
    .sort(applySorting);

  const handleFilterToggle = (type, value) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      if (newFilters[type].includes(value)) {
        newFilters[type] = newFilters[type].filter(item => item !== value);
      } else {
        newFilters[type] = [...newFilters[type], value];
      }
      return newFilters;
    });
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      riskLevels: [],
      ratings: [],
      fundHouses: []
    });
    setIndexOnly(false);
  };

  const categories = [
    { id: "all", name: "All" },
    { id: "equity", name: "Equity" },
    { id: "debt", name: "Debt" },
    { id: "elss", name: "ELSS" },
    { id: "hybrid", name: "Hybrid" },
  ];

  const filterOptions = [
    { id: "topRated", name: "Top Rated", icon: <Star className="w-4 h-4" /> },
    { id: "highReturns", name: "High Returns", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "lowRisk", name: "Low Risk", icon: <TrendingDown className="w-4 h-4" /> },
    { id: "popular", name: "Popular", icon: <BarChart2 className="w-4 h-4" /> },
  ];

  const sortOptions = [
    { id: "popular", name: "Popularity" },
    { id: "1yReturns", name: "1Y Returns" },
    { id: "3yReturns", name: "3Y Returns" },
    { id: "5yReturns", name: "5Y Returns" },
    { id: "rating", name: "Rating" },
  ];

  const getActiveFilterCount = () => {
    return filters.categories.length + filters.riskLevels.length + filters.ratings.length + filters.fundHouses.length + (indexOnly ? 1 : 0);
  };

  const renderRatingStars = (rating) => {
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

  const handleFundClick = (fundId) => {
    navigate(`/funds/${fundId}`);
  };
  
  const handleInvest = (e, fundId) => {
    e.stopPropagation();
    toast({
      title: "Investment Started",
      description: "Preparing your investment details",
      variant: "default"
    });
    navigate(`/invest/${fundId}`);
  };

  const renderFundCard = (fund) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        key={fund.id}
        whileHover={{ y: -3, transition: { duration: 0.2 } }}
      >
        <Card 
          key={fund.id} 
          className="overflow-hidden mb-4 border-0 border-b border-gray-200 shadow-none hover:bg-gray-50 transition-all duration-200 cursor-pointer"
          onClick={() => handleFundClick(fund.id)}
        >
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="h-12 w-12 bg-white rounded-md overflow-hidden flex-shrink-0 border border-gray-200 p-1">
                <img 
                  src={fund.logo || `https://ui-avatars.com/api/?name=${fund.fundHouse}&background=random`} 
                  alt={fund.fundHouse} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="flex-grow">
                <h3 className="font-medium text-gray-900 mb-1">{fund.name}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  {fund.category} • {renderRatingStars(fund.rating)}
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-app-primary-green font-bold text-lg">{fund.returnPercentage}%</div>
                <div className="text-gray-500 text-xs">3Y</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  const filterTabs = [
    { id: "sortBy", label: "Sort by" },
    { id: "categories", label: "Categories" },
    { id: "riskLevels", label: "Risk" },
    { id: "ratings", label: "Ratings" },
    { id: "fundHouses", label: "Fund House" },
  ];

  const renderFilterContent = () => {
    switch (activeFilterTab) {
      case "sortBy":
        return (
          <div className="space-y-4">
            {sortOptions.map(option => (
              <div key={option.id} className="flex items-center gap-3">
                <div 
                  className={`w-6 h-6 rounded-full border ${sortBy === option.id ? 'border-app-primary-green' : 'border-gray-300'} flex items-center justify-center`}
                  onClick={() => setSortBy(option.id)}
                >
                  {sortBy === option.id && (
                    <div className="w-4 h-4 rounded-full bg-app-primary-green"></div>
                  )}
                </div>
                <span className="text-gray-800">{option.name}</span>
              </div>
            ))}
          </div>
        );
      case "categories":
        return (
          <div className="space-y-4">
            <div className="rounded-2xl bg-gray-50 p-4 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Index Funds only</span>
                <Switch 
                  checked={indexOnly} 
                  onCheckedChange={setIndexOnly} 
                  className="data-[state=checked]:bg-app-primary-green"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              {categoryOptions.map(category => (
                <div key={category} className="flex items-center gap-3">
                  <Checkbox 
                    id={`category-${category}`} 
                    checked={filters.categories.includes(category)}
                    onCheckedChange={() => handleFilterToggle('categories', category)}
                    className="border-gray-300 data-[state=checked]:bg-app-primary-green data-[state=checked]:border-app-primary-green"
                  />
                  <label htmlFor={`category-${category}`} className="text-gray-800 flex items-center justify-between w-full">
                    <span>{category}</span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </label>
                </div>
              ))}
            </div>
          </div>
        );
      case "riskLevels":
        return (
          <div className="space-y-3">
            {riskLevelOptions.map(risk => (
              <div key={risk} className="flex items-center gap-3">
                <Checkbox 
                  id={`risk-${risk}`} 
                  checked={filters.riskLevels.includes(risk)}
                  onCheckedChange={() => handleFilterToggle('riskLevels', risk)}
                  className="border-gray-300 data-[state=checked]:bg-app-primary-green data-[state=checked]:border-app-primary-green"
                />
                <label htmlFor={`risk-${risk}`} className="text-gray-800">
                  {risk}
                </label>
              </div>
            ))}
          </div>
        );
      case "ratings":
        return (
          <div className="space-y-3">
            {ratingOptions.map(rating => (
              <div key={rating} className="flex items-center gap-3">
                <Checkbox 
                  id={`rating-${rating}`} 
                  checked={filters.ratings.includes(rating)}
                  onCheckedChange={() => handleFilterToggle('ratings', rating)}
                  className="border-gray-300 data-[state=checked]:bg-app-primary-green data-[state=checked]:border-app-primary-green"
                />
                <label htmlFor={`rating-${rating}`} className="text-gray-800 flex items-center">
                  {rating} <Star className="w-3 h-3 ml-1 text-amber-500 fill-amber-500" />
                  {rating === 5 ? "" : "+"}
                </label>
              </div>
            ))}
          </div>
        );
      case "fundHouses":
        return (
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search fund house" 
                className="pl-9 py-2 border-gray-200 rounded-xl"
              />
            </div>
            
            <div className="space-y-3 max-h-[60vh] overflow-y-auto">
              {fundHouseOptions.map(house => (
                <div key={house} className="flex items-center gap-3">
                  <Checkbox 
                    id={`house-${house}`} 
                    checked={filters.fundHouses.includes(house)}
                    onCheckedChange={() => handleFilterToggle('fundHouses', house)}
                    className="border-gray-300 data-[state=checked]:bg-app-primary-green data-[state=checked]:border-app-primary-green"
                  />
                  <label htmlFor={`house-${house}`} className="text-gray-800">
                    {house}
                  </label>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pb-24 bg-white">
      <div className="sticky top-0 bg-white z-10 pt-2 pb-2 px-4 border-b border-gray-100">
        <div className="flex items-center mb-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2" 
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-app-gray-900">All Mutual Funds</h1>
        </div>
        
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search by fund name, category or fund house"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-3 font-medium border-gray-200 rounded-xl"
            />
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between px-4 mb-3 overflow-x-auto no-scrollbar">
        <Button 
          variant="outline" 
          className="rounded-xl flex items-center gap-2 flex-shrink-0 border bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100"
          onClick={() => setShowFilterSheet(true)}
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters {getActiveFilterCount() > 0 && `(${getActiveFilterCount()})`}
        </Button>
        
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {filterOptions.map((option) => (
            <Button
              key={option.id}
              variant={sortBy === option.id ? "default" : "outline"}
              className={`rounded-xl flex items-center gap-1 text-sm flex-shrink-0 ${
                sortBy === option.id 
                  ? "bg-app-primary-green hover:bg-app-primary-green/90" 
                  : "bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100"
              }`}
              onClick={() => setSortBy(option.id)}
            >
              {option.icon}
              {option.name}
            </Button>
          ))}
        </div>
      </div>
      
      {getActiveFilterCount() > 0 && (
        <div className="flex flex-wrap gap-2 mb-4 px-4">
          {indexOnly && (
            <Badge 
              variant="outline" 
              className="bg-app-light-blue text-app-primary-blue flex items-center gap-1 rounded-xl"
            >
              Index only
              <X 
                className="w-3 h-3 cursor-pointer ml-1" 
                onClick={() => setIndexOnly(false)} 
              />
            </Badge>
          )}
          
          {filters.categories.map(category => (
            <Badge 
              key={`cat-${category}`} 
              variant="outline" 
              className="bg-app-light-blue text-app-primary-blue flex items-center gap-1 rounded-xl"
            >
              {category}
              <X 
                className="w-3 h-3 cursor-pointer ml-1" 
                onClick={() => handleFilterToggle('categories', category)} 
              />
            </Badge>
          ))}
          
          {filters.riskLevels.map(risk => (
            <Badge 
              key={`risk-${risk}`} 
              variant="outline" 
              className="bg-app-light-blue text-app-primary-blue flex items-center gap-1 rounded-xl"
            >
              {risk}
              <X 
                className="w-3 h-3 cursor-pointer ml-1" 
                onClick={() => handleFilterToggle('riskLevels', risk)} 
              />
            </Badge>
          ))}
          
          {filters.ratings.map(rating => (
            <Badge 
              key={`rating-${rating}`} 
              variant="outline" 
              className="bg-app-light-blue text-app-primary-blue flex items-center gap-1 rounded-xl"
            >
              {rating}★
              <X 
                className="w-3 h-3 cursor-pointer ml-1" 
                onClick={() => handleFilterToggle('ratings', rating)} 
              />
            </Badge>
          ))}
          
          {filters.fundHouses.map(house => (
            <Badge 
              key={`house-${house}`} 
              variant="outline" 
              className="bg-app-light-blue text-app-primary-blue flex items-center gap-1 rounded-xl"
            >
              {house}
              <X 
                className="w-3 h-3 cursor-pointer ml-1" 
                onClick={() => handleFilterToggle('fundHouses', house)} 
              />
            </Badge>
          ))}
        </div>
      )}
      
      <div className="px-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray-700 font-medium">{filteredFunds.length} funds</p>
          <div className="text-sm flex items-center gap-1">
            <ChevronLeft className="w-4 h-4" />
            <span className="text-app-primary-green font-medium">3Y Returns</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
        
        <div className="space-y-0">
          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="border-0 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 bg-gray-200 rounded-md animate-pulse"></div>
                        <div>
                          <div className="h-5 bg-gray-200 rounded-md animate-pulse mb-2 w-40"></div>
                          <div className="h-4 bg-gray-200 rounded-md animate-pulse w-24"></div>
                        </div>
                      </div>
                      <div className="h-6 w-16 bg-gray-200 rounded-md animate-pulse"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            filteredFunds.length > 0 ? (
              <motion.div 
                className="space-y-0"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredFunds.map((fund) => renderFundCard(fund))}
              </motion.div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl shadow-sm">
                <Search className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                <p className="text-app-gray-900 font-medium mb-2">No funds found</p>
                <p className="text-app-gray-900/70 text-sm">Try adjusting your search or filters</p>
                {(searchQuery || getActiveFilterCount() > 0) && (
                  <Button 
                    variant="link" 
                    className="text-app-primary-green mt-2" 
                    onClick={() => {
                      setSearchQuery("");
                      clearFilters();
                    }}
                  >
                    Clear all filters & search
                  </Button>
                )}
              </div>
            )
          )}
        </div>
      </div>
      
      <Sheet open={showFilterSheet} onOpenChange={setShowFilterSheet}>
        <SheetContent side="bottom" className="h-[85vh] rounded-t-3xl p-0">
          <div className="h-full flex flex-col">
            <div className="py-4 px-4 border-b border-gray-200 flex items-center justify-between">
              <Button variant="ghost" onClick={() => setShowFilterSheet(false)}>
                <X className="w-5 h-5" />
              </Button>
              <h2 className="text-lg font-bold">Filters</h2>
              <Button 
                variant="ghost" 
                className="text-app-primary-green" 
                onClick={clearFilters}
              >
                Clear all
              </Button>
            </div>
            
            <div className="flex h-full">
              <div className="w-1/3 border-r border-gray-200">
                {filterTabs.map(tab => (
                  <div 
                    key={tab.id} 
                    className={`py-4 px-4 border-l-4 ${
                      activeFilterTab === tab.id 
                        ? "border-app-primary-green bg-gray-50" 
                        : "border-transparent"
                    } cursor-pointer`}
                    onClick={() => setActiveFilterTab(tab.id)}
                  >
                    <span className={activeFilterTab === tab.id ? "text-app-primary-green font-medium" : "text-gray-700"}>
                      {tab.label}
                    </span>
                    {tab.id === "categories" && filters.categories.length > 0 && (
                      <span className="w-2 h-2 bg-app-primary-green rounded-full inline-block ml-2"></span>
                    )}
                    {tab.id === "riskLevels" && filters.riskLevels.length > 0 && (
                      <span className="w-2 h-2 bg-app-primary-green rounded-full inline-block ml-2"></span>
                    )}
                    {tab.id === "ratings" && filters.ratings.length > 0 && (
                      <span className="w-2 h-2 bg-app-primary-green rounded-full inline-block ml-2"></span>
                    )}
                    {tab.id === "fundHouses" && filters.fundHouses.length > 0 && (
                      <span className="w-2 h-2 bg-app-primary-green rounded-full inline-block ml-2"></span>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="w-2/3 p-4 overflow-y-auto">
                {renderFilterContent()}
              </div>
            </div>
            
            <div className="p-4 border-t border-gray-200">
              <Button 
                className="w-full bg-app-primary-green hover:bg-app-primary-green/90"
                onClick={() => setShowFilterSheet(false)}
              >
                View {filteredFunds.length} funds
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default FundsExplore;
