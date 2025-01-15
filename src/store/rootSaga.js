import { all } from 'redux-saga/effects';
    import { watchAuth } from './auth/authSaga';
    import { watchDiet } from './diet/dietSaga';
    import { watchRecipe } from './recipe/recipeSaga';
    import { watchProgress } from './progress/progressSaga';
    import { watchWorkout } from './workout/workoutSaga';

    export default function* rootSaga() {
      yield all([
        watchAuth(),
        watchDiet(),
        watchRecipe(),
        watchProgress(),
        watchWorkout(),
      ]);
    }
