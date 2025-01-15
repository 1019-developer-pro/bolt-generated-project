import { takeLatest, call, put } from 'redux-saga/effects';
    import axios from 'axios';
    import {
      dietStart,
      dietPlanSuccess,
      mealLogSuccess,
      dietFailure,
    } from './dietSlice';

    const API_URL = 'http://localhost:3001/api/diet';

    function* handleFetchDietPlan({ payload }) {
      try {
        yield put(dietStart());
        const response = yield call(axios.get, `${API_URL}/plan`, {
          headers: { Authorization: `Bearer ${payload}` },
        });
        yield put(dietPlanSuccess(response.data));
      } catch (error) {
        yield put(dietFailure(error.response?.data?.message || error.message));
      }
    }

    function* handleFetchMealLogs({ payload }) {
      try {
        yield put(dietStart());
        const response = yield call(axios.get, `${API_URL}/logs`, {
          headers: { Authorization: `Bearer ${payload}` },
        });
        yield put(mealLogSuccess(response.data));
      } catch (error) {
        yield put(dietFailure(error.response?.data?.message || error.message));
      }
    }

    function* handleAddMealLog({ payload }) {
      try {
        yield put(dietStart());
        const response = yield call(axios.post, `${API_URL}/logs`, payload.meal, {
          headers: { Authorization: `Bearer ${payload.token}` },
        });
        yield put(mealLogSuccess(response.data));
      } catch (error) {
        yield put(dietFailure(error.response?.data?.message || error.message));
      }
    }

    export function* watchDiet() {
      yield takeLatest('diet/fetchDietPlan', handleFetchDietPlan);
      yield takeLatest('diet/fetchMealLogs', handleFetchMealLogs);
      yield takeLatest('diet/addMealLog', handleAddMealLog);
    }
