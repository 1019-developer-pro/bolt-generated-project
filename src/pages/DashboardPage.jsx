import React from 'react';
    import { Typography, Container, Box, Paper } from '@mui/material';
    import styled from '@emotion/styled';

    const StyledPaper = styled(Paper)(({ theme }) => ({
      padding: theme.spacing(3),
      borderRadius: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
    }));

    const DashboardPage = () => {
      return (
        <Container>
          <Box mt={4} display="flex" flexDirection="column" alignItems="center">
            <StyledPaper sx={{ width: '100%', maxWidth: '800px' }}>
              <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'text.primary' }}>
                Dashboard
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Welcome to your diet tracker dashboard. Here you can see an overview of your progress and access other features.
              </Typography>
            </StyledPaper>
          </Box>
        </Container>
      );
    };

    export default DashboardPage;
