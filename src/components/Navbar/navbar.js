import React from 'react';
import './navbar.css';

const Navbar = props => (
  <div className="navbar ">
    <div>Clicky Game</div>
    <div className={props.clickQuality}>{props.clickImage}</div>
    <div>
      Score: {props.score} <span className="pipe">|</span> High Score: {props.highScore}
    </div>
  </div>
);


export default Navbar;
