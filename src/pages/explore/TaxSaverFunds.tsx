
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Filter, Search, InfoIcon, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";

const TaxSaverFunds = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock data for ELSS funds
  const taxSaverFunds = [
    {
      id: "elss1",
      name: "Axis Long Term Equity Fund",
      category: "Equity ELSS",
      riskLevel: "Moderate to High",
      nav: 81.25,
      minInvestment: 500,
      aum: "₹28,954 Cr",
      returns: {
        oneYear: 15.7,
        threeYear: 12.4,
        fiveYear: 11.2,
      },
    },
    {
      id: "elss2",
      name: "Parag Parikh ELSS Tax Saver Fund",
      category: "Equity ELSS",
      riskLevel: "Moderate to High",
      nav: 20.65,
      minInvestment: 500,
      aum: "₹4,215 Cr",
      returns: {
        oneYear: 18.2,
        threeYear: 14.5,
        fiveYear: 12.8,
      },
    },
    {
      id: "elss3",
      name: "Mirae Asset Tax Saver Fund",
      category: "Equity ELSS",
      riskLevel: "Moderate to High",
      nav: 35.14,
      minInvestment: 500,
      aum: "₹13,682 Cr",
      returns: {
        oneYear: 16.8,
        threeYear: 13.9,
        fiveYear: 12.1,
      },
    },
    {
      id: "elss4",
      name: "SBI Long Term Equity Fund",
      category: "Equity ELSS",
      riskLevel: "Moderate to High",
      nav: 73.18,
      minInvestment: 500,
      aum: "₹10,458 Cr",
      returns: {
        oneYear: 14.3,
        threeYear: 11.8,
        fiveYear: 10.7,
      },
    },
    {
      id: "elss5",
      name: "Quant Tax Plan",
      category: "Equity ELSS",
      riskLevel: "High",
      nav: 165.28,
      minInvestment: 500,
      aum: "₹2,341 Cr",
      returns: {
        oneYear: 21.4,
        threeYear: 17.9,
        fiveYear: 15.2,
      },
    },
  ];

  const filteredFunds = taxSaverFunds.filter((fund) =>
    fund.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-mint pb-20">
      <div className="sticky top-0 bg-white z-10 shadow-sm">
        <div className="flex items-center p-4">
          <button onClick={() => navigate("/explore")} className="mr-3">
            <ArrowLeft className="h-5 w-5 text-app-black" />
          </button>
          <h1 className="text-xl font-semibold text-app-black">Tax Saver Funds (ELSS)</h1>
        </div>
        
        <div className="px-4 pb-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search funds"
              className="pl-10 py-5 input-modern"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex justify-between">
            <div className="flex space-x-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center text-app-black border-app-mint">
                    <Filter className="h-4 w-4 mr-1" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-white border border-app-mint">
                  <DropdownMenuItem>Minimum Investment</DropdownMenuItem>
                  <DropdownMenuItem>Risk Level</DropdownMenuItem>
                  <DropdownMenuItem>Fund Size</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center text-app-black border-app-mint">
                    <ArrowUpDown className="h-4 w-4 mr-1" />
                    Sort
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-white border border-app-mint">
                  <DropdownMenuItem>1Y Returns: High to Low</DropdownMenuItem>
                  <DropdownMenuItem>1Y Returns: Low to High</DropdownMenuItem>
                  <DropdownMenuItem>Fund Size: High to Low</DropdownMenuItem>
                  <DropdownMenuItem>Fund Size: Low to High</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <Button variant="ghost" size="sm" className="text-app-button-green" onClick={() => navigate("/tools/tax-calculator")}>
              <InfoIcon className="h-4 w-4 mr-1" />
              Tax Savings Calculator
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {filteredFunds.map((fund, index) => (
          <motion.div
            key={fund.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="card-modern overflow-hidden" onClick={() => navigate(`/funds/${fund.id}`)}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-app-black">{fund.name}</h3>
                  <div className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                    Tax Saver
                  </div>
                </div>
                
                <div className="text-xs text-gray-600 mb-3 flex items-center">
                  <span className="mr-2">{fund.category}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="ml-2">{fund.riskLevel}</span>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-xs text-gray-500">NAV</p>
                    <p className="font-medium text-app-black">₹{fund.nav.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Min. Investment</p>
                    <p className="font-medium text-app-black">₹{fund.minInvestment}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Fund Size</p>
                    <p className="font-medium text-app-black">{fund.aum}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-3 border-t border-app-mint/30">
                  <div>
                    <p className="text-xs text-gray-500">1Y Returns</p>
                    <p className="font-semibold text-app-button-green">{fund.returns.oneYear}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">3Y Returns</p>
                    <p className="font-medium text-app-black">{fund.returns.threeYear}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">5Y Returns</p>
                    <p className="font-medium text-app-black">{fund.returns.fiveYear}%</p>
                  </div>
                  <Button className="button-green ml-4">
                    Invest
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TaxSaverFunds;
