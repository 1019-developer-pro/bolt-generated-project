import React from 'react';
    import { Typography, Container, Box } from '@mui/material';

    const DashboardPage = () => {
      return (
        <Container>
          <Box mt={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Dashboard
            </Typography>
            <Typography variant="body1">
              Welcome to your diet tracker dashboard.
            </Typography>
          </Box>
        </Container>
      );
    };

    export default DashboardPage;
