import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';
import ScoreboardDisplay from './ScoreboardDisplay';

describe('<ScoreboardDisplay />', () => {
  it('renders successfully', () => {
    render(<ScoreboardDisplay />);
  });

  it('displays titles', () => {
    const { queryByText } = render(<ScoreboardDisplay />);
    expect(queryByText(/Balls/i)).not.toBeNull();
    expect(queryByText(/Strikes/i)).not.toBeNull();
  });

});