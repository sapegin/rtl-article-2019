import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ExpandCollapse from '../ExpandCollapse';

test('button expands and collapses the content', () => {
  const children = 'Hello world';
  render(
    <ExpandCollapse excerpt="Information about dogs">{children}</ExpandCollapse>
  );

  expect(screen.queryByText(children)).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /expand/i }));

  expect(screen.queryByText(children)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /collapse/i }));

  expect(screen.queryByText(children)).not.toBeInTheDocument();
});
