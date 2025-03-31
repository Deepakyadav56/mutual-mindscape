
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SplashScreen from "./components/onboarding/SplashScreen";
import OnboardingScreen from "./components/onboarding/OnboardingScreen";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import KycVerification from "./pages/kyc/KycVerification";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/dashboard/Home";
import FundsExplore from "./pages/explore/FundsExplore";
import FundDetails from "./pages/explore/FundDetails";
import InvestFund from "./pages/invest/InvestFund";
import PaymentConfirmation from "./pages/invest/PaymentConfirmation";
import PaymentSuccess from "./pages/invest/PaymentSuccess";
import Portfolio from "./pages/portfolio/Portfolio";
import Transactions from "./pages/transactions/Transactions";
import Profile from "./pages/profile/Profile";
import BankAccounts from "./pages/profile/BankAccounts";
import InvestmentGoals from "./pages/goals/InvestmentGoals";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner position="top-right" closeButton />
          <BrowserRouter>
            <Routes>
              {/* Onboarding & Auth Flow */}
              <Route path="/" element={<Navigate to="/splash" replace />} />
              <Route path="/splash" element={<SplashScreen />} />
              <Route path="/onboarding" element={<OnboardingScreen />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/signup" element={<Signup />} />
              <Route path="/kyc" element={<KycVerification />} />
              
              {/* Main App Routes */}
              <Route path="/" element={<AppLayout />}>
                <Route path="/dashboard" element={<Home />} />
                <Route path="/explore" element={<FundsExplore />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
              
              {/* Fund Details & Investment Flow */}
              <Route path="/funds/:fundId" element={<FundDetails />} />
              <Route path="/invest/:fundId" element={<InvestFund />} />
              <Route path="/invest/:fundId/payment" element={<PaymentConfirmation />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              
              {/* Investment Goals */}
              <Route path="/goals" element={<InvestmentGoals />} />
              
              {/* Profile Subroutes */}
              <Route path="/profile/bank-accounts" element={<BankAccounts />} />
              
              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
