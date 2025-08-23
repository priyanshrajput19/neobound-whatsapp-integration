import React, { useEffect, useRef } from "react";
import { Typography, Button, Stack } from "@mui/material";
import { checkJSONString } from "../utils/utility";
import axios from "axios";

const Dashboard = () => {
  const businessDataRef = useRef(null);
  console.log("dashboard rendered");

  useEffect(() => {
    console.log("useEffect rendered");

    const handleMessage = (event) => {
      if (!event.origin.endsWith("facebook.com")) return;
      try {
        if (checkJSONString(event.data)) {
          const data = JSON.parse(event.data);
          if (data.type === "WA_EMBEDDED_SIGNUP") {
            console.log("WhatsApp Embedded Signup message event: ", data);
            businessDataRef.current = data.data;
          }
        }
      } catch (error) {
        console.log("WhatsApp Embedded Signup message event: ", error);
      }
    };

    window.addEventListener("message", handleMessage);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const fbLoginCallback = (response) => {
    if (response.authResponse) {
      const code = response.authResponse.code;
      console.log("WhatsApp signup response code: ", code);

      console.log(businessDataRef.current);
      // Now you can access the WhatsApp data from state
      if (businessDataRef.current) {
        console.log("WhatsApp data from event listener:", businessDataRef.current);
        updateBusinessData(code);
        // Use both the response code and WhatsApp data here
      }
    } else {
      console.log("WhatsApp signup response: ", response);
    }
  };

  const handleWhatsAppSignup = () => {
    try {
      console.log("Attempting WhatsApp signup...");

      // Check if Facebook SDK is loaded
      if (!window.FB) {
        throw new Error("Facebook SDK not loaded. Please check your internet connection.");
      }

      console.log("Facebook SDK found, launching WhatsApp signup...");

      // Launch WhatsApp Embedded Signup as per documentation
      window.FB.login(fbLoginCallback, {
        config_id: import.meta.env.VITE_FACEBOOK_CONFIG_ID || "607434165525768", // Use environment variable
        response_type: "code",
        override_default_response_type: true,
        extras: {
          setup: {},
          featureType: "whatsapp_business_embedded_signup",
          sessionInfoVersion: "3",
        },
      });
    } catch (error) {
      console.error("Error launching WhatsApp signup:", error);
    }
  };

  const updateBusinessData = (code) => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
    axios
      .post(`${apiUrl}/businessData`, {
        tempCode: code,
        businessData: businessDataRef.current,
      })
      .then(function (response) {
        if (response.status === 200) {
          console.log(response);
        } else {
          console.log(response);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <div className="header flex justify-between ml-60 items-center">
        <Stack direction="column" spacing={0}>
          <Typography variant="h6" color="#bfbfbf">
            WhatsApp Integration
          </Typography>
          <Typography variant="body1" color="#999999">
            Connect your WhatsApp Business and send messages, manage templates and edit your business info
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Button variant="contained" sx={{ backgroundColor: "#17a34a" }} className="h-10" onClick={handleWhatsAppSignup}>
            Connect to WhatsApp
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Dashboard;
