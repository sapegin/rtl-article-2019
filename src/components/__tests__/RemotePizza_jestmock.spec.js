import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RemotePizza from '../RemotePizza';
import { fetchIngredients } from '../../services';

jest.mock('../../services');

afterEach(() => {
  fetchIngredients.mockReset();
});

const ingredients = ['bacon', 'tomato', 'mozzarella', 'pineapples'];

test('download ingredients from internets', async () => {
  const user = userEvent.setup();

  fetchIngredients.mockResolvedValue({ args: { ingredients } });

  render(<RemotePizza />);

  await user.click(screen.getByRole('button', { name: /cook/i }));

  for (const ingredient of ingredients) {
    expect(await screen.findByText(ingredient)).toBeInTheDocument();
  }
});
