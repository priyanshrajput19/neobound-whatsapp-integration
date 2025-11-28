import React from "react";
import { Box, Typography, Select, FormControl, InputLabel, MenuItem, TextField, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { customTemplateStyles } from "./customTemplate.styles";
const CustomTemplate = () => {
  const [templateCategory, setTemplateCategory] = useState("");
  const [templateLanguage, setTemplateLanguage] = useState("");
  const [templateType, setTemplateType] = useState("");
  const [templateName, setTemplateName] = useState("");
  const [headerText, setHeaderText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [footerText, setFooterText] = useState("");
  const handleCategoryChange = (event) => {
    setTemplateCategory(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setTemplateLanguage(event.target.value);
  };

  const handleTypeChange = (event) => {
    setTemplateType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Build components array
    const components = [];

    // Add header component if headerText exists
    if (headerText && headerText.trim()) {
      // For text headers, format is "TEXT"
      // For media headers, format would be "IMAGE", "VIDEO", "DOCUMENT" based on templateType
      const headerFormat = templateType === "text" || !templateType ? "TEXT" : templateType.toLowerCase();
      components.push({
        type: "header",
        format: headerFormat,
        text: headerText,
        example: {
          header_text: headerText,
        },
      });
    }

    // Add body component (required)
    if (bodyText && bodyText.trim()) {
      const bodyComponent = {
        type: "body",
        text: bodyText,
      };

      // Extract parameters from body text (e.g., {1}, {2}, etc.)
      const paramMatches = bodyText.match(/\{(\d+)\}/g);
      if (paramMatches && paramMatches.length > 0) {
        bodyComponent.example = {
          body_text_named_params: paramMatches.map((match, index) => ({
            param_name: match.replace(/[{}]/g, ""),
            example: `Example ${index + 1}`,
          })),
        };
      }

      components.push(bodyComponent);
    }

    // Add footer component if footerText exists
    if (footerText && footerText.trim()) {
      components.push({
        type: "footer",
        text: footerText,
      });
    }

    // Build the request object matching Meta API format
    const templateData = {
      name: templateName,
      language: templateLanguage,
      category: templateCategory,
      parameter_format: "named", //required otherwise rejected by Facebook
      components: components,
    };

    console.log("Form submitted successfully!");
    console.log("Template data being sent:", templateData);

    const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
    axios
      .post(`${apiUrl}/createCustomTemplate`, templateData)
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Box sx={customTemplateStyles.titleContainer}>
        <Typography variant="h6" sx={{ color: "white", marginBottom: "20px" }}>
          New Template Message
        </Typography>

        <form method="POST" onSubmit={handleSubmit}>
          <Box sx={customTemplateStyles.mainContainer}>
            <Box id="template-category-container" name="templateCategory">
              <Typography variant="body1" component="div" sx={customTemplateStyles.templateCategoryContainer}>
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
                  <MenuItem value="marketing">marketing</MenuItem>
                  <MenuItem value="utility">utility</MenuItem>
                  <MenuItem value="authentication">authentication</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box id="template-language-container" name="templateLanguage">
              <Typography variant="body1" component="div" sx={customTemplateStyles.templateLanguageContainer}>
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

            <Box id="template-name-container" name="templateName" sx={customTemplateStyles.fullWidthContainer}>
              <Typography variant="body1" component="div" sx={customTemplateStyles.fullWidthTemplateContainer}>
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
              <TextField sx={customTemplateStyles.InputTextField} placeholder="Enter template name" name="templateName" type="text" value={templateName} onChange={(e) => setTemplateName(e.target.value)} />
            </Box>

            <Box id="template-type-container" name="templateType" sx={customTemplateStyles.fullWidthContainer}>
              <Typography variant="body1" component="div" sx={customTemplateStyles.fullWidthTemplateContainer}>
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

            <Box id="template-headerText-container" name="headerText" sx={customTemplateStyles.fullWidthContainer}>
              <Typography variant="body1" component="div" sx={customTemplateStyles.fullWidthTemplateContainer}>
                Template Header Text
                <Typography variant="subtitle2" sx={customTemplateStyles.description}>
                  Header Text is optional and only upto 60 characters are allowed.
                </Typography>
              </Typography>
              <TextField sx={customTemplateStyles.InputTextField} placeholder="Enter header text" name="headerText" type="text" value={headerText} onChange={(e) => setHeaderText(e.target.value)} />
            </Box>

            <Box id="template-body-format-container" name="bodyText" sx={customTemplateStyles.fullWidthContainer}>
              <Typography variant="body1" component="div" sx={customTemplateStyles.fullWidthTemplateContainer}>
                Template Format
                <Typography variant="subtitle2" sx={customTemplateStyles.description}>
                  Your message content.Up to 1024 characters are allowed.
                </Typography>
                <Typography variant="subtitle2" sx={customTemplateStyles.description}>
                  example: "Hello {"1"}, welcome to our platform."
                </Typography>
              </Typography>
              <TextField sx={customTemplateStyles.InputTextField} placeholder="Enter body text" name="bodyText" type="text" value={bodyText} onChange={(e) => setBodyText(e.target.value)} />
            </Box>

            <Box id="template-footer-container" name="footerText" sx={customTemplateStyles.fullWidthContainer}>
              <Typography variant="body1" component="div" sx={customTemplateStyles.fullWidthTemplateContainer}>
                Template Footer Text
                <Typography variant="subtitle2" sx={customTemplateStyles.description}>
                  Footer Text is optional and only upto 60 characters are allowed.
                </Typography>
              </Typography>
              <TextField sx={customTemplateStyles.InputTextField} placeholder="Enter footer text" name="footerText" type="text" value={footerText} onChange={(e) => setFooterText(e.target.value)} />
            </Box>

            <Box id="submit-button-container" sx={customTemplateStyles.buttonContainer}>
              <Button type="submit" variant="contained" sx={customTemplateStyles.submitButton}>
                Submit
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default CustomTemplate;
