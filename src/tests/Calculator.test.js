import React from 'react';
import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';
import '@testing-library/jest-dom';

describe('App', () => {
  test('renders "AC" button in Calculator component', () => {
    render(<Calculator />);
    expect(screen.getByText('AC')).toBeInTheDocument();
  });

  test('renders "=" button in Calculator component', () => {
    render(<Calculator />);
    expect(screen.getByText('=')).toBeInTheDocument();
  });

  test('Calculator snapshot test', () => {
    const myrender = render(<Calculator />);
    expect(myrender).toMatchSnapshot();
  });
});
