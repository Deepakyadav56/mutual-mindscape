
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const OnboardingScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: "Invest with Confidence",
      description: "Explore top-performing mutual funds with detailed analytics and insights.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 text-finance-accent"
        >
          <line x1="12" y1="20" x2="12" y2="10" />
          <line x1="18" y1="20" x2="18" y2="4" />
          <line x1="6" y1="20" x2="6" y2="16" />
        </svg>
      ),
    },
    {
      title: "Set Financial Goals",
      description: "Plan your investments with specific goals and track your progress.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 text-finance-accent"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "Smart Portfolio Management",
      description: "Real-time tracking and intelligent recommendations for your investments.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 text-finance-accent"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    },
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate("/auth/login");
    }
  };

  const handleSkip = () => {
    navigate("/auth/login");
  };

  return (
    <div className="onboarding-container bg-finance-light">
      <div className="max-w-md w-full">
        <Card className="p-8 animate-fade-up shadow-lg border-0">
          <div className="flex justify-center mb-8">
            {slides[currentSlide].icon}
          </div>
          
          <h1 className="text-2xl font-bold text-finance-primary mb-4">
            {slides[currentSlide].title}
          </h1>
          
          <p className="text-finance-muted mb-8">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex justify-center mb-8">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 mx-1 rounded-full ${
                  index === currentSlide
                    ? "bg-finance-accent"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          
          <div className="flex flex-col gap-3">
            <Button 
              onClick={handleNext}
              className="bg-finance-accent hover:bg-finance-accent/90 text-white"
            >
              {currentSlide < slides.length - 1 ? "Next" : "Get Started"}
            </Button>
            
            {currentSlide < slides.length - 1 && (
              <Button
                variant="ghost"
                onClick={handleSkip}
                className="text-finance-muted hover:text-finance-primary"
              >
                Skip
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OnboardingScreen;
