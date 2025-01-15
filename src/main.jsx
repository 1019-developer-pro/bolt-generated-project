import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App';
    import './index.css';
    import { Provider } from 'react-redux';
    import store from './store';
    import { BrowserRouter } from 'react-router-dom';
    import { ThemeProvider, createTheme } from '@mui/material/styles';

    const theme = createTheme({
      palette: {
        primary: {
          main: '#6200EE',
        },
        secondary: {
          main: '#03DAC5',
        },
        background: {
          default: '#121212',
          paper: '#1E1E1E',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B0BEC5',
        },
      },
      typography: {
        fontFamily: 'Roboto, sans-serif',
      },
    });

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </Provider>
        </ThemeProvider>
      </React.StrictMode>,
    );
