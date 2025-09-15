export const connectedAccStyles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "240px", // drawerWidth (240px)
    paddingTop: "8px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  headerTitle: {
    color: "#bfbfbf",
  },
  contentContainer: {
    marginLeft: "240px", // drawerWidth (240px)
    paddingTop: "16px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  card: {
    backgroundColor: "#2a2a2a",
    borderRadius: "12px",
    border: "1px solid #3a3a3a",
    marginBottom: "16px",
    transition: "all .3s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
      borderColor: "#505560",
    },
  },
  cardContent: {
    padding: "24px",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  businessName: {
    color: "#bfbfbf",
  },
  businessId: {
    color: "#bfbfbf",
  },
  createTemplateButton: {
    backgroundColor: "#17a34a",
    color: "white",
  },
};
