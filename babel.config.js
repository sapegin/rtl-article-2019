module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
      },
    ],
    '@babel/react',
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/env',
          {
            targets: { node: 'current' },
          },
        ],
        '@babel/react',
      ],
    },
  },
};
