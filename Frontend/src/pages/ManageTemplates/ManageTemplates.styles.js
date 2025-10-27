export const manageTemplatesStyles = {
  // Header container
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "240px",
    paddingTop: "24px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  headerTitle: {
    fontWeight: 700,
    color: "white",
    fontSize: "28px",
  },
  headerButton: {
    backgroundColor: "#17a34a",
    color: "white",
    padding: "6px 16px",
  },

  // Navigation bar styles
  navBar: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "20px",
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

  // Quick Guide styles
  quickGuideContainer: {
    backgroundColor: "#2b2b2b",
    color: "white",
    marginLeft: "240px",
    padding: "20px",
    marginTop: "24px",
    marginLeft: "260px",
    marginRight: "20px",
    border: "1px solid #404040",
    borderRadius: "6px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  quickGuideTitle: {
    fontWeight: 700,
    color: "White",
    marginBottom: "12px",
    fontSize: "18px",
  },
  quickGuideDescription: {
    color: "#acacac",
    marginBottom: "20px",
  },
  quickGuideItems: {
    display: "flex",
    gap: "24px",
    marginBottom: "12px",
  },
  quickGuideItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flex: 1,
  },
  quickGuideIcon: {
    fontSize: "16px",
  },

  // Search bar styles
  searchBarContainer: {
    marginLeft: "240px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "24px",
  },
  searchInput: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      backgroundColor: "white",
      "& fieldset": {
        borderColor: "#d1d5db",
      },
      "&:hover fieldset": {
        borderColor: "#9ca3af",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#17a34a",
      },
    },
  },
};
