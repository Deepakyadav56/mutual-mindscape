
import React from "react";
import { Calculator, BarChart3, PiggyBank, BarChart4, TrendingUp, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const tools = [
  {
    id: "sip-calculator",
    name: "SIP Calculator",
    description: "Plan your SIP investments",
    icon: <Calculator className="h-6 w-6 text-white" />,
    link: "/tools/sip-calculator",
    color: "bg-indigo-600",
  },
  {
    id: "tax-calculator",
    name: "Tax Calculator",
    description: "Calculate your tax savings",
    icon: <BarChart3 className="h-6 w-6 text-white" />,
    link: "/tools/tax-calculator",
    color: "bg-green-600",
  },
  {
    id: "goal-planner",
    name: "Goal Planner",
    description: "Plan your financial goals",
    icon: <PiggyBank className="h-6 w-6 text-white" />,
    link: "/goals",
    color: "bg-orange-600",
  },
  {
    id: "portfolio-analyzer",
    name: "Portfolio Analyzer",
    description: "Analyze your investments",
    icon: <BarChart4 className="h-6 w-6 text-white" />,
    link: "/portfolio/analysis",
    color: "bg-red-600",
  },
  {
    id: "return-calculator",
    name: "Return Calculator",
    description: "Calculate potential returns",
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    link: "/tools/return-calculator",
    color: "bg-purple-600",
  },
  {
    id: "lumpsum-calculator",
    name: "Lumpsum Calculator",
    description: "Plan one-time investments",
    icon: <DollarSign className="h-6 w-6 text-white" />,
    link: "/tools/lumpsum-calculator",
    color: "bg-blue-600",
  },
];

const ProductsTools = () => {
  return (
    <>
      {tools.map((tool) => (
        <Link 
          key={tool.id}
          to={tool.link} 
          className="block"
        >
          <div className={`${tool.color} p-4 rounded-xl text-white flex items-center space-x-3 shadow-sm hover:shadow-md transition-all duration-200`}>
            <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
              {tool.icon}
            </div>
            <div>
              <h3 className="font-semibold text-base">{tool.name}</h3>
              <p className="text-xs text-white/80">{tool.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProductsTools;
