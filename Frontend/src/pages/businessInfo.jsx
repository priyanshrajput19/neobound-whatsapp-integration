import React from "react";
import { Divider, Typography } from "@mui/material";

function businessInfo() {
  return (
    <>
      <div>
        <div className=" header flex justify-between ml-60 pt-2 pl-5 pr-5  ">
          <Typography variant="h6" color="#bfbfbf">
            Business Info
          </Typography>
        </div>
        <Divider sx={{ borderColor: "gray" }} />
      </div>
    </>
  );
}

export default businessInfo;
