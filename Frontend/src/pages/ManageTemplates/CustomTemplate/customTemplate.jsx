import React from "react";
import { Box, Typography, Select, FormControl, InputLabel, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { customTemplateStyles } from "./customTemplate.styles";
const CustomTemplate = () => {
  const [templateCategory, setTemplateCategory] = useState("");
  const [templateLanguage, setTemplateLanguage] = useState("");
  const [templateType, setTemplateType] = useState("");
  const handleCategoryChange = (event) => {
    setTemplateCategory(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setTemplateLanguage(event.target.value);
  };

  const handleTypeChange = (event) => {
    setTemplateType(event.target.value);
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
              <Select sx={customTemplateStyles.selectControl} labelId="template-category-label" id="template-category" value={templateCategory} label="Select message categories" onChange={handleCategoryChange}>
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
              <Select sx={customTemplateStyles.selectControl} labelId="template-language-label" id="template-language" value={templateLanguage} label="Select message language" onChange={handleLanguageChange}>
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

          <Box id="template-name-container" sx={customTemplateStyles.fullWidthContainer}>
            <Typography variant="body1" sx={customTemplateStyles.fullWidthTemplateContainer}>
              Template Name
              <Typography variant="subtitle2" sx={customTemplateStyles.description}>
                Name can only be in lowercase alphanumeric characters and underscores.
              </Typography>
              <Typography variant="subtitle2" sx={customTemplateStyles.description}>
                Special characters and white-spaces are not allowed.
              </Typography>
              <Typography variant="subtitle2" sx={customTemplateStyles.description}>
                example: "welcome_message"
              </Typography>
            </Typography>
            <TextField sx={customTemplateStyles.InputTextField} placeholder="Enter template name" />
          </Box>

          <Box id="template-type-container" sx={customTemplateStyles.fullWidthContainer}>
            <Typography variant="body1" sx={customTemplateStyles.fullWidthTemplateContainer}>
              Template Type
              <Typography variant="subtitle2" sx={customTemplateStyles.description}>
                You will need to specify the type of template you want to create.
              </Typography>
            </Typography>
            <FormControl sx={customTemplateStyles.widthFull}>
              <InputLabel id="template-type-label" sx={customTemplateStyles.formControlLabel}>
                Select template type
              </InputLabel>
              <Select sx={customTemplateStyles.selectControl} labelId="template-type-label" id="template-type" value={templateType} label="Select template type" onChange={handleTypeChange}>
                <MenuItem value="text">Text</MenuItem>
                <MenuItem value="image">Image</MenuItem>
                <MenuItem value="video">Video</MenuItem>
                <MenuItem value="document">Document</MenuItem>
                <MenuItem value="sticker">Location</MenuItem>
                <MenuItem value="carousel">Carousel</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box id="template-headerText-container" sx={customTemplateStyles.fullWidthContainer}>
            <Typography variant="body1" sx={customTemplateStyles.fullWidthTemplateContainer}>
              Template Header Text
              <Typography variant="subtitle2" sx={customTemplateStyles.description}>
                Header Text is optional and only upto 60 characters are allowed.
              </Typography>
            </Typography>
            <TextField sx={customTemplateStyles.InputTextField} placeholder="Enter header text" />
          </Box>

          <Box id="template-bodyFormat-container" sx={customTemplateStyles.fullWidthContainer}>
            <Typography variant="body1" sx={customTemplateStyles.fullWidthTemplateContainer}>
              Template Format
              <Typography variant="subtitle2" sx={customTemplateStyles.description}>
                Your message content.Up to 1024 characters are allowed.
              </Typography>
              <Typography variant="subtitle2" sx={customTemplateStyles.description}>
                example: "Hello {"1"}, welcome to our platform."
              </Typography>
            </Typography>
            <TextField sx={customTemplateStyles.InputTextField} placeholder="Enter body text" />
          </Box>

          <Box id="template-footer-container" sx={customTemplateStyles.fullWidthContainer}>
            <Typography variant="body1" sx={customTemplateStyles.fullWidthTemplateContainer}>
              Template Footer Text
              <Typography variant="subtitle2" sx={customTemplateStyles.description}>
                Footer Text is optional and only upto 60 characters are allowed.
              </Typography>
            </Typography>
            <TextField sx={customTemplateStyles.InputTextField} placeholder="Enter footer text" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CustomTemplate;
