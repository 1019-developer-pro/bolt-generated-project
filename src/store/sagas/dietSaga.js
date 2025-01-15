import { takeLatest, put } from 'redux-saga/effects';

    function* fetchDietPlanSaga(action) {
      try {
        // Simulate API call
        const dietPlan = {
          meals: [
            { day: 'Monday', meal: 'Oatmeal' },
            { day: 'Tuesday', meal: 'Salad' },
          ],
        };
        yield put({ type: 'SET_DIET_PLAN', payload: dietPlan });
      } catch (error) {
        console.error('Failed to fetch diet plan', error);
      }
    }

    function* dietSaga() {
      yield takeLatest('FETCH_DIET_PLAN', fetchDietPlanSaga);
    }

    export default dietSaga;
