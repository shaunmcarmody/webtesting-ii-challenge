import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import ScoreboardDisplay from './components/ScoreboardDisplay/ScoreboardDisplay';
import './App.css';

class App extends Component {
  state = {
    balls: 1,
    strikes: 1
  }
  render() {
    return (
      <>
        <ScoreboardDisplay
          balls={this.state.balls}
          strikes={this.state.strikes}
        />
        <Dashboard
          strike={this.strike}
          ball={this.ball}
          foul={this.foul}
          hit={this.hit}
        />
      </>
    );
  }

  strike = () => {
    // if player reaches 3 strikes call reset
    if (this.state.strikes === 2) {
      this.reset();
    } else {
      this.setState(prevState => ({
        strikes: prevState.strikes + 1
      }));
    }
  }

  ball = () => {
    // if player reaches 4 balls call reset
    if (this.state.balls === 3) {
      this.reset();
    } else {
      this.setState(prevState => ({
        balls: prevState.balls + 1
      }));
    }
  }

  foul = () => {
    // foul increases strikes up to 2
    // if strikes is less than two add one strike for each file
    // if strikes are 2 or greater a foul has no effect.
    this.setState(prevState => ({
      strikes: prevState.strikes < 2 ? prevState.strikes + 1 : prevState.strikes
    }));
  }

  hit = () => {
    // balls and strikes reset to 0 when a hit is recorded.
    this.reset();
  }

  reset = () => {
    // reset balls and strikes to zero
    this.setState({
      balls: 1,
      strikes: 1
    });
  }
}

export default App;


// Baseball Stadium personnel enter information in Dashboard about a player's "at bat" (players turn at batting)
// Information shown in the Scoreboard for fans

// Dashboard
// Provide a button that the person in charge can press everytime there is a strike, ball, foul or hit.
// There is no need to specifiy the type of hit

// Scoreboard
// display the count of balls and strikes for the at'bat
// should be updated when the user records activity on the Dashboard component