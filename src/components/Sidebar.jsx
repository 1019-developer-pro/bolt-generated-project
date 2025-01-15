import React from 'react';
    import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
    import {
      Dashboard as DashboardIcon,
      Restaurant as RestaurantIcon,
      FitnessCenter as FitnessCenterIcon,
      Timeline as TimelineIcon,
      Settings as SettingsIcon,
      MenuBook as MenuBookIcon,
      Fastfood as FastfoodIcon,
    } from '@mui/icons-material';
    import { useNavigate } from 'react-router-dom';

    const drawerWidth = 240;

    function Sidebar() {
      const navigate = useNavigate();

      const menuItems = [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
        { text: 'Diet Plan', icon: <RestaurantIcon />, path: '/diet-plan' },
        { text: 'Recipes', icon: <MenuBookIcon />, path: '/recipes' },
        { text: 'Progress', icon: <TimelineIcon />, path: '/progress' },
        { text: 'Workout Tips', icon: <FitnessCenterIcon />, path: '/workout-tips' },
        { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
        { text: 'Meal Log', icon: <FastfoodIcon />, path: '/meal-log' },
      ];

      return (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} onClick={() => navigate(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      );
    }

    export default Sidebar;
