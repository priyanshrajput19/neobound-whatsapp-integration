import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import TableComponent from "../components/TableComponent";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Templates = () => {
  const COLUMNS = [
    { id: "name", label: "Template Name" },
    { id: "category", label: "Category" },
    { id: "language", label: "Language" },
    { id: "status", label: "Status" },
    { id: "messages_sent", label: "Messages Sent" },
    { id: "messages_opened", label: "Messages Opened" },
    { id: "last_edited", label: "Last Edited" },
    { id: "top_block_reason", label: "Top Block Reason" },
  ];

  const [businessData, setBusinessData] = useState([]);
  const [businessTemplates, setBusinessTemplates] = useState({});
  const [expandedBusiness, setExpandedBusiness] = useState(null);

  const viewTemplates = async (waba_id, businessIndex) => {
    try {
      const params = {
        waba_id: waba_id,
      };
      const response = await axios.get("http://localhost:3000/viewTemplates", { params });
      console.log("Template data", response.data.data);

      // Store templates for this specific business
      setBusinessTemplates((prev) => ({
        ...prev,
        [businessIndex]: response.data.data,
      }));

      // Expand the accordion for this business
      setExpandedBusiness(businessIndex);
    } catch (error) {
      console.error("Error fetching templates:", error);
      setBusinessTemplates((prev) => ({
        ...prev,
        [businessIndex]: [],
      }));
    }
  };

  const handleAccordionChange = (businessIndex) => (event, isExpanded) => {
    setExpandedBusiness(isExpanded ? businessIndex : null);
  };

  const createTemplate = () => {
    const url = "https://graph.facebook.com/v23.0/102290129340398/message_templates";

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer EAAJB...");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name: "seasonal_promotion",
      language: "en_US",
      category: "MARKETING",
      components: [
        {
          type: "HEADER",
          format: "TEXT",
          text: "Our {{1}} is on!",
          example: {
            header_text: ["Summer Sale"],
          },
        },
        {
          type: "BODY",
          text: "Shop now through {{1}} and use code {{2}} to get {{3}} off of all merchandise.",
          example: {
            body_text: [["the end of August", "25OFF", "25%"]],
          },
        },
        {
          type: "FOOTER",
          text: "Use the buttons below to manage your marketing subscriptions",
        },
        {
          type: "BUTTONS",
          buttons: [
            {
              type: "QUICK_REPLY",
              text: "Unsubscribe from Promos",
            },
            {
              type: "QUICK_REPLY",
              text: "Unsubscribe from All",
            },
          ],
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/businessData")
      .then((res) => {
        setBusinessData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="header flex justify-between ml-60 pt-2 pl-5 pr-5">
        <Typography variant="h6" color="#bfbfbf">
          Templates
        </Typography>
      </div>
      <div className="ml-60 pt-4 pl-5 pr-5">
        <div style={{ width: "100%" }}>
          {businessData.map((data, index) => (
            <Accordion
              key={index}
              expanded={expandedBusiness === index}
              onChange={handleAccordionChange(index)}
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
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                sx={{
                  backgroundColor: "#2a2a2a",
                  borderRadius: "12px",
                  "&:hover": {
                    backgroundColor: "#323232",
                  },
                }}
              >
                <Box className="flex justify-between items-center w-full pr-4">
                  <Stack direction="column" justifyContent="space-between">
                    <Typography variant="h6" sx={{ color: "white", fontWeight: "600", marginBottom: "8px" }}>
                      {data.business_name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#cccccc",
                        lineHeight: "1.5",
                      }}
                    >
                      {data.business_id}
                    </Typography>
                  </Stack>
                  <Box sx={{ padding: "0 24px 16px 24px", backgroundColor: "#2a2a2a" }}>
                    <Stack direction="row" spacing={1} justifyContent="flex-end">
                      <Button variant="contained" sx={{ backgroundColor: "#17a34a" }} onClick={() => viewTemplates(data.waba_id, index)}>
                        View Templates
                      </Button>
                      <Button className="h-10" variant="contained" sx={{ backgroundColor: "#17a34a" }} onClick={createTemplate}>
                        Create Template
                      </Button>
                    </Stack>
                  </Box>
                </Box>
              </AccordionSummary>

              {/* Action buttons placed outside AccordionSummary to avoid nested buttons */}

              <AccordionDetails sx={{ backgroundColor: "#2a2a2a", padding: "24px" }}>
                {businessTemplates[index] && businessTemplates[index].length > 0 ? (
                  <TableComponent columns={COLUMNS} data={businessTemplates[index]} />
                ) : (
                  <Typography variant="body1" sx={{ color: "white" }}>
                    No templates found for this business
                  </Typography>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
};

export default Templates;
