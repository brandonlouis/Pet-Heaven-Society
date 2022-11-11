import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About'
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <BrowserRouter>
      <Navbar className='menuitem' />
      <div className='container'>
        <Routes>
          <Route path="/" exact element={ <Home />} />
          <Route path="/Products" exact element={ <Products />} />
          <Route path="/About"  element ={ <About />} />
        </Routes>
      </div>
  </BrowserRouter>
  )
}

export default App;
