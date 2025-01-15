import { createSlice } from '@reduxjs/toolkit';

    const initialState = {
      dietPlan: null,
      mealLogs: [],
      loading: false,
      error: null,
    };

    const dietSlice = createSlice({
      name: 'diet',
      initialState,
      reducers: {
        dietStart: (state) => {
          state.loading = true;
          state.error = null;
        },
        dietPlanSuccess: (state, action) => {
          state.loading = false;
          state.dietPlan = action.payload;
        },
        mealLogSuccess: (state, action) => {
          state.loading = false;
          state.mealLogs = action.payload;
        },
        dietFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
        addMealLog: (state, action) => {
          state.mealLogs.push(action.payload);
        },
      },
    });

    export const {
      dietStart,
      dietPlanSuccess,
      mealLogSuccess,
      dietFailure,
      addMealLog,
    } = dietSlice.actions;
    export default dietSlice.reducer;
