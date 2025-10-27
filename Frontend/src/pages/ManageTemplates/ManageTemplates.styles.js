export const manageTemplatesStyles = {
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
