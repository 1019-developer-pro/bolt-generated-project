import React from 'react';
    import { AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material';
    import { Link, useNavigate } from 'react-router-dom';
    import { useDispatch } from 'react-redux';
    import styled from '@emotion/styled';

    const StyledAppBar = styled(AppBar)(({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[3],
    }));

    const StyledButton = styled(Button)(({ theme }) => ({
      color: theme.palette.text.primary,
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
    }));

    const Layout = ({ children }) => {
      const navigate = useNavigate();
      const dispatch = useDispatch();

      const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/login');
      };

      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <StyledAppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'text.primary' }}>
                Diet Tracker
              </Typography>
              <StyledButton color="inherit" component={Link} to="/">Dashboard</StyledButton>
              <StyledButton color="inherit" component={Link} to="/diet-plan">Diet Plan</StyledButton>
              <StyledButton color="inherit" component={Link} to="/recipes">Recipes</StyledButton>
              <StyledButton color="inherit" component={Link} to="/progress">Progress</StyledButton>
              <StyledButton color="inherit" component={Link} to="/workout-tips">Workout Tips</StyledButton>
              <StyledButton color="inherit" component={Link} to="/settings">Settings</StyledButton>
              <StyledButton color="inherit" onClick={handleLogout}>Logout</StyledButton>
            </Toolbar>
          </StyledAppBar>
          <Container component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
            {children}
          </Container>
        </Box>
      );
    };

    export default Layout;
