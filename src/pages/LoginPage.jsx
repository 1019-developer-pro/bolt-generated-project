import React, { useState } from 'react';
    import {
      TextField,
      Button,
      Container,
      Typography,
      Box,
      Card,
      CardContent,
      Grid,
      CircularProgress,
    } from '@mui/material';
    import { useDispatch, useSelector } from 'react-redux';
    import { login } from '../store/auth/authActions';
    import { useNavigate } from 'react-router-dom';

    function LoginPage() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const loading = useSelector((state) => state.auth.loading);
      const error = useSelector((state) => state.auth.error);

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await dispatch(login({ email, password }));
          navigate('/dashboard');
        } catch (err) {
          console.error('Login failed:', err);
        }
      };

      return (
        <Container maxWidth="sm">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '100vh',
            }}
          >
            <Card sx={{ width: '100%' }}>
              <CardContent>
                <Typography variant="h5" align="center" gutterBottom>
                  Login
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2} direction="column">
                    <Grid item>
                      <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={loading}
                      >
                        {loading ? <CircularProgress size={24} /> : 'Login'}
                      </Button>
                    </Grid>
                    {error && (
                      <Grid item>
                        <Typography color="error">{error}</Typography>
                      </Grid>
                    )}
                    <Grid item>
                      <Button
                        variant="text"
                        color="secondary"
                        fullWidth
                        onClick={() => navigate('/signup')}
                      >
                        Don't have an account? Sign up
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Box>
        </Container>
      );
    }

    export default LoginPage;
