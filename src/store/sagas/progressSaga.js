import { takeLatest, put } from 'redux-saga/effects';

    function* fetchBmiHistorySaga(action) {
      try {
        // Simulate API call
        const bmiHistory = [
          { date: '2023-01-01', bmi: 25 },
          { date: '2023-01-08', bmi: 24 },
        ];
        yield put({ type: 'SET_BMI_HISTORY', payload: bmiHistory });
      } catch (error) {
        console.error('Failed to fetch BMI history', error);
      }
    }

    function* progressSaga() {
      yield takeLatest('FETCH_BMI_HISTORY', fetchBmiHistorySaga);
    }

    export default progressSaga;
