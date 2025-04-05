
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading time before redirecting
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-teal-100 to-white p-6">
      <motion.div 
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="w-28 h-28 rounded-full bg-gradient-to-br from-teal-700 to-teal-800 flex items-center justify-center mb-8 shadow-xl"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-14 h-14 text-teal-100"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </motion.div>
        <motion.h1 
          className="text-5xl font-bold text-teal-800 mb-2 font-sf-pro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          WealthWise
        </motion.h1>
        <motion.p 
          className="text-teal-700 opacity-80 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Your smart investment partner
        </motion.p>
        
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="flex gap-2">
            <div className="h-2 w-2 bg-teal-500 rounded-full animate-pulse"></div>
            <div className="h-2 w-2 bg-teal-500 rounded-full animate-pulse" style={{ animationDelay: "300ms" }}></div>
            <div className="h-2 w-2 bg-teal-500 rounded-full animate-pulse" style={{ animationDelay: "600ms" }}></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
