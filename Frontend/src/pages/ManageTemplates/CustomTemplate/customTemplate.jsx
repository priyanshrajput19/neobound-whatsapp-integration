import React from "react";
import { Box, Typography } from "@mui/material";
import { customTemplateStyles } from "./customTemplate.styles";
const CustomTemplate = () => {
  return (
    <>
      <Box sx={customTemplateStyles.mainContainer}>
        <Typography variant="h6" sx={{ color: "white", marginBottom: "20px" }}>
          New Template Message
        </Typography>
        <Box sx={customTemplateStyles.formContainer}></Box>
      </Box>
    </>
  );
};

export default CustomTemplate;
