import { all } from 'redux-saga/effects';
    import authSaga from './authSaga';
    import dietSaga from './dietSaga';
    import recipeSaga from './recipeSaga';
    import progressSaga from './progressSaga';
    import workoutSaga from './workoutSaga';

    export default function* rootSaga() {
      yield all([
        authSaga(),
        dietSaga(),
        recipeSaga(),
        progressSaga(),
        workoutSaga(),
      ]);
    }
