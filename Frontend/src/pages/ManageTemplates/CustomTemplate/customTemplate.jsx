import React from "react";
import { Box, Typography, Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import { useState } from "react";
import { customTemplateStyles } from "./customTemplate.styles";
const CustomTemplate = () => {
  const [templateCategory, setTemplateCategory] = useState("");
  const [templateLanguage, setTemplateLanguage] = useState("");
  const handleCategoryChange = (event) => {
    setTemplateCategory(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setTemplateLanguage(event.target.value);
  };

  return (
    <>
      <Box sx={customTemplateStyles.titleContainer}>
        <Typography variant="h6" sx={{ color: "white", marginBottom: "20px" }}>
          New Template Message
        </Typography>

        <Box sx={customTemplateStyles.mainContainer}>
          <Box id="template-category-container">
            <Typography variant="body1" sx={customTemplateStyles.templateCategoryContainer}>
              {" "}
              Template category
              <Typography variant="subtitle2" sx={customTemplateStyles.description}>
                Your Template should fall under the following category:
              </Typography>
            </Typography>
            <FormControl sx={customTemplateStyles.formControl}>
              <InputLabel id="template-category-label" sx={customTemplateStyles.formControlLabel}>
                Select message categories
              </InputLabel>
              <Select labelId="template-category-label" id="template-category" value={templateCategory} label="Select message categories" onChange={handleCategoryChange}>
                <MenuItem value="marketing">Marketing</MenuItem>
                <MenuItem value="utility">Utility</MenuItem>
                <MenuItem value="authentication">Authentication</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box id="template-language-container">
            <Typography variant="body1" sx={customTemplateStyles.templateLanguageContainer}>
              Template Language
              <Typography variant="subtitle2" sx={customTemplateStyles.description}>
                You will need to specify the language of the template you want to create.
              </Typography>
            </Typography>
            <FormControl sx={customTemplateStyles.formControl}>
              <InputLabel id="template-language-label" sx={customTemplateStyles.formControlLabel}>
                Select message language
              </InputLabel>
              <Select labelId="template-language-label" id="template-language" value={templateLanguage} label="Select message language" onChange={handleLanguageChange}>
                <MenuItem value="en_US">English</MenuItem>
                <MenuItem value="en_GB">English (UK)</MenuItem>
                <MenuItem value="fr_FR">French</MenuItem>
                <MenuItem value="es_ES">Spanish</MenuItem>
                <MenuItem value="pt_PT">Portuguese</MenuItem>
                <MenuItem value="ru_RU">Russian</MenuItem>
                <MenuItem value="ar_SA">Arabic</MenuItem>
                <MenuItem value="hi_IN">Hindi</MenuItem>
                <MenuItem value="bn_IN">Bengali</MenuItem>
                <MenuItem value="te_IN">Telugu</MenuItem>
                <MenuItem value="mr_IN">Marathi</MenuItem>
                <MenuItem value="ta_IN">Tamil</MenuItem>
                <MenuItem value="ur_IN">Urdu</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box id="template-name-container">
            <Typography variant="body1" sx={customTemplateStyles.templateNameContainer}>
              Template Name
              <Typography variant="subtitle2" sx={customTemplateStyles.description}>
                Name can only be in lowercase alphanumeric characters and underscores. Special characters and white-spaces are not allowed. example: "welcome_message"
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CustomTemplate;
