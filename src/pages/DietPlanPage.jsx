import React, { useEffect } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import { Typography, Container, Box, List, ListItem, ListItemText } from '@mui/material';

    const DietPlanPage = () => {
      const dispatch = useDispatch();
      const dietPlan = useSelector((state) => state.diet.dietPlan);

      useEffect(() => {
        dispatch({ type: 'FETCH_DIET_PLAN' });
      }, [dispatch]);

      return (
        <Container>
          <Box mt={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Diet Plan
            </Typography>
            {dietPlan ? (
              <List>
                {dietPlan.meals.map((meal, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={`${meal.day}: ${meal.meal}`} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography variant="body1">Loading diet plan...</Typography>
            )}
          </Box>
        </Container>
      );
    };

    export default DietPlanPage;
