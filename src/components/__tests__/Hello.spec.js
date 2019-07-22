import React from 'react';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

test('hello world', () => {
  const { getByText } = render(<p>Hello Jest!</p>);
  expect(getByText('Hello Jest!')).toBeTruthy();
});
