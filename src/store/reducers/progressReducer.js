const initialState = {
      bmiHistory: [],
      currentBmi: null,
    };

    const progressReducer = (state = initialState, action) => {
      switch (action.type) {
        case 'SET_BMI_HISTORY':
          return {
            ...state,
            bmiHistory: action.payload,
          };
        case 'SET_CURRENT_BMI':
          return {
            ...state,
            currentBmi: action.payload,
          };
        default:
          return state;
      }
    };

    export default progressReducer;
