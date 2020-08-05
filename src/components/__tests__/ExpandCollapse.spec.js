// This line is only needed for CodeSandbox
// import '../../../src/setupTests.js';

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ExpandCollapse from '../ExpandCollapse';

test('button expands and collapses the content', () => {
  const children = 'Hello world';
  const { getByRole, queryByText } = render(
    <ExpandCollapse excerpt="Information about dogs">{children}</ExpandCollapse>
  );

  expect(queryByText(children)).not.toBeInTheDocument();

  fireEvent.click(getByRole('button', { name: /expand/i }));

  expect(queryByText(children)).toBeInTheDocument();

  fireEvent.click(getByRole('button', { name: /collapse/i }));

  expect(queryByText(children)).not.toBeInTheDocument();
});
