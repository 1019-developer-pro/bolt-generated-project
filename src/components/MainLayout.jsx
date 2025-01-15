import React from 'react';
    import { Outlet } from 'react-router-dom';
    import Navbar from './Navbar';
    import Sidebar from './Sidebar';
    import { Box, Container } from '@mui/material';

    function MainLayout() {
      return (
        <Box sx={{ display: 'flex' }}>
          <Navbar />
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Container maxWidth="lg">
              <Outlet />
            </Container>
          </Box>
        </Box>
      );
    }

    export default MainLayout;
