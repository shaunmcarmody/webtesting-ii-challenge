import React from 'react';

const Dashboard = props => (
  <div>
    <button
      onClick={props.strike}
    >
      Strike
    </button>
    <button
      onClick={props.ball}
    >
      Ball
    </button>
    <button
      onClick={props.foul}
    >
      Foul
    </button>
    <button
      onClick={props.hit}
    >
      Hit
    </button>
  </div>
)

export default Dashboard;

// Dashboard
// Provide a button that the person in charge can press everytime there is a strike, ball, foul or hit.
// There is no need to specifiy the type of hit