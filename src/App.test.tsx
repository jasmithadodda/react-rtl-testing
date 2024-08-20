import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react';


describe('application', () => {
  test('renders correctly', () => {
    // Wrap render inside act
    act(() => {
      render(<App />);
    });

    screen.debug();

    const linkElement = screen.getByText(/Name/i);
    expect(linkElement).toBeInTheDocument();
  });
});
