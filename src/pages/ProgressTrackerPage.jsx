import React from 'react';
    import { Typography, Container } from '@mui/material';

    function ProgressTrackerPage() {
      return (
        <Container>
          <Typography variant="h4" gutterBottom>
            Progress Tracker
          </Typography>
          <Typography variant="body1">
            Track your BMI and view your progress over time.
          </Typography>
        </Container>
      );
    }

    export default ProgressTrackerPage;
