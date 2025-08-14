import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <>
      <div>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
