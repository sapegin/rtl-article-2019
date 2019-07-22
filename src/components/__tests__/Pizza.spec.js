// This line is only needed for CodeSandbox
import '../../../src/setupTests.js';

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Pizza from '../Pizza';

afterEach(cleanup);

test('contains all ingredients', () => {
  const ingredients = ['bacon', 'tomato', 'mozzarella', 'pineapples'];
  const { getByText } = render(<Pizza ingredients={ingredients} />);

  ingredients.forEach(ingredient => {
    expect(getByText(ingredient)).toBeTruthy();
  });
});
