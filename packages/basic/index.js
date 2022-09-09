module.exports = {
  rules: {
    'semi': ['error', 'always'],
    'jsonc/comma-dangle': ['error', 'always'],
  },
  overrides: [
    {
      files: ['**/*.json'],
      rules: {
        'jsonc/comma-dangle': ['error', 'never'],
      },
    },
  ],
};
