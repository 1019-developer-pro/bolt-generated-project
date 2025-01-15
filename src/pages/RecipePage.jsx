import React, { useEffect } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import { Typography, Container, Box, List, ListItem, ListItemText } from '@mui/material';

    const RecipePage = () => {
      const dispatch = useDispatch();
      const recipes = useSelector((state) => state.recipe.recipes);

      useEffect(() => {
        dispatch({ type: 'FETCH_RECIPES' });
      }, [dispatch]);

      return (
        <Container>
          <Box mt={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Recipes
            </Typography>
            {recipes.length > 0 ? (
              <List>
                {recipes.map((recipe) => (
                  <ListItem key={recipe.id}>
                    <ListItemText primary={recipe.name} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography variant="body1">Loading recipes...</Typography>
            )}
          </Box>
        </Container>
      );
    };

    export default RecipePage;
