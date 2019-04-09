import React from 'react';
import styled from 'styled-components';

const Display = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-between;
  height: 400px;
  width: 500px;
  margin: auto;
  margin-top: 20px;
`

const Score = styled.div`
  border: 1px solid white;
  width: 250px;
`

const Title = styled.h1`
  color: white;
  text-align: center;
`

const Number = styled.h1`
  color: white;
  font-size: 10px;
  text-align: center;
`

const ScoreboardDisplay = props => (
  <Display>
    <Score>
      <Title>Balls</Title>
      <Number>Balls:{props.balls}</Number>
    </Score>
    <Score>
      <Title>Strikes</Title>
      <Number>Strikes:{props.strikes}</Number>
    </Score>
  </Display>
)

export default ScoreboardDisplay;

// Scoreboard
// display the count of balls and strikes for the at'bat
// should be updated when the user records activity on the Dashboard component