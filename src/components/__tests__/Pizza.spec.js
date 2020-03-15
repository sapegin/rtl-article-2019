// This line is only needed for CodeSandbox
// import '../../../src/setupTests.js';

import React from 'react';
import { render } from '@testing-library/react';
import Pizza from '../Pizza';

test('contains all ingredients', async () => {
  const ingredients = ['bacon', 'tomato', 'mozzarella', 'pineapples'];
  const { findByText } = render(<Pizza ingredients={ingredients} />);

  for (const ingredient of ingredients) {
    expect(await findByText(ingredient)).toBeInTheDocument();
  }
});
