import { takeLatest, call, put } from 'redux-saga/effects';
    import axios from 'axios';
    import { authStart, authSuccess, authFailure } from './authSlice';

    const API_URL = 'http://localhost:3001/api/auth';

    function* handleLogin({ payload }) {
      try {
        yield put(authStart());
        const response = yield call(axios.post, `${API_URL}/login`, payload);
        yield put(authSuccess(response.data));
      } catch (error) {
        yield put(authFailure(error.response?.data?.message || error.message));
      }
    }

    function* handleSignup({ payload }) {
      try {
        yield put(authStart());
        const response = yield call(axios.post, `${API_URL}/signup`, payload);
        yield put(authSuccess(response.data));
      } catch (error) {
        yield put(authFailure(error.response?.data?.message || error.message));
      }
    }

    export function* watchAuth() {
      yield takeLatest('auth/login', handleLogin);
      yield takeLatest('auth/signup', handleSignup);
    }
