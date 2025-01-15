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

    const WorkoutTipsPage = () => {
      const dispatch = useDispatch();
      const workoutTips = useSelector((state) => state.workout.workoutTips);

      useEffect(() => {
        dispatch({ type: 'FETCH_WORKOUT_TIPS' });
      }, [dispatch]);

      return (
        <Container>
          <Box mt={4} display="flex" flexDirection="column" alignItems="center">
            <StyledPaper sx={{ width: '100%', maxWidth: '800px' }}>
              <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'text.primary' }}>
                Workout Tips
              </Typography>
              {workoutTips.length > 0 ? (
                <List>
                  {workoutTips.map((tip) => (
                    <ListItem key={tip.id} sx={{ color: 'text.secondary' }}>
                      <ListItemText primary={tip.tip} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>Loading workout tips...</Typography>
              )}
            </StyledPaper>
          </Box>
        </Container>
      );
    };

    export default WorkoutTipsPage;
