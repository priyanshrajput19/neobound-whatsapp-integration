import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Card, CardContent, Stack, Collapse } from "@mui/material";
import axios from "axios";
import TableComponent from "../../components/TableComponent";
import { templatesStyles } from "./templates.styles";

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

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
    axios
      .get(`${apiUrl}/businessData`)
      .then((res) => {
        setBusinessData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const viewTemplates = async (waba_id, businessIndex) => {
    try {
      const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
      const params = {
        waba_id: waba_id,
      };
      const response = await axios.get(`${apiUrl}/viewTemplates`, { params });
      console.log("Template data", response.data.data);

      // Store templates for this specific business
      setBusinessTemplates((prev) => ({
        ...prev,
        [businessIndex]: response.data.data,
      }));

      setExpandedBusiness(expandedBusiness === businessIndex ? null : businessIndex);
    } catch (error) {
      console.error("Error fetching templates:", error);
      setBusinessTemplates((prev) => ({
        ...prev,
        [businessIndex]: [],
      }));
    }
  };

  const createTemplate = async (waba_id) => {
    try {
      const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
      const response = await axios.post(`${apiUrl}/createTemplate`, { waba_id: waba_id });
      console.log("Template created", response.data);
    } catch (error) {
      console.error("Error creating template:", error);
    }
  };

  return (
    <>
      <div className="header" style={templatesStyles.header}>
        <Typography variant="h6" color="#bfbfbf">
          Templates
        </Typography>
      </div>
      <div style={templatesStyles.mainContainer}>
        <div>
          {businessData.map((data, index) => (
            <Card key={index} sx={templatesStyles.card}>
              <CardContent sx={templatesStyles.cardContent}>
                <Box sx={templatesStyles.businessInfoContainer}>
                  <Stack direction="column">
                    <Typography variant="h6" sx={templatesStyles.businessName}>
                      {data.business_name}
                    </Typography>
                    <Typography variant="body2" sx={templatesStyles.businessId}>
                      {data.business_id}
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <Button variant="contained" sx={templatesStyles.primaryButton} onClick={() => viewTemplates(data.waba_id, index)}>
                      {expandedBusiness === index ? "Hide Templates" : "View Templates"}
                    </Button>
                    <Button className="h-10" variant="contained" sx={templatesStyles.primaryButton} onClick={() => createTemplate(data.waba_id)}>
                      Create Template
                    </Button>
                  </Stack>
                </Box>

                {/* Expandable table section */}
                <Collapse in={expandedBusiness === index} timeout="auto" unmountOnExit>
                  <Box sx={templatesStyles.expandableSection}>
                    {businessTemplates[index] && businessTemplates[index].length > 0 ? (
                      <TableComponent columns={COLUMNS} data={businessTemplates[index]} />
                    ) : (
                      <Typography variant="body1" sx={templatesStyles.noTemplatesMessage}>
                        No templates found for this business
                      </Typography>
                    )}
                  </Box>
                </Collapse>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Templates;
