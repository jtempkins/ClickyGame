import React from 'react';
import './container.css';

// the onClick function for the clicked image so you can tell if it's been clicked before
const Container = props => (
  <div className="card" onClick={e => props.clickEvent(e.target.src)}>
    <img className="card-img-top card-height" src={props.name} alt="" />
  </div>
);

export default Container;
