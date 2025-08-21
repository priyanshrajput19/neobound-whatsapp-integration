import { Router } from "react-router-dom";
import Divider from "@mui/material/Divider";
import React from "react";
import Typography from "@mui/material/Typography";

function businessInfo() {
  return (
    <>
      <div>
        <div className=" header flex justify-between ml-60 pt-2 pl-5 pr-5  ">
          <Typography variant="h6" color="white">
            Business Info
          </Typography>
        </div>
        <Divider sx={{ borderColor: "gray" }} />
      </div>
    </>
  );
}

export default businessInfo;
