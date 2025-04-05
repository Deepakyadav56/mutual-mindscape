
import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "../navigation/BottomNav";
import { AppHeader } from "./AppHeader";

const AppLayout = () => {
  return (
    <div className="app-container bg-gradient-to-b from-teal-50 to-white min-h-screen">
      <AppHeader />
      <div className="page-container max-w-lg mx-auto min-h-screen pb-20 pt-2">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
};

export default AppLayout;
