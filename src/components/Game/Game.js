import React, { Component } from 'react';
// import images from './images.js';
import pictures from './pictures.json';
import Mysticals from '../Mysticals/mysticals.js';
import './game.css';



class Game extends Component {
  render() {
    console.log("pictures", pictures)
    return (
      <div className="row">

        {pictures.map(item => (
          <div className="col-md-3">
            <Mysticals
              name={item.image}
              id={item.id}
              //   click = {}
              key={item.id} />
          </div>
        ))}
      </div>

    )
  }
};

export default Game;