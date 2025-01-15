import { takeLatest, put } from 'redux-saga/effects';

    function* fetchRecipesSaga(action) {
      try {
        // Simulate API call
        const recipes = [
          { id: 1, name: 'Pasta' },
          { id: 2, name: 'Soup' },
        ];
        yield put({ type: 'SET_RECIPES', payload: recipes });
      } catch (error) {
        console.error('Failed to fetch recipes', error);
      }
    }

    function* recipeSaga() {
      yield takeLatest('FETCH_RECIPES', fetchRecipesSaga);
    }

    export default recipeSaga;
