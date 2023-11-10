import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Our Equilibrium collection promotes balance and calm./i);
  expect(linkElement).toBeInTheDocument();
});
