import React from "react";
import { useNavigate } from "react-router-dom";
import { Drawer, Toolbar, List, Typography, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

import axios from "axios";
import { sidebarStyles } from "./Sidebar.styles";

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
      <Drawer sx={sidebarStyles.drawer} variant="permanent" anchor="left">
        <Toolbar sx={sidebarStyles.toolbar}>
          <Typography noWrap component="div">
            Whatsapp Dashboard
          </Typography>
        </Toolbar>

        <List>
          {navigationItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton sx={sidebarStyles.listItemButton} onClick={() => handleNavigation(item.path)}>
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
