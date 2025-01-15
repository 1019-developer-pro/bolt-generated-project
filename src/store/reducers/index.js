import { combineReducers } from 'redux';
    import authReducer from './authReducer';
    import dietReducer from './dietReducer';
    import recipeReducer from './recipeReducer';
    import progressReducer from './progressReducer';
    import workoutReducer from './workoutReducer';

    const rootReducer = combineReducers({
      auth: authReducer,
      diet: dietReducer,
      recipe: recipeReducer,
      progress: progressReducer,
      workout: workoutReducer,
    });

    export default rootReducer;
