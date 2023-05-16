import React from 'react';
import Navbar from './components/js/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Bio from './components/pages/Bio';
import SignUp from './components/pages/SignUp';
import Footer from './components/js/Footer';
import MapProject from './components/pages/MapProject';
import Contact from './components/pages/Contact';
import BunnyGame from './components/pages/BunnyGame';
import YYCHub from './components/pages/YYCHub';
import TicTacToe from './components/pages/TicTacToe';
import Tester from './components/pages/Tester';
// import Game from './components/bunny-jump/src/scenes/Game.js';
// import GameOver from './components/bunny-jump/src/scenes/GameOver.js';





function App() {
  return (
    <>

      <Router>
        {/* Adds the Navbar to all pages */}
        <Navbar />

        <Routes>
          {/* Creates relative paths bio projects */}
          <Route path='/' element={<Home />} />
          <Route path='/bio' element={<Bio />} />
          {/* TODO Format Contact Page */}
          <Route path='/contact' element={<Contact />} />

          {/* TODO Look into sub pathing in projects folder */}
          {/* <Route path ='/projects' element = {<Projects />}/> */}
          <Route path='/projects/map-project' element={<MapProject />} />
          <Route path='/projects/YYCHub' element={<YYCHub />} />

          {/* Remove or alter Sign-Up page */}
          <Route path='/sign-up' element={<SignUp />} />

          {/* ADD IN PHASER GAME */}
          <Route path='projects/game' element={<BunnyGame />} />
          {/* TODO REMOVE GAME FROM RENDER AFTER GOING TO PAGE */}

          {/* ADD IN PHASER GAME */}
          <Route path='projects/tic' element={<TicTacToe />} />
          {/* TODO REMOVE GAME FROM RENDER AFTER GOING TO PAGE */}
          <Route path='/test' element={<Tester />} />
        </Routes>
        {/* TODO Make footer more funcitonal */}
        <Footer />
      </Router>
    </>
  );
}
export default App;
