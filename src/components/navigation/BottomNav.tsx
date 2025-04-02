
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, BarChart, Landmark, Send } from "lucide-react";

const BottomNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  const navItems = [
    {
      name: "Stocks",
      path: "/stocks",
      icon: <Landmark className="w-5 h-5" />,
    },
    {
      name: "Mutual Funds",
      path: "/dashboard",
      icon: <BarChart className="w-5 h-5" />,
    },
    {
      name: "UPI",
      path: "/upi",
      icon: <Send className="w-5 h-5" />,
    },
    {
      name: "Credit",
      path: "/credit",
      icon: <CreditCard className="w-5 h-5" />,
    },
  ];

  return (
    <div className="groww-bottom-nav">
      {navItems.map((item) => {
        const active = isActive(item.path);
        return (
          <Link
            key={item.name}
            to={item.path}
            className={`groww-bottom-nav-item ${
              active ? "groww-bottom-nav-item-active" : "groww-bottom-nav-item-inactive"
            }`}
          >
            <div className="relative">
              {item.icon}
              {active && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-app-groww-blue rounded-full"
                  initial={false}
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 30 
                  }}
                />
              )}
            </div>
            <span className="text-xs mt-1">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNav;
