import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import LoginPage from './pages/LoginPage';
    import DashboardPage from './pages/DashboardPage';
    import DietPlanPage from './pages/DietPlanPage';
    import RecipePage from './pages/RecipePage';
    import ProgressTrackerPage from './pages/ProgressTrackerPage';
    import WorkoutTipsPage from './pages/WorkoutTipsPage';
    import SettingsPage from './pages/SettingsPage';
    import Layout from './components/Layout';
    import RequireAuth from './components/RequireAuth';

    function App() {
      return (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<RequireAuth><Layout><DashboardPage /></Layout></RequireAuth>} />
          <Route path="/diet-plan" element={<RequireAuth><Layout><DietPlanPage /></Layout></RequireAuth>} />
          <Route path="/recipes" element={<RequireAuth><Layout><RecipePage /></Layout></RequireAuth>} />
          <Route path="/progress" element={<RequireAuth><Layout><ProgressTrackerPage /></Layout></RequireAuth>} />
          <Route path="/workout-tips" element={<RequireAuth><Layout><WorkoutTipsPage /></Layout></RequireAuth>} />
          <Route path="/settings" element={<RequireAuth><Layout><SettingsPage /></Layout></RequireAuth>} />
        </Routes>
      );
    }

    export default App;
