
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Star, 
  TrendingUp, 
  TrendingDown, 
  X, 
  Filter, 
  ChevronDown,
  ChevronUp,
  Search,
  Plus
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Watchlist = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("name");
  const [filterOpen, setFilterOpen] = useState(false);
  const [watchlistFunds, setWatchlistFunds] = useState([
    {
      id: "1",
      name: "HDFC Mid-Cap Opportunities Fund",
      category: "Equity - Mid Cap",
      return: 18.45,
      dayChange: 0.82,
      rating: 4.5,
      nav: 98.75,
      navDate: "30 Aug 2023",
    },
    {
      id: "2",
      name: "Axis Small Cap Fund Direct Growth",
      category: "Equity - Small Cap",
      return: 22.67,
      dayChange: -0.34,
      rating: 4.8,
      nav: 76.12,
      navDate: "30 Aug 2023",
    },
    {
      id: "3",
      name: "SBI Blue Chip Fund Direct Growth",
      category: "Equity - Large Cap",
      return: 15.78,
      dayChange: 1.05,
      rating: 4.2,
      nav: 65.89,
      navDate: "30 Aug 2023",
    },
    {
      id: "4",
      name: "Kotak Emerging Equity Fund Direct Growth",
      category: "Equity - Mid Cap",
      return: 20.15,
      dayChange: 0.56,
      rating: 4.6,
      nav: 82.34,
      navDate: "30 Aug 2023",
    },
    {
      id: "5",
      name: "Parag Parikh Flexi Cap Fund Direct Growth",
      category: "Equity - Flexi Cap",
      return: 19.32,
      dayChange: -0.22,
      rating: 4.7,
      nav: 55.18,
      navDate: "30 Aug 2023",
    }
  ]);
  
  const removeFromWatchlist = (fundId: string) => {
    setWatchlistFunds(watchlistFunds.filter(fund => fund.id !== fundId));
    toast({
      title: "Removed from watchlist",
      description: "Fund has been removed from your watchlist",
    });
  };
  
  const sortFunds = () => {
    let sortedFunds = [...watchlistFunds];
    switch (sortBy) {
      case "name":
        sortedFunds.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "returns-high":
        sortedFunds.sort((a, b) => b.return - a.return);
        break;
      case "returns-low":
        sortedFunds.sort((a, b) => a.return - b.return);
        break;
      case "rating":
        sortedFunds.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return sortedFunds;
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="pb-20">
      <div className="sticky top-0 bg-white z-10 shadow-sm">
        <div className="flex items-center p-4 border-b">
          <button onClick={() => navigate(-1)} className="text-app-gray-900">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold text-app-gray-900 ml-4">
            Watchlist
          </h1>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-4 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            className="pl-10 bg-gray-50 border-gray-200" 
            placeholder="Search watchlist funds"
          />
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="text-sm font-medium">{watchlistFunds.length} Funds</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs h-8 border-gray-200"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <Filter className="h-3 w-3 mr-1" />
              Filter
              {filterOpen ? (
                <ChevronUp className="h-3 w-3 ml-1" />
              ) : (
                <ChevronDown className="h-3 w-3 ml-1" />
              )}
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-xs h-8 border-gray-200"
                >
                  Sort By
                  <ChevronDown className="h-3 w-3 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white">
                <DropdownMenuItem onClick={() => setSortBy("name")}>
                  Name
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("returns-high")}>
                  Highest Returns
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("returns-low")}>
                  Lowest Returns
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("rating")}>
                  Rating
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        {filterOpen && (
          <Card className="mb-4 border-gray-200">
            <CardContent className="p-3">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Filter Funds</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button size="sm" variant="outline" className="text-xs justify-start">
                    Equity
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs justify-start">
                    Debt
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs justify-start">
                    Hybrid
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs justify-start">
                    Others
                  </Button>
                </div>
                <div className="flex justify-end">
                  <Button size="sm" className="bg-app-primary-green text-white text-xs">
                    Apply Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
        
        {watchlistFunds.length > 0 ? (
          <motion.div 
            className="space-y-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {sortFunds().map((fund) => (
              <motion.div key={fund.id} variants={itemVariants}>
                <Card className="border-gray-100 relative overflow-hidden hover:border-app-primary-green transition duration-200">
                  <button 
                    className="absolute top-3 right-3 p-1 rounded-full bg-gray-50"
                    onClick={() => removeFromWatchlist(fund.id)}
                  >
                    <X className="h-4 w-4 text-gray-500" />
                  </button>
                  <CardContent className="p-4 pr-10">
                    <div onClick={() => navigate(`/funds/${fund.id}`)}>
                      <h3 className="font-medium text-app-gray-900 mb-1 pr-6">{fund.name}</h3>
                      <p className="text-xs text-gray-500 mb-3">{fund.category}</p>
                      
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <p className="text-xs text-gray-500">1Y Returns</p>
                          <p className="text-green-600 font-medium flex items-center">
                            <TrendingUp className="h-3 w-3 mr-1" /> {fund.return.toFixed(2)}%
                          </p>
                        </div>
                        
                        <div className="text-right">
                          <p className="text-xs text-gray-500">Today</p>
                          <p className={`font-medium flex items-center ${fund.dayChange >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                            {fund.dayChange >= 0 ? (
                              <TrendingUp className="h-3 w-3 mr-1" />
                            ) : (
                              <TrendingDown className="h-3 w-3 mr-1" />
                            )}
                            {Math.abs(fund.dayChange).toFixed(2)}%
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500">NAV: ₹{fund.nav}</span>
                        <span className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3 w-3 ${i < Math.floor(fund.rating) ? 'text-yellow-500' : 'text-gray-300'}`} 
                              fill={i < Math.floor(fund.rating) ? 'currentColor' : 'none'}
                            />
                          ))}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-8">
            <Star className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Your watchlist is empty</h3>
            <p className="text-sm text-gray-500 mb-4">Start adding funds to track their performance</p>
            <Button 
              onClick={() => navigate("/explore")} 
              className="bg-app-primary-green text-white"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Funds
            </Button>
          </div>
        )}
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 shadow-md max-w-lg mx-auto">
        <Button 
          onClick={() => navigate("/explore")} 
          className="w-full bg-app-primary-green text-white"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add to Watchlist
        </Button>
      </div>
    </div>
  );
};

export default Watchlist;
