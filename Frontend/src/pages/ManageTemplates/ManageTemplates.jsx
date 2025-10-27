import React, { useState } from "react";
import { manageTemplatesStyles } from "./ManageTemplates.styles";
import { Box, Typography, Button, TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import Templates from "./Templates/templates";
import TemplateLibrary from "./TemplateLibrary/TemplateLibrary";
import { useNavigate } from "react-router-dom";

const ManageTemplates = () => {
  const [activeTab, setActiveTab] = useState("Explore");
  const navigate = useNavigate();

  return (
    <>
      {/* Header Section */}
      <Box sx={manageTemplatesStyles.headerContainer}>
        <Typography variant="h5" sx={manageTemplatesStyles.headerTitle}>
          Template Messages
        </Typography>
        <Button variant="outlined" sx={manageTemplatesStyles.headerButton} onClick={() => navigate("/newTemplate")}>
          + New
        </Button>
      </Box>

      {/* Quick Guide Section */}
      <Box sx={manageTemplatesStyles.quickGuideContainer}>
        <Typography variant="h6" sx={manageTemplatesStyles.quickGuideTitle}>
          Quick Guide
        </Typography>
        <Typography variant="body2" sx={manageTemplatesStyles.quickGuideDescription}>
          You can initiate a conversation with users on WhatsApp using these template messages.
        </Typography>
      </Box>
      {/* Navigation Bar */}
      <Box sx={manageTemplatesStyles.navBar}>
        <Box sx={manageTemplatesStyles.navTabsContainer}>
          <Box sx={manageTemplatesStyles.navItem} onClick={() => setActiveTab("Explore")}>
            <Typography
              variant="body1"
              sx={{
                ...manageTemplatesStyles.navText,
                color: activeTab === "Explore" ? "#17a34a" : "#666",
                borderBottom: activeTab === "Explore" ? "2px solid #17a34a" : "none",
              }}
            >
              Explore
            </Typography>
          </Box>
          <Box sx={manageTemplatesStyles.navItem} onClick={() => setActiveTab("All")}>
            <Typography
              variant="body1"
              sx={{
                ...manageTemplatesStyles.navText,
                color: activeTab === "All" ? "#17a34a" : "#666",
                borderBottom: activeTab === "All" ? "2px solid #17a34a" : "none",
              }}
            >
              All
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Content based on active tab */}
      {activeTab === "Explore" ? <TemplateLibrary /> : <Templates />}
    </>
  );
};

export default ManageTemplates;
