import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../Login';

test('submits username and password', () => {
  const username = 'me';
  const password = 'please';
  const onSubmit = jest.fn();
  render(<Login onSubmit={onSubmit} />);

  fireEvent.change(screen.getByLabelText(/username/i), {
    target: { value: username },
  });

  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: password },
  });

  fireEvent.click(screen.getByRole('button', { name: /log in/i }));

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({
    username,
    password,
  });
});
