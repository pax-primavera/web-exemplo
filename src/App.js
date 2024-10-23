import React from 'react';
import RoutesApp from './routes/routes';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#006b33',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <RoutesApp />
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
