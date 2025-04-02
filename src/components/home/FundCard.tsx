
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FundCardProps {
  fund: {
    id: number;
    name: string;
    category: string;
    riskLevel: string;
    returns: {
      "1Y": number;
      "3Y": number;
      "5Y": number;
    };
    rating: number;
    amc: string;
    logo?: string;
  };
}

const FundCard: React.FC<FundCardProps> = ({ fund }) => {
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

  return (
    <Card className="border-0 bg-app-dark-blue hover:bg-app-card-hover transition-all duration-200 rounded-xl mb-3 shadow-md overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 bg-white rounded-full p-1 flex items-center justify-center overflow-hidden flex-shrink-0">
            <img src={getLogo()} alt={fund.amc} className="w-7 h-7 object-contain" />
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
              <div className="flex flex-col">
                <span className="text-xs text-gray-400">3Y Returns</span>
                <span className="font-semibold text-app-green">{fund.returns["3Y"]}%</span>
              </div>
              
              <div className="flex flex-col items-end">
                <div className="flex items-center">
                  {renderRatingStars(fund.rating)}
                </div>
                <Link to={`/funds/${fund.id}`} className="text-app-green text-xs flex items-center mt-1">
                  Details <ArrowUpRight className="w-3 h-3 ml-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FundCard;
