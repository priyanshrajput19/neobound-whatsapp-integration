import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Card, CardContent, Box, Button, Stack } from "@mui/material";
import axios from "axios";

const ConnectedAcc = () => {
  const [businessData, setBusinessData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/businessData")
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

  return (
    <div>
      <div className="header flex justify-between ml-60 pt-2 pl-5 pr-5">
        <Typography variant="h6" color="#bfbfbf">
          Connected Accounts
        </Typography>
      </div>

      {/* Integration Cards */}
      <div className="ml-60 pt-4 pl-5 pr-5">
        <div>
          {businessData.map((data, index) => (
            <Card
              key={index}
              sx={{
                backgroundColor: "#2a2a2a",
                borderRadius: "12px",
                border: "1px solid #3a3a3a",
                marginBottom: "16px",
                transition: "all .3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                  borderColor: "#505560",
                },
              }}
            >
              <CardContent sx={{ padding: "24px" }}>
                <Box className="flex justify-between">
                  <Stack direction="column">
                    <Typography sx={{ color: "#bfbfbf" }}>{data.business_name}</Typography>
                    <Typography color="#bfbfbf">{data.business_id}</Typography>
                  </Stack>
                  <Button variant="contained" sx={{ backgroundColor: "#17a34a", color: "white" }} onClick={createTemplateHandler}>
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
