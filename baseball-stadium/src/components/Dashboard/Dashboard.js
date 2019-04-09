import React from 'react';
import styled from 'styled-components';

const Board = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  margin: auto;
  margin-top: 20px;
`

const Button = styled.button`
  border-radius: 10px;
  cursor: pointer;
  display: block;
  font-size: 16px;
  padding: 5px 0;
  width: 70px;
`

const Dashboard = props => (
  <Board>
    <Button
      onClick={props.ball}
    >
      Ball
    </Button>
    <Button
      onClick={props.strike}
    >
      Strike
    </Button>
    <Button
      onClick={props.foul}
    >
      Foul
    </Button>
    <Button
      onClick={props.hit}
    >
      Hit
    </Button>
  </Board>
)

export default Dashboard;

// Dashboard
// Provide a button that the person in charge can press everytime there is a strike, ball, foul or hit.
// There is no need to specifiy the type of hit