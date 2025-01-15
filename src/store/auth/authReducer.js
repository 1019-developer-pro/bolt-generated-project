const initialState = {
      isAuthenticated: !!localStorage.getItem('token'),
      user: null,
      loading: false,
      error: null,
    };

    const authReducer = (state = initialState, action) => {
      switch (action.type) {
        case 'LOGIN_REQUEST':
        case 'SIGNUP_REQUEST':
          return { ...state, loading: true, error: null };
        case 'LOGIN_SUCCESS':
        case 'SIGNUP_SUCCESS':
          localStorage.setItem('token', action.payload.token);
          return {
            ...state,
            isAuthenticated: true,
            user: action.payload.user,
            loading: false,
            error: null,
          };
        case 'LOGIN_FAILURE':
        case 'SIGNUP_FAILURE':
          return { ...state, loading: false, error: action.payload };
        case 'LOGOUT':
          localStorage.removeItem('token');
          return { ...state, isAuthenticated: false, user: null };
        default:
          return state;
      }
    };

    export default authReducer;
