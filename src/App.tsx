
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
import ForgotPassword from "./pages/auth/ForgotPassword";
import KycVerification from "./pages/kyc/KycVerification";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/dashboard/Home";
import FundsExplore from "./pages/explore/FundsExplore";
import TaxSaverFunds from "./pages/explore/TaxSaverFunds";
import FundDetails from "./pages/explore/FundDetails";
import InvestFund from "./pages/invest/InvestFund";
import PaymentConfirmation from "./pages/invest/PaymentConfirmation";
import PaymentSuccess from "./pages/invest/PaymentSuccess";
import Portfolio from "./pages/portfolio/Portfolio";
import PortfolioAnalysis from "./pages/portfolio/PortfolioAnalysis";
import Transactions from "./pages/transactions/Transactions";
import Profile from "./pages/profile/Profile";
import BankAccounts from "./pages/profile/BankAccounts";
import InvestmentGoals from "./pages/goals/InvestmentGoals";
import RedeemFund from "./pages/portfolio/RedeemFund";
import ManageSIP from "./pages/portfolio/ManageSIP";
import SipCalculator from "./pages/tools/SipCalculator";
import TaxCalculator from "./pages/tools/TaxCalculator";
import NotificationCenter from "./pages/notifications/NotificationCenter";
import Search from "./pages/search/Search";

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
              <Route path="/auth/forgot-password" element={<ForgotPassword />} />
              <Route path="/kyc" element={<KycVerification />} />
              
              {/* Main App Routes */}
              <Route path="/" element={<AppLayout />}>
                <Route path="/dashboard" element={<Home />} />
                <Route path="/explore" element={<FundsExplore />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/search" element={<Search />} />
              </Route>
              
              {/* Explore Routes */}
              <Route path="/explore/tax-saver-funds" element={<TaxSaverFunds />} />
              
              {/* Fund Details & Investment Flow */}
              <Route path="/funds/:fundId" element={<FundDetails />} />
              <Route path="/invest/:fundId" element={<InvestFund />} />
              <Route path="/invest/:fundId/payment" element={<PaymentConfirmation />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              
              {/* Portfolio Management Routes */}
              <Route path="/portfolio/analysis" element={<PortfolioAnalysis />} />
              <Route path="/portfolio/redeem/:fundId" element={<RedeemFund />} />
              <Route path="/portfolio/manage-sip/:fundId" element={<ManageSIP />} />
              
              {/* Notifications */}
              <Route path="/notifications" element={<NotificationCenter />} />
              
              {/* Tools */}
              <Route path="/tools/sip-calculator" element={<SipCalculator />} />
              <Route path="/tools/tax-calculator" element={<TaxCalculator />} />
              
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
