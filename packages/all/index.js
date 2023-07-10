module.exports = {
  extends: [
    '@antfu',
    '@hexdigital/eslint-config-vue',
  ],
  rules: {
    '@typescript-eslint/brace-style': ['error', '1tbs'],
    'curly': ['error', 'all'],
  },
  "ignorePatterns": ['/vendor'],
};
