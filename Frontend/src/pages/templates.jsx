import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import axios from "axios";
function Templates() {
  const createTemplate = () => {
    alert("createTemplate");
  };
  return (
    <>
      <div className="header flex justify-between ml-60 pt-2 pl-5 pr-5">
        <Typography variant="h6" color="white">
          Templates
        </Typography>

        <Button
          variant="contained"
          sx={{ backgroundColor: "#17a34a" }}
          onClick={createTemplate}
        >
          Create Template
        </Button>
      </div>
    </>
  );
}
export default Templates;
