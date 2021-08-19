import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '@testing-library/jest-dom';

describe('App', () => {
  test('renders "Home" link in Navbar component', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  test('renders "Calculator" link in Navbar component', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(screen.getByText('Calculator')).toBeInTheDocument();
  });

  test('Navbar snapshot test', () => {
    const myrender = render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(myrender).toMatchSnapshot();
  });
});
