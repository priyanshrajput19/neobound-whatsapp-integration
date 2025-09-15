export const dashboardStyles = {
  container: {
    padding: "16px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "240px", // drawerWidth (240px)
    alignItems: "center",
  },
  headerTitle: {
    color: "#bfbfbf",
  },
  headerDescription: {
    color: "#999999",
  },
  connectButton: {
    backgroundColor: "#17a34a",
    height: "40px", // h-10 = 40px
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "-100%",
      width: "100%",
      height: "100%",
      background: "linear-gradient(145deg, transparent 0%, transparent 30%, rgba(255, 255, 255, 0.7) 50%, transparent 70%, transparent 100%)",
      animation: "sweep 5s ease-in-out infinite",
      animationDelay: "5s",
    },
    "@keyframes sweep": {
      "0%": {
        left: "-100%",
      },
      "50%": {
        left: "100%",
      },
      "100%": {
        left: "100%",
      },
    },
  },
};
