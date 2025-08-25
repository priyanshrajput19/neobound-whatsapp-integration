import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { cardStyles } from "./CardComponent.styles";

const CardComponent = ({ cardData }) => {
  return (
    <div className=" flex flex-row flex-wrap ml-60 pt-4 pl-5 pr-5">
      <Card sx={cardStyles.card}>
        <CardContent sx={cardStyles.cardContent}>
          <Typography variant="h6" sx={cardStyles.cardTitle}>
            {cardData.name}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardComponent;
