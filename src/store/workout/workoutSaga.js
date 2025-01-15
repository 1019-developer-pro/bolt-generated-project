import { takeLatest, call, put } from 'redux-saga/effects';
    import axios from 'axios';
    import { workoutStart, workoutSuccess, workoutFailure } from './workoutSlice';

    const API_URL = 'http://localhost:3001/api/workout';

    function* handleFetchWorkoutTips({ payload }) {
      try {
        yield put(workoutStart());
        const response = yield call(axios.get, `${API_URL}`, {
          headers: { Authorization: `Bearer ${payload}` },
        });
        yield put(workoutSuccess(response.data));
      } catch (error) {
        yield put(workoutFailure(error.response?.data?.message || error.message));
      }
    }

    export function* watchWorkout() {
      yield takeLatest('workout/fetchWorkoutTips', handleFetchWorkoutTips);
    }
