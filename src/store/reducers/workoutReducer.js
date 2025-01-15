const initialState = {
      workoutTips: [],
    };

    const workoutReducer = (state = initialState, action) => {
      switch (action.type) {
        case 'SET_WORKOUT_TIPS':
          return {
            ...state,
            workoutTips: action.payload,
          };
        default:
          return state;
      }
    };

    export default workoutReducer;
