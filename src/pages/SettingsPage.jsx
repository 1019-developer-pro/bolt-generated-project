import React from 'react';
    import { Typography, Container } from '@mui/material';

    function SettingsPage() {
      return (
        <Container>
          <Typography variant="h4" gutterBottom>
            Settings
          </Typography>
          <Typography variant="body1">
            Manage your preferences, goals, and notifications.
          </Typography>
        </Container>
      );
    }

    export default SettingsPage;
