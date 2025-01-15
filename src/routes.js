import LoginPage from './pages/LoginPage';
    import SignupPage from './pages/SignupPage';
    import DashboardPage from './pages/DashboardPage';
    import DietPlanPage from './pages/DietPlanPage';
    import RecipePage from './pages/RecipePage';
    import ProgressTrackerPage from './pages/ProgressTrackerPage';
    import WorkoutTipsPage from './pages/WorkoutTipsPage';
    import SettingsPage from './pages/SettingsPage';
    import AuthLayout from './components/AuthLayout';
    import MainLayout from './components/MainLayout';

    const routes = [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
      },
      {
        path: '/',
        element: <AuthLayout />,
        children: [
          {
            path: '/',
            element: <MainLayout />,
            children: [
              { path: '/dashboard', element: <DashboardPage /> },
              { path: '/diet-plan', element: <DietPlanPage /> },
              { path: '/recipes', element: <RecipePage /> },
              { path: '/progress', element: <ProgressTrackerPage /> },
              { path: '/workout-tips', element: <WorkoutTipsPage /> },
              { path: '/settings', element: <SettingsPage /> },
            ],
          },
        ],
      },
    ];

    export default routes;
