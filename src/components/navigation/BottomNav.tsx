
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
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
      name: "History",
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
    <div className="fixed-bottom bg-white border-t border-gray-100 py-2 pt-3 px-4 shadow-nav z-50">
      <div className="flex justify-between items-center">
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.name}
              to={item.path}
              className="relative flex flex-col items-center py-1 px-3"
            >
              <motion.div
                initial={false}
                animate={{
                  scale: active ? 1.1 : 1,
                  y: active ? -5 : 0,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`flex items-center justify-center ${
                  active ? "text-app-green" : "text-gray-500"
                }`}
              >
                {item.icon}
                {active && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute -bottom-1 w-5 h-1 bg-app-green rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.div>
              <span className={`text-xs mt-1 ${
                active ? "font-medium text-app-green" : "text-gray-500"
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
