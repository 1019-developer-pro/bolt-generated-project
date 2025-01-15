import { call, put, takeLatest } from 'redux-saga/effects';
    import axios from 'axios';

    const API_URL = '/api/auth';

    function* handleLogin(action) {
      try {
        const response = yield call(axios.post, `${API_URL}/login`, action.payload);
        yield put({ type: 'LOGIN_SUCCESS', payload: response.data });
      } catch (error) {
        yield put({
          type: 'LOGIN_FAILURE',
          payload: error.response?.data?.message || error.message,
        });
      }
    }

    function* handleSignup(action) {
      try {
        const response = yield call(axios.post, `${API_URL}/signup`, action.payload);
        yield put({ type: 'SIGNUP_SUCCESS', payload: response.data });
      } catch (error) {
        yield put({
          type: 'SIGNUP_FAILURE',
          payload: error.response?.data?.message || error.message,
        });
      }
    }

    export default function* authSaga() {
      yield takeLatest('LOGIN_REQUEST', handleLogin);
      yield takeLatest('SIGNUP_REQUEST', handleSignup);
    }
