import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';
import App from './App';

describe('<App />', () => {
  it('renders successfully', () => {
    render(<App />);
  });

  it("reset's scores when hit button is clicked", () => {
    const { getByText } = render(<App />);
    const button = getByText(/hit/i);
    fireEvent.click(button);
    getByText(/Balls:0/i);
  });

});
