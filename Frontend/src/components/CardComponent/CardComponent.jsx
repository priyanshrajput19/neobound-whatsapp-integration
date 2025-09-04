import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Stack, Divider } from "@mui/material";
import { cardStyles } from "./CardComponent.styles";

const CardComponent = ({ cardData }) => {
  const [isHovered, setIsHovered] = useState(false);

  const renderDescription = (description, paramTypes, paramsValue) => {
    if (!description || !paramTypes || !Array.isArray(paramTypes)) {
      return description;
    }

    const parts = description.split(/(\{\{[\d]+\}\})/);
    let paramIndex = 0;

    return parts.map((part, index) => {
      if (part.match(/(\{\{[\d]+\}\})/)) {
        const paramType = `{{${paramTypes[paramIndex].toLowerCase()}}}`;
        const paramValue = paramsValue && Array.isArray(paramsValue) ? paramsValue[paramIndex] : "";
        paramIndex++;

        return (
          <span key={index} style={isHovered ? { color: "inherit" } : { color: "#457b1c" }}>
            {isHovered ? paramValue : paramType}
          </span>
        );
      }
      return part;
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div style={cardStyles.cardContainer}>
      <Card sx={cardStyles.card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <CardContent sx={cardStyles.cardContent}>
          <Typography variant="h6" sx={cardStyles.cardHeader}>
            {cardData.header}
          </Typography>
          <Typography variant="body1" sx={cardStyles.cardDescription}>
            {renderDescription(cardData.body, cardData.body_param_types, cardData.body_params)}
          </Typography>
          {cardData?.buttons && cardData.buttons.length > 0 ? (
            <>
              <Stack direction="column" spacing={2} className="mt-4">
                {cardData.buttons.map((button, index) => (
                  <Button key={index} variant="text">
                    {button.text}
                  </Button>
                ))}
              </Stack>
            </>
          ) : (
            <></>
          )}
        </CardContent>
      </Card>
      <div style={cardStyles.cardFooter}>
        <Typography variant="body2" sx={cardStyles.cardFooterText}>
          {cardData.name}
        </Typography>
      </div>
    </div>
  );
};

export default CardComponent;
