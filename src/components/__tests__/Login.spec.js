// This line is only needed for CodeSandbox
import '../../../src/setupTests.js';

import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Login from '../Login';

afterEach(cleanup);

test('submits username and password', () => {
  const username = 'me';
  const password = 'please';
  const onSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<Login onSubmit={onSubmit} />);

  fireEvent.change(getByLabelText('Username'), {
    target: { value: username },
  });

  fireEvent.change(getByLabelText('Password'), {
    target: { value: password },
  });

  fireEvent.click(getByText('Log in'));

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({
    username,
    password,
  });
});
