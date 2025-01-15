import React from 'react';
    import { Typography, Container } from '@mui/material';

    function DietPlanPage() {
      return (
        <Container>
          <Typography variant="h4" gutterBottom>
            Diet Plan
          </Typography>
          <Typography variant="body1">
            Here you can log your meals and view your personalized diet plan.
          </Typography>
        </Container>
      );
    }

    export default DietPlanPage;
