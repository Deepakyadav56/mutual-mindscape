
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
      color: "bg-gradient-to-br from-teal-500/20 to-teal-600/20 text-teal-700 dark:from-teal-500/30 dark:to-teal-700/30 dark:text-teal-300",
      link: "/explore",
    },
    {
      icon: <LineChart className="h-5 w-5" />,
      label: "SIP",
      color: "bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 text-indigo-700 dark:from-indigo-400/30 dark:to-indigo-600/30 dark:text-indigo-300",
      link: "/portfolio/manage-sip",
    },
    {
      icon: <RefreshCw className="h-5 w-5" />,
      label: "Redeem",
      color: "bg-gradient-to-br from-amber-500/20 to-amber-600/20 text-amber-700 dark:from-amber-400/30 dark:to-amber-600/30 dark:text-amber-300",
      link: "/portfolio",
    },
    {
      icon: <Calculator className="h-5 w-5" />,
      label: "Calculator",
      color: "bg-gradient-to-br from-blue-500/20 to-blue-600/20 text-blue-700 dark:from-blue-400/30 dark:to-blue-600/30 dark:text-blue-300",
      link: "/tools/sip-calculator",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      label: "Tax Saver",
      color: "bg-gradient-to-br from-violet-500/20 to-violet-600/20 text-violet-700 dark:from-violet-400/30 dark:to-violet-600/30 dark:text-violet-300",
      link: "/explore/tax-saver-funds",
    },
    {
      icon: <History className="h-5 w-5" />,
      label: "History",
      color: "bg-gradient-to-br from-rose-500/20 to-rose-600/20 text-rose-700 dark:from-rose-400/30 dark:to-rose-600/30 dark:text-rose-300",
      link: "/transactions",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <div className="mb-8 mt-2">
      <motion.div 
        className="grid grid-cols-3 md:grid-cols-6 gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {actions.map((action, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Link 
              to={action.link}
              className="flex flex-col items-center justify-center p-3 rounded-xl transition-all"
            >
              <div className={`w-14 h-14 rounded-full ${action.color} flex items-center justify-center mb-3 shadow-sm`}>
                {action.icon}
              </div>
              <span className="text-xs text-teal-800 dark:text-teal-200 font-medium">{action.label}</span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
