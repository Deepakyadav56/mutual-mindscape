
import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "../navigation/BottomNav";
import { AppHeader } from "./AppHeader";
import { Toaster } from "@/components/ui/toaster";

const AppLayout = () => {
  return (
    <div className="app-container bg-gradient-to-b from-teal-50 to-white min-h-screen">
      <AppHeader />
      <main className="page-container max-w-lg mx-auto min-h-screen pb-24 pt-2 px-4">
        <Outlet />
      </main>
      <BottomNav />
      <Toaster />
    </div>
  );
};

export default AppLayout;
