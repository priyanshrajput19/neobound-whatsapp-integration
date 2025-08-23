// Templates Page Styles
export const templatesStyles = {
  // Header styles
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "240px", // ml-60 equivalent
    paddingTop: "8px", // pt-2 equivalent
    paddingLeft: "20px", // pl-5 equivalent
    paddingRight: "20px", // pr-5 equivalent
  },

  // Main container styles
  mainContainer: {
    marginLeft: "240px", // ml-60 equivalent
    paddingTop: "16px", // pt-4 equivalent
    paddingLeft: "20px", // pl-5 equivalent
    paddingRight: "20px", // pr-5 equivalent
  },

  // Card styles
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

  // Card content styles
  cardContent: {
    padding: "24px",
  },

  // Business info container styles
  businessInfoContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // Business name styles
  businessName: {
    color: "white",
    fontWeight: "600",
    marginBottom: "8px",
  },

  // Business ID styles
  businessId: {
    color: "#cccccc",
    lineHeight: "1.5",
  },

  // Button container styles
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    spacing: 1,
    justifyContent: "flex-end",
  },

  // Primary button styles
  primaryButton: {
    backgroundColor: "#17a34a",
  },

  // Expandable section styles
  expandableSection: {
    marginTop: "24px",
    paddingTop: "24px",
    borderTop: "1px solid #3a3a3a",
  },

  // No templates message styles
  noTemplatesMessage: {
    color: "white",
  },
};
