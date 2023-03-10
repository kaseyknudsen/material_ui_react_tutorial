import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material';


const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  palette: {
    primary: {
      main: "#1e81b0"
    },
    secondary: {
      main: "#cddc39"
    },
    myCustomColor: {
      main:'#44bcd8',
      superDark: '#195e83',
      superLight:'#cce7e8',
    }
  },
  typography: {
    myVariant: {
      fontSize: "6rem",
      color: 'orange'
    }
  }
})
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
