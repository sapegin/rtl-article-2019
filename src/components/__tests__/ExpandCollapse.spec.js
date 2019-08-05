// This line is only needed for CodeSandbox
import '../../../src/setupTests.js';

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ExpandCollapse from '../ExpandCollapse';

test('button expands and collapses the content', () => {
  const children = 'Hello world';
  const { getByText, queryByText } = render(
    <ExpandCollapse excerpt="Information about dogs">{children}</ExpandCollapse>
  );

  expect(queryByText(children)).not.toBeTruthy();

  fireEvent.click(getByText(/expand/i));

  expect(queryByText(children)).toBeTruthy();

  fireEvent.click(getByText(/collapse/i));

  expect(queryByText(children)).not.toBeTruthy();
});
