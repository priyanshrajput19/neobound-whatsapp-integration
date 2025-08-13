import React, { useEffect } from "react";
import "./components/Sidebar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard";
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

    // Add message event listener for WhatsApp Embedded Signup
    // window.addEventListener("message", (event) => {
    //   if (!event.origin.endsWith("facebook.com")) return;
    //   try {
    //     const data = JSON.parse(event.data);
    //     if (data.type === "WA_EMBEDDED_SIGNUP") {
    //       console.log("WhatsApp Embedded Signup message event: ", data);
    //     }
    //   } catch {
    //     console.log("WhatsApp Embedded Signup message event: ", event.data);
    //   }
    // });
  }, []);

  // Response callback as per documentation
  // You should handle the response inside a function or effect.
  // For example, you can define a function to handle the response and call it when needed.
  // Remove the misplaced response handling code for now.

  // Launch method as per documentation
  return (
    <>
      <Dashboard />
      <Sidebar />
      {/* Add other components or routes as needed */}
      {/* <Footer /> Uncomment if you have a Footer component */}
    </>
  );
}

export default App;
