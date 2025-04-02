
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";
import { ArrowUpRight, Filter } from "lucide-react";

const allFunds = [
  {
    id: 7,
    name: "Mirae Asset Large Cap Fund Direct Growth",
    category: "Equity - Large Cap",
    riskLevel: "Moderate",
    returns: {
      "1Y": 14.2,
      "3Y": 19.3,
      "5Y": 16.8,
    },
    rating: 5,
    amc: "Mirae Asset",
  },
  {
    id: 8,
    name: "ICICI Prudential Liquid Fund Direct Growth",
    category: "Debt - Liquid",
    riskLevel: "Low",
    returns: {
      "1Y": 6.5,
      "3Y": 6.2,
      "5Y": 6.7,
    },
    rating: 4,
    amc: "ICICI Prudential",
  },
  {
    id: 9,
    name: "Aditya Birla Sun Life Tax Relief 96 Direct Growth",
    category: "ELSS",
    riskLevel: "Moderate to High",
    returns: {
      "1Y": 13.8,
      "3Y": 17.6,
      "5Y": 15.3,
    },
    rating: 4,
    amc: "Aditya Birla Sun Life",
  },
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
          stroke={i < rating ? "#FFB74D" : "#9CA3AF"}
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

const getLogo = (fundName: string) => {
  // Default logos based on fund name keywords
  if (fundName.includes("Mirae")) return "https://groww.in/images/partners/mirae_groww.svg";
  if (fundName.includes("ICICI")) return "https://groww.in/images/partners/icici_groww.svg";
  if (fundName.includes("Aditya Birla")) return "https://groww.in/images/partners/aditya_groww.svg";
  
  // Fallback
  return "https://groww.in/images/partners/default_amc_logo.svg";
};

const AllFundsList = () => {
  const [sortBy, setSortBy] = useState("returns");
  
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-3">
        <SectionHeader title="All Mutual Funds" viewMoreLink="/explore" />
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <select 
            className="bg-app-dark-blue text-white border border-gray-700 rounded-lg text-sm px-3 py-1.5"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="returns">Best Returns</option>
            <option value="rating">Top Rated</option>
            <option value="popular">Most Popular</option>
          </select>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="border-gray-700 text-white hover:bg-app-dark-blue/50"
          >
            <Filter className="w-4 h-4 mr-2" /> Filters
          </Button>
        </div>
        
        <Badge className="bg-app-green text-white">1Y / 3Y / 5Y</Badge>
      </div>
      
      <div className="space-y-3">
        {allFunds.map((fund) => (
          <Card 
            key={fund.id} 
            className="border-0 bg-app-dark-blue hover:bg-app-card-hover transition-all duration-200 rounded-xl shadow-md overflow-hidden"
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 bg-white rounded-full p-1 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img src={getLogo(fund.name)} alt={fund.amc} className="w-7 h-7 object-contain" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-medium text-white text-sm line-clamp-2">{fund.name}</h3>
                    <Badge variant="outline" className={`
                      ml-2 flex-shrink-0 text-xs px-2 py-0 h-5
                      ${fund.riskLevel === "Low" ? "bg-green-900/20 text-green-400 border-green-700" : 
                        fund.riskLevel === "Moderate" ? "bg-blue-900/20 text-blue-400 border-blue-700" : 
                        "bg-orange-900/20 text-orange-400 border-orange-700"}
                    `}>
                      {fund.riskLevel}
                    </Badge>
                  </div>
                  
                  <p className="text-xs text-gray-400 mb-3">{fund.category} • {fund.amc}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-400">1Y</span>
                        <span className="font-semibold text-app-green">{fund.returns["1Y"]}%</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-400">3Y</span>
                        <span className="font-semibold text-app-green">{fund.returns["3Y"]}%</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-400">5Y</span>
                        <span className="font-semibold text-app-green">{fund.returns["5Y"]}%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      {renderRatingStars(fund.rating)}
                      <Link to={`/funds/${fund.id}`} className="ml-3">
                        <ArrowUpRight className="w-4 h-4 text-app-green" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <Link to="/explore">
          <Button className="bg-app-dark-blue border border-app-green text-app-green hover:bg-app-green hover:text-white">
            View All Funds
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AllFundsList;
