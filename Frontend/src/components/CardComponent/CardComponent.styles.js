export const cardStyles = {
  card: {
    backgroundColor: "#2a2a2a",
    borderRadius: "12px",
    border: "1px solid #3a3a3a",
    marginBottom: "16px",
    maxWidth: "50%",
    marginLeft: "240px",
    transition: "all .3s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
      borderColor: "#505560",
    },
  },
  cardContent: {
    padding: "24px",
    color: "white",
  },
  cardTitle: {
    color: "white",
    fontWeight: "600",
    marginBottom: "8px",
  },
};
