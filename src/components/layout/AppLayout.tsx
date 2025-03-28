
import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "../navigation/BottomNav";

const AppLayout = () => {
  return (
    <div className="app-container">
      <div className="page-container">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
};

export default AppLayout;
