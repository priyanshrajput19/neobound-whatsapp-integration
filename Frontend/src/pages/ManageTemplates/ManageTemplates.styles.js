export const manageTemplatesStyles = {
  // Navigation bar styles
  navBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "16px",
    marginLeft: "240px",
    borderBottom: "1px solid #e5e5e5",
  },
  navTabsContainer: {
    display: "flex",
    gap: "32px",
  },
  navItem: {
    cursor: "pointer",
    padding: "12px 8px",
    transition: "all 0.2s ease",
    "&:hover": {
      opacity: 0.8,
    },
  },
  navText: {
    fontSize: "16px",
    fontWeight: 500,
    paddingBottom: "8px",
    transition: "all 0.2s ease",
  },
  newTemplateButton: {
    backgroundColor: "#17a34a",
    color: "white",
    "&:hover": {
      backgroundColor: "#15803d",
    },
  },
};
