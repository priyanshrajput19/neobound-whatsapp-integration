import React from "react";
import { useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { Drawer, Toolbar, List, Typography, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const color = [grey[600]];
const drawerWidth = 240;

const Sidebar = () => {
  const navigate = useNavigate();
  const navigationItems = [
    { text: "Dashboard", path: "/dashboard" },
    { text: "Connected Accounts", path: "/connectedAcc" },
    { text: "Templates", path: "/templates" },
    { text: "Business Info", path: "/businessInfo" },
    { text: "Templates Library", path: "/templatesLibrary" },
  ];

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            borderRight: `0.5px solid ${color}`,
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#303036",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ color: "white" }}>
          <Typography noWrap component="div">
            Whatsapp Dashboard
          </Typography>
        </Toolbar>

        <List>
          {navigationItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                sx={{
                  color: "white",
                  borderRadius: "10px",
                  margin: "10px",
                  "&:hover": {
                    backgroundColor: "#34a34a",
                    color: "white",
                  },
                }}
                onClick={() => handleNavigation(item.path)}
              >
                <ListItemText primary={item.text} />
                <ListItemIcon></ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};
export default Sidebar;
