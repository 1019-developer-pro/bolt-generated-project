import React from 'react';
    import { AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material';
    import { Link, useNavigate } from 'react-router-dom';
    import { useDispatch } from 'react-redux';

    const Layout = ({ children }) => {
      const navigate = useNavigate();
      const dispatch = useDispatch();

      const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/login');
      };

      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Diet Tracker
              </Typography>
              <Button color="inherit" component={Link} to="/">Dashboard</Button>
              <Button color="inherit" component={Link} to="/diet-plan">Diet Plan</Button>
              <Button color="inherit" component={Link} to="/recipes">Recipes</Button>
              <Button color="inherit" component={Link} to="/progress">Progress</Button>
              <Button color="inherit" component={Link} to="/workout-tips">Workout Tips</Button>
              <Button color="inherit" component={Link} to="/settings">Settings</Button>
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </Toolbar>
          </AppBar>
          <Container component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
            {children}
          </Container>
        </Box>
      );
    };

    export default Layout;
