import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../Login';

test('submits username and password', () => {
  const username = 'me';
  const password = 'please';
  const onSubmit = jest.fn();
  render(<Login onSubmit={onSubmit} />);

  userEvent.type(screen.getByLabelText(/username/i), username);

  userEvent.type(screen.getByLabelText(/password/i), password);

  userEvent.click(screen.getByRole('button', { name: /log in/i }));

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({
    username,
    password,
  });
});
