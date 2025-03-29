
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-app-mint p-6">
      <div className="animate-fade-in flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-app-charcoal flex items-center justify-center mb-8 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-12 h-12 text-app-mint"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-app-charcoal mb-2 font-sf-pro">WealthWise</h1>
        <p className="text-app-charcoal opacity-80 font-medium">Your smart investment partner</p>
      </div>
    </div>
  );
};

export default SplashScreen;
