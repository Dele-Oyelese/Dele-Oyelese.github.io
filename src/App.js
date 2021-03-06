import React from 'react';
import Navbar from './components/js/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Bio from './components/pages/Bio';
import SignUp from './components/pages/SignUp';
import Footer from './components/js/Footer';




function App() {
  return (
    <>
    
      <Router>
      {/* Adds the Navbar to all pages */}
        <Navbar />
        
        <Routes>
        {/* Creates relative paths bio projects */}
          <Route path='/'  element = {<Home />} />
          <Route path ='/bio' element = {<Bio />}/>

          {/* TODO Look into sub pathing in projects folder */}
          <Route path ='/projects' element = {<Projects />}/>
          {/* Add in python  database project and Black jack game */}
          <Route path ='/sign-up' element = {<SignUp />}/>
        </Routes>
        {/* TODO Make footer more funcitonal */}
        <Footer/>
      </Router>
    </>
  );
  }
export default App;


// export NODE_OPTIONS=--openssl-legacy-provider