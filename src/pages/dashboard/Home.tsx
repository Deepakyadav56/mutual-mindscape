
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, TrendingUp, ArrowRight, Calculator, FileText, BarChart3, AreaChart, PiggyBank, LineChart } from "lucide-react";
import CategoryCard from "@/components/home/CategoryCard";
import ToolCard from "@/components/home/ToolCard";
import AllFundsList from "@/components/home/AllFundsList";

const Home = () => {
  const categories = [
    {
      title: "High Returns",
      description: "Funds with highest returns in 3-5 years",
      icon: <TrendingUp className="h-5 w-5 text-white" />,
      link: "/explore/high-returns",
      color: "bg-purple-600"
    },
    {
      title: "Tax Saving",
      description: "Save taxes under section 80C with ELSS",
      icon: <PiggyBank className="h-5 w-5 text-white" />,
      link: "/explore/tax-saver-funds",
      color: "bg-blue-600"
    },
    {
      title: "SIP with ₹500",
      description: "Start investing with just ₹500 per month",
      icon: <Calculator className="h-5 w-5 text-white" />,
      link: "/tools/sip-calculator",
      color: "bg-green-600"
    },
    {
      title: "Large Cap",
      description: "Stable funds investing in top 100 companies",
      icon: <BarChart3 className="h-5 w-5 text-white" />,
      link: "/explore/large-cap",
      color: "bg-red-600"
    },
    {
      title: "Mid Cap",
      description: "Growth-oriented funds for medium-sized companies",
      icon: <AreaChart className="h-5 w-5 text-white" />,
      link: "/explore/mid-cap",
      color: "bg-orange-600"
    },
    {
      title: "Small Cap",
      description: "High growth potential with smaller companies",
      icon: <LineChart className="h-5 w-5 text-white" />,
      link: "/explore/small-cap",
      color: "bg-pink-600"
    }
  ];

  const tools = [
    {
      title: "SIP Calculator",
      icon: <Calculator className="h-6 w-6" />,
      link: "/tools/sip-calculator"
    },
    {
      title: "Compare Funds",
      icon: <ArrowRight className="h-6 w-6 rotate-90" />,
      link: "/tools/compare-funds"
    },
    {
      title: "Import Portfolio",
      icon: <FileText className="h-6 w-6" />,
      link: "/tools/import-portfolio"
    },
    {
      title: "Tax Calculator",
      icon: <BarChart3 className="h-6 w-6" />,
      link: "/tools/tax-calculator"
    }
  ];

  return (
    <div className="pb-24 px-4">
      <div className="grid grid-cols-2 gap-3 mb-8">
        {categories.map((category, index) => (
          <CategoryCard 
            key={index}
            title={category.title}
            description={category.description}
            icon={category.icon}
            link={category.link}
            color={category.color}
          />
        ))}
      </div>
      
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Products & Tools</h2>
          <Link to="/tools" className="view-all-link">
            View All <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              title={tool.title}
              icon={tool.icon}
              link={tool.link}
            />
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">All Funds</h2>
          <Link to="/explore" className="view-all-link">
            View All <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <AllFundsList />
      </div>
    </div>
  );
};

export default Home;
