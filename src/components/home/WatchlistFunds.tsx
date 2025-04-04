
import React, { useState } from "react";
import { motion } from "framer-motion";
import FundCard from "./FundCard";
import SectionHeader from "./SectionHeader";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const watchlistFunds = [
  {
    id: 1,
    name: "HDFC Mid-Cap Opportunities Fund",
    category: "Equity - Mid Cap",
    riskLevel: "Moderate",
    returns: {
      "1D": -0.06,
      "1W": 1.2,
      "1M": 3.5,
      "1Y": 15.8,
      "3Y": 22.4,
      "5Y": 18.6,
    },
    rating: 5,
    amc: "HDFC",
  },
  {
    id: 2,
    name: "Axis Gold Fund",
    category: "Commodities - Gold",
    riskLevel: "Moderate",
    returns: {
      "1D": -0.51,
      "1W": 0.9,
      "1M": 2.1,
      "1Y": 12.3,
      "3Y": 16.8,
      "5Y": 14.2,
    },
    rating: 5,
    amc: "Axis",
  },
  {
    id: 3,
    name: "ICICI Prudential Bluechip Fund",
    category: "Equity - Large Cap",
    riskLevel: "Moderate",
    returns: {
      "1D": -0.04,
      "1W": 1.0,
      "1M": 2.5,
      "1Y": 14.5,
      "3Y": 18.9,
      "5Y": 16.1,
    },
    rating: 5,
    amc: "ICICI Prudential",
  },
];

const WatchlistFunds = () => {
  const [timeframe, setTimeframe] = useState("1D");

  const timeframes = ["1D", "1W", "1M", "3M", "6M", "1Y", "3Y", "5Y"];

  const handlePreviousTimeframe = () => {
    const currentIndex = timeframes.indexOf(timeframe);
    if (currentIndex > 0) {
      setTimeframe(timeframes[currentIndex - 1]);
    }
  };

  const handleNextTimeframe = () => {
    const currentIndex = timeframes.indexOf(timeframe);
    if (currentIndex < timeframes.length - 1) {
      setTimeframe(timeframes[currentIndex + 1]);
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <SectionHeader title="Watchlist" viewMoreLink="/watchlist" />
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8" 
            onClick={handlePreviousTimeframe}
            disabled={timeframes.indexOf(timeframe) === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-app-primary-green font-medium text-sm px-1">
            {timeframe} Returns
          </span>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8" 
            onClick={handleNextTimeframe}
            disabled={timeframes.indexOf(timeframe) === timeframes.length - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <motion.div 
        className="space-y-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {watchlistFunds.map((fund) => (
          <motion.div key={fund.id} variants={itemVariants}>
            <FundCard fund={fund} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WatchlistFunds;
