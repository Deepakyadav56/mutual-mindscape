
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FundCard from "./FundCard";
import { Filter } from "lucide-react";

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

const AllFundsList = () => {
  const [sortBy, setSortBy] = useState("returns");
  
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-3">
        <select 
          className="bg-white text-app-black border border-gray-200 rounded-full text-sm px-4 py-2"
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
          className="rounded-full border-gray-200 text-app-black hover:bg-gray-50"
        >
          <Filter className="w-4 h-4 mr-2" /> Filters
        </Button>
      </div>
      
      <div className="text-right text-xs text-app-button-green font-medium mb-2">
        1Y / 3Y / 5Y
      </div>
      
      <div className="space-y-3">
        {allFunds.map((fund) => (
          <FundCard key={fund.id} fund={fund} />
        ))}
      </div>
    </div>
  );
};

export default AllFundsList;
