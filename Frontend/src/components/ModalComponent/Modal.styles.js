export const modalStyles = {
  modalContainer: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // Centers the modal perfectly
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
    zIndex: 1000,
    minWidth: "400px",
    maxWidth: "600px",
    overflow: "auto",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
  },

  header: {
    position: "relative",
    padding: "16px",
    borderBottom: "1px solid #e0e0e0",
    paddingBottom: "16px",
    marginBottom: "16px",
  },
  headerTitle: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  headerDescription: {
    fontSize: "14px",
    color: "#666666",
  },
  modalBody: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    padding: "16px",
  },
  modalBodyTextField: {
    width: "100%",
    marginTop: "16px",
  },
  modalFooter: {
    display: "flex",
    justifyContent: "flex-end",
    borderTop: "1px solid #e0e0e0",
    paddingTop: "16px",
    marginTop: "16px",
    padding: "16px",
  },
  modalFooterButton: {
    backgroundColor: "#457b1c",
    color: "white",
  },
  modalBodyTextFieldLabel: {
    fontWeight: "bold",
    fontSize: "14px",
    color: "#666666",
    marginTop: "16px",
  },
  closeButton: {
    position: "absolute",
    top: "8px",
    right: "8px",
    color: "#666666",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
      color: "#333333",
    },
  },
};
