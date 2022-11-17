import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Footer from './components/Footer';
import Animals from './components/Animals';

const theme = createTheme({
    palette: {
        primary: {
        main: blueGrey[700],
        },
    },
    typography: {
        "fontFamily": `"Segoe UI", "Helvetica Neue"`,
    },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={ <Home />} />
                <Route path="/Services"  element ={ <Services />} />
                <Route path="/Animals" exact element={ <Animals />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
