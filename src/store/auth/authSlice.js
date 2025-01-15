import { createSlice } from '@reduxjs/toolkit';

    const initialState = {
      isAuthenticated: !!localStorage.getItem('token'),
      user: null,
      token: localStorage.getItem('token'),
      loading: false,
      error: null,
    };

    const authSlice = createSlice({
      name: 'auth',
      initialState,
      reducers: {
        authStart: (state) => {
          state.loading = true;
          state.error = null;
        },
        authSuccess: (state, action) => {
          state.loading = false;
          state.isAuthenticated = true;
          state.user = action.payload.user;
          state.token = action.payload.token;
          localStorage.setItem('token', action.payload.token);
        },
        authFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
        logout: (state) => {
          state.isAuthenticated = false;
          state.user = null;
          state.token = null;
          localStorage.removeItem('token');
        },
      },
    });

    export const { authStart, authSuccess, authFailure, logout } = authSlice.actions;
    export default authSlice.reducer;
