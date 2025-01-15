import React, { useEffect } from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import { useNavigate } from 'react-router-dom';
    import { logout } from '../store/auth/authSlice';

    const Dashboard = () => {
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
      const user = useSelector((state) => state.auth.user);

      useEffect(() => {
        if (!isAuthenticated) {
          navigate('/login');
        }
      }, [isAuthenticated, navigate]);

      const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
      };

      return (
        <div className="container">
          <h1>Dashboard</h1>
          {user && <p>Welcome, {user.email}!</p>}
          <nav>
            <ul>
              <li>
                <a href="/diet-plan">Diet Plan</a>
              </li>
              <li>
                <a href="/recipes">Recipes</a>
              </li>
              <li>
                <a href="/progress">Progress Tracker</a>
              </li>
              <li>
                <a href="/workout-tips">Workout Tips</a>
              </li>
              <li>
                <a href="/settings">Settings</a>
              </li>
            </ul>
          </nav>
          <button onClick={handleLogout}>Logout</button>
        </div>
      );
    };

    export default Dashboard;
