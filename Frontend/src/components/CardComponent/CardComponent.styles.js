export const cardStyles = {
  cardContainer: {},
  card: {
    minWidth: "300px",
    maxWidth: "300px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    margin: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      backgroundColor: "#f5f5f5",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
    },
  },
  cardContent: {
    display: "flex",
    color: "black",
    justifyContent: "center",
    flexDirection: "column",
    padding: "24px",
  },
  cardHeader: {
    fontWeight: "600",
    fontSize: "16px",
    color: "black",
    marginBottom: "8px",
  },
  cardDescription: {
    color: "black",
    fontSize: "14px",
    lineHeight: "1.4",
    whiteSpace: "pre-line",
  },
  cardFooter: {
    display: "flex",
    alignItems: "center",
    height: "40px",
    backgroundColor: "white",
    marginLeft: "-12px",
  },
  cardFooterText: {
    color: "black",
  },
};
