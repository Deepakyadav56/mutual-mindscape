
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface MarketInsightsProps {
  data: {
    id: number;
    title: string;
    value: string;
    change: string;
    isPositive: boolean;
  }[];
}

export const MarketInsights: React.FC<MarketInsightsProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base font-medium">Market Insights</CardTitle>
          <a 
            href="https://www.nseindia.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-finance-primary flex items-center"
          >
            NSE India
            <ExternalLink className="h-3 w-3 ml-0.5" />
          </a>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          {data.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-3 rounded-lg bg-gray-50">
              <div>
                <h4 className="font-medium text-gray-800">{item.title}</h4>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{item.value}</p>
                <div className="flex items-center justify-end">
                  {item.isPositive ? (
                    <TrendingUp className="h-3 w-3 text-emerald-600 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-600 mr-1" />
                  )}
                  <span 
                    className={`text-xs font-medium ${
                      item.isPositive ? 'text-emerald-600' : 'text-red-600'
                    }`}
                  >
                    {item.change}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Link 
            to="/explore"
            className="flex items-center justify-center text-sm text-finance-primary"
          >
            Explore Investment Opportunities
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
