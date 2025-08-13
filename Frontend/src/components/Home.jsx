import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../../index.css";
import Templates from "../pages/templates";

import Sidebar from "./Sidebar";

import Dashboard from "../pages/dashboard";
function Home() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/templates" element={<Templates />}></Route>
        </Routes>
      </Router>
      {/*  */}
    </div>
  );
}
export default Home;
