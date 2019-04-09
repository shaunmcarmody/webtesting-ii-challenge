import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import ScoreboardDisplay from './components/ScoreboardDisplay/ScoreboardDisplay';
import './App.css';

class App extends Component {
  state = {

  }
  render() {
    return (
      <>
        <ScoreboardDisplay />
        <Dashboard
          strike={this.strike}
          ball={this.ball}
          foul={this.foul}
          hit={this.hit}
        />
      </>
    );
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