
import React, { useState } from "react";
import { ArrowLeft, Search as SearchIcon, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [recentSearches, setRecentSearches] = useState([
    "HDFC Mutual Fund",
    "SBI",
    "Equity Funds",
    "Tax Saving",
  ]);
  
  // Mock fund data for search results
  const mockFunds = [
    {
      id: 1,
      name: "HDFC Mid-Cap Opportunities Fund",
      category: "Equity",
      rating: 5,
      returns: "15.8%",
    },
    {
      id: 2,
      name: "HDFC Top 100 Fund",
      category: "Equity",
      rating: 4,
      returns: "12.3%",
    },
    {
      id: 3,
      name: "SBI Blue Chip Fund",
      category: "Equity",
      rating: 4,
      returns: "12.6%",
    },
    {
      id: 4,
      name: "Axis Long Term Equity Fund",
      category: "ELSS",
      rating: 5,
      returns: "14.5%",
    },
    {
      id: 5,
      name: "ICICI Prudential Liquid Fund",
      category: "Debt",
      rating: 4,
      returns: "6.2%",
    },
    {
      id: 6,
      name: "Aditya Birla Sun Life Tax Relief 96",
      category: "ELSS",
      rating: 4,
      returns: "13.8%",
    },
  ];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) return;
    
    // Add to recent searches
    if (!recentSearches.includes(searchTerm)) {
      setRecentSearches(prev => [searchTerm, ...prev.slice(0, 4)]);
    }
    
    // Filter funds based on search term
    const results = mockFunds.filter(fund => 
      fund.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fund.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setSearchResults(results);
  };
  
  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
  };
  
  const handleRecentSearchClick = (term: string) => {
    setSearchTerm(term);
    
    // Filter funds based on search term
    const results = mockFunds.filter(fund => 
      fund.name.toLowerCase().includes(term.toLowerCase()) ||
      fund.category.toLowerCase().includes(term.toLowerCase())
    );
    
    setSearchResults(results);
  };
  
  const removeRecentSearch = (index: number) => {
    setRecentSearches(prev => prev.filter((_, i) => i !== index));
  };
  
  return (
    <div className="min-h-screen bg-white">
      <div className="p-4">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate(-1)} 
            className="mr-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          
          <form onSubmit={handleSearch} className="flex-1 relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search mutual funds, categories..."
              className="pl-9 pr-9 py-2 h-10 bg-gray-50"
            />
            {searchTerm && (
              <Button 
                type="button" 
                variant="ghost" 
                size="icon" 
                onClick={clearSearch}
                className="absolute right-0 top-0 h-full"
              >
                <X className="h-4 w-4 text-gray-400" />
              </Button>
            )}
          </form>
        </div>
        
        {searchResults.length > 0 ? (
          <div className="mt-4">
            <h2 className="text-sm font-medium text-gray-700 mb-3">Search Results</h2>
            <div className="space-y-3">
              {searchResults.map((fund) => (
                <Card 
                  key={fund.id} 
                  className="p-3 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => navigate(`/funds/${fund.id}`)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-gray-900 text-sm">{fund.name}</h3>
                      <div className="flex items-center mt-1">
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded mr-2">
                          {fund.category}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-emerald-600 font-semibold text-sm">{fund.returns}</p>
                      <p className="text-xs text-gray-500">1Y Returns</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`h-1.5 w-5 rounded-sm mr-0.5 ${
                              i < fund.rating ? 'bg-amber-400' : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : recentSearches.length > 0 ? (
          <div>
            <h2 className="text-sm font-medium text-gray-700 mb-3">Recent Searches</h2>
            <div className="space-y-2">
              {recentSearches.map((term, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100"
                >
                  <div 
                    className="flex-1 cursor-pointer"
                    onClick={() => handleRecentSearchClick(term)}
                  >
                    <p className="text-sm text-gray-800">{term}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => removeRecentSearch(index)}
                    className="h-8 w-8"
                  >
                    <X className="h-4 w-4 text-gray-400" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ) : null}
        
        {!searchTerm && searchResults.length === 0 && (
          <div className="mt-8">
            <h2 className="text-sm font-medium text-gray-700 mb-3">Popular Searches</h2>
            <div className="flex flex-wrap gap-2">
              {["Equity Funds", "ELSS", "Debt Funds", "Index Funds", "Large Cap", "Mid Cap", "Small Cap", "Liquid Funds"].map((category, index) => (
                <Button 
                  key={index} 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleRecentSearchClick(category)}
                  className="rounded-full bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
