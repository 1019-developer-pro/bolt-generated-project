import { createSlice } from '@reduxjs/toolkit';

    const initialState = {
      recipes: [],
      loading: false,
      error: null,
    };

    const recipeSlice = createSlice({
      name: 'recipe',
      initialState,
      reducers: {
        recipeStart: (state) => {
          state.loading = true;
          state.error = null;
        },
        recipeSuccess: (state, action) => {
          state.loading = false;
          state.recipes = action.payload;
        },
        recipeFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
      },
    });

    export const { recipeStart, recipeSuccess, recipeFailure } = recipeSlice.actions;
    export default recipeSlice.reducer;
