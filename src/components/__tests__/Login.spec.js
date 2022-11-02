import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../Login';

test('submits username and password', async () => {
  const user = userEvent.setup();
  const username = 'me';
  const password = 'please';
  const onSubmit = jest.fn();

  render(<Login onSubmit={onSubmit} />);

  await user.type(screen.getByLabelText(/username/i), username);

  await user.type(screen.getByLabelText(/password/i), password);

  await user.click(screen.getByRole('button', { name: /log in/i }));

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({
    username,
    password,
  });
});
