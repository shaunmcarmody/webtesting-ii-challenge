import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';
import App from './App';

describe('<Dashboard />', () => {
  it('renders successfully', () => {
    render(<App />);
  });

});
