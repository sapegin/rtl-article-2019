import globals from 'globals';
import tamiaReact from 'eslint-config-tamia/react';
import testingLibrary from 'eslint-plugin-testing-library';
import jestDom from 'eslint-plugin-jest-dom';

export default [
  ...tamiaReact,
  {
    rules: {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
    },
  },
  testingLibrary.configs['flat/react'],
  jestDom.configs['flat/recommended'],
  {
    rules: {
      // 'no-await-in-loop': 0,
      // 'testing-library/no-wait-for-empty-callback': 'error',
      'testing-library/prefer-explicit-assert': 'error',
      'testing-library/prefer-presence-queries': 'error',
      // 'testing-library/prefer-wait-for': 'error',
    },
  },
  {
    files: ['**/*.spec.js', '**/*.test.js'],
    languageOptions: { globals: globals.jest },
  },
];
