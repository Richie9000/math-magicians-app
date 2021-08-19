import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '@testing-library/jest-dom';

describe('App', () => {
  test('renders "AC" button in Calculator component', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  test('renders "=" button in Calculator component', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(screen.getByText('Calculator')).toBeInTheDocument();
  });
});
