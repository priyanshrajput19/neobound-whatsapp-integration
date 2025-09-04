import React, { useState } from "react";
import { Box, TextField, Typography, IconButton } from "@mui/material";

import { Button } from "@mui/material";
import { modalStyles } from "./Modal.styles";
import closeIcon from "../../assets/icons/closeModal.svg";

const Modal = ({ modalData, onClose, onSubmit }) => {
  const [templateName, setTemplateName] = useState("");

  const handleSubmit = () => {
    console.log("Submit");
    onSubmit(templateName);
  };

  const renderButton = (button, index) => {
    if (button.type.toLowerCase() === "url" || button.type.toLowerCase() === "phone_number") {
      return (
        <Box className="button-textfield" key={index}>
          <Typography key={index} sx={modalStyles.modalBodyTextFieldLabel}>
            {button.type.replace("_", " ")}
          </Typography>
          <TextField key={index} sx={modalStyles.modalBodyTextField} placeholder="Enter Your Button Text" />
        </Box>
      );
    }
    return null;
  };

  return (
    <>
      <Box className="modal-overlay" sx={modalStyles.modalOverlay} />
      <Box className="modal-container" sx={modalStyles.modalContainer}>
        <header className="header" style={modalStyles.header}>
          <IconButton onClick={onClose} sx={modalStyles.closeButton}>
            <img src={closeIcon} alt="Close" width="24" height="24" />
          </IconButton>
          <div className="header-title" style={modalStyles.headerTitle}>
            {modalData.name}
          </div>
          <div className="header-description" style={modalStyles.headerDescription}>
            {modalData.category} › {modalData.topic} › {modalData.usecase}
          </div>
        </header>
        <div className="modal-body" style={modalStyles.modalBody}>
          <Typography>Enter template details</Typography>
          <Box className="name-textfield">
            <Typography sx={modalStyles.modalBodyTextFieldLabel}>Enter Your Template Name</Typography>
            <TextField sx={modalStyles.modalBodyTextField} placeholder="Enter Your Template Name" value={templateName} onChange={(e) => setTemplateName(e.target.value)} />
          </Box>

          {modalData?.buttons && (
            <Box className="button-textfield">
              <Typography sx={modalStyles.modalBodyTextFieldLabel}>Buttons</Typography>
              {modalData.buttons?.map((button, index) => renderButton(button, index))}
            </Box>
          )}
        </div>
        <footer className="modal-footer" style={modalStyles.modalFooter}>
          <Button variant="contained" sx={modalStyles.modalFooterButton} onClick={handleSubmit} disabled={!templateName.trim()}>
            Submit
          </Button>
        </footer>
      </Box>
    </>
  );
};

export default Modal;
