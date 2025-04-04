
import React from "react";
import SectionHeader from "./SectionHeader";
import CollectionCard from "./CollectionCard";
import { TrendingUp, PiggyBank, Calculator, BarChart2, BarChartHorizontal, PieChart, ZoomIn, Wallet, BarLineChart } from "lucide-react";

const collections = [
  {
    id: "high-returns",
    name: "High Returns",
    description: "Funds with highest returns in 3-5 years",
    icon: <TrendingUp className="text-white" />,
    link: "/explore?filter=high-returns",
    color: "bg-purple-600",
  },
  {
    id: "tax-saving",
    name: "Tax Saving",
    description: "Save taxes under section 80C with ELSS",
    icon: <PiggyBank className="text-white" />,
    link: "/explore/tax-saver-funds",
    color: "bg-blue-600",
  },
  {
    id: "sip-500",
    name: "SIP with ₹500",
    description: "Start investing with just ₹500 per month",
    icon: <Calculator className="text-white" />,
    link: "/explore?filter=min-sip-500",
    color: "bg-green-600",
  },
  {
    id: "large-cap",
    name: "Large Cap",
    description: "Stable funds investing in top 100 companies",
    icon: <BarChart2 className="text-white" />,
    link: "/explore?filter=large-cap",
    color: "bg-red-600",
  },
  {
    id: "mid-cap",
    name: "Mid Cap",
    description: "Growth-oriented funds for medium-sized companies",
    icon: <BarChartHorizontal className="text-white" />,
    link: "/explore?filter=mid-cap",
    color: "bg-orange-600",
  },
  {
    id: "small-cap",
    name: "Small Cap",
    description: "High growth potential with smaller companies",
    icon: <PieChart className="text-white" />,
    link: "/explore?filter=small-cap",
    color: "bg-pink-600",
  },
  {
    id: "focused-funds",
    name: "Focused Funds",
    description: "Concentrated portfolios with limited stocks",
    icon: <ZoomIn className="text-white" />,
    link: "/explore?filter=focused-funds",
    color: "bg-indigo-600",
  },
  {
    id: "debt-funds",
    name: "Debt Funds",
    description: "Low-risk investments in bonds and securities",
    icon: <Wallet className="text-white" />,
    link: "/explore?filter=debt-funds", 
    color: "bg-teal-600",
  },
  {
    id: "hybrid-funds",
    name: "Hybrid Funds",
    description: "Mix of equity and debt for balanced returns",
    icon: <BarLineChart className="text-white" />,
    link: "/explore?filter=hybrid-funds",
    color: "bg-emerald-600",
  }
];

const Collections = () => {
  return (
    <div className="mb-8">
      <SectionHeader title="Collections" viewMoreLink="/explore" />
      
      <div className="grid grid-cols-3 gap-3">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </div>
  );
};

export default Collections;
