import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Card, CardContent, Box, Button, Stack } from "@mui/material";
import axios from "axios";
import { connectedAccStyles } from "./ConnectedAcc.styles";

const ConnectedAcc = () => {
  const [businessData, setBusinessData] = useState([]);
  const [businessPhoneNumber, setBusinessPhoneNumber] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
    axios
      .get(`${apiUrl}/businessData`)
      .then(async (res) => {
        await setBusinessData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const createTemplateHandler = () => {
    navigate("/templates");
  };

  const getPhoneNumberHandler = () => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
    axios
      .get(`${apiUrl}/businessPhoneNumber`)
      .then(async (res) => {
        await setBusinessPhoneNumber(res.data);
        console.log(res.data);
        console.log(businessPhoneNumber);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="header" style={connectedAccStyles.header}>
        <Typography variant="h6" sx={connectedAccStyles.headerTitle}>
          Connected Accounts
        </Typography>
      </div>

      {/* Integration Cards */}
      <div style={connectedAccStyles.contentContainer}>
        <div>
          {businessData.map((data, index) => (
            <Card key={index} sx={connectedAccStyles.card}>
              <CardContent sx={connectedAccStyles.cardContent}>
                <Box sx={connectedAccStyles.cardHeader}>
                  <Stack direction="column">
                    <Typography sx={connectedAccStyles.businessName}>{data.business_name}</Typography>
                    <Typography sx={connectedAccStyles.businessId}>{data.business_id}</Typography>
                  </Stack>
                  <Button variant="contained" sx={connectedAccStyles.createTemplateButton} onClick={createTemplateHandler}>
                    Create template
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectedAcc;
