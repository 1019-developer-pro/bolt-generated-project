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

    const RecipePage = () => {
      const dispatch = useDispatch();
      const recipes = useSelector((state) => state.recipe.recipes);

      useEffect(() => {
        dispatch({ type: 'FETCH_RECIPES' });
      }, [dispatch]);

      return (
        <Container>
          <Box mt={4} display="flex" flexDirection="column" alignItems="center">
            <StyledPaper sx={{ width: '100%', maxWidth: '800px' }}>
              <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'text.primary' }}>
                Recipes
              </Typography>
              {recipes.length > 0 ? (
                <List>
                  {recipes.map((recipe) => (
                    <ListItem key={recipe.id} sx={{ color: 'text.secondary' }}>
                      <ListItemText primary={recipe.name} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>Loading recipes...</Typography>
              )}
            </StyledPaper>
          </Box>
        </Container>
      );
    };

    export default RecipePage;
