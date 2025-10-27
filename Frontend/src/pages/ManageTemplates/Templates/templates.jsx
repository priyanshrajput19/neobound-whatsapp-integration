import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import TableComponent from "../../../components/TableComponent/TableComponent";

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

  const [businessTemplates, setBusinessTemplates] = useState([]);

  const fetchTemplates = async (waba_id) => {
    try {
      const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
      const params = {
        waba_id: waba_id,
      };
      const response = await axios.get(`${apiUrl}/viewTemplates`, { params });
      console.log("Template data", response.data.data);

      // Store templates
      setBusinessTemplates(response.data.data);
    } catch (error) {
      console.error("Error fetching templates:", error);
      setBusinessTemplates([]);
    }
  };

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
    axios
      .get(`${apiUrl}/businessData`)
      .then((res) => {
        // Automatically fetch templates for the first business
        if (res.data && res.data.length > 0) {
          fetchTemplates(res.data[0].waba_id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box sx={{ marginLeft: "240px", padding: "20px" }}>
      {businessTemplates && businessTemplates.length > 0 ? (
        <TableComponent columns={COLUMNS} data={businessTemplates} />
      ) : (
        <Typography variant="body1" sx={{ color: "#666", textAlign: "center", padding: "40px" }}>
          Loading templates...
        </Typography>
      )}
    </Box>
  );
};

export default Templates;
