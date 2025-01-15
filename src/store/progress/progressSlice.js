import { createSlice } from '@reduxjs/toolkit';

    const initialState = {
      bmiData: [],
      loading: false,
      error: null,
    };

    const progressSlice = createSlice({
      name: 'progress',
      initialState,
      reducers: {
        progressStart: (state) => {
          state.loading = true;
          state.error = null;
        },
        progressSuccess: (state, action) => {
          state.loading = false;
          state.bmiData = action.payload;
        },
        progressFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
        addBmiData: (state, action) => {
          state.bmiData.push(action.payload);
        },
      },
    });

    export const { progressStart, progressSuccess, progressFailure, addBmiData } =
      progressSlice.actions;
    export default progressSlice.reducer;
