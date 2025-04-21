
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
import { motion } from "framer-motion";

export const QuickActions: React.FC = () => {
  const actions = [
    {
      icon: <PlusCircle className="h-5 w-5" />,
      label: "Invest",
      color: "bg-teal-100 text-teal-700",
      link: "/explore",
    },
    {
      icon: <LineChart className="h-5 w-5" />,
      label: "SIP",
      color: "bg-indigo-100 text-indigo-700",
      link: "/portfolio/manage-sip",
    },
    {
      icon: <RefreshCw className="h-5 w-5" />,
      label: "Redeem",
      color: "bg-amber-100 text-amber-700",
      link: "/portfolio",
    },
    {
      icon: <Calculator className="h-5 w-5" />,
      label: "Calculator",
      color: "bg-blue-100 text-blue-700",
      link: "/tools/sip-calculator",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      label: "Tax Saver",
      color: "bg-violet-100 text-violet-700",
      link: "/explore/tax-saver-funds",
    },
    {
      icon: <History className="h-5 w-5" />,
      label: "History",
      color: "bg-rose-100 text-rose-700",
      link: "/transactions",
    },
  ];

  return (
    <div className="mb-6">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {actions.map((action, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link 
              to={action.link}
              className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-teal-50/70 transition-colors"
            >
              <div className={`w-12 h-12 rounded-full ${action.color} flex items-center justify-center mb-2 shadow-sm`}>
                {action.icon}
              </div>
              <span className="text-xs text-teal-800 font-medium">{action.label}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
