import React, { Component } from 'react';
// import images from './images.js';
import pictures from './pictures.json';
import Mysticals from '../Mysticals/mysticals.js';
import './game.css';
// import '../Container/container.js';



class Game extends Component {
  state = {
    count: 0
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count)
  };

  render() {
    // console.log("pictures", pictures)
    return (
      <div className="row">
        {pictures.map(item => (
          <div className="col-md-3" key={item.id}>
            <Mysticals
              target={item}
              className="btn btn-primary" onClick={this.handleIncrement}>
            </Mysticals>
          </div>
        ))}
      </div>

    )
  }
};

export default Game;

