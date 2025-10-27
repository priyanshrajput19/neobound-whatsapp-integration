import { grey } from "@mui/material/colors";

export const color = [grey[600]];
export const drawerWidth = 240;

export const sidebarStyles = {
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      borderRight: `0.5px solid ${color}`,
      width: drawerWidth,
      boxSizing: "border-box",
      backgroundColor: "#303036",
    },
  },
  toolbar: {
    color: "white",
  },
  listItemButton: {
    color: "white",
    borderRadius: "10px",
    margin: "10px",
    transition: "all 0.9s ease",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "white",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
      transform: "translateY(-2px)",
    },
  },
};
