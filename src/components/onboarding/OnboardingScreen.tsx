
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Check, ArrowLeft } from "lucide-react";

const OnboardingScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: "Invest with Confidence",
      description: "Explore top-performing mutual funds with detailed analytics and insights.",
      icon: (
        <motion.div 
          className="rounded-full bg-app-green/10 p-6"
          whileHover={{ scale: 1.05 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-16 h-16 text-app-green"
          >
            <line x1="12" y1="20" x2="12" y2="10" />
            <line x1="18" y1="20" x2="18" y2="4" />
            <line x1="6" y1="20" x2="6" y2="16" />
          </svg>
        </motion.div>
      ),
    },
    {
      title: "Set Financial Goals",
      description: "Plan your investments with specific goals and track your progress over time.",
      icon: (
        <motion.div 
          className="rounded-full bg-app-blue/10 p-6"
          whileHover={{ scale: 1.05 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-16 h-16 text-app-blue"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </motion.div>
      ),
    },
    {
      title: "Smart Portfolio Management",
      description: "Real-time tracking and intelligent recommendations for optimizing your investments.",
      icon: (
        <motion.div 
          className="rounded-full bg-yellow-100 p-6"
          whileHover={{ scale: 1.05 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-16 h-16 text-yellow-600"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
        </motion.div>
      ),
    },
    {
      title: "Ready to Get Started?",
      description: "Begin your investment journey today with WealthWise and achieve your financial goals.",
      icon: (
        <motion.div 
          className="rounded-full bg-green-100 p-6"
          whileHover={{ scale: 1.05 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-16 h-16 text-green-600"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </motion.div>
      ),
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate("/auth/login");
    }
  };

  const handleBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleSkip = () => {
    navigate("/auth/login");
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  return (
    <div className="onboarding-container bg-gradient-to-b from-app-mint to-white">
      <div className="max-w-md w-full">
        {currentSlide > 0 && (
          <motion.button
            className="absolute top-8 left-8 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md"
            whileTap={{ scale: 0.95 }}
            onClick={handleBack}
          >
            <ArrowLeft className="h-5 w-5 text-app-charcoal" />
          </motion.button>
        )}
        
        <AnimatePresence custom={currentSlide}>
          <motion.div
            key={currentSlide}
            custom={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <Card className="p-8 rounded-3xl shadow-lg border-0 bg-white/90 backdrop-blur-sm">
              <div className="flex flex-col items-center">
                <motion.div 
                  className="flex justify-center mb-10"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {slides[currentSlide].icon}
                </motion.div>
                
                <motion.h1 
                  className="text-2xl font-bold text-app-charcoal mb-4 text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>
                
                <motion.p 
                  className="text-app-charcoal/80 mb-10 text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {slides[currentSlide].description}
                </motion.p>
                
                <motion.div 
                  className="flex justify-center mb-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 mx-1.5 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-app-green scale-110"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </motion.div>
                
                <motion.div 
                  className="flex flex-col gap-4 w-full"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Button 
                    onClick={handleNext}
                    className="bg-app-green hover:bg-app-green/90 text-white py-6 rounded-xl flex items-center justify-center gap-2"
                  >
                    {currentSlide < slides.length - 1 ? (
                      <>Next <ChevronRight className="h-5 w-5" /></>
                    ) : (
                      <>Get Started <Check className="h-5 w-5" /></>
                    )}
                  </Button>
                  
                  {currentSlide < slides.length - 1 && (
                    <Button
                      variant="ghost"
                      onClick={handleSkip}
                      className="text-app-charcoal hover:text-app-primary py-3"
                    >
                      Skip
                    </Button>
                  )}
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OnboardingScreen;
