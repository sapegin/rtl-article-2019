// This line is only needed for CodeSandbox
// import '../../../src/setupTests.js';

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import nock from 'nock';
import RemotePizza from '../RemotePizza';

const ingredients = ['bacon', 'tomato', 'mozzarella', 'pineapples'];

afterEach(() => {
  nock.restore();
});

test('download ingredients from internets', async () => {
  expect.assertions(5);

  const scope = nock('https://httpbin.org')
    .get('/anything')
    .query(true)
    .reply(200, { args: { ingredients } });

  const { findByText, getByRole } = render(<RemotePizza />);

  fireEvent.click(getByRole('button', { name: /cook/i }));

  for (const ingredient of ingredients) {
    expect(await findByText(ingredient)).toBeInTheDocument();
  }

  expect(scope.isDone()).toBe(true);
});
