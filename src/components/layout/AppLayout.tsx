
import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "../navigation/BottomNav";
import { AppHeader } from "./AppHeader";

const AppLayout = () => {
  return (
    <div className="app-container">
      <AppHeader />
      <div className="max-w-lg mx-auto bg-app-groww-bg-dark min-h-screen pb-20">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
};

export default AppLayout;
