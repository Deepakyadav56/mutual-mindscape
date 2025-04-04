
import React from "react";
import SectionHeader from "./SectionHeader";
import CollectionCard from "./CollectionCard";
import { TrendingUp, PiggyBank, Calculator, BarChart2, BarChartHorizontal, PieChart, ZoomIn, Wallet, LineChart } from "lucide-react";
import { motion } from "framer-motion";

const collections = [
  {
    id: "high-returns",
    name: "High Returns",
    description: "Funds with highest returns in 3-5 years",
    icon: <TrendingUp className="text-white" />,
    link: "/explore?filter=high-returns",
    color: "bg-gradient-to-br from-purple-600 to-purple-700",
  },
  {
    id: "tax-saving",
    name: "Tax Saving",
    description: "Save taxes under section 80C with ELSS",
    icon: <PiggyBank className="text-white" />,
    link: "/explore/tax-saver-funds",
    color: "bg-gradient-to-br from-blue-600 to-blue-700",
  },
  {
    id: "sip-500",
    name: "SIP with ₹500",
    description: "Start investing with just ₹500 per month",
    icon: <Calculator className="text-white" />,
    link: "/explore?filter=min-sip-500",
    color: "bg-gradient-to-br from-app-button-green to-green-700",
  },
  {
    id: "large-cap",
    name: "Large Cap",
    description: "Stable funds investing in top 100 companies",
    icon: <BarChart2 className="text-white" />,
    link: "/explore?filter=large-cap",
    color: "bg-gradient-to-br from-red-600 to-red-700",
  },
  {
    id: "mid-cap",
    name: "Mid Cap",
    description: "Growth-oriented funds for medium-sized companies",
    icon: <BarChartHorizontal className="text-white" />,
    link: "/explore?filter=mid-cap",
    color: "bg-gradient-to-br from-orange-600 to-orange-700",
  },
  {
    id: "small-cap",
    name: "Small Cap",
    description: "High growth potential with smaller companies",
    icon: <PieChart className="text-white" />,
    link: "/explore?filter=small-cap",
    color: "bg-gradient-to-br from-pink-600 to-pink-700",
  },
  {
    id: "focused-funds",
    name: "Focused Funds",
    description: "Concentrated portfolios with limited stocks",
    icon: <ZoomIn className="text-white" />,
    link: "/explore?filter=focused-funds",
    color: "bg-gradient-to-br from-indigo-600 to-indigo-700",
  },
  {
    id: "debt-funds",
    name: "Debt Funds",
    description: "Low-risk investments in bonds and securities",
    icon: <Wallet className="text-white" />,
    link: "/explore?filter=debt-funds", 
    color: "bg-gradient-to-br from-teal-600 to-teal-700",
  },
  {
    id: "hybrid-funds",
    name: "Hybrid Funds",
    description: "Mix of equity and debt for balanced returns",
    icon: <LineChart className="text-white" />,
    link: "/explore?filter=hybrid-funds",
    color: "bg-gradient-to-br from-emerald-600 to-emerald-700",
  }
];

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
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};

const Collections = () => {
  return (
    <div className="mb-8">
      <SectionHeader title="Collections" viewMoreLink="/explore" />
      
      <motion.div 
        className="grid grid-cols-3 gap-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {collections.map((collection) => (
          <motion.div key={collection.id} variants={itemVariants}>
            <CollectionCard collection={collection} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Collections;
