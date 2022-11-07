import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { server } from '../../mocks/server';
import RemotePizza from '../RemotePizza';

const ingredients = ['bacon', 'tomato', 'mozzarella', 'pineapples'];

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('download ingredients from internets', async () => {
  const user = userEvent.setup();

  render(<RemotePizza />);

  await user.click(screen.getByRole('button', { name: /cook/i }));

  for (const ingredient of ingredients) {
    expect(await screen.findByText(ingredient)).toBeInTheDocument();
  }
});
