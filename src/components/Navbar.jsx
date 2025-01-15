import React from 'react';
    import { AppBar, Toolbar, Typography } from '@mui/material';

    function Navbar() {
      return (
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Diet Tracker
            </Typography>
          </Toolbar>
        </AppBar>
      );
    }

    export default Navbar;
