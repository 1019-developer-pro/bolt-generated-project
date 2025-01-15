import React from 'react';
    import { useSelector } from 'react-redux';
    import { Navigate, useLocation } from 'react-router-dom';

    const RequireAuth = ({ children }) => {
      const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
      const location = useLocation();

      if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} />;
      }

      return children;
    };

    export default RequireAuth;
