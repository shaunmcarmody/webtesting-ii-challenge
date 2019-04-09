import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('renders successfully', () => {
    render(<Dashboard />);
  });

  it('displays buttons correctly', () => {
    const { queryByText } = render(<Dashboard />);
    expect(queryByText(/Ball/i)).not.toBeNull();
    expect(queryByText(/Strike/i)).not.toBeNull();
    expect(queryByText(/Foul/i)).not.toBeNull();
    expect(queryByText(/Hit/i)).not.toBeNull();
  });

});