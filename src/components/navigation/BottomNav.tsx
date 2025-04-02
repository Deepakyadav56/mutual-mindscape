
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Search, PieChart, Clock, User } from "lucide-react";

const BottomNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  const navItems = [
    {
      name: "Home",
      path: "/dashboard",
      icon: <Home className="w-5 h-5" />,
    },
    {
      name: "Explore",
      path: "/explore",
      icon: <Search className="w-5 h-5" />,
    },
    {
      name: "Portfolio",
      path: "/portfolio",
      icon: <PieChart className="w-5 h-5" />,
    },
    {
      name: "Transactions",
      path: "/transactions",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <User className="w-5 h-5" />,
    },
  ];

  return (
    <div className="fixed-bottom bg-app-dark-blue border-t border-gray-800 py-1 pt-1 px-4 shadow-nav z-50">
      <div className="flex justify-between items-center">
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.name}
              to={item.path}
              className="relative flex flex-col items-center py-2 px-3"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: active ? 1.1 : 1,
                    opacity: 1,
                    y: active ? -4 : 0,
                  }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 30,
                    bounce: 0.3
                  }}
                  className={`flex items-center justify-center ${
                    active ? "text-app-green" : "text-gray-400"
                  }`}
                >
                  {item.icon}
                  {active && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-1 w-6 h-1.5 bg-app-green rounded-full"
                      initial={false}
                      transition={{ 
                        type: "spring", 
                        stiffness: 500, 
                        damping: 30 
                      }}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
              <span className={`text-xs mt-1 transition-colors ${
                active ? "font-medium text-app-green" : "text-gray-400"
              }`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
