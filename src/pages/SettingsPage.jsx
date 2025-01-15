import React from 'react';
    import { Typography, Container, Box, Paper } from '@mui/material';
    import styled from '@emotion/styled';

    const StyledPaper = styled(Paper)(({ theme }) => ({
      padding: theme.spacing(3),
      borderRadius: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
    }));

    const SettingsPage = () => {
      return (
        <Container>
          <Box mt={4} display="flex" flexDirection="column" alignItems="center">
            <StyledPaper sx={{ width: '100%', maxWidth: '800px' }}>
              <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'text.primary' }}>
                Settings
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Manage your preferences and goals here.
              </Typography>
            </StyledPaper>
          </Box>
        </Container>
      );
    };

    export default SettingsPage;
