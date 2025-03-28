
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SplashScreen from "./components/onboarding/SplashScreen";
import OnboardingScreen from "./components/onboarding/OnboardingScreen";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/dashboard/Home";
import FundsExplore from "./pages/explore/FundsExplore";
import Portfolio from "./pages/portfolio/Portfolio";
import Transactions from "./pages/transactions/Transactions";
import Profile from "./pages/profile/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Onboarding Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/onboarding" element={<OnboardingScreen />} />
          
          {/* Authentication Routes */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          
          {/* App Routes */}
          <Route path="/" element={<AppLayout />}>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/explore" element={<FundsExplore />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
