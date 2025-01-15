import React from 'react';
    import { Typography, Container, Box } from '@mui/material';

    const SettingsPage = () => {
      return (
        <Container>
          <Box mt={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Settings
            </Typography>
            <Typography variant="body1">
              Manage your preferences and goals here.
            </Typography>
          </Box>
        </Container>
      );
    };

    export default SettingsPage;
