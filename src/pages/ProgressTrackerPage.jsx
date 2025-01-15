import React, { useEffect } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import { Typography, Container, Box } from '@mui/material';
    import { Line } from 'react-chartjs-2';
    import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );

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
            borderColor: 'rgb(75, 192, 192)',
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
          },
        },
      };

      return (
        <Container>
          <Box mt={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Progress Tracker
            </Typography>
            {bmiHistory.length > 0 ? (
              <Line data={chartData} options={chartOptions} />
            ) : (
              <Typography variant="body1">Loading BMI history...</Typography>
            )}
          </Box>
        </Container>
      );
    };

    export default ProgressTrackerPage;
