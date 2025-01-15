import { takeLatest, put } from 'redux-saga/effects';

    function* fetchWorkoutTipsSaga(action) {
      try {
        // Simulate API call
        const workoutTips = [
          { id: 1, tip: 'Go for a walk' },
          { id: 2, tip: 'Do some stretching' },
        ];
        yield put({ type: 'SET_WORKOUT_TIPS', payload: workoutTips });
      } catch (error) {
        console.error('Failed to fetch workout tips', error);
      }
    }

    function* workoutSaga() {
      yield takeLatest('FETCH_WORKOUT_TIPS', fetchWorkoutTipsSaga);
    }

    export default workoutSaga;
