
import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "../navigation/BottomNav";
import { AppHeader } from "./AppHeader";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const AppLayout = () => {
  return (
    <ThemeProvider>
      <div className="app-container min-h-screen bg-gradient-to-b from-teal-50/80 to-white dark:from-teal-950 dark:to-teal-900/90 transition-colors duration-300">
        <AppHeader />
        <main className="page-container max-w-lg mx-auto pb-24 pt-2 px-4 min-h-[calc(100vh-60px)]">
          <div className="fixed top-16 right-4 z-10">
            <ThemeToggle />
          </div>
          <Outlet />
        </main>
        <BottomNav />
        <Toaster />
      </div>
    </ThemeProvider>
  );
};

export default AppLayout;
