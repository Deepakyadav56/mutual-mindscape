
import React from "react";
import { Navigate } from "react-router-dom";

const Index = () => {
  // Redirect to the splash screen (which will then redirect to onboarding)
  return <Navigate to="/splash" replace />;
};

export default Index;
