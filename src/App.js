import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar.js'
import Instructions from './components/Instructions/instructions.js'
import Game from './components/Game/Game.js'


function App() {
  return (
    <div className="App">
    <div className = "Container">
    <Navbar />
    <Instructions />
    <div className = "row">
    <Game />
    
        </div>
        </div>
        </div>
  );
}

export default App;
