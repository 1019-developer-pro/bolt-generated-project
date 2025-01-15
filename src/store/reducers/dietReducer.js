const initialState = {
      weeklyMeals: [],
      dietPlan: null,
    };

    const dietReducer = (state = initialState, action) => {
      switch (action.type) {
        case 'SET_WEEKLY_MEALS':
          return {
            ...state,
            weeklyMeals: action.payload,
          };
        case 'SET_DIET_PLAN':
          return {
            ...state,
            dietPlan: action.payload,
          };
        default:
          return state;
      }
    };

    export default dietReducer;
