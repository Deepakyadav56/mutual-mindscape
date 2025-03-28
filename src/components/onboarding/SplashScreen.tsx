
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading time before redirecting
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-finance-primary to-finance-dark p-6">
      <div className="animate-fade-in">
        <div className="w-24 h-24 rounded-full bg-finance-secondary flex items-center justify-center mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-12 h-12 text-white"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">WealthWise</h1>
        <p className="text-gray-300">Your smart investment partner</p>
      </div>
    </div>
  );
};

export default SplashScreen;
