import React from 'react';
import { render, screen } from '@testing-library/react';

test('hello world', () => {
  render(<p>Hello Jest!</p>);
  expect(screen.getByText('Hello Jest!')).toBeInTheDocument();
});
