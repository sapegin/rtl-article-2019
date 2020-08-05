import React from 'react';
import { render, screen } from '@testing-library/react';
import Pizza from '../Pizza';

test('contains all ingredients', () => {
  const ingredients = ['bacon', 'tomato', 'mozzarella', 'pineapples'];
  render(<Pizza ingredients={ingredients} />);

  for (const ingredient of ingredients) {
    expect(screen.getByText(ingredient)).toBeInTheDocument();
  }
});
