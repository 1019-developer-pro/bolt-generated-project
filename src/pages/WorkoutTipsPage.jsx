import React, { useEffect } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import { Typography, Container, Box, List, ListItem, ListItemText } from '@mui/material';

    const WorkoutTipsPage = () => {
      const dispatch = useDispatch();
      const workoutTips = useSelector((state) => state.workout.workoutTips);

      useEffect(() => {
        dispatch({ type: 'FETCH_WORKOUT_TIPS' });
      }, [dispatch]);

      return (
        <Container>
          <Box mt={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Workout Tips
            </Typography>
            {workoutTips.length > 0 ? (
              <List>
                {workoutTips.map((tip) => (
                  <ListItem key={tip.id}>
                    <ListItemText primary={tip.tip} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography variant="body1">Loading workout tips...</Typography>
            )}
          </Box>
        </Container>
      );
    };

    export default WorkoutTipsPage;
