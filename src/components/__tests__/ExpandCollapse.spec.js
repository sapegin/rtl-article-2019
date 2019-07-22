// This line is only needed for CodeSandbox
import '../../../src/setupTests.js';

import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ExpandCollapse from '../ExpandCollapse';

afterEach(cleanup);

test('button expands and collapses the content', () => {
  const children = 'Hello world';
  const { getByText, queryByText } = render(
    <ExpandCollapse excerpt="Information about dogs">{children}</ExpandCollapse>
  );

  expect(queryByText(children)).not.toBeTruthy();

  fireEvent.click(getByText('Expand'));

  expect(queryByText(children)).toBeTruthy();

  fireEvent.click(getByText('Collapse'));

  expect(queryByText(children)).not.toBeTruthy();
});
