
import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "../navigation/BottomNav";

const AppLayout = () => {
  return (
    <div className="app-container bg-app-mint">
      <div className="page-container min-h-screen pb-20">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
};

export default AppLayout;
