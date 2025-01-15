import { takeLatest, call, put } from 'redux-saga/effects';
    import axios from 'axios';
    import { progressStart, progressSuccess, progressFailure } from './progressSlice';

    const API_URL = 'http://localhost:3001/api/progress';

    function* handleFetchBmiData({ payload }) {
      try {
        yield put(progressStart());
        const response = yield call(axios.get, `${API_URL}/bmi`, {
          headers: { Authorization: `Bearer ${payload}` },
        });
        yield put(progressSuccess(response.data));
      } catch (error) {
        yield put(progressFailure(error.response?.data?.message || error.message));
      }
    }

    function* handleAddBmiData({ payload }) {
      try {
        yield put(progressStart());
        const response = yield call(axios.post, `${API_URL}/bmi`, payload.bmi, {
          headers: { Authorization: `Bearer ${payload.token}` },
        });
        yield put(progressSuccess(response.data));
      } catch (error) {
        yield put(progressFailure(error.response?.data?.message || error.message));
      }
    }

    export function* watchProgress() {
      yield takeLatest('progress/fetchBmiData', handleFetchBmiData);
      yield takeLatest('progress/addBmiData', handleAddBmiData);
    }
