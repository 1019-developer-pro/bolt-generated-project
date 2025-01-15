import React from 'react';
    import { useRoutes } from 'react-router-dom';
    import routes from './routes';
    import { ThemeProvider, createTheme } from '@mui/material/styles';
    import CssBaseline from '@mui/material/CssBaseline';

    const theme = createTheme({
      palette: {
        mode: 'dark',
        primary: {
          main: '#90caf9',
        },
        secondary: {
          main: '#f48fb1',
        },
      },
    });

    function App() {
      const element = useRoutes(routes);

      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {element}
        </ThemeProvider>
      );
    }

    export default App;
