import { takeLatest, put } from 'redux-saga/effects';

    function* loginSaga(action) {
      try {
        // Simulate API call
        const user = { id: 1, name: 'Test User' };
        const token = 'test_token';
        yield put({ type: 'LOGIN_SUCCESS', payload: { user, token } });
      } catch (error) {
        console.error('Login failed', error);
      }
    }

    function* authSaga() {
      yield takeLatest('LOGIN_REQUEST', loginSaga);
    }

    export default authSaga;
