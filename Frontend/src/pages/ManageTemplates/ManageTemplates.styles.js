export const manageTemplatesStyles = {
  // Navigation bar styles
  navBar: {
    display: "flex",
    gap: "32px",
    paddingLeft: "20px",
    paddingTop: "16px",
    marginLeft: "240px",
    borderBottom: "1px solid #e5e5e5",
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
  mainContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    placeItems: "center",
    marginLeft: "240px",
    paddingTop: "16px",
    paddingLeft: "10px",
    paddingRight: "10px",
    height: "100vh",
    rowGap: "50px",
    overflowY: "auto",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    width: "350px",
    height: "350px",
    backgroundColor: "#e5ddd5",
    borderRadius: "10px",
    padding: "12px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
    },
  },
};
