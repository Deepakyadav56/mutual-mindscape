
import React, { useState } from "react";
import { ArrowUpRight, Eye, EyeOff, TrendingUp, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Toggle } from "@/components/ui/toggle";
import { motion } from "framer-motion";

interface FundCardProps {
  fund: {
    id: number;
    name: string;
    category: string;
    riskLevel: string;
    returns: {
      "1D": number;
      "1W": number;
      "1M": number;
      "1Y": number;
      "3Y": number;
      "5Y": number;
    };
    rating: number;
    amc: string;
    logo?: string;
    xirr?: number;
    value?: number;
    invested?: number;
    units?: number;
    sipActive?: boolean;
  };
  isPortfolioCard?: boolean;
}

const FundCard: React.FC<FundCardProps> = ({ fund, isPortfolioCard = false }) => {
  const [hideValue, setHideValue] = useState(false);
  
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

  const getLogo = () => {
    if (fund.logo) return fund.logo;
    
    // Default logos based on fund name keywords
    if (fund.name.includes("HDFC")) return "https://groww.in/images/partners/hdfc_groww.svg";
    if (fund.name.includes("SBI")) return "https://groww.in/images/partners/sbi_groww.svg";
    if (fund.name.includes("ICICI")) return "https://groww.in/images/partners/icici_groww.svg";
    if (fund.name.includes("Axis")) return "https://groww.in/images/partners/axis_groww.svg";
    if (fund.name.includes("Kotak")) return "https://groww.in/images/partners/kotak_groww.svg";
    if (fund.name.includes("Aditya Birla")) return "https://groww.in/images/partners/aditya_groww.svg";
    if (fund.name.includes("Mirae")) return "https://groww.in/images/partners/mirae_groww.svg";
    if (fund.name.includes("Parag Parikh")) return "https://groww.in/images/partners/ppfas_groww.svg";
    
    // Fallback
    return "https://groww.in/images/partners/default_amc_logo.svg";
  };

  const renderReturnValue = (value: number) => {
    const isPositive = value >= 0;
    return (
      <span className={`font-semibold flex items-center ${isPositive ? "text-app-primary-green" : "text-red-500"}`}>
        {isPositive ? 
          <TrendingUp className="w-3 h-3 mr-0.5" /> : 
          <TrendingDown className="w-3 h-3 mr-0.5" />}
        {value}%
      </span>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      <Card className="mb-3 overflow-hidden hover:shadow-md transition-all duration-200 border border-gray-100">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 bg-white rounded-full p-1 flex items-center justify-center overflow-hidden flex-shrink-0 border border-gray-200">
              <img src={getLogo()} alt={fund.amc} className="w-7 h-7 object-contain" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-medium text-app-black text-sm line-clamp-2">{fund.name}</h3>
                {!isPortfolioCard && (
                  <Badge variant={
                    fund.riskLevel === "Low" ? "success" : 
                    fund.riskLevel === "Moderate" ? "info" : 
                    "warning"
                  } className="ml-2 flex-shrink-0 text-xs px-2 py-0">
                    {fund.riskLevel}
                  </Badge>
                )}
                
                {isPortfolioCard && fund.sipActive && (
                  <Badge variant="success" className="ml-2 flex-shrink-0 text-xs px-2 py-0">
                    SIP Active
                  </Badge>
                )}
              </div>
              
              <p className="text-xs text-gray-500 mb-3">{fund.category} • {fund.amc}</p>
              
              {isPortfolioCard ? (
                <>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-1">Current Value</span>
                        <Toggle 
                          className="h-5 w-5 p-0 data-[state=on]:bg-transparent" 
                          onClick={() => setHideValue(!hideValue)}
                          aria-label="Toggle visibility"
                        >
                          {hideValue ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                        </Toggle>
                      </div>
                      <span className="font-semibold text-app-black">
                        {hideValue ? "••••••" : `₹${fund.value?.toLocaleString() || 0}`}
                      </span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs text-gray-500">Invested</span>
                      <span className="font-medium text-app-black">
                        {hideValue ? "••••••" : `₹${fund.invested?.toLocaleString() || 0}`}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xs text-gray-500">Today</span>
                      {renderReturnValue(fund.returns["1D"] || 0)}
                    </div>
                    <div>
                      <span className="text-xs text-gray-500">1Y Return</span>
                      {renderReturnValue(fund.returns["1Y"] || 0)}
                    </div>
                    <div>
                      <span className="text-xs text-gray-500">XIRR</span>
                      {renderReturnValue(fund.xirr || 0)}
                    </div>
                    <Link to={`/funds/${fund.id}`} className="ml-3">
                      <ArrowUpRight className="w-4 h-4 text-app-primary-green" />
                    </Link>
                  </div>
                </>
              ) : (
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">1D</span>
                      {renderReturnValue(fund.returns["1D"] || 0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">1Y</span>
                      {renderReturnValue(fund.returns["1Y"] || 0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">3Y</span>
                      {renderReturnValue(fund.returns["3Y"] || 0)}
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    {renderRatingStars(fund.rating)}
                    <Link to={`/funds/${fund.id}`} className="ml-3">
                      <ArrowUpRight className="w-4 h-4 text-app-primary-green" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FundCard;
