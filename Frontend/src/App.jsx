import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/Sidebar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard";
import BusinessInfo from "./pages/businessInfo";
import ConnectedAcc from "./pages/connectedAcc";
import Templates from "./pages/templates";
import Typography from "@mui/material/Typography";
import Layout from "./components/layout";
function App() {
  // Initialize Facebook SDK
  useEffect(() => {
    console.log("App component mounted, loading Facebook SDK script...");

    window.fbAsyncInit = function () {
      console.log("fbAsyncInit called");
      try {
        // Check if App ID is configured
        const appId = "1456392682027447";
        if (appId === "YOUR_FACEBOOK_APP_ID" || appId === "") {
          return;
        }
        console.log("Initializing Facebook SDK with App ID:", appId);
        window.FB.init({
          appId: appId,
          autoLogAppEvents: true,
          xfbml: true,
          version: "v23.0", // Use requested version
        });
        console.log("Facebook SDK initialized successfully");
      } catch (error) {
        console.error("Error in fbAsyncInit:", error);
      }
    };

    // If SDK loads after window.fbAsyncInit is set, call it manually
    if (window.FB && window.fbAsyncInit) {
      window.fbAsyncInit();
    }
  }, []);

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="templates" element={<Templates />} />
            <Route path="businessInfo" element={<BusinessInfo />} />
            <Route path="connectedAcc" element={<ConnectedAcc />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
