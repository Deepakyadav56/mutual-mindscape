
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900 dark:to-teal-950 p-6">
      <motion.div 
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="w-32 h-32 rounded-3xl bg-gradient-to-br from-teal-600 to-teal-800 dark:from-teal-500 dark:to-teal-700 flex items-center justify-center mb-10 shadow-xl overflow-hidden relative"
          initial={{ y: 20, scale: 0.8 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-16 h-16 text-white"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute -right-6 -bottom-6 w-12 h-12 rounded-full bg-white/20"></div>
          <div className="absolute -left-4 -top-4 w-8 h-8 rounded-full bg-white/10"></div>
        </motion.div>
        
        <motion.h1 
          className="text-6xl font-bold text-teal-800 dark:text-teal-200 mb-1 font-sf-pro tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          WealthWise
        </motion.h1>
        
        <motion.p 
          className="text-teal-600 dark:text-teal-400 opacity-90 font-medium text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Your smart investment partner
        </motion.p>
        
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="flex gap-3">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5, 
                ease: "easeInOut" 
              }}
              className="h-2.5 w-2.5 bg-teal-500 dark:bg-teal-400 rounded-full"
            ></motion.div>
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5, 
                delay: 0.2,
                ease: "easeInOut" 
              }}
              className="h-2.5 w-2.5 bg-teal-500 dark:bg-teal-400 rounded-full"
            ></motion.div>
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7], 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5, 
                delay: 0.4,
                ease: "easeInOut" 
              }}
              className="h-2.5 w-2.5 bg-teal-500 dark:bg-teal-400 rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
