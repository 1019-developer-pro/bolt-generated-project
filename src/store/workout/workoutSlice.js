import { createSlice } from '@reduxjs/toolkit';

    const initialState = {
      workoutTips: [],
      loading: false,
      error: null,
    };

    const workoutSlice = createSlice({
      name: 'workout',
      initialState,
      reducers: {
        workoutStart: (state) => {
          state.loading = true;
          state.error = null;
        },
        workoutSuccess: (state, action) => {
          state.loading = false;
          state.workoutTips = action.payload;
        },
        workoutFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
      },
    });

    export const { workoutStart, workoutSuccess, workoutFailure } =
      workoutSlice.actions;
    export default workoutSlice.reducer;
