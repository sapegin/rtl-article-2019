import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExpandCollapse from '../ExpandCollapse';

test('button expands and collapses the content', async () => {
  const user = userEvent.setup();

  const children = 'Hello world';
  render(
    <ExpandCollapse excerpt="Information about dogs">{children}</ExpandCollapse>
  );

  expect(screen.queryByText(children)).not.toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: /expand/i }));

  expect(screen.getByText(children)).toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: /collapse/i }));

  expect(screen.queryByText(children)).not.toBeInTheDocument();
});
