
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
import SipTracker from "./pages/portfolio/SipTracker";
import Holdings from "./pages/portfolio/Holdings";
import FundDetail from "./pages/portfolio/FundDetail";
import FundCompare from "./pages/explore/FundCompare";
import FundCategories from "./pages/explore/FundCategories";
import Watchlist from "./pages/portfolio/Watchlist";
import LearnSection from "./pages/learn/LearnSection";
import ArticleDetail from "./pages/learn/ArticleDetail";
import FundHouseInfo from "./pages/explore/FundHouseInfo";

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
              <Route path="/" element={<Navigate to="/splash" replace />} />
              <Route path="/splash" element={<SplashScreen />} />
              <Route path="/onboarding" element={<OnboardingScreen />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/signup" element={<Signup />} />
              <Route path="/auth/forgot-password" element={<ForgotPassword />} />
              <Route path="/kyc" element={<KycVerification />} />
              
              <Route path="/" element={<AppLayout />}>
                <Route path="/dashboard" element={<Home />} />
                <Route path="/explore" element={<FundsExplore />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/search" element={<Search />} />
              </Route>
              
              <Route path="/explore/tax-saver-funds" element={<TaxSaverFunds />} />
              <Route path="/explore/fund-compare" element={<FundCompare />} />
              <Route path="/explore/categories" element={<FundCategories />} />
              <Route path="/explore/category/:categoryId" element={<FundsExplore />} />
              <Route path="/explore/fund-house/:id" element={<FundHouseInfo />} />
              
              <Route path="/funds/:fundId" element={<FundDetails />} />
              <Route path="/invest/:fundId" element={<InvestFund />} />
              <Route path="/invest/:fundId/payment" element={<PaymentConfirmation />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              
              <Route path="/portfolio/analysis" element={<PortfolioAnalysis />} />
              <Route path="/portfolio/fund/:fundId" element={<FundDetail />} />
              <Route path="/portfolio/redeem/:fundId" element={<RedeemFund />} />
              <Route path="/portfolio/manage-sip/:fundId" element={<ManageSIP />} />
              <Route path="/portfolio/sip-tracker" element={<SipTracker />} />
              <Route path="/portfolio/holdings" element={<Holdings />} />
              <Route path="/portfolio/watchlist" element={<Watchlist />} />
              
              <Route path="/notifications" element={<NotificationCenter />} />
              
              <Route path="/tools/sip-calculator" element={<SipCalculator />} />
              <Route path="/tools/tax-calculator" element={<TaxCalculator />} />
              
              <Route path="/goals" element={<InvestmentGoals />} />
              
              <Route path="/profile/bank-accounts" element={<BankAccounts />} />
              
              {/* Learn section routes */}
              <Route path="/learn" element={<LearnSection />} />
              <Route path="/learn/article/:id" element={<ArticleDetail />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
