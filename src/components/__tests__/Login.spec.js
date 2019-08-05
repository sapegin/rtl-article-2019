// This line is only needed for CodeSandbox
import '../../../src/setupTests.js';

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from '../Login';

test('submits username and password', () => {
  const username = 'me';
  const password = 'please';
  const onSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<Login onSubmit={onSubmit} />);

  fireEvent.change(getByLabelText(/username/i), {
    target: { value: username },
  });

  fireEvent.change(getByLabelText(/password/i), {
    target: { value: password },
  });

  fireEvent.click(getByText(/log in/i));

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({
    username,
    password,
  });
});
