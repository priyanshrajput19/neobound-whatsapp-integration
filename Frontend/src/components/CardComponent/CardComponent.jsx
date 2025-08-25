import React from "react";
import { Card, CardContent, Typography, Button, Stack, Divider } from "@mui/material";
import { cardStyles } from "./CardComponent.styles";

const CardComponent = ({ cardData }) => {
  return (
    <div style={cardStyles.cardContainer}>
      <Card sx={cardStyles.card}>
        <CardContent sx={cardStyles.cardContent}>
          <Typography variant="h6" sx={cardStyles.cardHeader}>
            {cardData.header}
          </Typography>
          <Typography variant="body2" sx={cardStyles.cardDescription}>
            {cardData.body}
          </Typography>
          {cardData?.buttons && cardData.buttons.length > 0 ? (
            <>
              <Divider sx={{ borderColor: "gray" }} />
              <Stack direction="column" spacing={2} className="mt-4">
                {cardData.buttons.map((button, index) => (
                  <Button key={index} variant="outlined">
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
    </div>
  );
};

export default CardComponent;
