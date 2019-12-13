import React from 'react';
import './container.css';
import Mysticals from '../Mysticals';

// the onClick function for the clicked image so you can tell if it's been clicked before

const Container = props => (
  // loops through
  <div
    className={
      props.shake
        ? 'container d-flex flex-wrap justify-content-center shake'
        : 'container d-flex flex-wrap justify-content-center'
    }
  >
    {props.Mysticals.map((a, i) => <Mysticals name={a} key={i} clickEvent={props.clickEvent} />)}
  </div>
);







// const Container = props => (
//   <div className="card" onClick={e => props.clickEvent(e.target.src)}>
//     <img className="card-img-top card-height" src={props.name} alt="" />
//   </div>
// );

export default Container;
