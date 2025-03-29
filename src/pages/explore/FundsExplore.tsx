
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const FundsExplore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Mock data for funds
  const allFunds = [
    {
      id: 1,
      name: "HDFC Mid-Cap Opportunities",
      category: "Equity",
      riskLevel: "Moderate",
      returnPercentage: 15.8,
      rating: 5,
      aum: "₹26,293 Cr",
      minInvestment: 500,
    },
    {
      id: 2,
      name: "SBI Blue Chip Fund",
      category: "Equity",
      riskLevel: "Moderate",
      returnPercentage: 12.3,
      rating: 4,
      aum: "₹30,123 Cr",
      minInvestment: 500,
    },
    {
      id: 3,
      name: "Axis Long Term Equity Fund",
      category: "ELSS",
      riskLevel: "Moderate to High",
      returnPercentage: 14.5,
      rating: 4,
      aum: "₹29,675 Cr",
      minInvestment: 500,
    },
    {
      id: 4,
      name: "Kotak Emerging Equity Fund",
      category: "Equity",
      riskLevel: "High",
      returnPercentage: 16.2,
      rating: 4,
      aum: "₹22,145 Cr",
      minInvestment: 1000,
    },
    {
      id: 5,
      name: "ICICI Prudential Liquid Fund",
      category: "Debt",
      riskLevel: "Low",
      returnPercentage: 6.5,
      rating: 5,
      aum: "₹41,368 Cr",
      minInvestment: 5000,
    },
    {
      id: 6,
      name: "Aditya Birla Sun Life Tax Relief 96",
      category: "ELSS",
      riskLevel: "Moderate to High",
      returnPercentage: 13.8,
      rating: 4,
      aum: "₹14,987 Cr",
      minInvestment: 500,
    },
  ];

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
    navigate(`/invest/${fundId}`);
  };

  return (
    <div className="pb-20">
      <h1 className="text-2xl font-bold text-app-charcoal mb-6">Explore Funds</h1>
      
      <div className="mb-6">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search funds by name or category"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10 input-field"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      </div>
      
      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="w-full flex overflow-x-auto space-x-2 pb-2 no-scrollbar">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="px-4 py-2 rounded-full flex-shrink-0"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-4">
            {category.id === "all" ? (
              filteredFunds.length > 0 ? (
                <div className="space-y-4">
                  {filteredFunds.map((fund) => (
                    <Card 
                      key={fund.id} 
                      className="fund-card border-app-light-mint hover:border-app-charcoal transition-colors cursor-pointer"
                      onClick={() => handleFundClick(fund.id)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-app-charcoal">{fund.name}</h3>
                        <Badge variant={
                          fund.riskLevel === "Low" ? "success" :
                          fund.riskLevel === "Moderate" ? "warning" :
                          "outline"
                        }>
                          {fund.riskLevel}
                        </Badge>
                      </div>
                      
                      <div className="flex justify-between items-center text-sm mb-2">
                        <span className="text-app-charcoal opacity-70">{fund.category}</span>
                        <span className="text-app-charcoal opacity-70">{fund.aum}</span>
                      </div>
                      
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <p className="text-xs text-app-charcoal opacity-70">1Y Returns</p>
                          <p className="text-green-600 font-medium">{fund.returnPercentage}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-app-charcoal opacity-70">Min. Investment</p>
                          <p className="font-medium">₹{fund.minInvestment}</p>
                        </div>
                        <div>
                          <p className="text-xs text-app-charcoal opacity-70 mb-1">Rating</p>
                          {renderRatingStars(fund.rating)}
                        </div>
                      </div>
                      
                      <div className="flex space-x-3 mt-2">
                        <Button 
                          className="bg-app-charcoal hover:bg-app-charcoal/90 text-app-mint flex-1"
                          onClick={(e) => handleInvest(e, fund.id)}
                        >
                          Invest
                        </Button>
                        <Button 
                          className="bg-transparent border border-app-charcoal text-app-charcoal hover:bg-app-charcoal/10 flex-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFundClick(fund.id);
                          }}
                        >
                          Details
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-app-charcoal opacity-70">No funds found matching your search.</p>
                </div>
              )
            ) : (
              <div className="text-center py-8">
                <p className="text-app-charcoal opacity-70">
                  {category.name} funds will appear here.
                </p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
      
      <Card className="mb-6 border-app-light-mint">
        <CardContent className="py-4">
          <div className="flex space-x-4 overflow-x-auto pb-2">
            <Button className="bg-app-charcoal hover:bg-app-charcoal/90 text-app-mint flex-shrink-0">
              Top Rated
            </Button>
            <Button className="bg-transparent border border-app-light-mint text-app-charcoal hover:bg-app-light-mint flex-shrink-0">
              High Returns
            </Button>
            <Button className="bg-transparent border border-app-light-mint text-app-charcoal hover:bg-app-light-mint flex-shrink-0">
              Low Risk
            </Button>
            <Button className="bg-transparent border border-app-light-mint text-app-charcoal hover:bg-app-light-mint flex-shrink-0">
              Popular
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FundsExplore;
