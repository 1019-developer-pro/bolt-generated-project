import React from 'react';
    import { Typography, Container } from '@mui/material';

    function RecipePage() {
      return (
        <Container>
          <Typography variant="h4" gutterBottom>
            Recipes
          </Typography>
          <Typography variant="body1">
            Explore a variety of recipes tailored to your dietary needs.
          </Typography>
        </Container>
      );
    }

    export default RecipePage;
