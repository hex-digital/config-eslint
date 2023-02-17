module.exports = {
  extends: [
    '@hexdigital/eslint-config-ts',
  ],
  rules: {
    'vue/custom-event-name-casing': ['error', 'camelCase', { ignores: ['/^[a-z]+(?:[A-Z](?:[a-z])*)*:[a-z]+(?:[A-Z](?:[a-z])*)*$/u'] }],
    "vue/max-attributes-per-line": [
      "error",
      {
        "singleline": {
          "max": 3
        },      
        "multiline": {
          "max": 1
        }
      }
    ],
  },
}
