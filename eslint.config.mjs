import globals from 'globals';
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import testingLibrary from 'eslint-plugin-testing-library';
import jestDom from 'eslint-plugin-jest-dom';

export default [
  js.configs.recommended,
  react.configs.flat.recommended,
  // TODO: Enable and Remove all React imports
  //   react.configs.flat['jsx-runtime'],
  {
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.es2024,
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  testingLibrary.configs['flat/react'],
  jestDom.configs['flat/recommended'],
  {
    rules: {
      'testing-library/prefer-explicit-assert': 'error',
      'testing-library/prefer-presence-queries': 'error',
    },
  },
  {
    files: ['**/*.spec.js', '**/*.test.js'],
    languageOptions: { globals: globals.jest },
  },
];
