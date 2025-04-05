
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
    <div className="fixed-bottom bg-white/80 backdrop-blur-lg dark:bg-teal-900/90 dark:backdrop-blur-lg border-t border-gray-100 dark:border-teal-800/50 py-1 pt-2 px-4 shadow-nav z-50 transition-colors duration-300">
      <div className="flex justify-between items-center">
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.name}
              to={item.path}
              className="relative flex flex-col items-center py-2 px-3"
            >
              <div className="relative">
                {active && (
                  <motion.div
                    layoutId="navBackground"
                    className="absolute inset-0 -m-1 bg-teal-500/10 dark:bg-teal-500/20 rounded-full w-12 h-12 z-0"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
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
                    className={`flex items-center justify-center relative z-10 ${
                      active ? "text-teal-600 dark:text-teal-300" : "text-teal-800/70 dark:text-teal-100/70"
                    }`}
                  >
                    {item.icon}
                  </motion.div>
                </AnimatePresence>
              </div>
              <span className={`text-xs mt-1 transition-colors ${
                active ? "font-medium text-teal-600 dark:text-teal-300" : "text-teal-800/70 dark:text-teal-100/70"
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
