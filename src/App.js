import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/general_pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Search';
import SignUp from './components/pages/general_pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
