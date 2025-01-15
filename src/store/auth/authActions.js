export const login = (credentials) => ({
      type: 'LOGIN_REQUEST',
      payload: credentials,
    });

    export const signup = (userData) => ({
      type: 'SIGNUP_REQUEST',
      payload: userData,
    });

    export const logout = () => ({
      type: 'LOGOUT',
    });
