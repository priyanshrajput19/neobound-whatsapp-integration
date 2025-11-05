import React from "react";
import { Box, Typography } from "@mui/material";
import { customTemplateStyles } from "./customTemplate.styles";
const CustomTemplate = () => {
  return (
    <>
      <Box sx={customTemplateStyles.titleContainer}>
        <Typography variant="h6" sx={{ color: "white", marginBottom: "20px" }}>
          New Template Message
        </Typography>
        <Box sx={customTemplateStyles.mainContainer}>
          <Typography variant="body1" sx={{ color: "white", marginBottom: "20px" }}>
            {" "}
            Template category
            <Typography variant="subtitle2" sx={{ color: "#acacac" }}>
              Your Template should fall under the following category:
            </Typography>
          </Typography>
          <Typography variant="body1" sx={{ color: "white", marginBottom: "20px" }}>
            Template Language
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CustomTemplate;
