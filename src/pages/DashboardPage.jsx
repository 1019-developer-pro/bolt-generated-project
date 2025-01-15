import React, { useState, useEffect } from 'react';
    import { Typography, Container, Grid, Paper, CircularProgress } from '@mui/material';
    import { useSelector } from 'react-redux';
    import axios from 'axios';

    function DashboardPage() {
      const [bmi, setBmi] = useState('Calculating...');
      const [lastMeal, setLastMeal] = useState('Not logged yet');
      const [workoutTip, setWorkoutTip] = useState('Loading...');
      const [loading, setLoading] = useState(true);
      const user = useSelector((state) => state.auth.user);

      useEffect(() => {
        const fetchDashboardData = async () => {
          try {
            setLoading(true);
            // Simulate API calls for BMI, last meal, and workout tip
            setTimeout(() => {
              setBmi('24.5');
              setLastMeal('Salad at 12:00 PM');
              setWorkoutTip('Try a 30-minute cardio session today.');
              setLoading(false);
            }, 1000);
          } catch (error) {
            console.error('Error fetching dashboard data:', error);
            setLoading(false);
          }
        };

        fetchDashboardData();
      }, []);

      return (
        <Container>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6">Welcome, {user?.name}!</Typography>
                <Typography variant="body1">
                  This is your personalized dashboard. Here you can track your progress, view your
                  diet plan, and get workout tips.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6">Quick Stats</Typography>
                {loading ? (
                  <CircularProgress size={24} />
                ) : (
                  <>
                    <Typography variant="body1">BMI: {bmi}</Typography>
                    <Typography variant="body1">Last Meal: {lastMeal}</Typography>
                  </>
                )}
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6">Workout Tip</Typography>
                {loading ? (
                  <CircularProgress size={24} />
                ) : (
                  <Typography variant="body1">{workoutTip}</Typography>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      );
    }

    export default DashboardPage;
