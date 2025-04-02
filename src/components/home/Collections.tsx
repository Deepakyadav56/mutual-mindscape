
import React from "react";
import SectionHeader from "./SectionHeader";
import CollectionCard from "./CollectionCard";
import { TrendingUp, PiggyBank, Receipt, PieChart, BarChart2, BarChartHorizontal } from "lucide-react";

const collections = [
  {
    id: "high-returns",
    name: "High Returns",
    description: "Funds with highest returns in 3-5 years",
    icon: <TrendingUp className="text-white" />,
    link: "/explore?filter=high-returns",
    color: "bg-gradient-to-r from-purple-800 to-purple-600",
  },
  {
    id: "tax-saving",
    name: "Tax Saving",
    description: "Save taxes under section 80C with ELSS",
    icon: <PiggyBank className="text-white" />,
    link: "/explore/tax-saver-funds",
    color: "bg-gradient-to-r from-blue-800 to-blue-600",
  },
  {
    id: "sip-500",
    name: "SIP with ₹500",
    description: "Start investing with just ₹500 per month",
    icon: <Receipt className="text-white" />,
    link: "/explore?filter=min-sip-500",
    color: "bg-gradient-to-r from-green-800 to-green-600",
  },
  {
    id: "large-cap",
    name: "Large Cap",
    description: "Stable funds investing in top 100 companies",
    icon: <BarChart2 className="text-white" />,
    link: "/explore?filter=large-cap",
    color: "bg-gradient-to-r from-red-800 to-red-600",
  },
  {
    id: "mid-cap",
    name: "Mid Cap",
    description: "Growth-oriented funds for medium-sized companies",
    icon: <BarChartHorizontal className="text-white" />,
    link: "/explore?filter=mid-cap",
    color: "bg-gradient-to-r from-orange-800 to-orange-600",
  },
  {
    id: "small-cap",
    name: "Small Cap",
    description: "High growth potential with smaller companies",
    icon: <PieChart className="text-white" />,
    link: "/explore?filter=small-cap",
    color: "bg-gradient-to-r from-pink-800 to-pink-600",
  },
];

const Collections = () => {
  return (
    <div className="mb-8">
      <SectionHeader title="Collections" viewMoreLink="/explore" />
      
      <div className="grid grid-cols-2 gap-3">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </div>
  );
};

export default Collections;
