import React from 'react';
    import { Outlet, useNavigate } from 'react-router-dom';
    import { useSelector } from 'react-redux';

    function AuthLayout() {
      const navigate = useNavigate();
      const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

      React.useEffect(() => {
        if (!isAuthenticated) {
          navigate('/login');
        }
      }, [isAuthenticated, navigate]);

      return isAuthenticated ? <Outlet /> : null;
    }

    export default AuthLayout;
