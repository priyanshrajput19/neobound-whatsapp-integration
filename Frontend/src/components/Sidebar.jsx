import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
const drawerWidth = 240;
function Sidebar() {
  const navigate = useNavigate();
  const navigationItems = [
    { text: "Dashboard", path: "/dashboard" },
    { text: "Connected Accounts", path: "/connectedAcc" },
    { text: "Templates", path: "/templates" },
    { text: "Business Info", path: "/businessInfo" },
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
            borderRight: "1px solid #979797",
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
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
export default Sidebar;
