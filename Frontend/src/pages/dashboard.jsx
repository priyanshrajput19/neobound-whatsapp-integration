import React, { useEffect, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import axios from "axios";

function Dashboard() {
  // const [businessData, setbusinessData] = useState(null);
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
            // setbusinessData(data.data); // Store the data in state
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
  const checkJSONString = (str) => {
    if (typeof str !== "string") return false;

    const trimmed = str.trim();

    // Quick structural check
    if (!(trimmed.startsWith("{") && trimmed.endsWith("}")) && !(trimmed.startsWith("[") && trimmed.endsWith("]"))) {
      return false;
    }

    // Validate JSON syntax
    try {
      JSON.parse(trimmed);
      return true;
    } catch (error) {
      console.log("Error in checkJSONString: ", error);
      return false;
    }
  };
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
    <>
      <div>
        <div className="header flex justify-between ml-60 pt-2 pl-5 pr-5  ">
          <Typography variant="h6" color="#bfbfbf">
            WhatsApp Integration
            <br />
            Connect your WhatsApp Business and send messages, manage templates and edit your business info
          </Typography>

          <Button variant="contained" sx={{ backgroundColor: "#17a34a" }} onClick={handleWhatsAppSignup}>
            Connect to WhatsApp
          </Button>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
