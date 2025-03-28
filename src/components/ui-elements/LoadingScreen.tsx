
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-finance-light">
      <div className="w-24 h-24 rounded-full border-t-4 border-finance-accent animate-spin"></div>
      <p className="mt-6 text-finance-dark font-medium">Loading...</p>
    </div>
  );
};

export default LoadingScreen;
