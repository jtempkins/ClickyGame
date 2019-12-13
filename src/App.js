import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar.js'
import Instructions from './components/Instructions/instructions.js'
import Game from './components/Game/Game.js'
import pictures from './components/Game/pictures.json'
import './components/Mysticals/mysticals.js';
// import Container from '../Container/container.js';


class App extends Component {
  state = {
    score: 0,
    highScore: 0,

    // stores the class value to assign to navMessage based on a good or bad click
    clickQuality: '',

    // contains intro, success, and failure message
    clickImage: '',

    // contains an array of image urls
    mysticals: this.shuffleArray(),

    // will track  each clicked element.
    wasClicked: [],

    // shakes the container on an incorrect guess if set to true
    shake: false
  };

  clickEvent = this.checkClicked.bind(this);

  // myHappyClick = () => {console.log("clicked")}
  // // used to shuffle the array of images when the DOM loads, and when an image is clicked
  shuffleArray() {
    // creates a copy of the current characters array to modify it by value, and not by reference
    const newArr = pictures.slice();

    // will store the shuffled array
    const shuffleArr = [];

    // each loop through an index gets spliced from newArr, reducing its length
    // gets a random index based off the current length of newArr
    // splices the value from newArr, and pushes it to shuffleArr
    while (newArr.length > 0) {
      shuffleArr.push(newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]);
    }

    return shuffleArr;
  }

  checkClicked(clickedElem) {
    // creates a copy of the wasClicked array to modify it by value, and not by reference. wasClicked stores all previous clicked images
    const prevState = this.state.wasClicked.slice();

    // shuffles the images
    const shuffled = this.shuffleArray();

    // tracks score
    let score = this.state.score;
    let highScore = this.state.highScore;

    // if the clicked item is not in wasClicked, then it hasn't been clicked and the score is increased
    if (!this.state.wasClicked.includes(clickedElem)) {
      // if score and highScore are the same, then there is a new highScore value
      if (score === highScore) {
        score++;
        highScore++;

        // if they are not equal, then only increase the score value
      } else {
        score++;
      }

      // adds the clicked item to wasClicked to track that it has been clicked
      prevState.push(clickedElem);
    }

    // resets the current score if the same element was clicked twice
    if (this.state.wasClicked.includes(clickedElem)) {
      let score = 0;
      return this.setState({
        score: score,
        highScore: highScore,
        clickImage: 'incorrect',
        clickQuality: 'Incorrect guess!',
        mysticals: shuffled,
        wasClicked: [],
        shake: true
      });
    }

    // if this runs, then the same element has not been clicked twice and the score is increased
    this.setState({
      score: score,
      highScore: highScore,
      clickImage: 'correct',
      clickQuality: 'You Guessed Correctly!',
      mysticals: shuffled,
      wasClicked: prevState,
      shake: false
    });

    // removes the green correct indicator on a successful click after .5s to re-render the class on each success
    return setTimeout(() => this.setState({ clickImage: '' }), 500);
  }

  // renders score to the navbar.
  // passes the randomized array to Container to create a Mystical component for each image.
  // passes the this.checkClicked down to container to pass to each Mystical component to be used for the click event.
  render() {
    const state = this.state;
    return (
      <div>
        <Navbar
          score={state.score}
          highScore={state.highScore}
          clickImage={state.clickImage}
          clickQuality={state.clickQuality}
        />
        <Instructions />
        <Game
          shake={state.shake}
          mysticals={state.mysticals}
          clickEvent={this.clickEvent}
        />
      </div>
    );
  }
}



// function App() {
//   return (
//     <div className="App">
//     <div className = "Container">
//     <Navbar />
//     <Instructions />
//     <div className = "row">
//     <Game />
    
//         </div>
//         </div>
//         </div>
//   );
// }

export default App;
