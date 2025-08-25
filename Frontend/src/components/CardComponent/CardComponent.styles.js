export const cardStyles = {
  cardContainer: {
    gap: "16px",
  },
  card: {
    minWidth: "350px",
    maxWidth: "350px",
    height: "100%",
    backgroundColor: "#2c2c2c",
    borderRadius: "8px",
    padding: "16px",
    margin: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      backgroundColor: "#3c3c3c",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
    },
  },
  cardContent: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "24px",
    color: "white",
  },
  cardHeader: {
    fontWeight: "600",
    fontSize: "16px",
    color: "white",
    marginBottom: "8px",
  },
  cardDescription: {
    color: "#ffffff",
    fontSize: "14px",
    lineHeight: "1.4",
    whiteSpace: "pre-line",
  },
};
