import React, { useState } from "react";
import { manageTemplatesStyles } from "./ManageTemplates.styles";
import { Box, Typography, Button } from "@mui/material";
import Templates from "./Templates/templates";
import TemplateLibrary from "./TemplateLibrary/TemplateLibrary";

const ManageTemplates = () => {
  const [activeTab, setActiveTab] = useState("Explore");

  return (
    <>
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
        <Button variant="contained" color="primary" sx={manageTemplatesStyles.newTemplateButton}>
          + New
        </Button>
      </Box>

      {/* Content based on active tab */}
      {activeTab === "Explore" ? <TemplateLibrary /> : <Templates />}
    </>
  );
};

export default ManageTemplates;
