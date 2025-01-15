import React, { useEffect } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import { Typography, Container, Box, Paper } from '@mui/material';
    import { Line } from 'react-chartjs-2';
    import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
    import styled from '@emotion/styled';

    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );

    const StyledPaper = styled(Paper)(({ theme }) => ({
      padding: theme.spacing(3),
      borderRadius: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
    }));

    const ProgressTrackerPage = () => {
      const dispatch = useDispatch();
      const bmiHistory = useSelector((state) => state.progress.bmiHistory);

      useEffect(() => {
        dispatch({ type: 'FETCH_BMI_HISTORY' });
      }, [dispatch]);

      const chartData = {
        labels: bmiHistory.map((item) => item.date),
        datasets: [
          {
            label: 'BMI',
            data: bmiHistory.map((item) => item.bmi),
            fill: false,
            borderColor: '#03DAC5',
            tension: 0.1,
          },
        ],
      };

      const chartOptions = {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'BMI History',
            color: '#fff',
          },
          legend: {
            labels: {
              color: '#fff',
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: '#fff',
            },
          },
          y: {
            ticks: {
              color: '#fff',
            },
          },
        },
      };

      return (
        <Container>
          <Box mt={4} display="flex" flexDirection="column" alignItems="center">
            <StyledPaper sx={{ width: '100%', maxWidth: '800px' }}>
              <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'text.primary' }}>
                Progress Tracker
              </Typography>
              {bmiHistory.length > 0 ? (
                <Line data={chartData} options={chartOptions} />
              ) : (
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>Loading BMI history...</Typography>
              )}
            </StyledPaper>
          </Box>
        </Container>
      );
    };

    export default ProgressTrackerPage;
