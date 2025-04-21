
import React from "react";
import { Link } from "react-router-dom";
import { 
  PlusCircle, 
  BarChart3, 
  LineChart, 
  Calculator, 
  RefreshCw, 
  History 
} from "lucide-react";

export const QuickActions: React.FC = () => {
  const actions = [
    {
      icon: <PlusCircle className="h-5 w-5" />,
      label: "Invest",
      color: "bg-emerald-100 text-emerald-600",
      link: "/explore",
    },
    {
      icon: <LineChart className="h-5 w-5" />,
      label: "SIP",
      color: "bg-indigo-100 text-indigo-600",
      link: "/portfolio/manage-sip",
    },
    {
      icon: <RefreshCw className="h-5 w-5" />,
      label: "Redeem",
      color: "bg-amber-100 text-amber-600",
      link: "/portfolio",
    },
    {
      icon: <Calculator className="h-5 w-5" />,
      label: "Calculator",
      color: "bg-blue-100 text-blue-600",
      link: "/tools/sip-calculator",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      label: "Tax Saver",
      color: "bg-violet-100 text-violet-600",
      link: "/explore/tax-saver-funds",
    },
    {
      icon: <History className="h-5 w-5" />,
      label: "History",
      color: "bg-rose-100 text-rose-600",
      link: "/transactions",
    },
  ];

  return (
    <div className="mb-6">
      <div className="grid grid-cols-6 gap-4">
        {actions.map((action, index) => (
          <Link 
            key={index} 
            to={action.link}
            className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <div className={`w-10 h-10 rounded-full ${action.color} flex items-center justify-center mb-2`}>
              {action.icon}
            </div>
            <span className="text-xs text-gray-700 font-medium">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
