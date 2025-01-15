import React, { useEffect } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import { Typography, Container, Box, List, ListItem, ListItemText, Paper } from '@mui/material';
    import styled from '@emotion/styled';

    const StyledPaper = styled(Paper)(({ theme }) => ({
      padding: theme.spacing(3),
      borderRadius: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
    }));

    const DietPlanPage = () => {
      const dispatch = useDispatch();
      const dietPlan = useSelector((state) => state.diet.dietPlan);

      useEffect(() => {
        dispatch({ type: 'FETCH_DIET_PLAN' });
      }, [dispatch]);

      return (
        <Container>
          <Box mt={4} display="flex" flexDirection="column" alignItems="center">
            <StyledPaper sx={{ width: '100%', maxWidth: '800px' }}>
              <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'text.primary' }}>
                Diet Plan
              </Typography>
              {dietPlan ? (
                <List>
                  {dietPlan.meals.map((meal, index) => (
                    <ListItem key={index} sx={{ color: 'text.secondary' }}>
                      <ListItemText primary={`${meal.day}: ${meal.meal}`} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>Loading diet plan...</Typography>
              )}
            </StyledPaper>
          </Box>
        </Container>
      );
    };

    export default DietPlanPage;
