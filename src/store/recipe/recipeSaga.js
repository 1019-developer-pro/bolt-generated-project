import { takeLatest, call, put } from 'redux-saga/effects';
    import axios from 'axios';
    import { recipeStart, recipeSuccess, recipeFailure } from './recipeSlice';

    const API_URL = 'http://localhost:3001/api/recipes';

    function* handleFetchRecipes({ payload }) {
      try {
        yield put(recipeStart());
        const response = yield call(axios.get, `${API_URL}`, {
          headers: { Authorization: `Bearer ${payload}` },
        });
        yield put(recipeSuccess(response.data));
      } catch (error) {
        yield put(recipeFailure(error.response?.data?.message || error.message));
      }
    }

    export function* watchRecipe() {
      yield takeLatest('recipe/fetchRecipes', handleFetchRecipes);
    }
