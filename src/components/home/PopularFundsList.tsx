
import React from "react";
import { motion } from "framer-motion";
import FundCard from "./FundCard";
import SectionHeader from "./SectionHeader";

const popularFunds = [
  {
    id: 1,
    name: "HDFC Mid-Cap Opportunities Fund",
    category: "Equity - Mid Cap",
    riskLevel: "Moderate",
    returns: {
      "1Y": 15.8,
      "3Y": 22.4,
      "5Y": 18.6,
    },
    rating: 5,
    amc: "HDFC",
  },
  {
    id: 2,
    name: "SBI Blue Chip Fund Direct Growth",
    category: "Equity - Large Cap",
    riskLevel: "Moderate",
    returns: {
      "1Y": 12.3,
      "3Y": 16.8,
      "5Y": 14.2,
    },
    rating: 4,
    amc: "SBI",
  },
  {
    id: 3,
    name: "Axis Long Term Equity Fund Direct Growth",
    category: "ELSS",
    riskLevel: "Moderate to High",
    returns: {
      "1Y": 14.5,
      "3Y": 18.9,
      "5Y": 16.1,
    },
    rating: 4,
    amc: "Axis",
  },
  {
    id: 4,
    name: "Parag Parikh Flexi Cap Fund Direct Growth",
    category: "Equity - Flexi Cap",
    riskLevel: "High",
    returns: {
      "1Y": 19.5,
      "3Y": 26.2,
      "5Y": 21.4,
    },
    rating: 5,
    amc: "PPFAS",
  },
];

const PopularFundsList = () => {
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
      <SectionHeader title="Popular Funds" viewMoreLink="/explore" />
      
      <motion.div 
        className="space-y-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {popularFunds.map((fund) => (
          <motion.div key={fund.id} variants={itemVariants}>
            <FundCard fund={fund} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PopularFundsList;
